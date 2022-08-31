import { useState, useEffect, ReactElement } from 'react'
import screenfull from 'screenfull'
import { message, Tooltip } from 'antd'
import { FullscreenOutlined } from '@ant-design/icons'

import './index.less'

const click = () => {
    if (!screenfull.isEnabled) {
        message.warning('you browser can not work')
        return false
    }
    screenfull.toggle()
}

const FullScreen = (): ReactElement => {
    const [isFullscreen, setIsFullscreen] = useState(false)

    const change = (): void => {
        setIsFullscreen(screenfull.isFullscreen)
    }

    useEffect(() => {
        screenfull.isEnabled && screenfull.on('change', change)
        return () => {
            screenfull.isEnabled && screenfull.off('change', change)
        }
    }, [])

    const title: string = isFullscreen ? '取消全屏' : '全屏'

    return (
        <div className="fullScreen-container">
            <Tooltip placement="bottom" title={title}>
                <FullscreenOutlined className="header-icon" onClick={click} />
            </Tooltip>
        </div>
    )
}

export default FullScreen
