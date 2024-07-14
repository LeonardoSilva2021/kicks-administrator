import { createUseStyles } from "react-jss";

export const useDrawerKicksStyles = createUseStyles({
    bodyContainer: {
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
    },
    closeButton: {
        display: 'flex',
        justifyContent: 'flex-end',
        width: '100%'
    }
})