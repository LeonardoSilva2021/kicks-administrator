import { TextInput } from "@mantine/core"
import { InputKikcsProps } from "./input-kicks-props"
import { useInputKicksStyles } from "./input-kicks-styles"

export const InputKikcs = ({
    placeholder,
    value,
    required,
    size,
    error,
    leftSection,
    rightSection,
    onChange,
}: InputKikcsProps) => {

    const classes = useInputKicksStyles();

    return (
        <>
            <TextInput
                className={classes.root}
                radius='md'
                size={size}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                required={required}
                error={error}
                leftSection={leftSection}
                rightSection={rightSection}
            />
        </>
    )
}