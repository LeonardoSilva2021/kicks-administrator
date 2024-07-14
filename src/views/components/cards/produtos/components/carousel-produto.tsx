import { Carousel } from "@mantine/carousel"
import { CarouselKicks } from "../../../controles/carousel-kicks/carousel-kicks"
import { CarouselProdutoProps } from "./carousel-produto-props"
import { Image } from "@mantine/core"
import { useCarouselProdutoStyles } from "./carousel-produto-styles"

export const CarouselProduto = ({
    imagens,
}: CarouselProdutoProps) => {

    const classes = useCarouselProdutoStyles();

    return (
        <>
            <CarouselKicks
                draggable={imagens.length > 1 ? true : false}
                withControls={imagens.length > 1 ? true : false}
                withIndicators
                styles={{
                    indicator: {
                        background: '#F0F0F0'
                    },
                    viewport: {
                        borderRadius: '0px 0px 20px 20px',
                        boxShadow: '1px 1px 1px 1px rgba(0, 0, 0, 0.1)',
                    }
                }}
            >
                {imagens.map((item) => {
                    return (
                        <Carousel.Slide className={classes.slides}>
                            <Image
                                src={item.imagemUrl}
                                h='100%'
                                fit="contain"
                            />
                        </Carousel.Slide>
                    )
                })}
            </CarouselKicks>
        </>
    )
}