import { createBrowserRouter, Navigate, redirect, RouterProvider } from "react-router-dom"
import { LoginPage } from "../views/pages/public/login/login-page"
import { MainPage } from "../views/pages/private/main/main-page"
import { DashboardPage } from "../views/pages/private/dashboard/dashboard-page"
import { useEffect } from "react"
import { usekicksStorage } from "../services/app/kicks-storage"
import { EnumKicksStorage } from "../models/enuns/app/enum-kicks-storage"
import { isEmpty } from "../services/utils/is-empty"
import { ProdutosPage } from "../views/pages/private/produtos/produtos-page"

export const RouterApp = () => {

    const { getStorage } = usekicksStorage();

    useEffect(() => {

        const token = getStorage(EnumKicksStorage.Token);

        if (isEmpty(token))
            return () => { redirect("/login") }

    }, [getStorage]);

    const routes = createBrowserRouter([
        {
            path: '/',
            children: [
                {
                    path: '',
                    element: <LoginPage />,
                }
            ]
        },
        {
            path: '/',
            children: [
                {
                    path: 'dashboard',
                    element: (
                        <MainPage>
                            <DashboardPage />
                        </MainPage>
                    )
                },
                {
                    path: 'products',
                    element: (
                        <MainPage>
                            <ProdutosPage />
                        </MainPage>
                    )
                },
                {
                    path: 'order-list',
                    element: (
                        <MainPage>
                        </MainPage>
                    )
                },
                {
                    path: 'categories',
                    element: (
                        <MainPage>
                        </MainPage>
                    )
                },
                {
                    path: '/logout',
                    element: (
                        <Navigate to='/' replace />
                    )
                }
            ]
        }
    ]);

    return (
        <>
            <RouterProvider router={routes} />
        </>
    )
}