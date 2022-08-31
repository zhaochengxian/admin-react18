import { useRoutes } from 'react-router-dom'
import routes from './router'
import './styles/styles.less'
function App() {
    const element = useRoutes(routes)

    return <div className="App">{element}</div>
}

export default App
