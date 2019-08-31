import { Book } from '../../utils/interfaces'

export const openBookDialog = (book: Book) => ({
	type: 'BOOK_DIALOG_OPENED',
	payload: book,
})

export const closeBookDialog = () => ({
	type: 'BOOK_DIALOG_CLOSED',
})

export const searchByTerm = (searchTerm: string) => ({
	type: 'SEARCH_TERM_CHANGED',
	payload: searchTerm,
})
