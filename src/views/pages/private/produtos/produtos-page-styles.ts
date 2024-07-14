import { createUseStyles } from "react-jss";

export const useProdutosPageStyles = createUseStyles({
    root: {
        height: '100%',
        width: '100%',
        display: 'flex',
        flexDirection: 'column'
    },
    headerContainer: {
        width: '100%',
    },
    produtosListContainer: {
        display: 'flex',
        width: '100%',
        padding: '16px'
    }
})