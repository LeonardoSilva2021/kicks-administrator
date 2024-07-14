import { Button } from "@mantine/core"
import { ButtonKicksProps } from "./button-kicks-props"

export const ButtonKicks = ({
    variant,
    children,
    classnames,
    leftSection,
    rightSection,
    fullWidth,
    disebled,
    color,
    justifly,
    radius,
    size,
    type,
    display,
    onClick,
}: ButtonKicksProps) => {
    return (
        <>
            <Button
                size={size}
                color={color}
                radius={radius}
                variant={variant}
                justify={justifly}
                disabled={disebled}
                fullWidth={fullWidth}
                className={classnames}
                leftSection={leftSection}
                rightSection={rightSection}
                onClick={onClick}
                type={type}
                display={display}
            >
                {children}
            </Button>
        </>
    )
}