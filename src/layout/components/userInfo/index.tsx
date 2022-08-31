import React from 'react'
import { Menu, Space, Popover } from 'antd'
import FullScreen from '@/components/FullScreen'
import { useNavigate } from 'react-router-dom'
import { CaretDownOutlined } from '@ant-design/icons'

import User_Info_Img from '@/assets/user.png'

const UserInfo = () => {
    const navigate = useNavigate()
    const loginSettingChange = (item: { key: string }) => {
        const { key } = item
        if (key === 'tmp_key-1') {
            navigate('/login')
            localStorage.clear()
            sessionStorage.clear()
        } else if (key === 'tmp_key-2') {
            console.log('修改密码')
        }
    }
    const loginSetting = (
        <Menu onClick={loginSettingChange}>
            <Menu.Item style={{ background: '#e6f7ff' }}>赵成献</Menu.Item>
            <Menu.Item>退出登录</Menu.Item>
            <Menu.Item>修改密码</Menu.Item>
        </Menu>
    )
    return (
        <div className="userinfo">
            <FullScreen />
            <Popover content={loginSetting} title="账号设置" placement="bottom">
                <Space>
                    <img src={User_Info_Img} />
                    <CaretDownOutlined />
                </Space>
            </Popover>
        </div>
    )
}

export default UserInfo
