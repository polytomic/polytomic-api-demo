import { ArrowPathIcon } from '@heroicons/react/20/solid'
import { Button } from '@tremor/react'

const RefreshButton = ({ ...ButtonInlineProps }) => {
    return (
        <Button
            variant='light'
            size='lg'
            color='indigo'
            icon={ArrowPathIcon}
            {...ButtonInlineProps}
        />
    )
}

export default RefreshButton