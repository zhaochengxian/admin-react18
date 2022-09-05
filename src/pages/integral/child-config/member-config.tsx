import { Table } from 'antd'
import { EditableCell, EditableRow } from '../components/edit-table/edit-table'

import { TableConfigEntity } from '../model'

const MemberConfig = (props: TableConfigEntity) => {
    const { dataSource, handleSave, type } = props
    const renderCanExchangeUser = (agentLevelId: number) => {
        switch (agentLevelId) {
            case 1:
                return '经销商'
            case 2:
                return 'V3会员'
            case 3:
                return 'V2会员'
            default:
                break
        }
    }
    const defaultColumns = [
        {
            title: '仓名称',
            dataIndex: 'storeName',
            key: 'storeName'
        },
        {
            title: '仓等级',
            dataIndex: 'agentLevelId',
            key: 'agentLevelId',
            render: (text: string, scope: any) => <span className="webkit-box-wrap line-3">{renderCanExchangeUser(scope?.agentLevelId)}</span>
        },
        {
            title: '上级奖励积分',
            dataIndex: 'fatherIntegral',
            key: 'fatherIntegral',
            editable: true
        },
        {
            title: '注册代理奖励积分',
            dataIndex: 'agentIntegral',
            key: 'agentIntegral',
            editable: true
        }
    ]

    if (type !== 'REGISTER_AGENT') {
        defaultColumns?.splice(3, 1)
        defaultColumns.push({
            title: '会员升级奖励积分',
            dataIndex: 'agentIntegral',
            key: 'agentIntegral',
            editable: true
        })
    }

    const components = {
        body: {
            row: EditableRow,
            cell: EditableCell
        }
    }

    const columns = defaultColumns.map(col => {
        if (!col.editable) {
            return col
        }

        return {
            ...col,
            onCell: (record: any) => ({
                record,
                editable: col.editable,
                dataIndex: col.dataIndex,
                title: col.title,
                handleSave,
                type
            })
        }
    })
    return (
        <div>
            <Table
                components={components}
                rowClassName={() => 'editable-row'}
                bordered
                dataSource={dataSource[0]?.integralConfig ? JSON.parse(dataSource[0]?.integralConfig) : []}
                columns={columns}
                pagination={false}
                size={'middle'}
            />
        </div>
    )
}

export default MemberConfig
