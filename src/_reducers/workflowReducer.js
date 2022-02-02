import { WorkflowConstant, status } from '../_constants';

let initialState = {};

export function workflow(state = initialState, action) {
    return {
        ...state,
        ...action.data
    };
}