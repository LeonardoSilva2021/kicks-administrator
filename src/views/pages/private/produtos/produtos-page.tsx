import { HeaderMain } from "../header/header-main"
import { useProdutosPageStyles } from "./produtos-page-styles"
import { ProdutosList } from "./components/produtos-list";

export const ProdutosPage = () => {

    const classes = useProdutosPageStyles();

    return (
        <>
            <div className={classes.root}>
                <div className={classes.headerContainer}>
                    <HeaderMain />
                </div>
                <div className={classes.produtosListContainer}>
                    <ProdutosList />
                </div>
            </div>
        </>
    )
}