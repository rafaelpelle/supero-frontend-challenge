import axios from 'axios'

const URL = process.env.URL || 'http://ec2-52-14-83-11.us-east-2.compute.amazonaws.com'

export const axiosInstance = axios.create({
	baseURL: URL,
	timeout: 10000,
	headers: { 'Access-Control-Allow-Origin': '*' },
})
