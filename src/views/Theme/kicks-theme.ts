import { createTheme, Drawer, Grid, Loader, Pagination } from "@mantine/core";
import { RingLoader } from "./ring-loader";

export const KicksTheme = createTheme({
    fontFamily: 'Rubik, sans-serif',
    components: {
        Grid: Grid.extend({
            defaultProps: {
                display: 'flex',
            },
            styles: {
                root: {
                    width: '100%',
                    height: '100%'
                }
            }
        }),
        Loader: Loader.extend({
            defaultProps: {
                loaders: {
                    ...Loader.defaultLoaders, ring: RingLoader,
                },
                type: 'ring',
            }
        }),
        Drawer: Drawer.extend({
            styles: {
                body: {
                    height: '100%'
                }
            }
        }),
        Pagination: Pagination.extend({
            defaultProps: {
                radius: 'lg',
                color: "#4A69E2",
            },
            styles: {
                root: {
                    padding: '8px',
                    borderRadius: '18px',
                    background: '#FFF',
                    boxShadow: '1px 1px 1px 1px rgba(0, 0, 0, 0.4)',
                    display: 'flex',
                    justifyContent: 'flex-end'
                },
            }
        })
    }
});