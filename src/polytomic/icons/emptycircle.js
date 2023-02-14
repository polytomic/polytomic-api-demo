import React from 'react'
import SvgIcon from "../components/SvgIcon"

const EmptyCircle = (props) => {
    return (
        <SvgIcon fill="none" {...props}>
            <circle cx="10" cy="10" r="9" stroke="currentColor" strokeWidth="2.5" />
        </SvgIcon>
    )
}

export default EmptyCircle
