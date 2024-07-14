import { useCallback } from "react";
import { Enviroments } from "../../../config/enviroments";
import { AuthModel } from "../../../models/api/auth/auth-model";
import { ApiBaseModel } from "../../../models/app/api/api-base-model";
import { useApiBase } from "../../api-base/api-base";


export const usePostAuth =  () => {
    
    const { apiBase, carregando } = useApiBase();

    const enviroments = Enviroments();

    const postAuth = useCallback(async (model: AuthModel) => {
        return await apiBase(new ApiBaseModel(
            'POST',
            `${enviroments.urlBase}/api/${enviroments.apiVersion}/Auth`,
            `application/json`,
            model,
            false,
        ));
    }, [apiBase, enviroments.apiVersion, enviroments.urlBase])

    return {
        postAuth,
        carregando,
    }
}

