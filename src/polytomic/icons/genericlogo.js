import React from 'react'
import SvgIcon from "../components/SvgIcon"

const Genericlogo = (props) => {
    return (
        <SvgIcon {...props}>
            <path
                d="M2 5V15C2 17.21 5.582 19 10 19C14.418 19 18 17.21 18 15V5M2 5C2 7.21 5.582 9 10 9C14.418 9 18 7.21 18 5M2 5C2 2.79 5.582 1 10 1C14.418 1 18 2.79 18 5M18 10C18 12.21 14.418 14 10 14C5.582 14 2 12.21 2 10"
                stroke="#71717A"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </SvgIcon>
    )
}

export default Genericlogo