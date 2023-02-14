import React from 'react'
import SvgIcon from "../components/SvgIcon"

const TypeDate = (props) => {
    return (
        <SvgIcon fill="none" {...props}>
            <rect x="3" y="4" width="14" height="13" rx="1" stroke="currentColor" strokeWidth="2" />
            <rect x="4" y="5" width="12" height="3" fill="currentColor" />
            <rect x="5" y="1" width="2" height="2" fill="currentColor" />
            <rect x="13" y="1" width="2" height="2" fill="currentColor" />
            <rect x="6" y="10" width="3" height="3" fill="currentColor" />
        </SvgIcon>
    )
}

export default TypeDate
