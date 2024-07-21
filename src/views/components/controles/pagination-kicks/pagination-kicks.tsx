import { Grid, Pagination } from "@mantine/core"
import { usePaginationKicksStyles } from "./pagination-kicks-styles"
import { useThemeQueries } from "../../../Theme/theme-queries";

interface PaginationKicksProps {
    index: number;
    totalPges: number;
}

export const PaginationKicks = ({
    index,
    totalPges
}: PaginationKicksProps) => {

    //AUX
    const classes = usePaginationKicksStyles();
    const { isMobile } = useThemeQueries();

    return (
        <>

            <Grid className={classes.root}>
                <Grid.Col span={12} className={classes.paginationContainer}>
                    <Pagination
                        total={totalPges}
                        value={index}
                        siblings={isMobile ? 0 : 1}
                    />
                </Grid.Col>
            </Grid>
        </>
    )
}