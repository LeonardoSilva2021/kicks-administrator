import { createUseStyles } from "react-jss";

export const useLoginPageStyles = createUseStyles({
    root: {
        '--grid-col-padding': '0px !important',
        '--grid-margin': '0px !important',
        backgroundColor: '#FFF',
        height: '100%'
    },
    imagemContainer: {
        height: '100%',
        background: '#000',
        padding: '16px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
    },
    logo: {
        height: '20%'
    },
    containerMobile: {
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        padding: '24px'
    },
    containerLogoMobile: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    }
})