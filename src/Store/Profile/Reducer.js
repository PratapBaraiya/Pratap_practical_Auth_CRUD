import * as ACTION_TYPES from './Type'

const initialState = {
    userData: [],
}

const ProfileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ACTION_TYPES.GET_PROFILE_SUCCESS:
            return {
                ...state,
                userData: action.payload
            }
        case ACTION_TYPES.GET_PROFILE_ERROR:
            return {
                ...state,
                userData: []
            }


        default: return state;
    }
}

export default ProfileReducer;