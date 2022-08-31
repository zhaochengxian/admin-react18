import React from 'react'
import { Link } from 'react-router-dom'
import type { ReactElement } from 'react'

import NoPage from '@/assets/404'

const NoMatch = (): ReactElement => {
    const noPageStyle: React.CSSProperties = {
        border: '10px solid #d8ecfe',
        padding: '20px',
        height: '100vh'
    }

    return (
        <div style={noPageStyle}>
            <h2>找不到页面!</h2>
            <img src={NoPage} />
            <p>
                <Link to="/">回到首页</Link>
            </p>
        </div>
    )
}

export default NoMatch
