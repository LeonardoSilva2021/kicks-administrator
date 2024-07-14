import { useCallback } from "react"
import { useToastKicksStyles } from "./toast-kicks-styles"
import { toast } from "react-toastify";

export const useToastKicks = () => {

    const classes = useToastKicksStyles();

    const toastKicks = useCallback((
        message: string,
        tipo: 'success' | 'info' | 'warning' | 'error'
    ) => {
        return toast(
            message,
            {
                theme: 'light',
                position: 'bottom-center',
                hideProgressBar: true,
                type: tipo,
                className: classes.root,
                autoClose: 3000
            }
        );
    }, [classes.root])

    return {
        toastKicks,
    }
}