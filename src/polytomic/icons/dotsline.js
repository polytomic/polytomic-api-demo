import React from 'react'
import SvgIcon from "../components/SvgIcon"

const DotsLine = (props) => {
    return (
        <SvgIcon viewBox="0 0 5 27"  {...props}>
            <circle cx="2.5" cy="2.5" r="2.5" />
            <circle cx="2.5" cy="13.5" r="2.5" />
            <circle cx="2.5" cy="24.5" r="2.5" />
        </SvgIcon>
    )
}

export default DotsLine
