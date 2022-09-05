import React from 'react'
import { Tooltip } from 'antd'
import { QuestionCircleOutlined } from '@ant-design/icons'
interface InsEntity {
    name: string
    configMemo: string
}
interface InsEntityProps {
    data: InsEntity
}
import './index.less'

const Ins = (props: InsEntityProps) => {
    const { data } = props

    return (
        <div className="tip-left-greens ins" style={{ margin: '10px 0' }}>
            <div>
                <span className="line"></span>
                <Tooltip title={data?.configMemo}>
                    {data?.name}
                    <QuestionCircleOutlined style={{ marginLeft: '4px' }} />
                </Tooltip>
            </div>
        </div>
    )
}
export default Ins
