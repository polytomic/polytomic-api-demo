import React from 'react'
import SvgIcon from "../components/SvgIcon"

const Awsathena = (props) => {
    return (
        <SvgIcon fill="none" {...props}>
            <path
                d="M17 0H3C1.34315 0 0 1.34315 0 3V17C0 18.6569 1.34315 20 3 20H17C18.6569 20 20 18.6569 20 17V3C20 1.34315 18.6569 0 17 0Z"
                fill="url(#athena-gradient)"
            />
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M9.57376 6.80668C10.6968 6.80668 11.312 7.0583 11.4241 7.18448C11.312 7.31066 10.6968 7.56228 9.57376 7.56228C8.4507 7.56228 7.83557 7.31066 7.72341 7.18448C7.83557 7.0583 8.4507 6.80668 9.57376 6.80668ZM9.44597 8.82059C9.40478 8.79944 9.37575 8.75737 9.37575 8.70751C9.37575 8.63749 9.43233 8.58031 9.50156 8.58031C9.52166 8.58031 9.54002 8.58611 9.55714 8.59492L9.44597 8.82059ZM10.8919 10.8977C10.8733 10.9128 10.8306 10.942 10.7427 10.9773C10.6646 11.0085 10.572 11.0368 10.4671 11.0614C10.1882 11.1269 9.84523 11.1629 9.50131 11.1629C8.74921 11.1629 8.22514 11.0005 8.11224 10.8997L7.77899 7.7877C8.2899 7.99674 9.0425 8.06601 9.57376 8.06601C10.0961 8.06601 10.8323 7.99876 11.343 7.79777L11.1437 9.1664C10.7683 9.02485 10.2998 8.81933 9.8559 8.60323C9.81073 8.44657 9.67004 8.33122 9.50156 8.33122C9.29709 8.33122 9.13084 8.50022 9.13084 8.70751C9.13084 8.91529 9.29709 9.08404 9.50156 9.08404C9.54994 9.08404 9.5961 9.07397 9.63828 9.05684C10.2586 9.36311 10.7209 9.55956 11.0688 9.68071L10.8919 10.8977ZM7.21795 7.21168L7.61969 10.9625C7.64797 11.6586 9.42488 11.6667 9.50131 11.6667C9.8817 11.6667 10.2643 11.6259 10.5787 11.5523C10.7075 11.5221 10.8241 11.4863 10.9251 11.4458C11.2184 11.3279 11.3723 11.1672 11.3829 10.9685L11.5502 9.81898C11.6641 9.84241 11.7571 9.85273 11.8313 9.85273C12.0648 9.85273 12.1263 9.75703 12.1688 9.69104C12.2134 9.62152 12.2263 9.53614 12.2055 9.45025C12.1579 9.25279 11.8792 8.99287 11.6931 8.83848L11.9283 7.22125L11.9261 7.221C11.9271 7.20866 11.9311 7.19707 11.9311 7.18448C11.9311 6.48858 10.4492 6.30295 9.57376 6.30295C8.69834 6.30295 7.21646 6.48858 7.21646 7.18448C7.21646 7.1938 7.21969 7.20211 7.22019 7.21143L7.21795 7.21168ZM9.45888 5.01492C11.6216 5.01492 13.3812 6.80089 13.3812 8.99614C13.3812 11.1914 11.6216 12.9774 9.45888 12.9774C7.29587 12.9774 5.53633 11.1914 5.53633 8.99614C5.53633 6.80089 7.29587 5.01492 9.45888 5.01492ZM3.24627 10.4587V10.9625H5.47951V10.9327C6.1934 12.4374 7.70653 13.4811 9.45888 13.4811C11.8951 13.4811 13.8774 11.4692 13.8774 8.99614C13.8774 6.52308 11.8951 4.51119 9.45888 4.51119C7.56336 4.51119 5.94774 5.73122 5.32144 7.43634H3.24627V7.94007H5.16909C5.09167 8.26422 5.04626 8.60046 5.04254 8.94753H2.75V9.45126H5.06288C5.09787 9.8011 5.17653 10.1371 5.28621 10.4587H3.24627ZM16.77 16.5088C16.4697 16.814 15.9491 16.8158 15.6491 16.5115L12.9832 13.8052C13.4122 13.4806 13.7951 13.0975 14.1234 12.6691L16.773 15.3713C16.9221 15.523 17.0042 15.725 17.0037 15.9398C17.0035 16.1551 16.9206 16.3569 16.77 16.5088ZM17.1243 15.0157L14.4154 12.2525C15.0159 11.3141 15.3663 10.1963 15.3663 8.99614C15.3663 5.68966 12.7162 3 9.45888 3C7.1182 3 4.99564 4.4049 4.05098 6.57925L4.50507 6.78225C5.37033 4.79076 7.31473 3.50373 9.45888 3.50373C12.4427 3.50373 14.87 5.96747 14.87 8.99614C14.87 12.0246 12.4427 14.4886 9.45888 14.4886C7.46559 14.4886 5.63931 13.3811 4.69217 11.5984L4.25545 11.8377C5.28894 13.7836 7.28296 14.9923 9.45888 14.9923C10.5978 14.9923 11.6621 14.6626 12.5651 14.0934L15.2985 16.8679C15.5412 17.1142 15.864 17.25 16.207 17.25C16.5519 17.25 16.8767 17.1132 17.1204 16.8657C17.3645 16.6193 17.4995 16.2909 17.5 15.9406C17.5007 15.5907 17.367 15.2623 17.1243 15.0157Z"
                fill="white"
            />
            <defs>
                <linearGradient
                    id="athena-gradient"
                    x1="0"
                    y1="20"
                    x2="20"
                    y2="0"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop stopColor="#4D27A8" />
                    <stop offset="1" stopColor="#A166FF" />
                </linearGradient>
            </defs>
        </SvgIcon>
    )
}

export default Awsathena
