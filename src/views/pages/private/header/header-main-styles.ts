import { createUseStyles } from "react-jss";

export const useHeaderMainStyles = createUseStyles({
    root: {
        display: 'flex',
        width: '100%',
        padding: '8px',
    },
    containerItens: {
        display: 'flex',
        alignItems: 'center',
        width: '100%',
        height: '100%'
    },
    containerBuger: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
    conatinerButtonsNavigate: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        gap: '8px',
        width: '100%'
    }
});