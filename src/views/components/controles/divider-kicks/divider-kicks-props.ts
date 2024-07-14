import { MantineColor } from "@mantine/core";
import { ReactNode } from "react";

export interface DividerKicksProps {
    my?: 'sm' | 'xs' | 'md' | 'lg' | 'xl';
    size?: 'sm' | 'xs' | 'md' | 'lg' | 'xl';
    label?: ReactNode;
    labelPosition?: "center" | "left" | "right";
    orientation?: "horizontal" | "vertical";
    color?: MantineColor;
}