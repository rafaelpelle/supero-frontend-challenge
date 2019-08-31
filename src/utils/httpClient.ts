import axios from 'axios'

const URL = process.env.URL || 'http://localhost:3000'

export const axiosInstance = axios.create({
	baseURL: URL,
	timeout: 10000,
	headers: { 'Access-Control-Allow-Origin': '*' },
})
