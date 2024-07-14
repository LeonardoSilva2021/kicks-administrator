import { useMantineTheme } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import { CSSProperties } from "react";

export const useVariants = (
    variant: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "caption",
    isBold?: boolean,
    isUnderline?: boolean,
) => {

    switch (variant) {
        case "h1":
            return {
                fontSize: '40px',
                fontWeight: 700
            } as CSSProperties;
        case "h2":
            return {
                fontSize: '32px',
                fontWeight: 700
            } as CSSProperties;
        case "h3":
            return {
                fontSize: '24px',
                fontWeight: 600
            } as CSSProperties;
        case "h4":
            return {
                fontSize: '16px',
                fontWeight: isBold ? 600 : null,
                textDecoration: isUnderline ? 'underline' : 'none'
            } as CSSProperties;
        case "h5":
            return {
                fontSize: '14px',
                fontWeight: 500
            } as CSSProperties;
        case "h6":
            return {
                fontSize: '12px',
                fontWeight: 500
            } as CSSProperties;
        case "caption":
            return {
                fontSize: '10px',
                fontWeight: isBold ? 500 : 0,
            } as CSSProperties;
    }
}

export const useThemeQueries = () => {
    const theme = useMantineTheme();
    const isMobile = useMediaQuery(`(max-width: ${theme.breakpoints.sm})`) ?? false;

    return {
        theme,
        isMobile,
    }
} 