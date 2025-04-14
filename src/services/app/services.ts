import { useCallback } from "react"
import { usePostProduto } from "../../data/api/produto/post-produto";
import { ProdutoModel } from "../../models/api/produtos/produto-model";

export const useServices = () => {

    //CHAMADAS DA API
    const { postProduto, carregando: carregandoPostProduto } = usePostProduto();

    //CARREGANDO
    const carregando = carregandoPostProduto;

    //Adicionar Produto
    const adicionarProduto = useCallback(async (beforeModel: ProdutoModel) => {

    }, []);

    //Editar Produto
    const editarProduto = useCallback(async (beforeModel: ProdutoModel) => {

    }, []);

    //Deletar Produto
    const deletarProduto = useCallback(async (id: string) => {

    }, []);

    return {
        carregando,



        adicionarProduto,
        editarProduto,
        deletarProduto,
    }
}