import { createUseStyles } from "react-jss";

interface Props {
    isMobile: boolean;
}

export const useLoginComponentStyles = createUseStyles({
    root: (props: Props)  => ({
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: props.isMobile ? null : '100%',
    }),
    container: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        maxWidth: '480px',
        padding: '8px',
    },
    buttonLogin: {
        '& svg': {
            height: '40px',
            width: '40px'
        }
    }
})