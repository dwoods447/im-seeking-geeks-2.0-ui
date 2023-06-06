import axios from 'axios'
import.meta.env.VITE_BASE_URI

//@ts-ignore
const axiosStatic = axios.default

const headers: Record<string, string> = {
  'Content-Type': 'application/json',
  Accept: 'application/json'
}

const defaultAxios = axiosStatic.create({
  baseURL: import.meta.env.VITE_BASE_URI,
  headers: {
    ...headers
  }
})

export default defaultAxios
