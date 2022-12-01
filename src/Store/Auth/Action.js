import axios from 'axios'
import * as ACTION_TYPES from './Type'
import { API_LOGIN, API_REGISTER } from '../../config/Api'

export const adminLogin = (data) => dispatch => {
    const config = {
        headers: {
            'content-type': 'application/json',
        },
    }
    return axios.post(`${API_LOGIN}`, data)
        .then(res => {
            console.log("🚀 ~ file: Action.js:29 ~ adminLogin ~ res", res)
            axios.defaults.headers.common['Authorization'] = `Bearer ${res.data.token}`
            if (res.status === 200) {
                dispatch({ type: ACTION_TYPES.LOGIN_SUCCESS, payload: res.data })
                return res.data
            } else {
                dispatch({ type: ACTION_TYPES.LOGIN_ERROR, payload: res.data })
                return res.data
            }
        })
        .catch(err => {
            dispatch({ type: ACTION_TYPES.LOGIN_ERROR, payload: err.response })
            throw err
        })
}

export const register = (data) => dispatch => {

    return axios.post(`${API_REGISTER}`, data)
        .then(res => {
            if (res.data.succeeded === true) {
                dispatch({ type: ACTION_TYPES.REGISTER_SUCCESS, payload: res.data })
                return res.data
            } else {
                dispatch({ type: ACTION_TYPES.REGISTER_ERROR, payload: res.data })
                return res.data
            }
        })
        .catch(err => {
            dispatch({ type: ACTION_TYPES.REGISTER_ERROR, payload: err.response })
            throw err
        })
}

export const authenticate = user => dispatch => {
    if (user) {
        return dispatch({ type: ACTION_TYPES.AUTHENTICATE_USER, payload: user })
    } else {
        return dispatch({ type: ACTION_TYPES.AUTHENTICATE_FAILED })
    }
}