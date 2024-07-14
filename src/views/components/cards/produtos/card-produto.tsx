import { Grid, Indicator, NumberFormatter, Tooltip } from "@mantine/core";
import { ProdutoModel } from "../../../../models/api/produtos/produto-model";
import { CardKicks } from "../../controles/card-kicks/card-kicks";
import { CarouselProduto } from "./components/carousel-produto";
import { TypographyKikcs } from "../../controles/typography-kicks/typography-kicks";

interface CardProdutoProps {
    model: ProdutoModel;
}

export const CardProduto = ({
    model,
}: CardProdutoProps) => {
    return (
        <>
                <Indicator
                    style={{
                        zIndex: 999
                    }}
                    withBorder
                    size={16}
                    offset={20}
                    color="green"
                >
                    <CardKicks>
                        <Grid>
                            <Grid.Col span={12} style={{
                                padding: '0px'
                            }}>
                                <CarouselProduto
                                    imagens={model.imagens}
                                />
                            </Grid.Col>
                            <Grid.Col
                                span={12}
                                style={{
                                    padding: '16px',
                                    display: 'flex',
                                    flexDirection: 'column'
                                }}
                            >
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