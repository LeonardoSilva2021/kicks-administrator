import { Text } from "@mantine/core"
import { TypographyKikcsProps } from "./typography-kicks-props"
import { useVariants } from "../../../Theme/theme-queries"

export const TypographyKikcs = ({
    children,
    variant,
    isBold,
    isUnderline,
}: TypographyKikcsProps) => {

    const classes = useVariants(
        variant,
        isBold,
        isUnderline
    );

    return (
        <>
            <Text style={classes}>
                {children}
            </Text>
        </>
    )
}