import React from 'react'
import SvgIcon from "../components/SvgIcon"

const Redshift = (props) => {
    return (
        <SvgIcon fill="none" {...props}>
            <path d="M10 15.2918L17.5882 17.1026V2.85693L10 4.66778V15.2918Z" fill="#205B97" />
            <path
                d="M17.5882 2.85693L19.0336 3.58127V16.3783L17.5882 17.1026V2.85693ZM10 15.2918L2.41177 17.1026V2.85693L10 4.66778V15.2918Z"
                fill="#5193CE"
            />
            <path
                d="M2.41176 2.85693L0.966385 3.58127V16.3783L2.41176 17.1026V2.85693Z"
                fill="#205B97"
            />
            <path
                d="M11.9275 20L14.8183 18.5513V1.44867L11.9275 0L11.0438 9.49711L11.9275 20Z"
                fill="#5193CE"
            />
            <path
                d="M8.07245 20L5.18169 18.5513V1.44867L8.07245 0L8.95623 9.49711L8.07245 20Z"
                fill="#205B97"
            />
            <path d="M8.07245 0H11.9667V19.9596H8.07245V0Z" fill="#2E73B7" />
        </SvgIcon>
    )
}

export default Redshift