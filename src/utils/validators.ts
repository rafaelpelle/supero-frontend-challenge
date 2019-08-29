import { removeNonNumericCharacters } from './stringParser'
import { intRegex, emailRegex } from './regex'

export const validCPF = (cpf: string): boolean => {
	cpf = removeNonNumericCharacters(cpf)
	let sum
	let remainder
	sum = 0
	if (/^(.)\1+$/.test(cpf)) {
		return false
	}
	for (let i = 1; i <= 9; i++) {
		sum = sum + parseInt(cpf.substring(i - 1, i), undefined) * (11 - i)
	}
	remainder = (sum * 10) % 11

	if (remainder === 10 || remainder === 11) {
		remainder = 0
	}
	if (remainder !== parseInt(cpf.substring(9, 10), undefined)) {
		return false
	}

	sum = 0
	for (let i = 1; i <= 10; i++) {
		sum = sum + parseInt(cpf.substring(i - 1, i), undefined) * (12 - i)
	}
	remainder = (sum * 10) % 11

	if (remainder === 10 || remainder === 11) {
		remainder = 0
	}
	if (remainder !== parseInt(cpf.substring(10, 11), undefined)) {
		return false
	}
	return true
}

export const validZipCode = (zipcode: string) => {
	if (zipcode.length === 0) {
		return null
	}
	if (zipcode.length === 8) {
		return (
			zipcode.charAt(0) +
			zipcode.charAt(1) +
			'.' +
			zipcode.charAt(2) +
			zipcode.charAt(3) +
			zipcode.charAt(4) +
			'-' +
			zipcode.charAt(5) +
			zipcode.charAt(6) +
			zipcode.charAt(7)
		)
	} else {
		return null
	}
}

export const validCNPJ = (cnpj: string) => {
	cnpj = removeNonNumericCharacters(cnpj)
	cnpj = cnpj.replace(/[^\d]+/g, '')

	if (cnpj === '') {
		return false
	}

	if (cnpj.length !== 14) {
		return false
	}
	if (/^(.)\1+$/.test(cnpj)) {
		return false
	}
	let size = cnpj.length - 2
	let numbers = cnpj.substring(0, size)
	const digits = cnpj.substring(size)
	let sum = 0
	let pos = size - 7
	for (let i = size; i >= 1; i--) {
		sum += (numbers.charAt(size - i) as any) * pos--
		if (pos < 2) {
			pos = 9
		}
	}
	let result = sum % 11 < 2 ? 0 : 11 - (sum % 11)
	if (result !== Number(digits.charAt(0))) {
		return false
	}

	size = size + 1
	numbers = cnpj.substring(0, size)
	sum = 0
	pos = size - 7
	for (let i = size; i >= 1; i--) {
		sum += (numbers.charAt(size - i) as any) * pos--
		if (pos < 2) {
			pos = 9
		}
	}
	result = sum % 11 < 2 ? 0 : 11 - (sum % 11)
	if (result !== Number(digits.charAt(1))) {
		return false
	}
	return true
}

export const validPhone = (text: string) => {
	return intRegex.test(removeNonNumericCharacters(text))
}

export const validEmail = (email: string) => {
	return emailRegex.test(email)
}

export const validPassword = (password: string): boolean => {
	return password.length >= 8
}
