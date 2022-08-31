import { ReactElement } from 'react'
import { Menu } from 'antd'
import { menuDataSource } from '@/data/menuJson'
import { useNavigate } from 'react-router-dom'
import type { MenuProps } from 'antd'

const MenuList = (): ReactElement => {
    const navigate = useNavigate()
    const onClick: MenuProps['onClick'] = e => {
        navigate(e?.key)
    }
    return (
        <div>
            <Menu
                mode="inline"
                defaultSelectedKeys={['1-1']}
                defaultOpenKeys={['1']}
                style={{
                    height: '100%',
                    borderRight: 0
                }}
                items={menuDataSource}
                onClick={onClick}
            />
        </div>
    )
}

export default MenuList
