import { createUseStyles } from "react-jss";

interface MenuPrincipalStylesProps {
    isMobile: boolean;
}

export const useMenuPrincipalPageStyles = createUseStyles({
    root: (props: MenuPrincipalStylesProps) => ({
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        width: '100%',
        maxWidth: props.isMobile ? '100%' : '200px',
        background: '#FFF',
        padding: '16px',
        boxShadow: props.isMobile ? 'none' : '1px 0px rgba(0, 0, 0, 0.10)',
        borderRadius: '0px',
        zIndex: 9999,
    }),
    conatinerLogo: {
        padding: '24px',
    },
    containerTop: {
        display: 'flex',
        alignItems: 'flex-start'
    },
    containerBottom: {
        display: 'flex',
        alignItems: 'flex-end'
    }
})