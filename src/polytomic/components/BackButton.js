import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Button } from '@tremor/react'
import { ArrowLeftIcon } from '@heroicons/react/20/solid'

const BackButton = ({text = 'back'}) => {
    const navigate = useNavigate()
    return (
        <Button
            text='Back'
            variant='secondary'
            icon={ArrowLeftIcon}
            color='indigo'
            onClick={() => navigate(-1)}
        />
    )
}

export default BackButton