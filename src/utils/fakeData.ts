import { Book } from './interfaces'

export const book1: Book = {
	title: 'Book1',
	ISBN: '0123456789123',
	author: 'Fake Author',
	publisher: 'Fake Publishing Company',
	year: '2018',
	language: 'Português',
	weight: 250,
	size: {
		height: 20,
		width: 15,
		length: 5,
	},
}

export const book2: Book = {
	title: 'Book2',
	ISBN: '3219876543210',
	author: 'Other Fake Author',
	publisher: 'Other Fake Publishing Company',
	year: '2019',
	language: 'Alemão',
	weight: 250,
	size: {
		height: 20,
		width: 15,
		length: 5,
	},
}

export const bookPage1: Book[] = [book1, book1, book1, book1, book1, book2, book2, book2, book2, book2]
export const bookPage2: Book[] = [book2, book2, book2, book2, book2, book1, book1, book1, book1, book1]
