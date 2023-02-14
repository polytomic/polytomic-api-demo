import React from 'react'
import SvgIcon from "../components/SvgIcon"

const Synapse = (props) => {
    return (
        <SvgIcon viewBox="0 0 18 18" {...props}>
            <defs>
                <linearGradient
                    id="synapse-a"
                    x1="9"
                    y1="5.38"
                    x2="9"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop offset=".199" stopColor="#005ba1" />
                    <stop offset="1" stopColor="#0078d4" />
                </linearGradient>
                <linearGradient
                    id="synapse-b"
                    x1="9"
                    y1="12.713"
                    x2="9"
                    y2="5.287"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop offset="0" stopColor="#198ab3" />
                    <stop offset=".172" stopColor="#32bedd" />
                    <stop offset=".5" stopColor="#50e6ff" />
                    <stop offset=".5" stopColor="#4fe4fd" />
                    <stop offset=".5" stopColor="#4bddf8" />
                    <stop offset=".5" stopColor="#44d2ee" />
                    <stop offset=".5" stopColor="#3ac1e0" />
                    <stop offset=".5" stopColor="#2dabce" />
                    <stop offset=".5" stopColor="#1d90b8" />
                    <stop offset=".5" stopColor="#198ab3" />
                    <stop offset=".662" stopColor="#32bedd" />
                    <stop offset=".975" stopColor="#50e6ff" />
                </linearGradient>
            </defs>
            <path
                d="M9 0L1.15 4.49v8.97L9 18l7.85-4.49v-9zm6.4 12.57L9 16.27l-6.4-3.661V5.38L9 1.68l6.4 3.71z"
                fill="#0078d4"
            />
            <path fill="url(#synapse-a)" d="M9 0L1.15 4.49l1.45.89L9 1.68l6.4 3.7 1.45-.89L9 0z" />
            <path
                d="M12.74 10.475a.73.73 0 00-.323-.286 5.835 5.835 0 00-4.478-3.346L14.416 3.1l-1.506-.864L5.534 6.5a.75.75 0 00.376 1.4.684.684 0 00.09-.023l.125.523a4.319 4.319 0 014.837 2.238l-7.349 4.247 1.5.866 7.353-4.251a.729.729 0 00.242-.236l.075-.018c-.007-.029-.018-.055-.025-.084a.735.735 0 00-.018-.687z"
                fill="#50e6ff"
            />
            <path
                d="M12.091 9.013a1.85 1.85 0 101.85 1.85 1.85 1.85 0 00-1.85-1.85zM5.909 5.267a1.85 1.85 0 101.85 1.85 1.85 1.85 0 00-1.85-1.85z"
                fill="url(#synapse-b)"
            />
        </SvgIcon>
    )
}

export default Synapse