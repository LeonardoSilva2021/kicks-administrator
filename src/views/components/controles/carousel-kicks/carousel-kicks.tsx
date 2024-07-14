import { Carousel } from "@mantine/carousel";
import { CarouselkicksProps } from "./carousel-kicks-props"
import { useCarouselKicksStyles } from "./carousel-kicks-styles"

export const CarouselKicks = ({
    children,
    height,
    background,
    withControls,
    withIndicators,
    draggable,
    style,
    styles,
}: CarouselkicksProps) => {

    const classes = useCarouselKicksStyles();

    return (
        <>
            <Carousel
                height={(height ?? 0) > 0 ? height : 200}
                withControls={withControls}
                draggable={draggable}
                withIndicators={withIndicators}
                style={style}
                styles={styles}
                className={classes.root}
            >
                {children}
            </Carousel>
        </>
    )
}