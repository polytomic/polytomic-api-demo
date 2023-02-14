import React from 'react'
import SvgIcon from "../components/SvgIcon"

const SortDescending = (props) => {
    return (
        <SvgIcon fill="none" {...props}>
            <path
                d="M15 18L19 14M1 2H14H1ZM1 6H10H1ZM1 10H10H1ZM15 6V18V6ZM15 18L11 14L15 18Z"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </SvgIcon>
    )
}

export default SortDescending
