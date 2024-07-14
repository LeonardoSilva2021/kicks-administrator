import { EnumMenuPrincipal } from "../../enuns/app/enum-menu-principal";

export class MenuPrincipalModel {
    constructor (
        public tipo: EnumMenuPrincipal = EnumMenuPrincipal.DASHBOARD,
        public nome: string = '',
        public rota: string = '',
    ) {}
}