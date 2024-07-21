import { Grid, Indicator, NumberFormatter, Tooltip } from "@mantine/core";
import { CardKicks } from "../../controles/card-kicks/card-kicks";
import { CarouselProduto } from "./components/carousel-produto";
import { TypographyKikcs } from "../../controles/typography-kicks/typography-kicks";
import { useCardProdutoStyles } from "./card-produto-styles";
import { CardProdutoProps } from "./card-produto-props";

export const CardProduto = ({
    model,
}: CardProdutoProps) => {

    const classes = useCardProdutoStyles();

    return (
        <>
            <Indicator
                withBorder
                size={16}
                offset={20}
                color="green"
            >
                <CardKicks>
                    <Grid>
                        <Grid.Col span={12} className={classes.carouselContainer}>
                            <CarouselProduto
                                imagens={model.imagens}
                            />
                        </Grid.Col>
                        <Grid.Col span={12} className={classes.infoProduto}>
                            <div>
                                <TypographyKikcs
                                    variant='h3'
                                >
                                    {model.nome}
                                </TypographyKikcs>
                            </div>
                            <div>
                                <TypographyKikcs
                                    variant="h4"
                                >
                                    {model.descricao}
                                </TypographyKikcs>
                            </div>
                            <div>
                                <TypographyKikcs
                                    variant="h4"
                                >
                                    <NumberFormatter prefix="R$" value={model.preco} thousandSeparator />
                                </TypographyKikcs>
                            </div>
                        </Grid.Col>
                    </Grid>
                </CardKicks>
            </Indicator>
        </>
    )
}