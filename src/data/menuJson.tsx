import { UserOutlined, AlertOutlined, ToolOutlined, PaperClipOutlined } from '@ant-design/icons'
import type { MenuEntity } from '../entity/menuEntity'
export const menuDataSource: MenuEntity[] = [
    {
        key: '1',
        icon: <AlertOutlined />,
        label: '监控系统',
        children: [
            {
                key: 'monitor',
                label: '监控系统'
            }
        ]
    },
    {
        key: '2',
        icon: <PaperClipOutlined />,
        label: '积分管理',
        children: [
            {
                key: 'integral',
                icon: <PaperClipOutlined />,
                label: '任务积分配置'
            }
        ]
    },
    {
        key: '3',
        icon: <ToolOutlined />,
        label: '运营工具',
        children: [
            {
                key: 'operate',
                icon: <ToolOutlined />,
                label: '页面自动生成配置'
            }
        ]
    },
    {
        key: '4',
        icon: <UserOutlined />,
        label: '权限管理',
        children: [
            {
                key: 'role',
                icon: <UserOutlined />,
                label: '权限管理'
            }
        ]
    }
]
