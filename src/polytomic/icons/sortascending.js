import React from 'react'
import SvgIcon from "../components/SvgIcon"

const SortAscending = (props) => {
    return (
        <SvgIcon fill="none" {...props}>
            <path
                d="M15 6V18M1 2H14H1ZM1 6H10H1ZM1 10H7H1ZM11 10L15 6L11 10ZM15 6L19 10L15 6Z"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </SvgIcon>
    )
}

export default SortAscending
