import { createUseStyles } from "react-jss";

export const useAdicionarImagemProdutoCardStyles = createUseStyles({
    root: {
        height: '300px',
        cursor: 'default'
    },
    imagePrimary: {
        border: '1px solid #000',
        background: '#F0F0F0',
        height: '100%',
        borderRadius: '16px',
        display: 'flex', 
        justifyContent: 'center',
        alignItems: 'center',
        cursor: 'pointer'
    },
    containerImages: {
        display: 'flex',
        flexDirection: 'column',
        gap: '8px'
    },
    images: {
        border: '1px solid #000',
        height: '100%',
        background: '#F0F0F0',
        borderRadius: '16px',
        flex: 'auto',
        display: 'flex', 
        justifyContent: 'center',
        alignItems: 'center',
        cursor: 'pointer'
    },
})