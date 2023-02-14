import React from 'react'
import SvgIcon from "../components/SvgIcon"

const Apollo = (props) => {
    return (
        <SvgIcon fill="none" {...props}>
            <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    d="M16.9341 4.38608H14.0976L15.5681 6.82477L16.9341 4.38608Z"
                    fill="#FFC127"
                />
                <path
                    d="M18.534 14.1768L16.6172 10.9925L10.5683 1L0 18.5291H5.66049C6.41666 18.5282 7.15952 18.3385 7.81572 17.9786C8.47192 17.6186 9.01877 17.101 9.40228 16.477L12.2959 11.6432L10.6888 8.97789L7.19614 14.801C6.99806 15.1241 6.71541 15.392 6.37609 15.5784C6.03678 15.7648 5.65256 15.8632 5.26138 15.8639H4.83195L10.5701 6.3451L17.9171 18.5291H20V16.589L18.5404 14.1768H18.534Z"
                    fill="black"
                />
            </svg>
        </SvgIcon>
    )
}

export default Apollo