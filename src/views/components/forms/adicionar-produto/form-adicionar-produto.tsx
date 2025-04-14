import { useForm } from "react-hook-form"
import { ProdutoModel } from "../../../../models/api/produtos/produto-model";
import { useCallback, useState } from "react";
import { useServices } from "../../../../services/app/services";
import { LoaderKicks } from "../../controles/loader-kicks/loader-kicks";

export const FormAdicionarProduto = () => {

    //SERVICES
    const { adicionarProduto, carregando } = useServices();

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

    const onSubmit = useCallback(async () => {



    }, []);


    return (
        <>
            {carregando ? <LoaderKicks /> : null}
            <form onSubmit={handleSubmit(onSubmit)}>
                
            </form>
        </>
    )
}