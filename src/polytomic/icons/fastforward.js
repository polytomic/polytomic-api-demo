import React from 'react'
import SvgIcon from "../components/SvgIcon"

const FastForward = (props) => {
    return (
        <SvgIcon fill="none" {...props}>
            <path
                d="M10.8667 5L16 10L10.8667 15M5 5L10.1333 10L5 15"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </SvgIcon>
    )
}

export default FastForward
