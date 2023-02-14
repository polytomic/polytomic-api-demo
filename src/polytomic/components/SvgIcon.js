import clsx from "clsx"

const SvgIconSize = {
    xs: "h-3 w-3",
    sm: "h-4 w-4",
    md: "h-5 w-5",
    lg: "h-6 w-6",
    xl: "h-8 w-8",
}
const SvgIconColor = {
    default: "text-grey-500",
    disabled: "text-grey-300",
    primary: "text-grey-500",
    secondary: "text-grey-500",
    success: "text-green-500",
    error: "text-danger-500",
    warning: "text-warning-500",
    info: "text-info-500",

}
// export type SvgIconProps = {
//     children?: React.ReactNode
//     size?: keyof typeof SvgIconSize
//     color?: keyof typeof SvgIconColor
//     className?: string
// } & Pick<SVGProps<SVGSVGElement>, 'fill' | 'viewBox' | 'stroke'>

const SvgIcon = ({
    children,
    fill = "currentColor",
    viewBox = "0 0 20 20",
    size = 'md',
    color = 'default',
    stroke,
    className
}) => {
    const ICON_SX = clsx(
        "overflow-visible",
        SvgIconSize[size],
        SvgIconColor[color],
        className
    )
    return (
        <svg
            className={ICON_SX}
            xmlns="http://www.w3.org/2000/svg"
            viewBox={viewBox}
            fill={fill}
            stroke={stroke}
        >
            {children}
        </svg>
    )
}

export default SvgIcon