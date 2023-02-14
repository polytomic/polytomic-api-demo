import React from 'react'
import SvgIcon from "../components/SvgIcon"

const MapTo = (props) => {
    return (
        <SvgIcon fill="none" {...props}>
            <path
                d="M0 3C0 1.34315 1.34315 0 3 0H17C18.6569 0 20 1.34315 20 3V17C20 18.6569 18.6569 20 17 20H3C1.34315 20 0 18.6569 0 17V3Z"
                fill="currentColor"
            />
            <path
                d="M15 10H5M15 10L11 6M15 10L11 14"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </SvgIcon>
    )
}

export default MapTo
