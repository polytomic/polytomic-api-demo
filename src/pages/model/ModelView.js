import { useEffect, useState, useCallback } from 'react'
import { useParams } from 'react-router-dom'
import { Card, Metric, Subtitle, Flex, Divider, Callout, Text, TextInput, Title, SelectBox, SelectBoxItem, Table, TableHead, TableHeaderCell, TableRow, TableBody, TableCell } from '@tremor/react'
import PolytomicService from '../../polytomic/Service'
import LoadingSpinner from '../../polytomic/components/LoadingSpinner'
import BackButton from '../../polytomic/components/BackButton'
// import DataGrid from '../../polytomic/components/DataGrid'
import notify from '../../services/Notify'

const ModelView = () => {
    const { id } = useParams()

    const [model, setModel] = useState({})
    const [modelError, setModelError] = useState(null)
    const [modelLoading, setModelLoading] = useState(false)

    const [fields, setFields] = useState([])
    const [fieldsError, setFieldsError] = useState(null)
    const [fieldsLoading, setFieldsLoading] = useState(false)

    const [datasets, setDatasets] = useState([])
    const [datasetsError, setDatasetsError] = useState(null)
    const [datasetsLoading, setDatasetsLoading] = useState(false)

    const [tables, setTables] = useState([])
    const [tablesError, setTablesError] = useState(null)
    const [tablesLoading, setTablesLoading] = useState(false)

    const loadFields = async (connId, conf) => {
        try {
            setFieldsLoading(true)
            setFieldsError(null)
            const { data } = await PolytomicService.getConnectionFields(connId,
                {
                    update: { ...conf }
                }
            )
            setFields(data.data)
        } catch (e) {
            setFieldsError(e)
            notify('Failed to load fields', e?.response?.data?.message || e.message, 'error')
        } finally {
            setFieldsLoading(false)
        }
    }

    const loadDatasets = useCallback(async () => {
        if (model.connection_id) {
            try {
                setDatasetsLoading(true)
                setDatasetsError(null)
                const { data } = await PolytomicService.getConnectionObjects(model.connection_id, { path: 'dataset', type: 'dataset' })
                setDatasets(data.data?.jsonschema?.definitions?.DestinationSchema?.properties?.dataset?.enum.filter(v => v.value !== '__pt_new_schema'))
            } catch (e) {
                setDatasetsError(e)
                notify('Failed to load datasets', e?.response?.data?.message || e.message, 'error')
            } finally {
                setDatasetsLoading(false)
            }
        }
    }, [model.connection_id])


    const loadTables = useCallback(async () => {
        try {
            setTablesLoading(true)
            setTablesError(null)
            const { data } = await PolytomicService.getConnectionObjects(model.connection_id, { path: model?.configuration?.dataset, type: 'table' })
            setTables(data.data?.jsonschema?.definitions?.DestinationSchema?.properties?.table?.enum.filter(v => v.value !== '__pt_new_target'))
        } catch (e) {
            setTablesError(e)
            notify('Failed to load tables', e?.response?.data?.message || e.message, 'error')
        } finally {
            setTablesLoading(false)
        }
    }, [model?.configuration?.dataset, model?.connection_id])


    const loadModel = useCallback(async () => {
        try {
            setModelLoading(true)
            setModelError(false)
            const { data } = await PolytomicService.getModel(id)
            await loadFields(data.data?.connection_id, data.data?.configuration)
            setModel(data.data)
        } catch (e) {
            setModelError(e)
        } finally {
            setModelLoading(false)
        }
    }, [id])


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

    const handleDatasetSelect = (value) => setModel(v => ({ ...v, configuration: { ...v.configuration, dataset: value, table: '' } }))
    const handleTableSelect = (value) => setModel(v => ({ ...v, configuration: { ...v.configuration, table: value } }))

    useEffect(() => { loadModel() }, [loadModel])
    useEffect(() => { !!model.connection_id && loadDatasets() }, [loadDatasets, model.connection_id])
    useEffect(() => { !!model.connection_id && !!model.configuration?.table && loadTables() }, [loadTables, model?.configuration?.table, model?.connection_id])

    return (
        <div className="p-4 flex flex-col space-y-2">
            <Card>
                <div className="flex justify-between">
                    <div className='w-full'>
                        <Metric>{model?.name || 'Audience model'}</Metric>
                        <Subtitle>{model?.id || '-'}</Subtitle>
                    </div>
                    <Flex justifyContent="justify-end" spaceX='space-x-2'>
                        <BackButton />
                    </Flex>
                </div>
                <Divider />
                <div className='flex flex-col space-y-2'>
                    {modelLoading && <div className='w-full h-24 flex justify-center items-center'><LoadingSpinner /></div>}
                    {!modelLoading && modelError && <Callout color='red' title='Error' text={modelError?.response?.data?.error || JSON.stringify(modelError)} />}
                    {!modelLoading && model && (
                        <>
                            <Card decoration='left' decorationColor='indigo' hFull>
                                <Text>Model name</Text>
                                <TextInput id='name' value={model.name} onChange={e => setModel(v => ({ ...v, name: e.target.value }))} placeholder='Name...' />
                                <Text>Dataset</Text>
                                {datasetsLoading && <LoadingSpinner />}
                                {datasetsError && <Callout color='error' title='Error' text={datasetsError.message} />}
                                {!datasetsLoading && !datasetsError && datasets &&
                                    <SelectBox
                                        value={datasets.find(v => v.value === model?.configuration?.dataset)?.label}
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
                                        value={model?.configuration?.table}
                                        onValueChange={handleTableSelect}
                                    >
                                        {tables?.map((d, i) => <SelectBoxItem key={i} value={d.label} text={d.label} />)}
                                    </SelectBox>
                                }
                            </Card>
                            {!!model?.configuration?.table && !!model?.configuration?.dataset &&
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
                            {/* {fields &&
                                <DataGrid
                                    title={<Title>Fields</Title>}
                                    dense
                                    decoration='left'
                                    decorationColor='indigo'
                                    noData={fields?.length === 0 && 'No fields found'}
                                    cols={[
                                        {
                                            id: 'label', label: 'Label', align: 'text-left', accessorFn: v => v, format: v => (
                                                <div className='flex align-center items-center gap-2 truncate w-[1/3] overflow-clip'>
                                                    <input type='checkbox' className="w-4 h-4" checked={model.fields.some(f => f.name === v.name)} onChange={() => handleSelectField(v)} />
                                                    {String(v.label)}
                                                </div>
                                            )
                                        },
                                        { id: 'example', label: 'Example', align: 'text-center', accessorFn: v => v.example, format: v => String(v) || '-', },
                                        { id: 'type', label: 'Type', align: 'text-center', accessorFn: v => v.type, format: v => String(v) || '-', },
                                    ]}
                                    data={fields}
                                    loading={fieldsLoading}
                                    error={fieldsError}
                                    handleRefresh={() => loadFields(model.connection_id, model.configuration)}
                                />
                            } */}
                        </>
                    )}
                </div>
            </Card >
            {/* <pre>{JSON.stringify(model, null, 4)}</pre> */}
        </div >

    )
}

export default ModelView