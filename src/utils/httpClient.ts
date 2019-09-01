import axios from 'axios'

const URL = process.env.URL || 'https://api.supero.rafaelpelle.tech'

export const axiosInstance = axios.create({
	baseURL: URL,
	timeout: 10000,
	headers: { 'Access-Control-Allow-Origin': '*' },
})
