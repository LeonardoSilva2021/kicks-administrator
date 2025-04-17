import { DefaultIconProps } from "./default-icon-props"
import { useDefaultIconStyles } from "./default-icon-styles"

export const DefaultIcon = ({
    styles,
    fill,
    children,
    onClick,
}: DefaultIconProps) => {

    const classes = useDefaultIconStyles();

    return (
        <>
            <svg
                viewBox="0 0 26 26"
                fill={fill}
                onClick={onClick}
                style={styles}
                className={classes.icon}
            >
                {children}
            </svg>
        </>
    )
}