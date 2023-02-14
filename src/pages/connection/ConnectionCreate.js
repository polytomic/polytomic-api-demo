import { useState, useEffect, useMemo } from 'react';
import { useNavigate } from 'react-router-dom'
import clsx from 'clsx';
import { XCircleIcon, ExclamationCircleIcon, ArrowPathIcon, MagnifyingGlassIcon } from '@heroicons/react/20/solid'
import { Button, Metric, Card, Icon, Title, List, ListItem, Subtitle, Text, Flex, TextInput, Footer, Bold, Callout, Divider } from '@tremor/react';
import PolytomicService from '../../polytomic/Service';
import LoadingSpinner from '../../polytomic/components/LoadingSpinner';
import PTIcon from '../../polytomic/components/Icon';
import BackButton from '../../polytomic/components/BackButton';

const ConnectionTypesCard = ({ selectedConnectionType, connectionTypes, error, loading, handleRefresh, handleSelect }) => {
    const [search, setSearch] = useState('')
    const filteredConnectionTypes = useMemo(() => {
        return connectionTypes?.filter((connType) => connType.name.toLowerCase().includes(search.toLowerCase()))
    }, [connectionTypes, search])

    return (
        <Card decoration="left" decorationColor="indigo">
            <Flex>
                <Flex justifyContent="justify-start" spaceX='space-x-2'>
                    <Title>Available connections</Title>
                    <Subtitle>Total: <Bold>{connectionTypes?.length || '-'}</Bold></Subtitle>
                </Flex>
                <Flex justifyContent="justify-end" spaceX='space-x-2'>
                    <TextInput id='connectionTypeSearch' value={search} onChange={e => setSearch(e.target.value)} maxWidth='max-w-sm' placeholder='Search connections' icon={MagnifyingGlassIcon} />
                    <Button variant='secondary' text='Refresh' onClick={handleRefresh} color='indigo' icon={ArrowPathIcon} />
                </Flex>
            </Flex>
            <div className='h-52 overflow-y-scroll mt-2'>
                <List>
                    {/* </Callout> */}
                    {loading && <LoadingSpinner center />}
                    {!loading && error && <Callout title='Error fetching connection types' text={error?.message} color='red' icon={XCircleIcon} />}
                    {!loading && !error && !filteredConnectionTypes?.length && <Callout title='No connections available' text='Try refreshing connections list' color='blue' icon={ExclamationCircleIcon} />}
                    {!loading && !error && filteredConnectionTypes?.map((connType) => (
                        <div
                            key={connType.id}
                            className={clsx('hover:bg-indigo-50 cursor-pointer px-1',
                                selectedConnectionType?.id === connType?.id && "bg-indigo-100"
                            )}
                            onClick={() => handleSelect(connType)}
                        >
                            <ListItem>
                                <Flex spaceX='space-x-1' justifyContent='justify-start'>
                                    <Icon icon={PTIcon({ name: connType.id })} />
                                    <Text>{connType.name}</Text>
                                </Flex>
                            </ListItem>
                        </div>
                    ))}
                </List>
            </div>
        </Card>
    )
}

const CreateConnectionCard = ({ connectionType, connectionConfig, error, loading, setConnection, handleCreate, handleCancel }) => {

    const handleServiceAccountFile = (e) => {
        const file = e.target.files[0]
        const reader = new FileReader()
        reader.onload = (e) => {
            const text = e.target.result
            setConnection(c => ({ ...c, configuration: { ...c.configuration, service_account: text } }))
        }
        reader.readAsText(file)
    }

    return (
        <Card decoration="left" decorationColor="indigo">
            <Flex justifyContent='justify-between'>
                <Title>Create connection</Title>
                <Flex spaceX='space-x-1' justifyContent='justify-end'>
                    <Icon icon={PTIcon({ name: connectionType.id, size: 'xs' })} />
                    <Title>{connectionType.name}</Title>
                </Flex>
            </Flex>
            <div className='flex flex-col space-y-2 py-2'>
                <Subtitle>Connection name</Subtitle>
                <TextInput id='name' value={connectionConfig.name} onChange={e => setConnection(c => ({ ...c, name: e.target.value }))} />
                {connectionType.id === 'bigquery' && (
                    <>
                        <Subtitle>Service account key</Subtitle>
                        <input type='file' onChange={handleServiceAccountFile} />
                    </>
                )
                }
            </div>
            {error && <Callout title='Error' text={error} color='red' icon={XCircleIcon} />}
            <Footer>
                <Flex justifyContent="justify-end" spaceX='space-x-2'>
                    <Button variant='secondary' text='Cancel' color='indigo' onClick={handleCancel} importance="secondary" />
                    <Button variant='secondary' text='Create' color='indigo' onClick={handleCreate} />
                </Flex>
            </Footer>
        </Card >
    )
}

