import { postJSON } from './request'

export const addForm = (data) => postJSON('FormIletisims/add', data)