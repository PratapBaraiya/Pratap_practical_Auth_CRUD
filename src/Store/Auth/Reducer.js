import * as ACTION_TYPES from './Type'

const initialState = {
    message: '',
    userData: {},
    isLoggedIn: false,
}

const AuthReducer = (state = initialState, action) => {
    switch (action.type) {
        case ACTION_TYPES.LOGIN_SUCCESS:
            localStorage.setItem('auth_token', JSON.stringify(action.payload.token))
            localStorage.setItem('userData', JSON.stringify(action.payload.user))
            return {
                ...state,
                message: action.payload.message,
                userData: action.payload.data,
                isLoggedIn: true,
                error: null
            }
        case ACTION_TYPES.LOGIN_ERROR:
            return {
                ...state,
                message: action.payload.message,
                isLoggedIn: false,
                // error: action.payload.data
            }

        case ACTION_TYPES.LOGOUT:
        case ACTION_TYPES.AUTHENTICATE_FAILED:
            localStorage.clear();
            return {
                ...state,
                isLoggedIn: false,
                userData: {}
            }

        case ACTION_TYPES.AUTHENTICATE_USER:
            return {
                ...state,
                isLoggedIn: true,
                user: action.payload,
                error: null
            }

        default:
            return state
    }
}

export default AuthReducer