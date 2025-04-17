import { Controller, useForm } from "react-hook-form"
import { ProdutoModel } from "../../../../models/api/produtos/produto-model";
import { useCallback, useState } from "react";
import { LoaderKicks } from "../../controles/loader-kicks/loader-kicks";
import { Grid } from "@mantine/core";
import { InputKikcs } from "../../controles/input-kicks/input-kicks";
import { AdicionarImagemProdutoCard } from "../../cards/adicionar-imagem-produto/adicionar-imagem-produto-card";
import { FormAdicionarProdutoProps } from "./form-adicionar-produto-props";
import { maskSKU } from "../../../../services/utils/mask-sku";
import { EnumMask } from "../../../../models/enuns/app/enum-mask";

export const FormAdicionarProduto = ({
    carregando,
    onSubmmit,
}: FormAdicionarProdutoProps) => {

    //STATES
    const [model, setModel] = useState<ProdutoModel>(new ProdutoModel());

    const {
        control,
        formState: {
            errors,
        },
        handleSubmit,
    } = useForm<ProdutoModel>({
        defaultValues: { ...model },

    });

    const onSubmit = useCallback(async (beforeModel: ProdutoModel) => {



    }, []);

    return (
        <>
            {carregando ? <LoaderKicks /> : null}
            <form onSubmit={handleSubmit(onSubmit)}>
                <Grid>
                    <Grid.Col span={12}>
                        <AdicionarImagemProdutoCard />
                    </Grid.Col>
                    <Grid.Col span={12}>
                        <Controller
                            name="nome"
                            control={control}
                            render={({ field }) => (
                                <InputKikcs
                                    label="Name Product"
                                    withAsterisk
                                    placeholder="Air Max 90"
                                    {...field}
                                />
                            )}
                        />
                    </Grid.Col>
                    <Grid.Col span={12}>
                        <Controller
                            name="descricao"
                            control={control}
                            render={({ field }) => (
                                <InputKikcs
                                    label="Description"
                                    placeholder="Description"
                                    {...field}
                                />
                            )}
                        />
                    </Grid.Col>
                    <Grid.Col span={4}>
                        <Controller
                            name="marca"
                            control={control}
                            render={({ field }) => (
                                <InputKikcs
                                    label="Mark"
                                    withAsterisk
                                    placeholder="Nike"
                                    {...field}
                                />
                            )}
                        />
                    </Grid.Col>
                    <Grid.Col span={8}>
                        <Controller
                            name="qtdEstoque"
                            control={control}
                            render={({ field }) => (
                                <InputKikcs
                                    label="Stock quantity"
                                    withAsterisk
                                    placeholder="1000"
                                    {...field}
                                />
                            )}
                        />
                    </Grid.Col>
                    <Grid.Col span={4}>
                        <Controller
                            name="sku"
                            control={control}
                            render={({ field }) => (
                                <InputKikcs
                                    label="SKU Serial"
                                    withAsterisk
                                    placeholder={maskSKU('AB000000')}
                                    {...field}
                                />
                            )}
                        />
                    </Grid.Col>
                    <Grid.Col span={4}>
                        <Controller
                            name="preco"
                            control={control}
                            render={({ field }) => (
                                <InputKikcs
                                    label="Price $"
                                    withAsterisk
                                    placeholder=""
                                    typeMask={EnumMask.PRICE}
                                    {...field}
                                />
                            )}
                        />
                    </Grid.Col>
                    <Grid.Col span={4}>
                        <Controller
                            name="precoPromocao"
                            control={control}
                            render={({ field }) => (
                                <InputKikcs
                                    label="Sale Price $"
                                    withAsterisk
                                    placeholder="Name Product"
                                    {...field}
                                />
                            )}
                        />
                    </Grid.Col>
                    <Grid.Col>
                        <Controller
                            name="nome"
                            control={control}
                            render={({ field }) => (
                                <InputKikcs
                                    placeholder="Name Product"
                                />
                            )}
                        />
                    </Grid.Col>
                </Grid>
            </form>
        </>
    )
}