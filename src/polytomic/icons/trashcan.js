import React from 'react'
import SvgIcon from "../components/SvgIcon"

const Trashcan = (props) => {
    return (
        <SvgIcon fill="none" {...props}>
        <path
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M2 5H18M17 5L16.133 17.142C16.0971 17.6466 15.8713 18.1188 15.5011 18.4636C15.1309 18.8083 14.6439 19 14.138 19H5.862C5.35614 19 4.86907 18.8083 4.49889 18.4636C4.1287 18.1188 3.90292 17.6466 3.867 17.142L3 5H17ZM8 9V15V9ZM12 9V15V9ZM13 5V2C13 1.73478 12.8946 1.48043 12.7071 1.29289C12.5196 1.10536 12.2652 1 12 1H8C7.73478 1 7.48043 1.10536 7.29289 1.29289C7.10536 1.48043 7 1.73478 7 2V5H13Z"
        />
        </SvgIcon>
    )
}

export default Trashcan
