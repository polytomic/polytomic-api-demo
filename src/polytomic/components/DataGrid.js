import { ArrowLeftIcon, ArrowRightIcon, ArrowUpIcon, ArrowDownIcon } from '@heroicons/react/20/solid'
import { Flex, Subtitle, Table, TableHead, TableHeaderCell, TableBody, TableRow, TableCell, Button, Toggle, ToggleItem, Bold, Metric, Text, Icon } from '@tremor/react'
import React, { useMemo, useState } from 'react'
import RefreshButton from './RefreshButton'
import SearchInput from './SearchInput'
import XCard from './XCard'

const DataGrid = ({
    title,
    data,
    cols,
    // state
    loading,
    error,
    noData,
    handleRefresh,
    ...CardProps
}) => {
    const [sort, setSort] = useState({
        col: null,
        dir: null
    })
    const [search, setSearch] = useState('')
    const [page, setPage] = useState(1)
    const [pageSize] = useState(10)
    // const [pageSizes] = useState([10, 25, 50, 100])

    const totalPages = useMemo(() => {
        return Math.ceil(data?.length / pageSize)
    }, [data, pageSize])


    const handleSort = (col) => {
        setSort(s => {
            if (s.col === col.id) {
                if (s.dir === 'asc') return { col: col.id, dir: 'desc' }
                if (s.dir === 'desc') return { col: undefined, dir: undefined }
            } else {
                return { col: col.id, dir: 'asc' }
            }
        })
    }

    const filteredData = useMemo(() => {
        let _data = data
        if (search && search !== '') {
            _data = _data?.filter((e) => JSON.stringify(e).toLowerCase().includes(search.toLowerCase()))
        }
        if (sort && sort.col && sort.dir) {
            _data.sort((a, b) => {
                const col = cols?.find(c => c.id === sort.col)
                const aVal = col.accessorFn ? col.accessorFn(a) : a[sort.col]
                const bVal = col.accessorFn ? col.accessorFn(b) : b[sort.col]
                if (aVal < bVal) return sort.dir === 'asc' ? -1 : 1
                if (aVal > bVal) return sort.dir === 'asc' ? 1 : -1
                return 0
            })
        }
        return _data

    }, [cols, data, search, sort])

    return (
        <XCard
            {...CardProps}
            title={
                <Flex justifyContent='justify-start' spaceX='space-x-3' alignItems='items-center'>
                    <Metric>{title}</Metric>
                    <RefreshButton onClick={handleRefresh} loading={loading} />
                </Flex>
            }
            loading={loading}
            error={error}
            subtitle={<Subtitle>Total: <Bold>{data?.length || '-'}</Bold></Subtitle>}
            noData={noData}
            actions={
                <SearchInput search={search} setSearch={setSearch} />
            }
            children={
                <Table>
                    <TableHead>
                        <TableRow>
                            {cols?.map((col, i) => (
                                <TableHeaderCell key={i}>
                                    <div className='flex items-center cursor-pointer grow-0 shrink' onClick={() => handleSort(col)}>
                                        <Text truncate>
                                            <Bold>
                                                {col.label}
                                            </Bold>
                                        </Text>
                                        <div className={sort.col !== col.id && 'invisible'}>
                                            <Icon size='sm' color='gray' icon={sort.col === col.id ? (sort.dir === 'asc' ? ArrowUpIcon : ArrowDownIcon) : ArrowDownIcon} />
                                        </div>
                                    </div>
                                </TableHeaderCell>
                            ))}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {filteredData
                            ?.slice((page - 1) * pageSize, page * pageSize)
                            ?.map((row, i) => (
                                <TableRow key={i}>
                                    {cols?.map((col, i) => (
                                        <TableCell
                                            key={i}
                                            children={
                                                col && col?.format ? col?.format(col?.accessorFn ? col?.accessorFn(row) : row[col]) : row[col]
                                            }
                                        />
                                    ))}
                                </TableRow>
                            ))}
                    </TableBody>
                </Table >
            }
            footer={
                data?.length > 0 && (
                    <div className='flex justify-between w-full space-x-3 items-center px-4' >
                        <span className='flex items-center space-x-1 w-full'><Text>Page</Text><Bold>{page}</Bold><Text>of</Text><Bold>{totalPages}</Bold></span>
                        <div className='flex justify-center w-full space-x-3 items-center'>
                            <Button icon={ArrowLeftIcon} variant='light' color='indigo' onClick={() => setPage(p => p - 1)} disabled={page === 1}>Prev</Button>
                            <Toggle color='indigo' value={page} onValueChange={setPage}>
                                {Array(totalPages).fill().map((p, i) => (
                                    <ToggleItem value={i + 1} text={String(i + 1)} />
                                ))}
                            </Toggle>
                            <Button icon={ArrowRightIcon} color='indigo' iconPosition='right' variant='light' onClick={() => setPage(p => p + 1)} disabled={page === totalPages}>Next</Button>
                        </div >
                        <div className='flex justify-end w-full space-x-1 items-center'>
                            <Text>Records</Text><Bold>{((page - 1) * pageSize) + 1}</Bold> <Text>to</Text> <Bold>{(page * pageSize)}</Bold>
                        </div>
                    </div>
                )
            }
        />
    )
}

export default DataGrid