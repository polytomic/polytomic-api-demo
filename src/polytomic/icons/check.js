import React from 'react'
import SvgIcon from "../components/SvgIcon"

const Check = (props) => {
    return (
        <SvgIcon fill="none" {...props}>
            <path
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 11L7 15L17 5"
            />
        </SvgIcon>
    )
}

export default Check
