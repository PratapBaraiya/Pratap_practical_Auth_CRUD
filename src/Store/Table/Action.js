import axios from "axios"
import { API_PRODUCTS } from "../../config/Api"

import * as ACTION_TYPES from './Type'

export const tableData = () => dispatch => {

    return axios.get(`${API_PRODUCTS}`)
        .then(res => {
            if (res.status === 200) {
                dispatch({ type: ACTION_TYPES.GET_TABLEDATA_SUCCESS, payload: res.data })
                return res.data
            } else {
                dispatch({ type: ACTION_TYPES.GET_TABLEDATA_ERROR, payload: res.data })
                return res.data
            }
        })
        .catch(err => {
            dispatch({ type: ACTION_TYPES.GET_TABLEDATA_ERROR, payload: err.response })
            throw err
        })
}
