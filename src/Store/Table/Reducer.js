import * as ACTION_TYPES from './Type'

const initialState = {
    tableDataList: [],
}

const TableReducer = (state = initialState, action) => {
    switch (action.type) {
        case ACTION_TYPES.GET_TABLEDATA_SUCCESS:
            return {
                ...state,
                tableDataList: action.payload.data
            }
        case ACTION_TYPES.GET_TABLEDATA_ERROR:
            return {
                ...state,
                tableDataList: []
            }


        default: return state;
    }
}

export default TableReducer;