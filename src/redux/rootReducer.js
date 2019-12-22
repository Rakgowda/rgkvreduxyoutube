import reducer from './storeReducer'

import {combineReducers} from 'redux'
import subreducer from "./getSubcri/subReducer"

const rootReducer = combineReducers({userrequest:reducer,subreducer:subreducer})

export default rootReducer
