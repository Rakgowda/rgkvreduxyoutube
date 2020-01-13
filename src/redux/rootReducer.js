import reducer from './storeReducer'

import {combineReducers} from 'redux'
import subreducer from "./getSubcri/subReducer"
import newsreducer from './getNews/newsReducer'

const rootReducer = combineReducers({userrequest:reducer,subreducer:subreducer,newsreducer:newsreducer})

export default rootReducer
