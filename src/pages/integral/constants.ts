export const Notice_DefaultColumns = [
    {
        title: '积分奖励配置',
        dataIndex: 'integralConfig',
        width: '30%',
        editable: true
    }
]

export const Member_DefaultColumns = [
    {
        title: '仓名称',
        dataIndex: 'storeName',
        key: 'storeName',
        width: '25%'
    },
    {
        title: '仓Id',
        dataIndex: 'cwareStoreId',
        key: 'cwareStoreId',
        width: '25%'
    },
    {
        title: '仓等级',
        dataIndex: 'agentLevelId',
        key: 'agentLevelId',
        width: '25%'
    },
    {
        title: '上级奖励积分',
        dataIndex: 'fatherIntegral',
        key: 'fatherIntegral',
        editable: true,
        width: '25%'
    },
    {
        title: '注册代理奖励积分',
        dataIndex: 'agentIntegral',
        key: 'agentIntegral',
        editable: true,
        width: '25%'
    }
]
export const SignDefaultColumns = [
    {
        title: '签到第几天',
        dataIndex: 'day'
    },
    {
        title: '积分',
        dataIndex: 'value',
        editable: true
    }
]

export const ConfigTip = '不能为空'
