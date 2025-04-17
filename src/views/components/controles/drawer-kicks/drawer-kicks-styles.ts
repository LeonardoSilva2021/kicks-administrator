import { createUseStyles } from "react-jss";

export const useDrawerKicksStyles = createUseStyles({
    containerBody: {
        display: 'flex',
        height: '100%'
    },
    containerHeader: {
        display: 'flex',
        width: '100%',
    },
    title: {
        '--text-fz': '25px',
        width: '100%'
    },
    closeButton: {
        display: 'flex',
        justifyContent: 'flex-end',
    },
    childrenBody: {
        height: '100%', 
        maxHeight: '80%', 
        overflow: 'auto'
    },
    endComponents: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    }
})