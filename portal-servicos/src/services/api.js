import axios from 'axios'

// Base da API (aqui usamos um JSON fake)
const api = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com'
})

export default api
