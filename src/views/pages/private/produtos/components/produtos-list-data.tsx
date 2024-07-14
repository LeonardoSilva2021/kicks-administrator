import { Grid } from "@mantine/core";
import { ProdutoModel } from "../../../../../models/api/produtos/produto-model"
import { CardProduto } from "../../../../components/cards/produtos/card-produto";
import { useThemeQueries } from "../../../../Theme/theme-queries";

interface ProdutoListDataProps {
    list: ProdutoModel[];
}

export const ProdutosListData = ({
    list,
}: ProdutoListDataProps) => {

    const { isMobile } = useThemeQueries();

    return (
        <>
            <Grid>
                {list.map((item) => {
                    return (
                        <Grid.Col span={isMobile ? 6 : 3}>
                            <CardProduto 
                                model={item}
                            />
                        </Grid.Col>
                    )
                })}
            </Grid>
        </>
    )
}