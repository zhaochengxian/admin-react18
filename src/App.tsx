import React from 'react'
import { useRoutes } from 'react-router-dom'
import routes from './router'

import './global.scss'
//11223344
function App() {
    const element = useRoutes(routes)

    return <div className="App">{element}</div>
}

export default App
