import { Table } from 'antd'
import { EditableCell, EditableRow } from '../components/edit-table/edit-table'
import { SignDefaultColumns } from '../constants'
import { TableConfigEntity } from '../model'

const SignConfig = (props: TableConfigEntity) => {
    const { dataSource, handleSave, type } = props
    const days = dataSource[0]?.integralConfig ? JSON.parse(dataSource[0]?.integralConfig) : ''

    const arr: Array<{ day: string; value: string }> = []
    for (const day in days) {
        const obj = {
            day: day,
            value: days[day]
        }
        arr.push(obj)
    }

    const components = {
        body: {
            row: EditableRow,
            cell: EditableCell
        }
    }
    const columns = SignDefaultColumns.map(col => {
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
                dataSource={arr}
                columns={columns}
                pagination={false}
                size={'middle'}
            />
        </div>
    )
}

export default SignConfig
