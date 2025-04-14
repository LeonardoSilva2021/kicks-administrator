import { useCallback } from "react";
import { Enviroments } from "../../../config/enviroments";

import { ApiBaseModel } from "../../../models/app/api/api-base-model";
import { useApiBase } from "../../api-base/api-base";
import { ProdutoModel } from "../../../models/api/produtos/produto-model";


export const usePostProduto =  () => {
    
    const { apiBase, carregando } = useApiBase();

    const enviroments = Enviroments();

    const postProduto = useCallback(async (model: ProdutoModel) => {
        return await apiBase(new ApiBaseModel(
            'POST',
            `${enviroments.urlBase}/api/${enviroments.apiVersion}/Produto`,
            `application/json`,
            model,
            false,
        ));
    }, [apiBase, enviroments.apiVersion, enviroments.urlBase])

    return {
        postProduto,
        carregando,
    }
}

