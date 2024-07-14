import { ProdutoImagemModel } from "./produto-imagem-model";
import { ProdutoTagsModel } from "./produto-tags-model";

export class ProdutoModel {
    constructor(
        public produtoId: string = '',
        public nome: string = '',
        public descricao: string = '',
        public marca: string = '',
        public sku: string = '',
        public qtdEstoque: number = 0,
        public preco: number = 0,
        public precoPromocao: number = 0,
        public imagens: Array<ProdutoImagemModel> = new Array<ProdutoImagemModel>(),
        public tags: Array<ProdutoTagsModel> = new Array<ProdutoTagsModel>(),
    ) { }
}