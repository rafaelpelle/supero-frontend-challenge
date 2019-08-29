import { ControllerReducerInterface } from '../../utils/interfaces'

const INITIAL_STATE: ControllerReducerInterface = {
	drawerIsOpen: false,
}

export default (state: ControllerReducerInterface = INITIAL_STATE, action: any) => {
	switch (action.type) {
		case 'DRAWER_MENU_OPENED':
			return { ...state, drawerIsOpen: true }
		case 'DRAWER_MENU_CLOSED':
			return { ...state, drawerIsOpen: false }
		default:
			return state
	}
}
