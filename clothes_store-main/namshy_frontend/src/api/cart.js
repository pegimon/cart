import axios from 'axios'
import {backend_url} from '../config'
import {Cookies} from 'react-cookie'
const proxy = `${backend_url}/cart`

const cookie = new Cookies()
const token = cookie.get('Auth')

export const add_cart = async ({product_id, quantity}) => {
    await axios.post(`${proxy}`, {headers: {'Authorization': token}},{product_id, quantity})
}

export const view_all_carts = async () => {
    return (await axios.get(`${proxy}`, {headers: { 'Authorization': token }})).data
}

export const view_cart = async ({_id}) => {
    return (await axios.get(`${proxy}`, {_id}, {headers: { 'Authorization': token }})).data
}

export const update_cart = async ({product_id, quantity}) => {
    return await axios.put(`${proxy}`, {product_id, quantity}, {headers: { 'Authorization': token }})
}

export const delete_cart = async ({_id}) => {
    return await axios.delete(`${proxy}`, {_id}, {headers: { 'Authorization': token }})
}

export const plus_cart = async ({_id}) => {
    return await axios.put(`${proxy}/plus`, {_id}, {headers: { 'Authorization': token }})
}

export const minus_cart = async ({_id}) => {
    return await axios.put(`${proxy}/minus`, {_id}, {headers: { 'Authorization': token }})
}