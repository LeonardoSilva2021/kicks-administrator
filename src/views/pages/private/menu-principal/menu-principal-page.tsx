import { Card, Grid, Image } from "@mantine/core"
import Logo from '../../../../assets/Logo.png';
import { useMenuPrincipalPageStyles } from "./menu-principal-page-styles";
import { DividerKikcs } from "../../../components/controles/divider-kicks/divider-kicks";
import { MenuPrincipalMock } from "../../../../models/mocks/menu-principal/menu-principal-mock";
import { EnumMenuPrincipal } from "../../../../models/enuns/app/enum-menu-principal";
import { useState } from "react";
import { MenuPrincipalItem } from "./components/menu-principal-item";
import { useThemeQueries } from "../../../Theme/theme-queries";

export const MenuPrincipalPage = () => {

    //AUX
    const { isMobile } = useThemeQueries();
    const classes = useMenuPrincipalPageStyles({
        isMobile: isMobile,
    });

    //STATES
    const [enumMenu, setEnumMenu] = useState<EnumMenuPrincipal>(EnumMenuPrincipal.DASHBOARD);

    return (
        <>
            <Card className={classes.root}>
                <Grid className={classes.containerTop}>
                    <Grid.Col span={12}>
                        <div className={classes.conatinerLogo}>
                            <Image src={Logo} />
                        </div>
                        <DividerKikcs my='md' />
                    </Grid.Col>
                    {MenuPrincipalMock
                        .filter(x => x.tipo !== EnumMenuPrincipal.LOGOUT)
                        .map(item => (
                            <>
                                <Grid.Col span={12}>
                                    <MenuPrincipalItem
                                        model={item}
                                        enumMenu={enumMenu}
                                        setEnumMenu={setEnumMenu}
                                    />
                                </Grid.Col>
                            </>
                        ))
                    }
                </Grid>
                <Grid className={classes.containerBottom}>
                    {MenuPrincipalMock
                        .filter(x => x.tipo === EnumMenuPrincipal.LOGOUT)
                        .map(item => (
                            <>
                                <Grid.Col span={12}>
                                    <DividerKikcs my='md' />
                                    <MenuPrincipalItem
                                        model={item}
                                        enumMenu={enumMenu}
                                        setEnumMenu={setEnumMenu}
                                    />
                                </Grid.Col>
                            </>
                        ))}
                </Grid>
            </Card>
        </>
    )
}