import React from 'react'
import SvgIcon from "../components/SvgIcon"

const Syncs = (props) => {
    return (
        <SvgIcon fill="none" {...props}>
            <path
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13 4L19 10M13 16L19 10M19 10H11M7 10H6M2 10H1"
            />
        </SvgIcon>
    )
}

export default Syncs
