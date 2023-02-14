import React from 'react'
import SvgIcon from "../components/SvgIcon"

const Menu = (props) => {
    return (
        <SvgIcon fill="none" {...props}>
            <path
                d="M2 16H18M2 4H18H2ZM2 10H18H2Z"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </SvgIcon>
    )
}

export default Menu
