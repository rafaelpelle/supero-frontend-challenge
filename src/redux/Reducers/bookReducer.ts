import { BookReducerInterface } from '../../utils/interfaces'

const INITIAL_STATE: BookReducerInterface = {
	searchTerm: '',
	selectedBook: null,
}

export default (state: BookReducerInterface = INITIAL_STATE, action: any) => {
	switch (action.type) {
		case 'BOOK_DIALOG_OPENED':
			return { ...state, selectedBook: action.payload }
		case 'BOOK_DIALOG_CLOSED':
			return { ...state, selectedBook: null }
		case 'SEARCH_TERM_CHANGED':
			return { ...state, searchTerm: action.payload }
		default:
			return state
	}
}
