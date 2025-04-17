import { useCallback } from "react";
import { useServices } from "../../../../services/app/services";
import { DrawerKicks } from "../../controles/drawer-kicks/drawer-kicks"
import { FormAdicionarProduto } from "../../forms/adicionar-produto/form-adicionar-produto"
import { DrawerAdicionarProdutoProps } from "./drawer-adicionar-produto-props"
import { ProdutoModel } from "../../../../models/api/produtos/produto-model";
import { Grid } from "@mantine/core";
import { ButtonKicks } from "../../controles";
import { ArrowCircleIcon } from "../../icons/arrow-circle/arrow-circle-icon";
import { CheckmarkCircleIcon } from "../../icons/checkmark-circle/checkmark-circle-icon";

export const DrawerAdiconarProduto = ({
    open,
    onClose
}: DrawerAdicionarProdutoProps) => {

    //SERVICES
    const { adicionarProduto, carregando } = useServices();

    const onSubmit = useCallback(async (beforeModel: ProdutoModel) => {

    }, []);

    return (
        <>
            <DrawerKicks
                opened={open}
                title="Add Product"
                onClose={() => onClose(!open)}
                position="right"
                endComponent={
                    <>
                        <Grid>
                            <Grid.Col span={4}>
                                <ButtonKicks
                                    variant="outline"
                                    fullWidth
                                    color='#4A69E2'
                                    radius="md"
                                    leftSection={<ArrowCircleIcon fill="#4A69E2" />}
                                    onClick={() => onClose(!open)}
                                >

                                    Voltar
                                </ButtonKicks>
                            </Grid.Col>
                            <Grid.Col span={8}>
                                <ButtonKicks
                                    variant="filled"
                                    fullWidth
                                    color="#4A69E2"
                                    radius="md"
                                    leftSection={<CheckmarkCircleIcon fill="#FFF" />}
                                >
                                    Salvar
                                </ButtonKicks>
                            </Grid.Col>
                        </Grid>
                    </>
                }
            >
                <FormAdicionarProduto
                    carregando={carregando}
                    onSubmmit={onSubmit}
                />
            </DrawerKicks>
        </>
    )
}