import { FC, ReactNode } from "react";
import { useMainPageStyles } from "./main-page-styles";
import { MenuPrincipalPage } from "../menu-principal/menu-principal-page";
import { useThemeQueries } from "../../../Theme/theme-queries";

type Props = {
    children?: ReactNode;
}

export const MainPage: FC<Props> = ({ children }) => {

    const classes = useMainPageStyles();

    const { isMobile } = useThemeQueries();

    return (
        <>
            <div className={classes.root}>
                {!isMobile && (
                    <MenuPrincipalPage />
                )}
                {children}
            </div>
        </>
    )
}