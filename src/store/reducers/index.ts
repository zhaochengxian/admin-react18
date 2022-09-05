import { combineReducers } from 'redux'

import loading from './loading'
import tagsView from './tagsView'
import buttonAuth from './buttonAuth'

export default combineReducers({
    loading,
    tagsView,
    buttonAuth
})
