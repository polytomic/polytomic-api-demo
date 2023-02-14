import { Divider, Metric, Subtitle, Text, Button, Card, Flex, Bold } from '@tremor/react'
import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { ArrowLeftIcon, HomeIcon } from '@heroicons/react/20/solid'

const NotFound = () => {
    const navigate = useNavigate()
    const location = useLocation()
    return (
        <div className="p-4 flex flex-col space-y-2">
            <Card>
                <div className="flex justify-between">
                    <div className='w-full'>
                        <Metric>404</Metric>
                        <Subtitle>Page Not Found</Subtitle>
                    </div>
                </div>
                <Divider />
                <Text>The page <Bold>{location.pathname}</Bold> could not be found</Text>
                <Flex spaceX='space-x-4' marginTop='mt-4' justifyContent='justify-start'>
                    <Button text='Home' variant='secondary' onClick={() => navigate('/')} color='indigo' icon={HomeIcon} />
                    <Button text='Back' variant='secondary' onClick={() => navigate(-1)} color='indigo' icon={ArrowLeftIcon} />
                </Flex>
            </Card>
        </div>
    )
}

export default NotFound