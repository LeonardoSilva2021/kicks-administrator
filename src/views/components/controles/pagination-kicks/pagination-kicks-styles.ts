import { createUseStyles } from "react-jss";

export const usePaginationKicksStyles = createUseStyles({
    root: {
        display: 'flex',
        maxHeight: '8%'
    },
    paginationContainer: {
        display: 'flex',
        justifyContent: 'flex-end'
    }
})