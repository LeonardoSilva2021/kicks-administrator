import { createUseStyles } from "react-jss";

export const useCarouselProdutoStyles = createUseStyles({
    slides: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    imagem: {
        height: '100%',
        width: '100%'
    }
})