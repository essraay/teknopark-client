import { get } from './request'

export const getAll = () => get(`OrtaMenus/getall`)
export const getDetails = () => get(`OrtaMenus/getdetails`)
export const getById = (id) => get(`OrtaMenus/getid?id=${id}`)