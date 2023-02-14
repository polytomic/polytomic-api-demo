import React from 'react'
import { Card, Callout, Divider, Flex, Footer } from '@tremor/react'
import LoadingSpinner from './LoadingSpinner'
import { XCircleIcon, ExclamationCircleIcon } from '@heroicons/react/20/solid'

import clsx from 'clsx'

const XCard = ({
    title,
    subtitle,
    actions,
    footer,
    dense = false,
    loading,
    error,
    noData,
    children,
    ...CardProps
}) => {
    const CONTENT_SX = clsx('flex flex-col', dense ? 'space-y-2' : 'space-y-4')
    return (
        <Card {...CardProps}>
            <div className="flex justify-between">
                <div className='w-full'>
                    {title}
                    {subtitle}
                </div>
                <div>
                    <Flex justifyContent="justify-end" spaceX='space-x-2'>
                        {actions}
                    </Flex>
                </div>
            </div>
            <Divider />
            <div className={CONTENT_SX}>
                {loading && <div className='w-full h-24 flex justify-center items-center'><LoadingSpinner /></div>}
                {!loading && error && <Callout color='red' title='Error' text={error?.response?.data?.error || JSON.stringify(error)} icon={XCircleIcon} />}
                {!loading && !error && noData && <Callout title='No data available' text={noData} color='blue' icon={ExclamationCircleIcon} />}
                {!loading && !error && !noData && children}
            </div>
            <Footer>
                <Flex justifyContent='justify-end'>
                    {footer}
                </Flex>
            </Footer>
        </Card>
    )
}

export default XCard