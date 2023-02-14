import React from 'react'
import SvgIcon from "../components/SvgIcon"

const Googleads = (props) => {
    return (
        <SvgIcon fill="none" {...props}>
            <g clipPath="url(#googleads-clip)">
                <path
                    d="M7.11231 2.66879L0.445435 14.2158L6.21944 17.5495L12.8863 6.00252L7.11231 2.66879Z"
                    fill="#FBBC04"
                />
                <path
                    d="M19.5535 14.2149L12.886 2.66759C11.9655 1.07318 9.92674 0.526555 8.33233 1.44706C6.73791 2.36757 6.19129 4.40633 7.1118 6.00075L13.7792 17.548C14.6998 19.1424 16.7385 19.6879 18.3329 18.7686C19.9273 17.848 20.4728 15.8093 19.5535 14.2149Z"
                    fill="#4285F4"
                />
                <path
                    d="M3.33315 19.2151C5.174 19.2151 6.66631 17.7228 6.66631 15.882C6.66631 14.0411 5.174 12.5488 3.33315 12.5488C1.4923 12.5488 0 14.0411 0 15.882C0 17.7228 1.4923 19.2151 3.33315 19.2151Z"
                    fill="#34A853"
                />
            </g>
            <defs>
                <clipPath id="googleads-clip">
                    <rect width="20" height="20" fill="white" />
                </clipPath>
            </defs>
        </SvgIcon>
    )
}

export default Googleads