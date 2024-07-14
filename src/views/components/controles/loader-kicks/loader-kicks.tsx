import { Loader, LoadingOverlay } from "@mantine/core"

export const LoaderKicks = () => {
    return (
        <>
            <LoadingOverlay
                visible
                loaderProps={{
                    children: <Loader size={120} />
                }}
            />
        </>
    )
}