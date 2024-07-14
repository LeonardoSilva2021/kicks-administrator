import { MenuPrincipalModel } from "../../app/menu-principal/menu-principal-model";
import { EnumMenuPrincipal } from "../../enuns/app/enum-menu-principal";

export const MenuPrincipalMock: MenuPrincipalModel[] = [
    new MenuPrincipalModel(EnumMenuPrincipal.DASHBOARD, "DASHBORD", "/dashboard"),
    new MenuPrincipalModel(EnumMenuPrincipal.PRODUCTS, "PRODUCTS", "/products"),
    new MenuPrincipalModel(EnumMenuPrincipal.ORDER_LIST, "ORDER LIST", "/order-list"),
    new MenuPrincipalModel(EnumMenuPrincipal.CATEGORIES, "CATEGORIES", "/categories"),
    new MenuPrincipalModel(EnumMenuPrincipal.LOGOUT, "LOGOUT", "/logout"),
]