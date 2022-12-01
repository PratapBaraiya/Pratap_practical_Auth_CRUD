import axios from "axios";
import store from "../Store"
import { LOGOUT } from "../Store/Auth/Type"

export const axiosInterceptor = () => {

    const token = JSON.parse(localStorage.getItem("auth_token"));
    if (token) {
        axios.defaults.headers.common['Authorization'] = "Bearer " + token;
    }

    axios.interceptors.request.use(null, error => {
        if (error.response) {
            if (error.response.status === 401 || error.response.status === 403 || error.response.data.code === 2001) {
                store.dispatch({
                    type: LOGOUT
                })
                return Promise.reject(error)
            } else return Promise.reject(error)
        } else if (error.request) {
            let err = {
                response: {
                    data: {
                        message: "Something went wrong,Please try again later!!!"
                    }
                }
            }
            return Promise.reject(err)
        }
    })

    axios.interceptors.response.use(null, (error) => {
        if (error.response) {
            if (error.response.status === 401 || error.response.status === 403 || error.response.data.code === 2001) {
                store.dispatch({
                    type: LOGOUT
                })
                return Promise.reject(error)
            } else return Promise.reject(error)
        } else if (error.request) {
            let err = {
                response: {
                    data: {
                        message: "Something went wrong,Please try again later!!!"
                    }
                }
            }
            return Promise.reject(err)
        }
    })
}