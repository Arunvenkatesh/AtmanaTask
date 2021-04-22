import jokeReducer from "./jokeReducer"


import { combineReducers } from "redux";
import { routerReducer } from "react-router-redux";

const appReducer = combineReducers({

    jokeReducer,
    routing: routerReducer
});
const rootReducer = (state, action) => {

    return appReducer(state, action);
};
export default rootReducer;