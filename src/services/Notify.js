import { InformationCircleIcon, XCircleIcon, CheckCircleIcon, ExclamationCircleIcon } from '@heroicons/react/20/solid';
import { Callout } from '@tremor/react';
import toast from 'react-hot-toast';

/* 
    __PROPS__ 
    title: string
    messsage: string
    type: 'default' | 'success' | 'error' | 'warning' | 'info'
*/

const getNotifyColor = (type) => {
    switch (type) {
        case 'success':
            return 'green';
        case 'error':
            return 'red';
        case 'warning':
            return 'yellow';
        case 'info':
            return 'blue';
        default:
            return 'gray';
    }
}

const getNotifyIcon = (type) => {
    switch (type) {
        case 'success':
            return CheckCircleIcon
        case 'error':
            return XCircleIcon
        case 'warning':
            return ExclamationCircleIcon
        case 'info':
        default:
            return InformationCircleIcon
    }
}

const notify = (title, msg, type) => {
    const opts = { position: "bottom-right" }
    return toast.custom((t) => <Callout title={title} text={msg} color={getNotifyColor(type)} icon={getNotifyIcon(type)} />, opts)
}


export default notify;