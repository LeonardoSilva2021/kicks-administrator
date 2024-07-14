import { useMemo } from "react";
import * as Yup from "yup";

export const useFormLoginValidation = () => {

    const FormLoginValidation = useMemo(() => {
        return (
            Yup.object().shape({
                email: Yup.string().email('Formato de email inválido').required('Email é obrigatório'),
                senha: Yup.string().min(6, 'A senha deve ter pelo menos 6 caracteres').required('Senha é obrigatória'),
                continuarConectado: Yup.boolean().required(),
            })
        )
    }, [])

    return {
        FormLoginValidation,
    }
}