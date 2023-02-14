import React from 'react'
import SvgIcon from "../components/SvgIcon"

const ArrowNarrowRight = (props) => {
    return (
        <SvgIcon {...props}>
            <path
                fillRule="evenodd"
                d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                clipRule="evenodd"
            />
        </SvgIcon>
    )
}

export default ArrowNarrowRight
