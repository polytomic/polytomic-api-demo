import React from 'react'
import SvgIcon from "../components/SvgIcon"

const ArrowLeft = (props) => {
    return (
        <SvgIcon {...props}>
            <path
                fillRule="evenodd"
                d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z"
                clipRule="evenodd"
            />
        </SvgIcon>
    )
}

export default ArrowLeft