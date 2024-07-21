import { createUseStyles } from "react-jss";

export const useCardKicksStyles = createUseStyles({
    root: {
        boxShadow: '1px 1px 1px 1px rgba(0, 0, 0, 0.4)',
        padding: '8px',
        borderRadius: '20px',
        display: 'flex',
        cursor: 'pointer',
    }
})