const ConnectionCreate = () => {
    // Hooks
    const navigate = useNavigate()
    const [connectionTypes, setConnectionTypes] = useState([])
    const [connectionTypesError, setConnectionTypesError] = useState(null)
    const [connectionTypesLoading, setConnectionTypesLoading] = useState(false)
    // Create connection
    const [selectedConnectionType, setSelectedConnectionType] = useState(null)
    const [connection, setConnection] = useState({
        name: '',
        type: '',
        configuration: {}
    })
    const [connectionError, setConnectionError] = useState(null)
    const [connectionLoading, setConnectionLoading] = useState(false)


    const getConnectionTypes = async () => {
        try {
            setConnectionTypesLoading(true)
            setConnectionTypesError(null)
            const { data } = await PolytomicService.getConnectionTypes()
            setConnectionTypes(data.data)
        } catch (error) {
            setConnectionTypesError(error)
        } finally {
            setConnectionTypesLoading(false)
        }
    }

    const createConnection = async () => {
        try {
            setConnectionLoading(true)
            setConnectionError(null)
            const { data } = await PolytomicService.createConnection(connection)
            setConnection(data.data)
            if (data.data.auth_url) {
                // Open auth window
                const authWindow = window.open(
                    data?.data?.auth_url,
                    `connect_${data?.data?.id}`,
                    "width=600,height=600,dependent"
                )
                const interval = setInterval(() => {
                    if (authWindow.closed) {
                        clearInterval(interval)
                        navigate('/connections')
                    }
                }, 500)

                authWindow.onClose = () => {
                    clearInterval(interval)
                    navigate('/connections')
                }
            }
        } catch (e) {
            setConnectionError(e?.response?.data?.error || e)
        } finally {
            setConnectionLoading(false)
        }
    }

    const handleConnectionTypeSelect = (connType) => {
        setSelectedConnectionType(connType)
        setConnection(c => ({ ...c, name: connType.name, type: connType.id }))
    }

    const handleCancelCreate = () => {
        setSelectedConnectionType(null)
        setConnection({
            name: '',
            type: ''
        })
        setConnectionError(null)
    }

    useEffect(() => {
        getConnectionTypes()
    }, [])

    return (
        <div className="p-4 flex flex-col space-y-2 ">

            <Card>
                <div className="flex justify-between">
                    <div className='w-full'>
                        <Metric>Add a connection</Metric>
                        <Subtitle>Pick and configure a connection</Subtitle>
                    </div>
                    <div>
                        <Flex justifyContent="justify-end" spaceX='space-x-2'>
                            <BackButton />
                        </Flex>
                    </div>
                </div>
                <Divider />
                <div className='flex flex-col space-y-2'>

                    <ConnectionTypesCard
                        selectedConnectionType={selectedConnectionType}
                        connectionTypes={connectionTypes}
                        error={connectionTypesError}
                        loading={connectionTypesLoading}
                        handleRefresh={getConnectionTypes}
                        handleSelect={handleConnectionTypeSelect}
                    />

                    {!!connection?.name && (
                        <CreateConnectionCard
                            connectionType={selectedConnectionType}
                            connectionConfig={connection}
                            loading={connectionLoading}
                            error={connectionError}
                            setConnection={setConnection}
                            handleCreate={createConnection}
                            handleCancel={handleCancelCreate}
                        />
                    )}

                </div>
            </Card>
        </div>
    )
}

export default ConnectionCreate