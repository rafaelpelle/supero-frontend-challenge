import * as React from 'react'
import { validCPF, validEmail, validPassword } from '../../utils/validators'
import {
	handleCPF,
	handleCellphone,
	removeWhiteSpaces,
	removeNonNumericCharacters,
} from '../../utils/stringParser'

const useState = React.useState

export function useInput(initialValue: string) {
	const [value, setValue] = useState(initialValue)
	function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
		setValue(e.target.value)
	}
	return {
		onChange: handleChange,
		value,
		error: '',
		empty: value.length < 1,
	}
}

export function usePhoneInput(initialValue: string) {
	const [phone, setPhone] = useState(initialValue)
	const [rawValue, setRawValue] = useState(initialValue)
	function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
		setPhone(handleCellphone(e.target.value))
		setRawValue(removeNonNumericCharacters(e.target.value))
	}
	return {
		onChange: handleChange,
		value: phone,
		maxLength: 15,
		rawValue,
		type: 'tel',
		empty: rawValue.length < 1,
	}
}

export function useCPFInput(initialValue: string) {
	const cpfMaxLength = 14
	const [cpf, setCpf] = useState(initialValue)
	const [rawValue, setRawValue] = useState(initialValue)
	const [error, setError] = useState('')
	function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
		const { value } = e.target
		setError('')
		setCpf(handleCPF(value))
		setRawValue(removeNonNumericCharacters(value))
		if (value.length === cpfMaxLength) {
			if (!validCPF(value)) {
				setError('Este CPF não é válido.')
			}
		}
	}
	function checkCPF(e: React.FocusEvent<HTMLInputElement>) {
		const { value } = e.target
		if (!validCPF(value)) {
			setError('Este CPF não é válido.')
		}
	}
	return {
		onChange: handleChange,
		onBlur: checkCPF,
		maxLength: cpfMaxLength,
		value: cpf,
		error,
		rawValue,
		empty: rawValue.length < 1,
	}
}

export function usePasswordInput(initialValue: string) {
	const [password, setPassword] = useState(initialValue)
	const [passwordVisible, setPasswordVisible] = React.useState(false)
	const [error, setError] = useState('')
	function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
		const { value } = e.target
		setPassword(removeWhiteSpaces(value))
		setError('')
	}
	function checkPassword(e: React.FocusEvent<HTMLInputElement>) {
		const { value } = e.target
		if (!validPassword(value)) {
			setError('A senha deve ter 8 dígitos ou mais.')
		}
	}
	function toggleVisibility() {
		setPasswordVisible(!passwordVisible)
	}
	return {
		onChange: handleChange,
		onBlur: checkPassword,
		value: password,
		type: passwordVisible ? 'text' : 'password',
		empty: password.length < 1,
		error,
		passwordVisible,
		toggleVisibility,
	}
}

export function useEmailInput(initialValue: string) {
	const [email, setEmail] = useState(initialValue)
	const [error, setError] = useState('')
	function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
		const { value } = e.target
		setError('')
		setEmail(removeWhiteSpaces(value))
	}
	function checkEmail(e: React.FocusEvent<HTMLInputElement>) {
		const { value } = e.target
		if (!validEmail(value)) {
			setError('Este e-mail é inválido.')
		}
	}
	return {
		onChange: handleChange,
		value: email,
		error,
		onBlur: checkEmail,
		empty: email.length < 1,
	}
}
