import { Card } from "@mantine/core"
import { useCardKicksStyles } from "./card-kicks-styles";
import { CardKicksProps } from "./card-kicks-props";
import classNames from "classnames";

export const CardKicks = ({
    children,
    className,
    onClick,
}: CardKicksProps) => {

    const classes = useCardKicksStyles();

    return (
        <>
            <Card
                className={classNames(classes.root, className)}
                onClick={onClick}
            >
                {children}
            </Card>
        </>
    )
}