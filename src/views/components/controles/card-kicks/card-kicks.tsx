import { Card } from "@mantine/core"
import { useCardKicksStyles } from "./card-kicks-styles";
import { CardKicksProps } from "./card-kicks-props";

export const CardKicks = ({
    children,
    onClick,
}: CardKicksProps) => {

    const classes = useCardKicksStyles();

    return (
        <>
            <Card
                className={classes.root}
                onClick={onClick}
            >
                {children}
            </Card>
        </>
    )
}