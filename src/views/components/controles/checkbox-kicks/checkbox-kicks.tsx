import { Checkbox } from "@mantine/core"
import { CheckboxKicksProps } from "./checkbox-kicks-props"

export const CheckboxKicks = ({
    label,
    checked,
    disabled,
    color,
    variant,
    size,
    radius,
    onClick
}: CheckboxKicksProps) => {
    return (
        <>
            <Checkbox 
                label={label}
                checked={checked}
                disabled={disabled}
                color={color}
                variant={variant}
                size={size}
                radius={radius}
                onClick={onClick}
            />
        </>
    )
}