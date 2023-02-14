import React from 'react'
import SvgIcon from "../components/SvgIcon"

const Book = (props) => {
    return (
        <SvgIcon fill="none" {...props}>
            <path
                d="M9.99976 4.253C11.1678 3.477 12.7538 3 14.4998 3C16.2468 3 17.8318 3.477 18.9998 4.253V17.253C17.8318 16.477 16.2468 16 14.4998 16C12.7538 16 11.1678 16.477 9.99976 17.253M9.99976 4.253V17.253V4.253ZM9.99976 4.253C8.83176 3.477 7.24576 3 5.49976 3C3.75376 3 2.16776 3.477 0.999756 4.253V17.253C2.16776 16.477 3.75376 16 5.49976 16C7.24576 16 8.83176 16.477 9.99976 17.253V4.253Z"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </SvgIcon>
    )
}

export default Book
