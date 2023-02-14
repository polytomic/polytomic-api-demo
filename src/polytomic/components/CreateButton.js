import { Button } from '@tremor/react'
import { PlusCircleIcon} from '@heroicons/react/20/solid'

const CreateButton = ({ ...ButtonProps }) => {
    return (
        <Button
            variant='secondary'
            color='indigo'
            icon={PlusCircleIcon}
            {...ButtonProps}
        >
            Add
        </Button>
    )
}

export default CreateButton
