import { Book } from '../../utils/interfaces'

export const openBookDialog = (book: Book) => ({
	type: 'BOOK_DIALOG_OPENED',
	payload: book,
})

export const closeBookDialog = () => ({
	type: 'BOOK_DIALOG_CLOSED',
})
