export const handleMoneyFormat = (value: string | number, currency: string): string => {
	if (value === undefined || value === null) {
		value = 0
	}
	const formattedValue = Number(value)
		.toFixed(2)
		.replace('.', ',')
		.replace(/(\d)(?=(\d{3})+\,)/g, '$1.')
	switch (currency) {
		case 'USD':
			return 'US$ ' + formattedValue
		case 'EUR':
			return formattedValue + ' €'
		default:
			return 'R$ ' + formattedValue
	}
}

export const handleCPF = (CPF: string): string => {
	CPF = removeNonNumericCharacters(CPF)
	const lastDigitsList = CPF.match(/..$/)
	if (!lastDigitsList) {
		return CPF
	}
	const lastDigits = lastDigitsList[0]
	return CPF.replace(/..$/, '-' + lastDigits).replace(/(\d)(?=(\d{3})+\-)/g, '$1.')
}

export const handleCNPJ = (cnpj: string): string => {
	cnpj = cnpj.replace(/\D/g, '')
	cnpj = cnpj.replace(/^(\d{2})(\d)/, '$1.$2')
	cnpj = cnpj.replace(/^(\d{2})\.(\d{3})(\d)/, '$1.$2.$3')
	cnpj = cnpj.replace(/\.(\d{3})(\d)/, '.$1/$2')
	return cnpj.replace(/(\d{4})(\d)/, '$1-$2')
}

export const removeNonNumericCharacters = (text: string): string => {
	return text.replace(/\D/g, '')
}

export const removeWhiteSpaces = (text: string): string => {
	return text.replace(/\s/g, '')
}

export const valueToPercentage = (value: number): string => {
	return value ? `${value.toLocaleString('pt-BR', { maximumFractionDigits: 2 })}%` : '0,00%'
}

export const handleCellphone = (phone: string): string => {
	phone = phone.replace(/\D/g, '')
	phone = phone.replace(/^(\d{2})(\d)/g, '($1) $2')
	return phone.replace(/(\d)(\d{4})$/, '$1-$2')
}

export const handleZipCode = (zipCode: string): string => {
	zipCode = zipCode.replace(/\D/g, '')
	return zipCode.replace(/(\d)(\d{3})$/, '$1-$2')
}

export const removeLeftZeros = (text: string): string => {
	return text !== '' ? Number(text).toString() : ''
}

export const handleDateFormat = (timestamp: string | Date): string => {
	const options = { year: 'numeric', month: 'numeric', day: 'numeric' }
	return new Date(timestamp).toLocaleDateString('pt-BR', options)
}

export const handleTimeFormat = (timestamp: string | Date): string => {
	const options = {
		year: 'numeric',
		month: 'numeric',
		day: 'numeric',
		hour: '2-digit',
		minute: '2-digit',
		second: '2-digit',
	}
	return new Date(timestamp).toLocaleTimeString('pt-BR', options)
}
