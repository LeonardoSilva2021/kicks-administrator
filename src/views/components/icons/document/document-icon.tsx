import { DefaultIcon } from "../default-icon/default-icon"
import { DefaultIconProps } from "../default-icon/default-icon-props"

export const DocumentIcon = (props: DefaultIconProps) => {
    return (
        <>
            <DefaultIcon fill={props.fill} onClick={props.onClick} styles={props.styles}>
                <path d="M21 10.19H18.11C15.74 10.19 13.81 8.26 13.81 5.89V3C13.81 2.45 13.36 2 12.81 2H8.57C5.49 2 3 4 3 7.57V16.43C3 20 5.49 22 8.57 22H16.43C19.51 22 22 20 22 16.43V11.19C22 10.64 21.55 10.19 21 10.19Z" />
                <path d="M16.2999 2.20999C15.8899 1.79999 15.1799 2.07999 15.1799 2.64999V6.13999C15.1799 7.59999 16.4199 8.80999 17.9299 8.80999C18.8799 8.81999 20.1999 8.81999 21.3299 8.81999C21.8999 8.81999 22.1999 8.14999 21.7999 7.74999C20.3599 6.29999 17.7799 3.68999 16.2999 2.20999Z" />
            </DefaultIcon>
        </>
    )
}