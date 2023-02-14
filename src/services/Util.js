import { CheckCircleIcon, ExclamationTriangleIcon, InformationCircleIcon, XCircleIcon } from "@heroicons/react/20/solid"

export const getIconByStatus = (status) => {
    switch (status) {
        case 'healthy':
        case 'ready':
        case 'completed':
        case 'success':
            return CheckCircleIcon
        case 'error':
        case 'failed':
        case 'unhealthy':
        case 'unready':
            return XCircleIcon
        case 'warning':
            return ExclamationTriangleIcon
        case 'info':
        case 'waiting':
        case 'processing':
        default:
            return InformationCircleIcon
    }
}

export const getColorByStatus = (status) => {
    switch (status) {
        case 'healthy':
        case 'ready':
        case 'completed':
        case 'success':
            return 'green'
        case 'error':
        case 'failed':
        case 'unhealthy':
        case 'unready':
            return 'red'
        case 'warning':
            return 'amber'
        case 'info':
        case 'waiting':
        case 'processing':
        default:
            return 'blue'
    }
}
