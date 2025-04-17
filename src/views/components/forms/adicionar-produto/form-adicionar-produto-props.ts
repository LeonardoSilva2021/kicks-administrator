import { ProdutoModel } from "../../../../models/api/produtos/produto-model";

export interface FormAdicionarProdutoProps {
    carregando: boolean;
    onSubmmit: (beforeModel: ProdutoModel) => void;
}