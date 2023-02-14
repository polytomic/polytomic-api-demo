import React from 'react'
import SvgIcon from "../components/SvgIcon"

const Jira = (props) => {
    return (
        <SvgIcon fill="none" {...props}>
            <g clipPath="url(#jira-clip)">
                <path
                    d="M19.4779 9.44024L10.8421 0.833941L10.0054 0L3.50451 6.47861L0.531821 9.44024C0.383345 9.589 0.299988 9.79018 0.299988 10C0.299988 10.2099 0.383345 10.4111 0.531821 10.5598L6.47096 16.4786L10.0054 20L16.5053 13.5214L16.6065 13.4214L19.4779 10.5643C19.5523 10.4907 19.6115 10.4031 19.6517 10.3067C19.692 10.2102 19.7127 10.1067 19.7127 10.0023C19.7127 9.89772 19.692 9.79436 19.6517 9.69788C19.6115 9.60139 19.5523 9.51387 19.4779 9.44024ZM10.0054 12.9572L7.03807 10L10.0054 7.04289L12.9718 10L10.0054 12.9572Z"
                    fill="#2684FF"
                />
                <path
                    d="M10.0053 7.04291C9.07209 6.11306 8.5459 4.853 8.54187 3.53792C8.53783 2.22282 9.05626 0.959598 9.98377 0.0241241L3.49097 6.49193L7.02454 10.0133L10.0053 7.04291Z"
                    fill="url(#jira-gradient)"
                />
                <path
                    d="M12.9798 9.99193L10.0053 12.9571C10.9421 13.8909 11.4683 15.1573 11.4683 16.4777C11.4683 17.7981 10.9421 19.0644 10.0053 19.9982L16.516 13.5133L12.9798 9.99193Z"
                    fill="url(#jira-gradient-2)"
                />
            </g>
            <defs>
                <linearGradient
                    id="jira-gradient"
                    x1="9.47401"
                    y1="4.05091"
                    x2="5.34451"
                    y2="8.19371"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop offset="0.18" stopColor="#0052CC" />
                    <stop offset="1" stopColor="#2684FF" />
                </linearGradient>
                <linearGradient
                    id="jira-gradient-2"
                    x1="756.457"
                    y1="868.229"
                    x2="1178.71"
                    y2="1142.91"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop offset="0.18" stopColor="#0052CC" />
                    <stop offset="1" stopColor="#2684FF" />
                </linearGradient>
                <clipPath id="jira-clip">
                    <rect width="20" height="20" fill="white" />
                </clipPath>
            </defs>
        </SvgIcon>
    )
}

export default Jira