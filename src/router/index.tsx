import * as React from 'react'
import type { RouteObject } from 'react-router-dom'

const Login = React.lazy(() => import('../pages/login'))
const Layout = React.lazy(() => import('../layout/index'))
const Integral = React.lazy(() => import('../pages/integral'))
const Operate = React.lazy(() => import('../pages/operate'))
const Role = React.lazy(() => import('../pages/role'))
const Monitor = React.lazy(() => import('../pages/monitor'))
const Ceshi = React.lazy(() => import('../pages/ceshi'))

const NoMatch = React.lazy(() => import('../pages/noMatch'))

const routes: RouteObject[] = [
    {
        path: '/',
        element: <Layout />,
        children: [
            { index: true, element: <Ceshi /> },
            {
                path: '/integral',
                element: <Integral />
            },
            { path: '/operate', element: <Operate /> },
            {
                path: '/role',
                element: <Role />
            },
            { path: '/monitor', element: <Monitor /> },
            { path: '*', element: <NoMatch /> }
        ]
    },
    {
        path: '/login',
        element: <Login />
    }
]

export default routes
