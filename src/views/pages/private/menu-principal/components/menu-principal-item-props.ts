import { MenuPrincipalModel } from "../../../../../models/app/menu-principal/menu-principal-model";
import { EnumMenuPrincipal } from "../../../../../models/enuns/app/enum-menu-principal";

export interface MenuPrincipalItemProps {
    model: MenuPrincipalModel;
    enumMenu: EnumMenuPrincipal;
    setEnumMenu: React.Dispatch<React.SetStateAction<EnumMenuPrincipal>>
}