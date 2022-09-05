import { useState, useEffect, ReactElement } from 'react'
import { Col, Row } from 'antd'
import Ins from './components/ins'
import SignConfig from './child-config/sign-config'
import NoticeConfig from './child-config/notice-config'
import MemberConfig from './child-config/member-config'

import useHttp from '@/hooks/http'

import type { IntegralConfigEntity, MemberEntity } from './model'
import type { IntegralType } from './model'

import './index.less'

const App = (): ReactElement => {
    const { Post } = useHttp()
    const [integralList, setLintegralList] = useState<IntegralConfigEntity[]>([])
    const getIntegralList = (): void => {
        Post('/data/integral.json', {}).then((res: Array<IntegralConfigEntity>) => {
            setLintegralList(res)
        })
    }
    const editIntegral = (row: IntegralConfigEntity): void => {
        const listCurrent = integralList.map((item: IntegralConfigEntity) => {
            if (item?.id === row?.id) {
                item = row
            }
            return item
        })
        setLintegralList(listCurrent)
    }
    const dataCombination = (pre: IntegralConfigEntity, row: MemberEntity): void => {
        let integralConfigToArray: Array<MemberEntity> = JSON.parse(pre?.integralConfig)
        integralConfigToArray = integralConfigToArray.map((item: MemberEntity) => {
            if (item?.storeName === row?.storeName && item?.cwareStoreId === row?.cwareStoreId && item?.agentLevelId === row?.agentLevelId) {
                item = row
            }
            return item
        })
        editIntegral({ ...pre, integralConfig: JSON.stringify(integralConfigToArray) })
    }

    const handleSave = (row: IntegralConfigEntity & MemberEntity): void => {
        const integralType: IntegralType = row?.integralType

        switch (integralType) {
            case 'OPEN_NOTICE':
            case 'DAY_SHARE':
                editIntegral(row)
                break

            case 'DAY_SIGN':
                // 自己处理
                break
            case 'REGISTER_AGENT':
                dataCombination(integralList[3], row)
                break
            case 'UPGRADE_AGENT':
                dataCombination(integralList[4], row)
                break

            default:
                break
        }
    }

    useEffect(() => {
        getIntegralList()
    }, [])

    return (
        <>
            <div className="integral-config-page">
                <Row>
                    <Col span={12}>
                        <Ins data={integralList[0]} />
                        <NoticeConfig dataSource={[integralList[0]]} handleSave={handleSave} />
                    </Col>
                    <Col span={12}>
                        <Ins data={integralList[1]} />
                        <NoticeConfig dataSource={[integralList[1]]} handleSave={handleSave} />
                    </Col>
                </Row>

                <Ins data={integralList[3]} />
                <MemberConfig dataSource={[integralList[3]]} handleSave={handleSave} type={'REGISTER_AGENT'} />
                <Ins data={integralList[4]} />
                <MemberConfig dataSource={[integralList[4]]} handleSave={handleSave} type={'UPGRADE_AGENT'} />

                <Row>
                    <Col span={8}>
                        <Ins data={integralList[2]} />
                        <SignConfig dataSource={[integralList[2]]} handleSave={handleSave} type={'DAY_SIGN'} />
                    </Col>
                </Row>
            </div>
        </>
    )
}

export default App
