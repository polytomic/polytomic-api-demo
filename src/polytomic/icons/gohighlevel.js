import React from 'react'
import SvgIcon from "../components/SvgIcon"

const Gohighlevel = (props) => {
    return (
        <SvgIcon {...props}>
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M8.13065 5.20976L0 5.22574L4.04159 1.11314L8.13065 5.20976Z"
                fill="#FFBC00"
            />
            <path d="M5.52687 5.15709H2.67914V18.6818H5.52687V5.15709Z" fill="#FFBC00" />
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M5.53903 7.60762L2.97528 5.29378L5.52685 5.25961L5.53903 7.60762Z"
                fill="url(#ghl-gradient1)"
            />
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M14.0653 11.6576L5.93469 11.6735L9.97628 7.56093L14.0653 11.6576Z"
                fill="#188BF6"
            />
            <path d="M11.4615 11.5353H8.61377V18.8869H11.4615V11.5353Z" fill="#188BF6" />
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M11.4737 14.0554L8.90991 11.7416L11.4615 11.7074L11.4737 14.0554Z"
                fill="url(#ghl-gradient2)"
            />
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M20 5.2895L11.8693 5.30547L15.9109 1.19288L20 5.2895Z"
                fill="#37CA37"
            />
            <path d="M17.3962 5.23683H14.5485V18.7616H17.3962V5.23683Z" fill="#37CA37" />
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M17.4084 7.68736L14.8447 5.37352L17.3962 5.33934L17.4084 7.68736Z"
                fill="url(#ghl-gradient3)"
            />
            <defs>
                <linearGradient
                    id="ghl-gradient1"
                    x1="4.00348"
                    y1="6.47836"
                    x2="5.52685"
                    y2="5.25961"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop />
                    <stop offset="0.329731" stopOpacity="0.498039" />
                    <stop offset="1" stopOpacity="0" />
                </linearGradient>
                <linearGradient
                    id="ghl-gradient2"
                    x1="9.93811"
                    y1="12.9262"
                    x2="11.4615"
                    y2="11.7074"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop />
                    <stop offset="0.329731" stopOpacity="0.498039" />
                    <stop offset="1" stopOpacity="0" />
                </linearGradient>
                <linearGradient
                    id="ghl-gradient3"
                    x1="15.8729"
                    y1="6.5581"
                    x2="17.3962"
                    y2="5.33934"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop />
                    <stop offset="0.329731" stopOpacity="0.498039" />
                    <stop offset="1" stopOpacity="0" />
                </linearGradient>
            </defs>
        </SvgIcon>
    )
}

export default Gohighlevel