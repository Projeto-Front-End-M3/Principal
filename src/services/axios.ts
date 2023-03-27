import axios from "axios"

export const api = axios.create({
  baseURL: 'https://api-site-loja-instrumentos-2.onrender.com',
  timeout: 8000,
})