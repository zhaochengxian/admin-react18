import { Table } from 'antd'
import { EditableCell, EditableRow } from '../components/edit-table/edit-table'

import { Notice_DefaultColumns } from '../constants'
import type { TableConfigEntity } from '../model'

const NoticeConfig = (props: TableConfigEntity) => {
    const { dataSource, handleSave } = props

    const components = {
        body: {
            row: EditableRow,
            cell: EditableCell
        }
    }
    const columns = Notice_DefaultColumns.map(col => {
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
                handleSave
            })
        }
    })
    return (
        <div>
            <Table
                components={components}
                rowClassName={() => 'editable-row'}
                bordered
                dataSource={dataSource}
                columns={columns}
                pagination={false}
                size={'middle'}
            />
        </div>
    )
}

export default NoticeConfig
