import { createUseStyles } from "react-jss";

export const useButtonFloatKicksStyles = createUseStyles({
    root: {
        margin: 0,
        padding: 0,
        position: 'fixed',
        bottom: '16px',
        right: '16px'
    },
    button: {
        borderRadius: '30px',
        height: '60px',
        width: '60px',
    }
})