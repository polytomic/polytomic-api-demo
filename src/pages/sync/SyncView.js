/* eslint-disable no-unused-vars */
import { useEffect, useState, useCallback, useMemo } from 'react'
import { useParams } from 'react-router-dom'
import { Text, Title, Metric, Divider, Subtitle, Icon, SelectBox, SelectBoxItem, Button, Flex, TextInput, Badge, Card } from '@tremor/react'
import { ArrowRightIcon, MinusCircleIcon, PlusCircleIcon } from '@heroicons/react/20/solid'
import PolytomicService from '../../polytomic/Service'
import notify from '../../services/Notify'
import XCard from '../../polytomic/components/XCard'
import BackButton from '../../polytomic/components/BackButton'
import PTIcon from '../../polytomic/components/Icon'
import dayjs from 'dayjs'
import duration from 'dayjs/plugin/duration'
import { getColorByStatus, getIconByStatus } from '../../services/Util'
import DataGrid from '../../polytomic/components/DataGrid'


const SyncView = () => {
    // TODO move this to a bootstrap service / init service
    dayjs.extend(duration)
    // hooks
    const { id } = useParams()
    const [sync, setSync] = useState(null)
    const [syncError, setSyncError] = useState(null)
    const [syncLoading, setSyncLoading] = useState(false)

    const [syncUpdateLoading, setSyncUpdateLoading] = useState(false)
    const [syncUpdateError, setSyncUpdateError] = useState(false)

    const [connections, setConnections] = useState([])
    const [connectionsError, setConnectionsError] = useState(null)
    const [connectionsLoading, setConnectionsLoading] = useState(false)

    const [sourceFields, setSourceFields] = useState([])
    const [sourceFieldsError, setSourceFieldsError] = useState(null)
    const [sourceFieldsLoading, setSourceFieldsLoading] = useState(false)


    const [destinationConnection, setDestinationConnection] = useState({})
    const [destinationConnectionError, setDestinationConnectionError] = useState(null)
    const [destinationConnectionLoading, setDestinationConnectionLoading] = useState(false)

    const [destinationFields, setDestinationFields] = useState([])
    const [destinationFieldsError, setDestinationFieldsError] = useState(null)
    const [destinationFieldsLoading, setDestinationFieldsLoading] = useState(false)

    const [history, setHistory] = useState([])
    const [historyError, setHistoryError] = useState(null)
    const [historyLoading, setHistoryLoading] = useState(null)
    // f(x)
    const loadSync = useCallback(async () => {
        try {
            setSyncLoading(true)
            setSyncError(false)
            const { data } = await PolytomicService.getModelSync(id)
            setSync(data.data)
        } catch (e) {
            setSyncError(e)
        } finally {
            setSyncLoading(false)
        }
    }, [id])

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

    const loadDestinationConnection = useCallback(async () => {
        try {
            setDestinationConnectionLoading(true)
            setDestinationConnectionError(false)
            const { data } = await PolytomicService.getConnection(sync?.target?.connection_id)
            setDestinationConnection(data.data)
        } catch (e) {
            setDestinationConnectionError(e)
            notify('Unable to load conenction model config', e.message, 'error')
        } finally {
            setDestinationConnectionLoading(false)
        }
    }, [sync?.target?.connection_id])

    const loadDestinationFields = useCallback(async () => {
        try {
            setDestinationFieldsLoading(true)
            setDestinationFieldsError(false)
            const { data } = await PolytomicService.getConnectionFields(sync?.target?.connection_id, {
                update: {
                    streamID: sync?.target?.object,
                    dataset: sync?.target?.object?.split(':')[1]?.split('.')[0],
                    table: sync?.target?.object?.split(':')[1]?.split('.')[1]
                } || {}
            })
            setDestinationFields(data.data)
        } catch (e) {
            setDestinationFieldsError(e)
            notify('Unable to destination fields', e.message, 'error')
        } finally {
            setDestinationFieldsLoading(false)
        }
    }, [sync?.target?.connection_id, sync?.target.object])

    const loadHistory = useCallback(async () => {
        try {
            setHistoryLoading(true)
            setHistoryError(false)
            const { data } = await PolytomicService.getModelSyncExecutions(id)
            setHistory(data.data)
        } catch (e) {
            setHistoryError(e)
        } finally {
            setHistoryLoading(false)
        }
    }, [id])


    const handleUpdateSync = async () => {
        try {
            setSyncUpdateLoading(true)
            setSyncUpdateError(false)
            const { data } = await PolytomicService.updateModelSync(id, sync)
            setSync(data.data)
            notify('Updating...', 'Updating audience sync details', 'info')
            notify('Updated audice sync details', null, 'success')
        } catch (e) {
            setSyncUpdateError(e)
            notify('Error', 'Error updating audience sync details', 'error')
        } finally {
            setSyncUpdateLoading(false)
        }

    }

    const mappingsComplete = useMemo(() => {
        return (
            sync?.fields.every(f =>
                !!f?.source?.field &&
                !!f?.source?.model_id &&
                !!f?.target
            ) &&
            !!sync?.identity?.source.field &&
            !!sync?.identity?.source.model_id &&
            !!sync?.identity?.target
        )
    }, [sync?.fields, sync?.identity?.source?.field, sync?.identity?.source?.model_id, sync?.identity?.target])

    // effects
    useEffect(() => { loadSync(); loadConnections(); loadSourceFields(); loadHistory() }, [loadHistory, loadSync])
    useEffect(() => { sync?.target?.connection_id !== '' && !!sync?.target?.connection_id && loadDestinationConnection() }, [loadDestinationConnection, sync?.target?.connection_id])
    useEffect(() => { sync?.target?.connection_id !== '' && !!sync?.target?.connection_id && loadDestinationFields() }, [loadDestinationFields, sync?.target?.connection_id, sync?.target?.object])

    return (
        <div className="p-4 flex flex-col space-y-2">
            <XCard
                title={<Flex spaceX='space-x-1' justifyContent='justify-start'><Icon variant='simple' icon={PTIcon({ name: connections.find(c => c.id === sync?.target?.connection_id)?.type?.id })} /><Metric>{sync?.name || 'Audience Sync'}</Metric></Flex>}
                subtitle={<Subtitle>{sync?.id || '-'}</Subtitle>}
                actions={<BackButton />}
                error={syncError}
                loading={syncLoading}
                children={
                    <>
                        <XCard
                            title={<Title>Audience sync config</Title>}
                            decoration='left'
                            decorationColor='indigo'
                            children={
                                <>
                                    <Card>
                                        <Subtitle>Details</Subtitle>
                                        <div className="flex justify-between mt-2">
                                            <div className='flex flex-col space-y-2 w-full'>
                                                <Text>Audience Sync Name</Text>
                                                <TextInput value={sync?.name} onChange={(e) => setSync({ ...sync, name: e.target.value })} />
                                            </div>
                                        </div>
                                    </Card>
                                    <Card>
                                        <Subtitle>Identity mapping</Subtitle>
                                        <div className="flex flex-col space-y-2 mt-2">
                                            <Flex spaceX='space-x-2'>
                                                <SelectBox
                                                    value={sourceFields.find(v => v.name === sync?.identity?.source?.field && v.model === sync?.identity?.source?.model_id)}
                                                    onValueChange={value => setSync(s => ({ ...s, identity: { ...s.identity, source: { field: value?.name, model_id: value?.model } } }))}
                                                >
                                                    {sourceFields.map((v, i) => <SelectBoxItem key={i} value={v} text={v?.label} />)}
                                                </SelectBox>
                                                <Icon icon={ArrowRightIcon} />
                                                <SelectBox
                                                    value={destinationFields.find(v => v.name === sync.identity.target)}
                                                    onValueChange={value => setSync(s => ({ ...s, identity: { ...s.identity, target: value?.name } }))}
                                                >
                                                    {destinationFields?.map((v, i) => <SelectBoxItem key={i} value={v} text={v.label} />)}
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
                                                    <Flex spaceX='space-x-2' key={i}>
                                                        <SelectBox
                                                            value={sourceFields.find(v => v.name === sync.fields[i]?.source?.field && v.model === sync.fields[i]?.source?.model_id)}
                                                            onValueChange={value => setSync(s => ({ ...s, fields: s.fields.map((f, fi) => fi === i ? ({ ...f, source: { ...f.source, field: value?.name, model_id: value?.model } }) : f) }))}
                                                        >
                                                            {sourceFields.map((v, i) => <SelectBoxItem key={i} value={v} text={v.label} />)}
                                                        </SelectBox>
                                                        <Icon icon={ArrowRightIcon} />
                                                        <SelectBox
                                                            value={destinationFields.find(v => v.name === sync?.fields[i]?.target)}
                                                            onValueChange={value => setSync(s => ({ ...s, fields: s.fields.map((f, fi) => fi === i ? ({ ...f, target: value.name }) : f) }))}
                                                        >
                                                            {destinationFields.map((v, i) => <SelectBoxItem key={i} value={v} text={v.label} />)}
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
                                </>
                            }

                            footer={<Button variant='secondary' text='Update' onClick={handleUpdateSync} color='indigo' disabled={!mappingsComplete} />}
                        />
                        <DataGrid
                            title={<Title>History</Title>}
                            dense
                            decoration='left'
                            decorationColor='indigo'
                            noData={history?.length === 0 && 'No history'}
                            cols={[
                                { id: 'start', label: 'Start', align: 'text-left', accessorFn: v => v.started_at, format: v => dayjs(v).format('MMM DD, YYYY, HH:mm:ss a') },
                                { id: 'duration', label: 'Duration', align: 'text-left', accessorFn: v => dayjs(v.completed_at).diff(dayjs(v.started_at), 'ms'), format: v => dayjs.duration(v).format('m[m] s[s]') },
                                { id: 'total_records', label: 'Total Records', align: 'text-center', format: v => v || '-', accessorFn: v => v.counts.total_records },
                                { id: 'inserted', label: 'Inserted', align: 'text-center', format: v => v || '-', accessorFn: v => v.counts.inserted },
                                { id: 'warnings', label: 'Warnings', align: 'text-center', format: v => v || '-', accessorFn: v => v.counts.warnings },
                                { id: 'status', label: 'Status', align: 'text-right', accessorFn: v => v.status, format: v => <Badge text={v} color={getColorByStatus(v)} icon={getIconByStatus(v)} /> },
                            ]}
                            data={history}
                            loading={historyLoading}
                            error={historyError}
                            handleRefresh={loadHistory}
                        />
                    </>
                }
            />
            {/* < pre className='w-[50vw] overflow-auto' >
                {JSON.stringify({ sync }, null, 4)}
            </pre > */}
        </div >

    )
}

export default SyncView