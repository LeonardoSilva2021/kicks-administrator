import { DrawerKicks } from "../../controles/drawer-kicks/drawer-kicks"
import { DrawerAdicionarProdutoProps } from "./drawer-adicionar-produto-props"

export const DrawerAdiconarProduto = ({
    open,
    onClose
}: DrawerAdicionarProdutoProps) => {

    return (
        <>
            <DrawerKicks
                opened={open}
                onClose={() => onClose(!open)}
                position="right"
            >

            </DrawerKicks>
        </>
    )
}