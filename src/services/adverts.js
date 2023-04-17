import { get } from './request'

export const getAll = () => get(`Ilans/getall`)
export const getById = (id) => get(`Ilans/getbyid?id=${id}`)

