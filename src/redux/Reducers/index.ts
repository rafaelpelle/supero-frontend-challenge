import { combineReducers } from 'redux'
import { RootReducerInterface } from '../../utils/interfaces'
import ControllerReducer from './controllerReducer'

const rootReducer = combineReducers<RootReducerInterface>({
	ControllerReducer,
})

export default rootReducer
