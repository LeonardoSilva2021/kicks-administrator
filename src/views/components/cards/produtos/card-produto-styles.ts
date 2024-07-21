import { createUseStyles } from "react-jss";

export const useCardProdutoStyles = createUseStyles({
    card: {
        cursor: 'pointer'
    },
    carouselContainer: {
        padding: '0px'
    },
    infoProduto: {
        padding: '16px',
        display: 'flex',
        flexDirection: 'column'
    },
})