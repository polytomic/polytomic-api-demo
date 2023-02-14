import { useEffect, useState, useMemo } from 'react'
import { useNavigate } from 'react-router-dom'
import { ExclamationCircleIcon, CheckIcon } from '@heroicons/react/20/solid'
import { Metric, Subtitle, Icon, Title, Flex, List, ListItem, Bold, Badge } from '@tremor/react'
import PolytomicService from '../../polytomic/Service'
import PTIcon from '../../polytomic/components/Icon'
import XCard from '../../polytomic/components/XCard'
import RefreshButton from '../../polytomic/components/RefreshButton'
import CreateButton from '../../polytomic/components/CreateButton'
import SearchInput from '../../polytomic/components/SearchInput'
import notify from '../../services/Notify'

const ConnectionList = () => {
    // Hooks
    const navigate = useNavigate()
    const [connections, setConnections] = useState([])
    const [connectionsError, setConnectionsError] = useState(null)
    const [connectionsLoading, setConnectionsLoading] = useState(false)
    const [search, setSearch] = useState('')
    const filteredConnections = useMemo(() => {
        return connections?.filter((e) => e.name.toLowerCase().includes(search?.toLowerCase()))
    }, [connections, search])
    // F(x)
    const loadConnections = async () => {
        try {
            setConnectionsLoading(true)
            setConnectionsError(false)
            const { data } = await PolytomicService.getConnections()
            setConnections(data.data)
        } catch (e) {
            setConnectionsError(e)
            notify('Error loading connections', e.message, 'error')
        } finally {
            setConnectionsLoading(false)
        }
    }
    // Load on mount
    useEffect(() => { loadConnections() }, [])

    return (
        <div className="p-4 flex flex-col space-y-2 ">
            <XCard
                title={
                    <Flex justifyContent='justify-start' spaceX='space-x-3' alignItems='items-center'>
                        <Metric>Connections</Metric>
                        <RefreshButton onClick={loadConnections} loading={connectionsLoading} />
                    </Flex>
                }
                footer={<Subtitle>Total: <Bold>{connections?.length || '-'}</Bold></Subtitle>}
                actions={
                    <>
                        <SearchInput search={search} setSearch={setSearch} />
                        <CreateButton onClick={() => navigate('/connections/create')} />
                    </>
                }
                loading={connectionsLoading}
                error={connectionsError}
                noData={filteredConnections?.length < 1 && "Try refreshing connections list"}
                children={
                    <List>
                        {filteredConnections?.map((conn) => (
                            <div key={conn.id} className='hover:bg-indigo-50 cursor-pointer px-2'>
                                <ListItem>
                                    <span className='flex items-center'>
                                        <Icon icon={PTIcon({ name: conn.type.id })} />
                                        <Title>{conn.name}</Title>
                                    </span>
                                    <Badge
                                        text={conn.status}
                                        icon={conn.status === 'healthy' ? CheckIcon : ExclamationCircleIcon}
                                        color={conn.status === 'healthy' ? 'green' : 'red'}
                                    />
                                </ListItem>
                            </div>
                        ))}
                    </List>
                }

            />
        </div>
    )
}

export default ConnectionList