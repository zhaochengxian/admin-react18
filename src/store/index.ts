import { applyMiddleware, compose, createStore } from 'redux'
import thunkMiddleware from 'redux-thunk'
import rootReducer from './reducers'

const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const middlewares = [thunkMiddleware]

const enhancer = composeEnhancers(applyMiddleware(...middlewares))

export default function configStore() {
    const store = createStore(rootReducer, enhancer)
    return store
}
