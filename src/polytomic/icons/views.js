import React from 'react'
import SvgIcon from "../components/SvgIcon"

const Views = (props) => {
    return (
        <SvgIcon fill="none" stroke="currentColor" {...props}>
            <path
                d="M13 10C13 10.7956 12.6839 11.5587 12.1213 12.1213C11.5587 12.6839 10.7956 13 10 13C9.20435 13 8.44129 12.6839 7.87868 12.1213C7.31607 11.5587 7 10.7956 7 10C7 9.20435 7.31607 8.44129 7.87868 7.87868C8.44129 7.31607 9.20435 7 10 7C10.7956 7 11.5587 7.31607 12.1213 7.87868C12.6839 8.44129 13 9.20435 13 10V10Z"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                />
            <path
                d="M10 17C5.90591 17 2.34841 14.1226 1.04453 10C2.34841 5.87741 5.90591 3 10 3C14.0951 3 17.6516 5.87735 18.9555 10C17.6516 14.1226 14.0951 17 10 17Z"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </SvgIcon>
    )
}

export default Views
