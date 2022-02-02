import { combineReducers } from "redux";
import { workflow } from './workflowReducer';

let appReducers = combineReducers({
    workflow
});

const rootReducer = (state, action) => {
    return appReducers(state, action);
}

export default rootReducer;