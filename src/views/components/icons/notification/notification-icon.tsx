import { DefaultIcon } from "../default-icon/default-icon"
import { DefaultIconProps } from "../default-icon/default-icon-props"

export const NotificationIcon = (props: DefaultIconProps) => {
    return (
        <>
            <DefaultIcon fill={props.fill} onClick={props.onClick} styles={props.styles}>
                <path d="M19.3556 14.49L18.3556 12.83C18.1456 12.46 17.9556 11.76 17.9556 11.35V8.82C17.9556 6.47 16.5756 4.44 14.5856 3.49C14.0656 2.57 13.1056 2 12.0056 2C10.9156 2 9.93557 2.59 9.41557 3.52C7.46557 4.49 6.11557 6.5 6.11557 8.82V11.35C6.11557 11.76 5.92557 12.46 5.71557 12.82L4.70557 14.49C4.30557 15.16 4.21557 15.9 4.46557 16.58C4.70557 17.25 5.27557 17.77 6.01557 18.02C7.95557 18.68 9.99557 19 12.0356 19C14.0756 19 16.1156 18.68 18.0556 18.03C18.7556 17.8 19.2956 17.27 19.5556 16.58C19.8156 15.89 19.7456 15.13 19.3556 14.49Z"  />
                <path d="M14.8456 20.01C14.4256 21.17 13.3156 22 12.0156 22C11.2256 22 10.4456 21.68 9.89556 21.11C9.57556 20.81 9.33556 20.41 9.19556 20C9.32556 20.02 9.45556 20.03 9.59556 20.05C9.82556 20.08 10.0656 20.11 10.3056 20.13C10.8756 20.18 11.4556 20.21 12.0356 20.21C12.6056 20.21 13.1756 20.18 13.7356 20.13C13.9456 20.11 14.1556 20.1 14.3556 20.07C14.5156 20.05 14.6756 20.03 14.8456 20.01Z" />
            </DefaultIcon>
        </>
    )
}