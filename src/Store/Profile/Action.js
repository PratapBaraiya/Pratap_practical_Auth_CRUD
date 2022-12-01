import axios from "axios"
import { API_GETUSERPROFILE, API_UPDATEUSERPROFILE } from "../../config/Api"

import * as ACTION_TYPES from './Type'

export const getUserDetail = () => dispatch => {

    return axios.get(`${API_GETUSERPROFILE}`)
        .then(res => {
            if (res.status === 200) {
                dispatch({ type: ACTION_TYPES.GET_PROFILE_SUCCESS, payload: res.data })
                return res.data
            } else {
                dispatch({ type: ACTION_TYPES.GET_PROFILE_ERROR, payload: res.data })
                return res.data
            }
        })
        .catch(err => {
            dispatch({ type: ACTION_TYPES.GET_PROFILE_ERROR, payload: err.response })
            throw err
        })
}
export const updateUserDetail = () => dispatch => {

    return axios.post(`${API_UPDATEUSERPROFILE}`)
        .then(res => {
            if (res.status === 200) {
                dispatch({ type: ACTION_TYPES.GET_PROFILE_SUCCESS, payload: res.data })
                return res.data
            } else {
                dispatch({ type: ACTION_TYPES.GET_PROFILE_ERROR, payload: res.data })
                return res.data
            }
        })
        .catch(err => {
            dispatch({ type: ACTION_TYPES.GET_PROFILE_ERROR, payload: err.response })
            throw err
        })
}

export const tableDetail = () => dispatch => {

    return axios.get(`${API_GETUSERPROFILE}`)
        .then(res => {
            if (res.status === 200) {
                dispatch({ type: ACTION_TYPES.GET_PROFILE_SUCCESS, payload: res.data })
                return res.data
            } else {
                dispatch({ type: ACTION_TYPES.GET_PROFILE_ERROR, payload: res.data })
                return res.data
            }
        })
        .catch(err => {
            dispatch({ type: ACTION_TYPES.GET_PROFILE_ERROR, payload: err.response })
            throw err
        })
}