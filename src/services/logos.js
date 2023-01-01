import { get, post } from './request'

export const getAll = () => get(`Referanslars/getall`)
export const getById = (id) => post(`Referanslars/getid?id=${id}`)