import { useEffect, useState, useMemo } from 'react'
import { useNavigate } from 'react-router-dom'
import { Metric, Subtitle, Icon, Title, Flex, List, ListItem, Bold } from '@tremor/react'
import PolytomicService from '../../polytomic/Service'
import PTIcon from '../../polytomic/components/Icon'
import XCard from '../../polytomic/components/XCard'
import RefreshButton from '../../polytomic/components/RefreshButton'
import CreateButton from '../../polytomic/components/CreateButton'
import SearchInput from '../../polytomic/components/SearchInput'
import notify from '../../services/Notify'

const ModelList = () => {
  // Hooks
  const navigate = useNavigate()
  const [models, setModels] = useState([])
  const [modelsError, setModelsError] = useState(null)
  const [modelsLoading, setModelsLoading] = useState(false)
  const [search, setSearch] = useState('')
  const filteredModels = useMemo(() => {
    return models?.filter((e) => e.name.toLowerCase().includes(search.toLowerCase()))
  }, [models, search])

  // F(x)
  const loadModels = async () => {
    try {
      setModelsLoading(true)
      setModelsError(false)
      const { data } = await PolytomicService.getModels()
      setModels(data.data)
    } catch (e) {
      setModelsError(e)
      notify('Error loading Audience Models', e.message, 'error')
    } finally {
      setModelsLoading(false)
    }
  }
  // Effects
  useEffect(() => { loadModels() }, [])

  return (
    <div className="p-4 flex flex-col space-y-2 ">
      <XCard
        title={
          <Flex justifyContent='justify-start' spaceX='space-x-3' alignItems='items-center'>
            <Metric>Audience models</Metric>
            <RefreshButton onClick={loadModels} loading={modelsLoading} />
          </Flex>
        }
        footer={<Subtitle>Total: <Bold>{models?.length || '-'}</Bold></Subtitle>}
        actions={
          <>
            <SearchInput search={search} setSearch={setSearch} />
            <CreateButton onClick={() => navigate('/audiencemodels/create')} />
          </>
        }
        loading={modelsLoading}
        error={modelsError}
        noData={filteredModels?.length < 1 && "Try refreshing Audience Models list"}
        children={
          <List>
            {filteredModels?.map((model) => (
              <div key={model.id} className='hover:bg-indigo-50 cursor-pointer px-2' onClick={() => navigate(`/audiencemodels/${model.id}`)}> 
                <ListItem>
                  <span className='flex items-center'>
                    <Icon icon={PTIcon({ name: model.type })} />
                    <Title>{model.name}</Title>
                  </span>
                </ListItem>
              </div>
            ))}
          </List>
        }

      />
    </div>
  )
}

export default ModelList