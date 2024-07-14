import { useCallback } from "react"
import { usePostAuth } from "../../data/api/auth/post-auth"
import { FormLoginModel } from "../../models/app/forms/login/form-login-model";
import { AuthModel } from "../../models/api/auth/auth-model";
import { usekicksStorage } from "./kicks-storage";
import { EnumKicksStorage } from "../../models/enuns/app/enum-kicks-storage";
import { useToastKicks } from "../../views/components/controles/toast-kicks/toast-kicks";
import { useNavigate } from 'react-router-dom'

export const useLoginService = () => {

    //AUX
    const { toastKicks } = useToastKicks();
    const navigate = useNavigate();
    const { setStorage } = usekicksStorage();

    //CHAMADAS DA API
    const { postAuth, carregando } = usePostAuth();

    const login = useCallback(async (model: FormLoginModel) => {
        const newModel = {
            email: model.email,
            senha: model.senha,
        } as AuthModel

        const res = await postAuth(newModel);

        if (res.message !== undefined)
            return toastKicks(res.message, 'error');

        setStorage(EnumKicksStorage.Token, res.data);
        setStorage(EnumKicksStorage.ManterConectado, model.continuarConectado);

        navigate('/dashboard');
        return
    }, [postAuth, toastKicks, setStorage, navigate]);


    return {
        login,
        carregando,
    }
}