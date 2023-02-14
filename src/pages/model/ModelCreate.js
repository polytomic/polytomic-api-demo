
import { useCallback, useEffect, useMemo, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Metric, SelectBox, Divider, Flex, Button, Title, TextInput, Callout, Subtitle, Card, Text, TableBody, SelectBoxItem, TableHead, TableRow, TableHeaderCell, Table, TableCell, Footer } from '@tremor/react'
import PolytomicService from '../../polytomic/Service'
import LoadingSpinner from '../../polytomic/components/LoadingSpinner'
import notify from '../../services/Notify'
import BackButton from '../../polytomic/components/BackButton'

const ModelCreate = () => {
  // Hooks
  const navigate = useNavigate()
  const [connections, setConnections] = useState(null)
  const [connectionsError, setConnectionsError] = useState(null)
  const [connectionsLoading, setConnectionsLoading] = useState(false)

  const [fields, setFields] = useState([])
  const [fieldsError, setFieldsError] = useState(null)
  const [fieldsLoading, setFieldsLoading] = useState(false)

  const [datasets, setDatasets] = useState([])
  const [datasetsError, setDatasetsError] = useState(null)
  const [datasetsLoading, setDatasetsLoading] = useState(false)

  const [tables, setTables] = useState([])
  const [tablesError, setTablesError] = useState(null)
  const [tablesLoading, setTablesLoading] = useState(false)

  const [createLoading, setCreateLoading] = useState(false)
  const [createError, setCreateError] = useState(null)


  const [model, setModel] = useState({
    name: '',
    connection_id: '',
    identifier: '',
    fields: [],
    relations: [],
    tracking_columns: [],
    configuration: {
      dataset: '',
      table: ''
    }
  })

  /// This is the place where we select the bigquery connection that all the audience models will be based on
  const sourceConnectionId = useMemo(() => {
    return connections?.find(c => c.type.id === 'bigquery')?.id || null
  }, [connections])

  const loadConnections = async () => {
    try {
      setConnectionsLoading(true)
      setConnectionsError(false)
      const { data } = await PolytomicService.getConnections()
      setConnections(data.data)
    } catch (e) {
      setConnectionsError(e)
      notify('Failed to load connections', e?.response?.data?.message || e.message, 'error')
    } finally {
      setConnectionsLoading(false)
    }
  }

  // F(x)
  const loadDatasets = useCallback(async () => {
    if (sourceConnectionId) {
      try {
        setDatasetsLoading(true)
        setDatasetsError(null)
        const { data } = await PolytomicService.getConnectionObjects(sourceConnectionId, { path: 'dataset', type: 'dataset' })
        setDatasets(data.data?.jsonschema?.definitions?.DestinationSchema?.properties?.dataset?.enum.filter(v => v.value !== '__pt_new_schema'))
      } catch (e) {
        setDatasetsError(e)
        notify('Failed to load datasets', e?.response?.data?.message || e.message, 'error')
      } finally {
        setDatasetsLoading(false)
      }
    }
  }, [sourceConnectionId])

  const loadTables = useCallback(async () => {
    try {
      setTablesLoading(true)
      setTablesError(null)
      const { data } = await PolytomicService.getConnectionObjects(sourceConnectionId, { path: model.configuration.dataset, type: 'table' })
      setTables(data.data?.jsonschema?.definitions?.DestinationSchema?.properties?.table?.enum.filter(v => v.value !== '__pt_new_target'))
    } catch (e) {
      setTablesError(e)
      notify('Failed to load tables', e?.response?.data?.message || e.message, 'error')
    } finally {
      setTablesLoading(false)
    }
  }, [model.configuration.dataset, sourceConnectionId])

  const loadFields = useCallback(async () => {
    try {
      setFieldsLoading(true)
      setFieldsError(null)
      const { data } = await PolytomicService.getConnectionFields(sourceConnectionId, { update: { dataset: model.configuration.dataset, table: model.configuration.table } })
      setFields(data.data)
    } catch (e) {
      setFieldsError(e)
      notify('Failed to load fields', e?.response?.data?.message || e.message, 'error')
    } finally {
      setFieldsLoading(false)
    }
  }, [model.configuration.dataset, model.configuration.table, sourceConnectionId])


  // Load on mount
  useEffect(() => {
    loadConnections()
  }, [])

  // Load on connection change
  useEffect(() => { sourceConnectionId && loadDatasets() }, [loadDatasets, sourceConnectionId])

  // Load on dataset change
  useEffect(() => { model.configuration.dataset !== '' && loadTables() }, [model.configuration.dataset, loadTables])
  // Load on table change
  useEffect(() => { model.configuration.table !== '' && loadFields() }, [model?.configuration?.table, loadFields])

  const handleSelectField = (field) => {
    if (model.fields.find(f => f.name === field.name)) {
      setModel(v => ({ ...v, fields: v.fields.filter(f => f.name !== field.name) }))
    } else {
      setModel(v => ({ ...v, fields: [...v.fields, field] }))
    }
  }

  const handleSelectAllFields = () => {
    if (model.fields.length === fields.length) {
      setModel(v => ({ ...v, fields: [] }))
    } else {
      setModel(v => ({ ...v, fields: [...fields] }))
    }
  }

  const handleCreate = async () => {
    try {
      setCreateLoading(true)
      setCreateError(null)
      await PolytomicService.createModel({ ...model, fields: model.fields.map(f => f.name), connection_id: sourceConnectionId })
      navigate('/audiencemodels')
    } catch (e) {
      setCreateError(e)
    } finally {
      setCreateLoading(false)
    }
  }

  const handleDatasetSelect = (value) => setModel(v => ({ ...v, configuration: { ...v.configuration, dataset: value, table: '' } }))
  const handleTableSelect = (value) => setModel(v => ({ ...v, configuration: { ...v.configuration, table: value } }))

  const createDisabled = model.name === '' || model.configuration.dataset === '' || model.configuration.table === '' || model.fields.length === 0

  return (
    <div className="p-4 flex flex-col space-y-2 ">
      {/* <pre>{JSON.stringify(model, null, 4)}</pre> */}
      <Card>
        <div className="flex justify-between">
          <div>
            <Metric>Create an audience model</Metric>
            <Subtitle>Specify which data to include</Subtitle>
          </div>
          <div>
            <Flex justifyContent="justify-end" spaceX='space-x-2'>
              <BackButton />
            </Flex>
          </div>
        </div>
        <Divider />
        {connectionsLoading && <LoadingSpinner />}
        {!connectionsLoading && connectionsError && <Callout color='error' title='Error' text={connectionsError.message} />}
        {!connectionsError && !connectionsLoading && <div className="flex flex-col space-y-4 ">
          <Card decoration='left' decorationColor='indigo' hFull>
            <Text>Model name</Text>
            <TextInput id='name' value={model.name} onChange={e => setModel(v => ({ ...v, name: e.target.value }))} placeholder='Name...' />
            <Text>Dataset</Text>
            {datasetsLoading && <LoadingSpinner />}
            {datasetsError && <Callout color='error' title='Error' text={datasetsError.message} />}
            {!datasetsLoading && !datasetsError && datasets &&
              <SelectBox
                value={datasets.find(v => v.value === model.configuration.dataset)?.label}
                onValueChange={handleDatasetSelect}
              >
                {datasets?.map((d, i) => <SelectBoxItem key={i} value={d.value} text={d.label} />)}
              </SelectBox>
            }
            <Text>Table</Text>
            {tablesLoading && <LoadingSpinner />}
            {tablesError && <Callout color='red' title='Error' text={tablesError.message} />}
            {!tablesLoading && !tablesError && tables &&
              <SelectBox
                value={model.configuration.table}
                onValueChange={handleTableSelect}
              >
                {tables?.map((d, i) => <SelectBoxItem key={i} value={d.label} text={d.label} />)}
              </SelectBox>
            }
          </Card>
          {!!model.configuration.table && !!model.configuration.dataset &&
            <Card decoration='left' decorationColor='indigo' hFull>
              <Title>Fields</Title>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableHeaderCell textAlignment="text-left">
                      <div className='flex align-center items-center gap-2'>
                        <input type='checkbox' className="w-4 h-4" checked={fields.length > 0 && fields.every(f => model.fields.find(v => v.name === f.name))} onChange={handleSelectAllFields} />
                        Label
                      </div>
                    </TableHeaderCell>
                    <TableHeaderCell>Example</TableHeaderCell>
                    <TableHeaderCell>Type</TableHeaderCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {fieldsLoading && <LoadingSpinner />}
                  {fieldsError && <Callout color='red' title='Error' text={fieldsError.message} />}
                  {!fieldsLoading && !fieldsError && fields &&
                    fields.map((f, i) => (
                      <TableRow key={i}>
                        <TableCell textAlignment="text-left">
                          <div className='flex align-center items-center gap-2'>
                            <input type='checkbox' className="w-4 h-4" checked={model.fields.some(v => v.name === f.name)} onChange={() => handleSelectField(f)} />
                            {f.label}
                          </div>
                        </TableCell>
                        <TableCell>
                          {f.example}
                        </TableCell>
                        <TableCell>
                          {f.type}
                        </TableCell>
                      </TableRow>
                    ))}
                </TableBody>
              </Table>
            </Card>}
        </div>}
        {createError && <Callout color='error' title='Error creating model' text={createError.message} />}
        <Footer>
          <Flex justifyContent="justify-end" spaceX='space-x-2'>
            <Button variant='secondary' text='Cancel' color='indigo' onClick={() => navigate(-1)} />
            <Button variant='secondary' text='Create' color='indigo' onClick={handleCreate} loading={createLoading} disabled={createDisabled} />
          </Flex>
        </Footer>
      </Card>
    </div >
  )
}

export default ModelCreate