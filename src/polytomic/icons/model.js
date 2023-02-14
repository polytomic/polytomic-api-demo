import React from 'react'
import SvgIcon from "../components/SvgIcon"

const Model = (props) => {
    return (
        <SvgIcon fill="none" {...props}>
            <path
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M18 5L10 1L2 5M18 5L10 9M18 5V15L10 19M2 5L10 9M2 5V15L10 19M10 9V19"
            />
        </SvgIcon>
    )
}

export default Model
