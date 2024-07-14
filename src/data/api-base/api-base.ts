import axios, { AxiosResponse } from "axios"
import { ApiBaseModel } from "../../models/app/api/api-base-model"
import { useCallback, useState } from "react";
import { ApiBaseResponseModel } from "../../models/app/api/api-base-response-model";

export const useApiBase = () => {

    const [carregando, setCarregando] = useState<boolean>(false);

    const apiBase = useCallback(async (model: ApiBaseModel) => {
        const token = localStorage.getItem('Token');

        try {
            setCarregando(true);
            const res = await axios<AxiosResponse>({
                method: model.method,
                url: model.url,
                data: model.data,
                timeout: 10000,
                headers: {
                    Authorization: model.isToken ? `bearer ${token}` : null,
                }
            })

            const retorno = {
                data: res.data,
                status: res.status,
            } as ApiBaseResponseModel

            return retorno;
        } catch (e: any) {
            const retornoErro = {
                data: e?.data,
                status: e?.response?.status,
                message: e.message,
            } as ApiBaseResponseModel
            return retornoErro;
        }
        finally {
            setCarregando(false);
        }
    }, [])

    return {
        apiBase,
        carregando,
    }
}