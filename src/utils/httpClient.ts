import axios from 'axios'

const URL = process.env.URL || 'https://your-api.com'

export const axiosInstance = axios.create({
	baseURL: URL,
	timeout: 10000,
	headers: { 'Access-Control-Allow-Origin': '*' },
})
