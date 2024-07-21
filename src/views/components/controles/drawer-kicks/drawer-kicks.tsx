import { ActionIcon, Drawer, Text } from "@mantine/core"
import { DrawerKicksProps } from "./drawer-kicks-props"
import { useDrawerKicksStyles } from "./drawer-kicks-styles"
import { CloseIcon } from "../../icons/close/close-icon"

export const DrawerKicks = ({
    opened,
    children,
    title,
    position,
    onClose,
}: DrawerKicksProps) => {

    //AUX
    const classes = useDrawerKicksStyles();

    return (
        <>
            <Drawer
                opened={opened}
                onClose={onClose}
                withCloseButton={false}
                position={position}
            >
                <div className={classes.bodyContainer}>
                    {title && (
                        <Text>
                            {title}
                        </Text>
                    )}
                    <div className={classes.closeButton}>
                        <ActionIcon
                            variant="transparent"
                            onClick={onClose}

                        >
                            <CloseIcon />
                        </ActionIcon>
                    </div>
                    {children}
                </div>
            </Drawer>
        </>
    )
}