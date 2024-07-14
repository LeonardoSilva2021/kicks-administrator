import { ActionIcon, Card, CloseButton } from "@mantine/core"
import { SearchIcon } from "../../../components/icons/search/search-icon"
import { NotificationIcon } from "../../../components/icons/notification/notification-icon"
import { useState } from "react"
import { InputKikcs } from "../../../components/controles/input-kicks/input-kicks"
import { useThemeQueries } from "../../../Theme/theme-queries"
import { MenuPrincipalPage } from "../menu-principal/menu-principal-page"
import { BurgerIcon } from "../../../components/icons/burger/burger-icon"
import { useHeaderMainStyles } from "./header-main-styles"
import { DrawerKicks } from "../../../components/controles/drawer-kicks/drawer-kicks"

export const HeaderMain = () => {

    //AUX
    const classes = useHeaderMainStyles();
    const { isMobile } = useThemeQueries();

    //STATES
    const [openMenu, setOpenMenu] = useState<boolean>(false);
    const [openPesquisa, setOpenPesquisa] = useState<boolean>(false);

    return (
        <>
            <Card className={classes.root}>
                <div className={classes.containerItens}>
                    {isMobile && (
                        <>
                            {!openMenu ? (
                                <div className={classes.containerBuger}>
                                    <ActionIcon
                                        variant="transparent"
                                        onClick={() => setOpenMenu(!openMenu)}
                                    >
                                        <BurgerIcon />
                                    </ActionIcon>
                                </div>
                            ) : (
                                <DrawerKicks
                                    opened={openMenu}
                                    onClose={() => setOpenMenu(!openMenu)}
                                >
                                    <MenuPrincipalPage />
                                </DrawerKicks>
                            )}
                        </>
                    )}
                    <div className={classes.conatinerButtonsNavigate}>
                        {!openPesquisa ? (
                            <ActionIcon
                                variant="transparent"
                                onClick={() => setOpenPesquisa(!openPesquisa)}
                            >
                                <SearchIcon />
                            </ActionIcon>
                        ) : (
                            <InputKikcs
                                placeholder="Seach..."
                                leftSection={<SearchIcon />}
                                rightSection={
                                    <CloseButton
                                        aria-label="Clear input"
                                        onClick={() => setOpenPesquisa(!openPesquisa)}
                                    />
                                }
                            />
                        )}
                        <ActionIcon
                            variant="transparent"
                        >
                            <NotificationIcon />
                        </ActionIcon>
                    </div>
                </div>
            </Card>
        </>
    )
}