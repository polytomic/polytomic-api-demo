import { useEffect, useState, useCallback } from 'react'
import { useParams } from 'react-router-dom'
import { Card, Metric, Subtitle, Flex, Divider, Callout } from '@tremor/react'
import PolytomicService from '../../polytomic/Service'
import LoadingSpinner from '../../polytomic/components/LoadingSpinner'
import BackButton from '../../polytomic/components/BackButton'

const ConnectionView = () => {
    const { id } = useParams()

    const [connection, setConnection] = useState(null)
    const [connectionError, setConnectionError] = useState(null)
    const [connectionLoading, setConnectionLoading] = useState(false)

    const loadConnection = useCallback(async () => {
        try {
            setConnectionLoading(true)
            setConnectionError(false)
            const { data } = await PolytomicService.getConnection(id)
            setConnection(data.data)
        } catch (e) {
            setConnectionError(e)
        } finally {
            setConnectionLoading(false)
        }
    }, [id])

    useEffect(() => { loadConnection() }, [loadConnection])


    return (
        <div className="p-4 flex flex-col space-y-2">
            <Card>
                <div className="flex justify-between">
                    <div className='w-full'>
                        <Metric>{connection?.name || 'Connection'}</Metric>
                        <Subtitle>{connection?.id || '-'}</Subtitle>
                    </div>
                    <Flex justifyContent="justify-end" spaceX='space-x-2'>
                        <BackButton />
                    </Flex>
                </div>
                <Divider />
                <div className='flex flex-col space-y-2'>
                    {connectionLoading && <LoadingSpinner center />}
                    {!connectionLoading && connectionError && <Callout color='red' title='Error' text={connectionError?.response?.data?.error || JSON.stringify(connectionError)} />}
                    {!connectionLoading && connection && <pre>
                        {JSON.stringify(connection, null, 4)}
                    </pre>}
                </div>
            </Card>
        </div>

    )
}

export default ConnectionView