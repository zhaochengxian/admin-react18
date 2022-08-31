import { ReactElement } from 'react'
import { Input } from 'antd'

import './index.scss'

const { Search } = Input

const UserInfo = (): ReactElement => {
    const onSearch = (value: string): void => console.log(value)
    return <Search placeholder="请输入菜单名称" onSearch={onSearch} style={{ width: 180 }} className="menu-search" />
}

export default UserInfo
