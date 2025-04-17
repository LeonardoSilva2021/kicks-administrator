import { ActionIcon, Drawer, Grid, Text } from "@mantine/core"
import { DrawerKicksProps } from "./drawer-kicks-props"
import { useDrawerKicksStyles } from "./drawer-kicks-styles"
import { CloseIcon } from "../../icons/close/close-icon"
import { DividerKikcs } from "../divider-kicks/divider-kicks"

export const DrawerKicks = ({
    opened,
    children,
    title,
    position,
    endComponent,
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
                <Grid className={classes.containerBody}>
                    <Grid.Col span={12} >
                        <div className={classes.containerHeader}>
                            {title && (
                                <Text
                                    className={classes.title}
                                    fw={700}
                                >
                                    {title}
                                </Text>
                            )}
                            <ActionIcon
                                variant='transparent'
                                onClick={onClose}
                            >
                                <CloseIcon />
                            </ActionIcon>
                        </div>

                        <DividerKikcs />

                    </Grid.Col>
                    <Grid.Col span={12} className={classes.childrenBody}>
                        {children}
                    </Grid.Col>
                    {endComponent && (
                        <>
                            <Grid.Col span={12} className={classes.endComponents}>
                                {endComponent}
                            </Grid.Col>
                        </>
                    )}
                </Grid>
            </Drawer>
        </>
    )
}