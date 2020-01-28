import { createStore, combineReducers } from "redux"
import quiz from './quiz'

const root = combineReducers({ quiz })
const store = createStore(root)

export default store
