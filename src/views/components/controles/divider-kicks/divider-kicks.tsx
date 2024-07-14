import { Divider } from "@mantine/core"
import { DividerKicksProps } from "./divider-kicks-props"

export const DividerKikcs = ({
    my,
    size,
    color,
    label,
    orientation,
    labelPosition,
}: DividerKicksProps) => {

    return (
        <>
            <Divider 
                my={my}
                size={size}
                color={color}
                label={label}
                orientation={orientation}
                labelPosition={labelPosition}
            />  
        </>
    )
}