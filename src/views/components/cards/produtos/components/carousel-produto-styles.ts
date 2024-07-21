import { createUseStyles } from "react-jss";

export const useCarouselProdutoStyles = createUseStyles({
    slides: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    imagem: {
        flex: 'none',
        height: '100%'
    }
})