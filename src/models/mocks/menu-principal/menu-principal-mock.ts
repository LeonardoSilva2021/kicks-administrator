import { MenuPrincipalModel } from "../../app/menu-principal/menu-principal-model";
import { EnumMenuPrincipal } from "../../enuns/app/enum-menu-principal";

export const MenuPrincipalMock: MenuPrincipalModel[] = [
    new MenuPrincipalModel(EnumMenuPrincipal.DASHBOARD, "Dashboard", "/dashboard"),
    new MenuPrincipalModel(EnumMenuPrincipal.PRODUCTS, "Products", "/products"),
    new MenuPrincipalModel(EnumMenuPrincipal.ORDER_LIST, "Order List", "/order-list"),
    new MenuPrincipalModel(EnumMenuPrincipal.CATEGORIES, "Categories", "/categories"),
    new MenuPrincipalModel(EnumMenuPrincipal.LOGOUT, "Logout", "/logout"),
]