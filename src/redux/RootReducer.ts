import { combineReducers } from "redux";
import AuthReducer from "../modules/auth/reducer";
import newAppInstallReducer from "../modules/gettingStarted/Reducer";
import { UserDetailsReducer } from "../modules/RegisterScreen/reducer";

const RootReducer=combineReducers({
    AuthReducer,
    newAppInstallReducer,
    UserDetailsReducer,
})

export default RootReducer