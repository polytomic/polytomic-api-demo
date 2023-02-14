import React from 'react'
import SvgIcon from "../components/SvgIcon"

const CloseXFat = (props) => {
    return (
        <SvgIcon fill="none" {...props}>
            <path
                stroke="currentColor"
                strokeWidth="4"
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 4L16 16M4 16L16 4L4 16Z"
            />
        </SvgIcon>
    )
}

export default CloseXFat
