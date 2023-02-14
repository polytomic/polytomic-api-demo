import React from 'react'
import SvgIcon from "../components/SvgIcon"

const Refresh = (props) => {
    return (
        <SvgIcon fill="none" {...props}>
            <path
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.582 7.00005H2V2.00005L2.582 7.00005ZM2.582 7.00005C3.24585 5.35818 4.43568 3.98296 5.96503 3.08991C7.49438 2.19686 9.2768 1.83646 11.033 2.06519C12.7891 2.29392 14.4198 3.09884 15.6694 4.35383C16.919 5.60881 17.7168 7.24291 17.938 9.00005M2.582 7.00005H7M17.419 13H18V18L17.419 13ZM17.419 13C16.7542 14.641 15.564 16.0151 14.0348 16.9073C12.5056 17.7996 10.7237 18.1596 8.9681 17.9309C7.21246 17.7023 5.5822 16.8979 4.33253 15.6438C3.08287 14.3896 2.28435 12.7565 2.062 11M17.419 13H13"
            />
        </SvgIcon>
    )
}

export default Refresh
