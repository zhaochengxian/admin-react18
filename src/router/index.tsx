import * as React from 'react'
import type { RouteObject } from 'react-router-dom'

const Layout = React.lazy(() => import('../layout/index'))
const Ceshi = React.lazy(() => import('../pages/ceshi'))
const NoMatch = React.lazy(() => import('../pages/noMatch'))

const routes: RouteObject[] = [
    {
        path: '/',
        element: <Layout />,
        children: [
            { index: true, element: <Ceshi /> },
            { path: '*', element: <NoMatch /> }
        ]
    }
]

export default routes
