/* eslint-disable no-unused-vars */

import { useCallback, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Metric, Divider, Card, Flex, Button, Subtitle, Title, Text, SelectBox, SelectBoxItem, Icon, Footer, TextInput } from '@tremor/react'
import { ArrowLeftIcon, ArrowRightIcon, MinusCircleIcon, PlusCircleIcon } from '@heroicons/react/20/solid'
import PolytomicService from '../../polytomic/Service'
import LoadingSpinner from '../../polytomic/components/LoadingSpinner'
import PTIcon from '../../polytomic/components/Icon'
import notify from '../../services/Notify'

const SyncCreate = () => {
  // Hooks
  const navigate = useNavigate()

  const [sync, setSync] = useState({
    name: '',
    mode: 'updateOrCreate',
    sync_all_records: true,
    fields: [
      {
        source: {
          field: '',
          model_id: '',
        },
        target: '',
      }
    ],
    override_fields: [],
    filters: [],
    filter_logic: '',
    overrides: [],
    identity: {
      function: 'Equality',
      new_field: true,
      remote_field_type_id: '',
      source: {
        field: '',
        model_id: '',
      },
      target: '',
    },
    schedule: {
      frequency: 'continuous',
      month: '',
      day_of_month: '',
      day_of_week: '',
      hour: '',
      minute: '',
    },
    target: {
      configuration: null,
      connection_id: '',
      object: ''
    }
  })

  const [connections, setConnections] = useState([])
  const [connectionsError, setConnectionsError] = useState(null)
  const [connectionsLoading, setConnectionsLoading] = useState(false)

  const [destinationConnection, setDestinationConnection] = useState({})
  const [destinationConnectionError, setDestinationConnectionError] = useState(null)
  const [destinationConnectionLoading, setDestinationConnectionLoading] = useState(false)

  const [sourceFields, setSourceFields] = useState([])
  const [sourceFieldsError, setSourceFieldsError] = useState(null)
  const [sourceFieldsLoading, setSourceFieldsLoading] = useState(false)

  const [destinationFields, setDestinationFields] = useState([])
  const [destinationFieldsError, setDestinationFieldsError] = useState(null)
  const [destinationFieldsLoading, setDestinationFieldsLoading] = useState(false)

  const [createSyncLoading, setCreateSyncLoading] = useState(false)
  const [createSyncError, setCreateSyncError] = useState(null)

  const [opts, setOpts] = useState({})

  const loadConnections = async () => {
    try {
      setConnectionsLoading(true)
      setConnectionsError(false)
      const { data } = await PolytomicService.getConnections()
      setConnections(data.data)
    } catch (e) {
      setConnectionsError(e)
      notify('Unable to load connections', e.message, 'error')
    } finally {
      setConnectionsLoading(false)
    }
  }

  const loadDestinationConnection = useCallback(async () => {
    try {
      const { data } = await PolytomicService.getConnection(sync.target.connection_id)
      setDestinationConnection(data.data)
    } catch (e) { }
  }, [sync.target.connection_id])

  const loadSourceFields = async () => {
    try {
      setSourceFieldsLoading(true)
      setSourceFieldsError(false)
      const { data } = await PolytomicService.getModels()
      data.data.forEach(async model => {
        const m = await PolytomicService.getModel(model.id)
        setSourceFields(prev => [...prev, ...m.data.data.fields.map(f => ({ ...f, model: model.id }))])
      })
    } catch (e) {
      setSourceFieldsError(e)
      notify('Unable to load model', e.message, 'error')
    } finally {
      setSourceFieldsLoading(false)
    }
  }

  const loadDestinationFields = useCallback(async () => {
    try {
      setDestinationFieldsLoading(true)
      setDestinationFieldsError(false)

      const { data } = await PolytomicService.getConnectionTarget(sync.target.connection_id, { refresh: true, target: sync?.target?.object })
      console.log(data.data.fields)
      setDestinationFields(data.data?.fields)
    } catch (e) {
      setDestinationFieldsError(e)
      notify('Unable to destination fields', e.message, 'error')
    } finally {
      setDestinationFieldsLoading(false)
    }
  }, [sync.target.connection_id, sync.target?.object])

  useEffect(() => {
    const definitions = destinationConnection.type?.destination_data_architecture?.definitions
    const properties = definitions?.DefaultDestinationSchema?.properties || definitions?.DestinationSchema?.properties

    if (destinationConnection?.type?.id === 'bigquery') {
      if (!sync.target.configuration || !sync.target.configuration.dataset) {
        PolytomicService.getConnectionObjects(sync.target.connection_id, { path: 'dataset', type: 'dataset' }).then(({ data }) => {
          setOpts(o => ({
            ...o,
            dataset: {
              ...o.dataset,
              id: 'dataset',
              type: 'enum',
              label: 'Dataset',
              options: data.data.jsonschema.definitions.DestinationSchema.properties.dataset.enum?.map(v => ({ label: v?.label || v, value: v?.value || v })) || [],
            },
            table: null
          }))
        })
      } else if (!sync.target.configuration.table) {
        PolytomicService.getConnectionObjects(sync.target.connection_id, { path: sync.target.configuration?.dataset, type: 'table' }).then(({ data }) => {
          setOpts(o => ({
            ...o,
            table: {
              ...o.table,
              id: 'table',
              type: 'enum',
              label: 'Table',
              options: data.data.jsonschema?.definitions?.DestinationSchema?.properties?.table?.enum?.map(v => ({ label: v?.label || v, value: v?.value || v })) || [],
            }
          }))
        })
      }
    }
    if (destinationConnection?.type?.id === 'hubspot') {
      PolytomicService.getConnectionObjects(sync.target.connection_id, { path: 'Target', type: 'targetObject' }).then(({ data }) => {
        setOpts(o => ({
          object: {
            ...o.object,
            id: 'targetObject',
            type: 'enum',
            label: 'Target Object',
            options: data.data.jsonschema?.definitions?.DestinationSchema?.properties?.targetObject?.enum?.map(v => ({ label: v?.label || v, value: v?.value || v })) || [],
          }
        }))
      })

    }
  }, [destinationConnection.type?.destination_data_architecture?.definitions, destinationConnection?.type?.id, sync?.target?.configuration, sync?.target?.connection_id])


  const handleCreate = async () => {
    try {
      setCreateSyncLoading(true)
      setCreateSyncError(false)
      await PolytomicService.createModelSync(sync)
      navigate('/audiencesyncs')
    } catch (e) {
      setCreateSyncError(e)
      notify('Unable to create sync', e.message, 'error')
    } finally {
      setCreateSyncLoading(false)
    }
  }


  // Effects
  useEffect(() => { loadConnections(); loadSourceFields() }, [])
  useEffect(() => { sync.target.connection_id !== "" && loadDestinationConnection() }, [loadDestinationConnection, sync.target.connection_id])
  useEffect(() => { sync.target.connection_id !== "" && sync.target.configuration !== null && loadDestinationFields() }, [loadDestinationFields, sync.target.connection_id, sync.target.configuration])

  return (
    <div className="p-4 flex flex-col space-y-2">
      <Card >
        <div className="flex justify-between">
          <div className='w-full'>
            <Metric>Create audience sync</Metric>
            <Subtitle>Configure and save</Subtitle>
          </div>
          <div>
            <Flex justifyContent="justify-end" spaceX='space-x-2'>
              <Button variant='secondary' text='Back' onClick={() => navigate(-1)} color='indigo' icon={ArrowLeftIcon} />
            </Flex>
          </div>
        </div>
        <Divider />
        <div className="flex flex-col space-y-8">
          <Card decoration='left' decorationColor='indigo'>
            <div className='flex w-full items-center justify-between'>
              <Title>Audience sync details</Title>
            </div>
            <Divider />
            <div className="flex justify-between">
              <div className='flex flex-col space-y-2 w-full'>
                <Text>Audience sync name</Text>
                <TextInput value={sync.name} onChange={e => setSync(s => ({ ...s, name: e.target.value }))} />
              </div>
            </div>
          </Card>
          <Card decoration='left' decorationColor='indigo'>
            <div className='flex w-full items-center justify-between'>
              <Title>Choose a destination</Title>
            </div>
            <Divider />
            <Flex justifyContent='justify-evenly' spaceX='space-x-2'>
              <div className="flex flex-col space-y-2 w-full">
                <Text>Destination system</Text>
                <SelectBox
                  value={sync.target.connection_id} icon={PTIcon({ name: connections.find(c => c.id === sync.target.connection_id)?.type?.id })}
                  onValueChange={value => setSync(s => ({ ...s, target: { ...s.target, connection_id: value, configuration: null } }))}
                >
                  {connections?.map((v, i) => <SelectBoxItem key={i} icon={PTIcon({ name: v?.type?.id })} value={v.id} text={v.name} />)}
                </SelectBox>
              </div>
              {Object.values(opts)?.filter(v => !!v).map((v, i) => {
                console.log(v)
                return (
                  <div className="flex flex-col space-y-2 w-full" key={v?.id}>
                    <Text>{v?.label}</Text>
                    {!sync?.target?.configuration?.[v?.id] && destinationConnectionLoading ? <LoadingSpinner /> :
                      <SelectBox
                        value={sync?.target?.configuration?.[v?.id] || null}
                        onValueChange={value => setSync(s => ({
                          ...s,
                          target: {
                            ...s.target,
                            object: value,
                            configuration: {
                              ...s?.target?.configuration,
                              [v.id]: value
                            }
                          }
                        }))}
                      >
                        {v?.options?.map((o, i) => <SelectBoxItem key={i} value={o?.value} text={o?.label} />)}
                      </SelectBox>
                    }
                  </div>
                )
              })}
            </Flex>
          </Card>
          <Card decoration='left' decorationColor='indigo'>
            <div className='flex w-full items-center justify-between'>
              <Title>Mappings</Title>
            </div>
            <Divider />
            <Subtitle>Identity mapping</Subtitle>
            <div className="flex flex-col space-y-2 mt-2">
              <Flex spaceX='space-x-2'>
                <SelectBox
                  value={sourceFields.find(v => v.name === sync.identity.source.field && v.model === sync.identity.source.model_id)}
                  onValueChange={value => setSync(s => ({ ...s, identity: { ...s.identity, source: { field: value?.name, model_id: value?.model } } }))}
                >
                  {sourceFields.map((v, i) => <SelectBoxItem key={i} value={v} text={v.label} />)}
                </SelectBox>
                <Icon icon={ArrowRightIcon} />
                <SelectBox
                  value={destinationFields.find(v => v.name === sync.identity.target)}
                  onValueChange={value => setSync(s => ({ ...s, identity: { ...s.identity, target: value?.id } }))}
                >
                  {destinationFields?.filter(o => !!o.supportsIdentity)?.map((v, i) => <SelectBoxItem key={i} value={v} text={v.name} />)}
                </SelectBox>
                <div className='invisible'>
                  <Flex spaceX='space-x-0.5'>
                    <Button variant='light' icon={MinusCircleIcon} color='red' size='lg' />
                    <Button variant='light' icon={PlusCircleIcon} color='green' size='lg' />
                  </Flex>
                </div>
              </Flex>
            </div>
            <Divider />
            <Subtitle>Field mappings</Subtitle>
            <div className="flex flex-col space-y-2 mt-2">
              {sync?.fields?.map((v, i) => {
                return (
                  <Flex spaceX='space-x-2'>
                    <SelectBox
                      value={sourceFields.find(v => v.name === sync.fields[i]?.source?.field && v.model === sync.fields[i]?.source?.model_id)}
                      onValueChange={value => setSync(s => ({ ...s, fields: s.fields.map((f, fi) => fi === i ? ({ ...f, source: { ...f.source, field: value?.name, model_id: value?.model } }) : f) }))}
                    >
                      {sourceFields.map((v, i) => <SelectBoxItem key={i} value={v} text={v.label} />)}
                    </SelectBox>
                    <Icon icon={ArrowRightIcon} />
                    <SelectBox
                      value={destinationFields.find(v => v.name === sync?.fields[i]?.target)}
                      onValueChange={value => setSync(s => ({ ...s, fields: s.fields.map((f, fi) => fi === i ? ({ ...f, target: value.id }) : f) }))}
                    >
                      {destinationFields.map((v, i) => <SelectBoxItem key={i} value={v} text={v.name} />)}
                    </SelectBox>
                    <div>
                      <Flex spaceX='space-x-0.5'>
                        <Button variant='light' icon={MinusCircleIcon} color='red' size='lg' onClick={() => setSync(s => ({ ...s, fields: s.fields.filter((f, fi) => fi !== i) }))} disabled={i === 0} />
                        <Button variant='light' icon={PlusCircleIcon} color='green' size='lg' onClick={() => setSync(s => ({ ...s, fields: s.fields.concat({ source: null, target: null }) }))} />
                      </Flex>
                    </div>
                  </Flex>
                )
              })}
            </div>
          </Card>
        </div>
        <Footer>
          <Flex justifyContent='justify-end'>
            <Button variant='secondary' text='Create' color='indigo' onClick={handleCreate} loading={createSyncLoading}/>
          </Flex>
        </Footer>
      </Card>
      <pre className='max-w-[50vw] overflow-auto'>{JSON.stringify({ sync }, null, 4)}</pre>
    </div >
  )
}

export default SyncCreate