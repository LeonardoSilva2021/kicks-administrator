import { Grid } from "@mantine/core"
import { ProdutoModel } from "../../../../../models/api/produtos/produto-model"
import { ProdutosListData } from "./produtos-list-data"
import { ButttonFloatkicks } from "../../../../components/controles/button-float-kicks/button-float-kicks"
import { PlusCircleIcon } from "../../../../components/icons/plus-circle/plus-circle-icon"
import { useState } from "react"
import { DrawerAdiconarProduto } from "../../../../components/drawer/drawer-adiconar-produto/drawer-adiconar-produto"

export const ProdutosList = () => {

    const [openCadastroProduto, setOpenCadastroProduto] = useState<boolean>(false);

    const produtos = [
        {
            produtoId: '',
            nome: 'Air Max 90',
            descricao: 'Air Max 90',
            marca: 'Nike',
            sku: '54gf5g45f',
            qtdEstoque: 1000,
            preco: 1.500,
            precoPromocao: 0,
            imagens: [
                {
                    produtoImagemId: '',
                    produtoId: '',
                    imagemUrl: 'https://sneakernews.com/wp-content/uploads/2020/09/nike-air-max-90-laser-pink-CT1887-100-7.jpg',
                    descricao: 'Imagem do produto',
                }
            ],
            tags: [
                {
                    produtoTagId: '',
                    produtoId: '',
                    nome: 'Nike',
                    descricao: 'Nike'
                }
            ]
        }
    ] as ProdutoModel[];

    return (
        <>
            <Grid>
                {/* <Grid.Col span={12}>
                    <PaginationKicks
                        index={1}
                        totalPges={10}
                    />
                </Grid.Col> */}
                <Grid.Col span={12}>
                    <ProdutosListData
                        list={produtos}
                    />
                </Grid.Col>
                <ButttonFloatkicks
                    color="#4A69E2"
                    onClick={() => setOpenCadastroProduto(!openCadastroProduto)}
                >
                    <PlusCircleIcon fill="#FFF" />
                </ButttonFloatkicks>
            </Grid>

            {openCadastroProduto && (
                <>
                    <DrawerAdiconarProduto
                        open={openCadastroProduto}
                        onClose={setOpenCadastroProduto}
                    />
                </>
            )}
        </>
    )
}