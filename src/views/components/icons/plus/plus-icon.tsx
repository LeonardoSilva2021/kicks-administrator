import { DefaultIcon } from "../default-icon/default-icon"
import { DefaultIconProps } from "../default-icon/default-icon-props"

export const PlusIcon = (props: DefaultIconProps) => {
    return (
        <>
            <DefaultIcon fill={props.fill} onClick={props.onClick} styles={props.styles}>
                <path d="M4.02319 13.7798C4.02319 14.354 4.50366 14.8227 5.06616 14.8227H12.6482V22.4048C12.6482 22.9673 13.1169 23.4477 13.6912 23.4477C14.2654 23.4477 14.7459 22.9673 14.7459 22.4048V14.8227H22.3162C22.8787 14.8227 23.3591 14.354 23.3591 13.7798C23.3591 13.2056 22.8787 12.7251 22.3162 12.7251H14.7459V5.15479C14.7459 4.59229 14.2654 4.11182 13.6912 4.11182C13.1169 4.11182 12.6482 4.59229 12.6482 5.15479V12.7251H5.06616C4.50366 12.7251 4.02319 13.2056 4.02319 13.7798Z" />
            </DefaultIcon>
        </>
    )
}