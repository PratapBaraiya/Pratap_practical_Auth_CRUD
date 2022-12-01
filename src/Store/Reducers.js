
import { combineReducers } from "redux"
import AuthReducer from "./Auth/Reducer"
import ProfileReducer from "./Profile/Reducer"
import TableReducer from "./Table/Reducer"


const rootReducer = combineReducers({
    auth: AuthReducer,
    user: ProfileReducer,
    tableData: TableReducer
    // user: SalesPersonReducer,
})

export default rootReducer