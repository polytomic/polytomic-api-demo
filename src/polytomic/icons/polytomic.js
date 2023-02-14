import React from 'react'
import SvgIcon from "../components/SvgIcon"

const Polytomic = (props) => {
    return (
        <SvgIcon fill="none" {...props}>
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M10 1.06567L18.4516 17.9689H1.54842L10 1.06567ZM4.07659 16.4064H15.9234L10 4.55953L4.07659 16.4064Z"
                fill="#0BD9A5"
            />
            <circle cx="10" cy="2.8125" r="2.8125" fill="#0BD9A5" />
            <ellipse cx="2.8125" cy="17.1875" rx="2.8125" ry="2.8125" fill="#0BD9A5" />
            <ellipse cx="17.1875" cy="17.1875" rx="2.8125" ry="2.8125" fill="#0BD9A5" />
        </SvgIcon>
    )
}

export default Polytomic