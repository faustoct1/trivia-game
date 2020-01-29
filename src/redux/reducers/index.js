import { createStore, combineReducers, applyMiddleware } from "redux"
import thunk from 'redux-thunk'
import quiz from './quiz'

const root = combineReducers({ quiz })
const store = createStore(root,applyMiddleware(thunk))

export default store
