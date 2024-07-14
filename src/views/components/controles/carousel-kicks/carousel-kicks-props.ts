import { CarouselProps, CarouselStylesNames } from "@mantine/carousel";
import { CSSProperties, MantineStyleProp, MantineTheme, StylesRecord } from "@mantine/core";

export interface CarouselkicksProps {
    children?: any; 
    height?: number;
    background?: string;
    withControls?: boolean;
    draggable?: boolean;
    withIndicators?: boolean;
    style?: MantineStyleProp;
    styles?: Partial<Record<CarouselStylesNames, CSSProperties>> | ((theme: MantineTheme, props: CarouselProps, ctx: unknown) => StylesRecord<CarouselStylesNames, CSSProperties>) | undefined;
}
