import React from 'react'
import { Outlet } from 'react-router-dom'
import { Layout } from 'antd'
import { LoadingOutlined } from '@ant-design/icons'

import Breadcrumbs from './components/breadcrumbs'
import NavTag from './components/navTag'
import MenuList from './components/menuList'
import UserInfo from './components/userInfo'
import Search from './components/search'

import { LOGO } from '../constants/layout'

const { Header, Content, Sider } = Layout

import './index.less'

const App = () => (
    <Layout className="layout">
        <Header className="layout-header">
            <div className="layout-header-logo">
                <img src={LOGO} />
                <NavTag />
            </div>
            <UserInfo />
        </Header>
        <Layout>
            <Sider width={200} className="layout-sider">
                <Search />
                <MenuList />
            </Sider>
            <Layout className="layout-outlet">
                <Breadcrumbs />
                <Content className="layout-outlet-content">
                    <React.Suspense fallback={<LoadingOutlined />}>
                        <Outlet />
                    </React.Suspense>
                </Content>
            </Layout>
        </Layout>
    </Layout>
)

export default App
