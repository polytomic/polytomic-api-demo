import React from 'react'
import SvgIcon from "../components/SvgIcon"

const ActiveCircle = (props) => {
    return (
        <SvgIcon fill="none" {...props}>
            <circle cx="10" cy="10" r="7" stroke="currentColor" strokeWidth="6" />
        </SvgIcon>
    )
}

export default ActiveCircle
