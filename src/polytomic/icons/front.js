import React from 'react'
import SvgIcon from "../components/SvgIcon"

const Front = (props) => {
    return (
        <SvgIcon fill="none" {...props}>
            <path
                d="M3 3.328C3 1.49 4.49 0 6.328 0H17V4.736C17 5.655 16.255 6.4 15.336 6.4H11C10.1164 6.4 9.4 7.11636 9.4 8V18.336C9.4 19.255 8.655 20 7.736 20H3V3.328Z"
                fill="#001B38"
            />
            <path
                d="M6.71999 8.03997C6.71999 10.4258 8.65411 12.36 11.04 12.36C13.4259 12.36 15.36 10.4258 15.36 8.03997C15.36 5.6541 13.4259 3.71997 11.04 3.71997C8.65411 3.71997 6.71999 5.6541 6.71999 8.03997Z"
                fill="url(#front-gradient)"
            />
            <path
                opacity="0.5"
                d="M6.71999 8.03997C6.71999 10.4258 8.65411 12.36 11.04 12.36C13.4259 12.36 15.36 10.4258 15.36 8.03997C15.36 5.6541 13.4259 3.71997 11.04 3.71997C8.65411 3.71997 6.71999 5.6541 6.71999 8.03997Z"
                fill="url(#front-gradient2)"
            />
            <defs>
                <linearGradient
                    id="front-gradient"
                    x1="7.99759"
                    y1="4.80161"
                    x2="14.494"
                    y2="11.3429"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop stopColor="#FF0057" stopOpacity="0.16" />
                    <stop offset="0.861354" stopColor="#FF0057" />
                </linearGradient>
                <linearGradient
                    id="front-gradient2"
                    x1="7.99759"
                    y1="4.80161"
                    x2="14.494"
                    y2="11.3429"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop stopColor="#FF0057" stopOpacity="0.16" />
                    <stop offset="0.861354" stopColor="#FF0057" />
                </linearGradient>
            </defs>
        </SvgIcon>
    )
}

export default Front