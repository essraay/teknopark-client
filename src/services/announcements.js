import { get, post } from './request'

export const getAll = () => get(`Duyurulars/getall`)
export const getDetails = () => get(`Duyurulars/getdetails`)
export const getById = (id) => post(`Duyurulars/getid?id=${id}`)

