import { ReactElement, useCallback, useRef } from "react"
import { EnumMask } from "../../models/enuns/app/enum-mask";
import { IMask, IMaskInput, IMaskInputProps, useIMask } from "react-imask";

export const useMaskServices = () => {

    const refInput = useRef<HTMLElement>(null);

    const maskPrice = useCallback(() => {

        if (refInput.current) {
            return IMask(refInput.current, {
                mask: Number
            })
        }

        console.log('erro');
    }, []);

    const maskSKU = useCallback(() => {
            if (refInput.current) {
                const teste = IMask(refInput.current, {
                    mask: Number
                });
                return teste;
            }
    
            console.log('erro');
    }, []);

    const switchMask = useCallback((tipo: EnumMask | undefined) => {
        switch (tipo) {
            case EnumMask.SKU:
                return maskSKU();
            case EnumMask.PRICE:
                return maskPrice();
        }
    }, [maskPrice, maskSKU]);

    return {
        switchMask,
    }
}