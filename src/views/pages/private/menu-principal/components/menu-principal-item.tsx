import { useCallback } from "react";
import { ButtonKicks } from "../../../../components/controles";
import { MenuPrincipalItemProps } from "./menu-principal-item-props";
import { EnumMenuPrincipal } from "../../../../../models/enuns/app/enum-menu-principal";
import { DashboardIcon } from "../../../../components/icons/dashboard/dashboard-icon";
import { FolderIcon } from "../../../../components/icons/folder/folder-icon";
import { DocumentIcon } from "../../../../components/icons/document/document-icon";
import { CategoryIcon } from "../../../../components/icons/category/category-icon";
import { LogoutIcon } from "../../../../components/icons/logout/logout-icon";
import { useNavigate } from "react-router-dom";

export const MenuPrincipalItem = ({
    model,
    enumMenu,
    setEnumMenu,
}: MenuPrincipalItemProps) => {

    const navigate = useNavigate();

    const swicthIconsMenu = useCallback(() => {
        switch (model.tipo) {
            case EnumMenuPrincipal.DASHBOARD:
                return <DashboardIcon fill={enumMenu === model.tipo ? '#FFF' : '#000'} />
            case EnumMenuPrincipal.PRODUCTS:
                return <FolderIcon fill={enumMenu === model.tipo ? '#FFF' : '#000'} />
            case EnumMenuPrincipal.ORDER_LIST:
                return <DocumentIcon fill={enumMenu === model.tipo ? '#FFF' : '#000'} />
            case EnumMenuPrincipal.CATEGORIES:
                return <CategoryIcon fill={enumMenu === model.tipo ? '#FFF' : '#000'} />
            case EnumMenuPrincipal.LOGOUT:
                return <LogoutIcon fill={enumMenu === model.tipo ? '#FFF' : '#000'} />
        }
    }, [enumMenu, model.tipo])

    return (
        <>
            <ButtonKicks
                radius="md"
                color={enumMenu === model.tipo ? '#4A69E2' : '#000'}
                variant={enumMenu === model.tipo ? 'filled' : 'transparent'}
                fullWidth
                onClick={() => {
                    setEnumMenu(model.tipo);
                    navigate(model.rota);
                }}
                leftSection={swicthIconsMenu()}
                display="flex"
            >
                {model.nome}
            </ButtonKicks>
        </>
    )
}