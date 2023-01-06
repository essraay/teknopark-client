import { get } from './request'

export const getAll = () => get(`Duyurulars/getall`)
export const getDetails = () => get(`Duyurulars/getdetails`)
export const getById = (id) => get(`Duyurulars/getbyid?id=${id}`)

