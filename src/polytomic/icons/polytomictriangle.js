import React from 'react'
import SvgIcon from "../components/SvgIcon"

const PolytomicTriangle = (props) => {
    return (
        <SvgIcon {...props}>
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M10 1.06555L18.4516 17.9687H1.54843L10 1.06555ZM4.07661 16.4062H15.9234L10 4.55941L4.07661 16.4062Z"
            />
            <circle cx="10" cy="2.8125" r="2.8125" />
            <ellipse cx="2.8125" cy="17.1875" rx="2.8125" ry="2.8125" />
            <ellipse cx="17.1875" cy="17.1875" rx="2.8125" ry="2.8125" />
        </SvgIcon>
    )
}

export default PolytomicTriangle
