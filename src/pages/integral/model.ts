export type IntegralType = 'OPEN_NOTICE' | 'DAY_SHARE' | 'DAY_SIGN' | 'REGISTER_AGENT' | 'UPGRADE_AGENT' | 'PICKUP_ORDER'
export interface IntegralConfigEntity {
    configContentType: string
    configMemo: string
    id: number
    integralConfig: string
    integralType: IntegralType
    moveType: number
    name: string
}

export interface MemberEntity {
    cwareStoreId: number
    storeName: string
    agentLevelId: number
    agentIntegral: number
    fatherIntegral?: number
    integralType?: string
}
export interface TableConfigEntity {
    dataSource: Array<IntegralConfigEntity>
    handleSave: (row: IntegralConfigEntity & MemberEntity) => void
    type?: string
}
