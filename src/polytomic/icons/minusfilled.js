import React from 'react'
import SvgIcon from "../components/SvgIcon"

const MinusFilled = (props) => {
    return (
        <SvgIcon {...props}>
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M9.99997 20.0001C15.5228 20.0001 20 15.5229 20 10C20 4.47716 15.5228 0 9.99997 0C4.4771 0 -6.10352e-05 4.47716 -6.10352e-05 10C-6.10352e-05 15.5229 4.4771 20.0001 9.99997 20.0001ZM6 9C5.44772 9 5 9.44771 5 10C5 10.5523 5.44772 11 6 11H14C14.5523 11 15 10.5523 15 10C15 9.44771 14.5523 9 14 9H6Z"
            />
        </SvgIcon>
    )
}

export default MinusFilled
