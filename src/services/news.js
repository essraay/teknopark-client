import { get } from './request'

export const getAll = () => get(`Haberlers/getall`)
export const getDetails = () => get(`Haberlers/getdetails`)
export const getById = (id) => get(`Haberlers/getbyid?id=${id}`)

