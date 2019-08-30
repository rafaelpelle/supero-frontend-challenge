import { combineReducers } from 'redux'
import { RootReducerInterface } from '../../utils/interfaces'
import bookReducer from './bookReducer'

const rootReducer = combineReducers<RootReducerInterface>({
	bookReducer,
})

export default rootReducer
