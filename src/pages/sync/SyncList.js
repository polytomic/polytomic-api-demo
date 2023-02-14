import { useEffect, useState, useMemo } from 'react'
import { useNavigate } from 'react-router-dom'
import { Metric, Subtitle, Icon, Title, List, ListItem, Bold, Flex, Badge } from '@tremor/react'
import PolytomicService from '../../polytomic/Service'
import PTIcon from '../../polytomic/components/Icon'
import XCard from '../../polytomic/components/XCard'
import RefreshButton from '../../polytomic/components/RefreshButton'
import CreateButton from '../../polytomic/components/CreateButton'
import SearchInput from '../../polytomic/components/SearchInput'
import notify from '../../services/Notify'

const SyncList = () => {
  // Hooks
  const navigate = useNavigate()
  const [syncs, setSyncs] = useState([])
  const [syncsError, setSyncsError] = useState(null)
  const [syncsLoading, setSyncsLoading] = useState(false)
  const [connections, setConnections] = useState([])
  const [, setConnectionsError] = useState(null)
  const [, setConnectionsLoading] = useState(false)
  const [search, setSearch] = useState('')
  const filteredSyncs = useMemo(() => {
    return syncs?.filter((e) => e.name.toLowerCase().includes(search?.toLowerCase()))
  }, [syncs, search])
  // F(x)
  const loadEntities = async () => {
    try {
      setSyncsLoading(true)
      setSyncsError(false)
      const { data } = await PolytomicService.getModelSyncs()
      setSyncs(data.data)
    } catch (e) {
      setSyncsError(e)
      notify('Error loading Audience Syncs', e.message, 'error')
    } finally {
      setSyncsLoading(false)
    }
  }
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
  // Effects
  useEffect(() => { loadEntities(); loadConnections() }, [])

  return (
    <div className="p-4 flex flex-col space-y-2 ">
      <XCard
        title={
          <Flex justifyContent='justify-start' spaceX='space-x-3' alignItems='items-center'>
            <Metric>Audience syncs</Metric>
            <RefreshButton onClick={loadEntities} loading={syncsLoading} />
          </Flex>
        }
        footer={<Subtitle>Total: <Bold>{syncs?.length || '-'}</Bold></Subtitle>}
        actions={
          <>
            <SearchInput search={search} setSearch={setSearch} />
            <CreateButton onClick={() => navigate('/audiencesyncs/create')} />
          </>
        }
        loading={syncsLoading}
        error={syncsError}
        noData={filteredSyncs?.length < 1 && 'Try refreshing Audience Syncs list'}
        children={
          <List>
            {filteredSyncs?.map((sync) => (
              <div key={sync.id} className='hover:bg-indigo-50 cursor-pointer px-2' onClick={() => navigate(`/audiencesyncs/${sync.id}`)}>
                <ListItem>
                  <span className='flex items-center'>
                    <Icon icon={PTIcon({ name: connections.find(c => c.id === sync?.target?.connection_id)?.type?.id })} />
                    <Title>{sync.name}</Title>
                  </span>
                  <Badge
                    text={sync.schedule?.frequency}
                    color={sync.schedule?.frequency === 'continuous' ? 'green' : 'gray'}
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

export default SyncList