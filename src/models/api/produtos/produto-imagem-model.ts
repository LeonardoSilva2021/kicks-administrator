export class ProdutoImagemModel {
    constructor(
        public produtoImagemId: string = '',
        public produtoId: string = '',
        public imagemUrl: string = '',
        public descricao: string = '',
    ) { }
}