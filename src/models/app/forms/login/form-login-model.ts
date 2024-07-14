export class FormLoginModel {
    constructor (
        public email: string = '',
        public senha: string = '',
        public continuarConectado: boolean = false,
    ) { }
}