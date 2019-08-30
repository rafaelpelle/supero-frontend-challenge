import { BookReducerInterface } from '../../utils/interfaces'

const INITIAL_STATE: BookReducerInterface = {
	selectedBook: null,
}

export default (state: BookReducerInterface = INITIAL_STATE, action: any) => {
	switch (action.type) {
		case 'BOOK_DIALOG_OPENED':
			return { ...state, selectedBook: action.payload }
		case 'BOOK_DIALOG_CLOSED':
			return { ...state, selectedBook: null }
		default:
			return state
	}
}
