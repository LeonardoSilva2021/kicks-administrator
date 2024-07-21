import { Button } from "@mantine/core"
import { useButtonFloatKicksStyles } from "./button-float-kicks-styles";
import { ButttonFloatkicksProps } from "./button-float-kicks-props";

export const ButttonFloatkicks = ({
    children,
    color,
    onClick,
}: ButttonFloatkicksProps) => {

    const classes = useButtonFloatKicksStyles();

    return (
        <>
            <div className={classes.root}>
                <Button
                    className={classes.button}
                    color={color}
                    onClick={onClick}
                >
                    {children}
                </Button>
            </div>
        </>
    )
}