import { get, post } from './request'

export const getAll = () => get(`Haberlers/getall`)
export const getDetails = () => get(`Haberlers/getdetails`)
export const getById = (id) => post(`Haberlers/getid?id=${id}`)

