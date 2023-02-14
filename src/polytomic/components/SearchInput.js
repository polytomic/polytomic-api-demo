
import { TextInput } from '@tremor/react'
import { MagnifyingGlassIcon, } from '@heroicons/react/20/solid'

const SearchInput = ({ search, setSearch }) => {
    return (
        <TextInput
            placeholder='Search...'
            maxWidth='max-w-md'
            icon={MagnifyingGlassIcon}
            value={search}
            onChange={e => setSearch(e.target.value)}
        />
    )
}

export default SearchInput