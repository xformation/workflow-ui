import { WorkflowConstant, status } from '../_constants';
import { WorkflowServices } from '../_services';
import { alert } from '../_utilities';

export const WorkflowAction = {
    createNewWorkflow,
    getWorkflowDetail,
    getAllWorkflowDetail,
    updateWorkflowStep,
    updateWorkflowStage,
    getWorkflowEditDetail,
    editWorkflow,
    updateStageChecklist
}

function createNewWorkflow(data) {
    return dispatch => {
        dispatch(dispatchFunction({
            type: status.IN_PROGRESS,
            data: {
                workflow_data: null,
                workflow_status: status.IN_PROGRESS
            }
        }));
        WorkflowServices.createNewWorkflow(data)
            .then(
                response => {
                    if (response.code === 200) {
                        dispatch(dispatchFunction({
                            type: status.SUCCESS,
                            data: {
                                workflow_data: response.object,
                                workflow_status: status.SUCCESS
                            }
                        }));
                        alert.success(response.message);
                    } else {
                        dispatch(dispatchFunction({
                            type: status.FAILURE,
                            data: {
                                workflow_data: response,
                                workflow_status: status.FAILURE
                            }
                        }));
                        alert.error(response.message);
                    }
                },
                error => {
                    dispatch(dispatchFunction({
                        type: status.FAILURE,
                        data: {
                            workflow_data: error.message,
                            workflow_status: status.FAILURE
                        }
                    }));
                    alert.error(error.message);
                }
            );
    };
}

function getWorkflowDetail(data) {
    return dispatch => {
        dispatch(dispatchFunction({
            type: status.IN_PROGRESS,
            data: {
                workflow_detail_data: null,
                workflow_detail_status: status.IN_PROGRESS
            }
        }));
        WorkflowServices.getWorkflowDetail(data)
            .then(
                response => {
                    if (response.code === 200) {
                        dispatch(dispatchFunction({
                            type: status.SUCCESS,
                            data: {
                                workflow_detail_data: response.object,
                                workflow_detail_status: status.SUCCESS
                            }
                        }));
                    } else {
                        dispatch(dispatchFunction({
                            type: status.FAILURE,
                            data: {
                                workflow_detail_data: response,
                                workflow_detail_status: status.FAILURE
                            }
                        }));
                        alert.error(response.message);
                    }
                },
                error => {
                    dispatch(dispatchFunction({
                        type: status.FAILURE,
                        data: {
                            workflow_detail_data: error.message,
                            workflow_detail_status: status.FAILURE
                        }
                    }));
                    alert.error(error.message);
                }
            );
    };
}

function getAllWorkflowDetail(data) {
    return dispatch => {
        dispatch(dispatchFunction({
            type: status.IN_PROGRESS,
            data: {
                workflow_all_data: null,
                workflow_all_detail_status: status.IN_PROGRESS
            }
        }));
        WorkflowServices.getAllWorkflowDetail(data)
            .then(
                response => {
                    if (response.code === 200) {
                        dispatch(dispatchFunction({
                            type: status.SUCCESS,
                            data: {
                                workflow_all_data: response.object,
                                workflow_all_detail_status: status.SUCCESS
                            }
                        }));
                    } else {
                        dispatch(dispatchFunction({
                            type: status.FAILURE,
                            data: {
                                workflow_all_data: response,
                                workflow_all_detail_status: status.FAILURE
                            }
                        }));
                        alert.error(response.message);
                    }
                },
                error => {
                    dispatch(dispatchFunction({
                        type: status.FAILURE,
                        data: {
                            workflow_all_data: error.message,
                            workflow_all_detail_status: status.FAILURE
                        }
                    }));
                    alert.error(error.message);
                }
            );
    };
}

function updateWorkflowStep(data) {
    return dispatch => {
        dispatch(dispatchFunction({
            type: status.IN_PROGRESS,
            data: {
                updated_workflow_step: null,
                update_workflow_step_status: status.IN_PROGRESS
            }
        }));
        WorkflowServices.updateWorkflowStep(data)
            .then(
                response => {
                    if (response.code === 200) {
                        dispatch(dispatchFunction({
                            type: status.SUCCESS,
                            data: {
                                updated_workflow_step: response.object,
                                update_workflow_step_status: status.SUCCESS
                            }
                        }));
                        alert.success(response.message);
                    } else {
                        dispatch(dispatchFunction({
                            type: status.FAILURE,
                            data: {
                                updated_workflow_step: response,
                                update_workflow_step_status: status.FAILURE
                            }
                        }));
                        alert.error(response.message);
                    }
                },
                error => {
                    dispatch(dispatchFunction({
                        type: status.FAILURE,
                        data: {
                            updated_workflow_step: error.message,
                            update_workflow_step_status: status.FAILURE
                        }
                    }));
                    alert.error(error.message);
                }
            );
    };
}

function updateWorkflowStage(data) {
    return dispatch => {
        dispatch(dispatchFunction({
            type: status.IN_PROGRESS,
            data: {
                updated_workflow_step: null,
                update_workflow_stage_status: status.IN_PROGRESS
            }
        }));
        WorkflowServices.updateWorkflowStage(data)
            .then(
                response => {
                    if (response.code === 200) {
                        dispatch(dispatchFunction({
                            type: status.SUCCESS,
                            data: {
                                updated_workflow_step: response.object,
                                update_workflow_stage_status: status.SUCCESS
                            }
                        }));
                        alert.success(response.message);
                    } else {
                        dispatch(dispatchFunction({
                            type: status.FAILURE,
                            data: {
                                updated_workflow_step: response,
                                update_workflow_stage_status: status.FAILURE
                            }
                        }));
                        alert.error(response.message);
                    }
                },
                error => {
                    dispatch(dispatchFunction({
                        type: status.FAILURE,
                        data: {
                            updated_workflow_step: error.message,
                            update_workflow_stage_status: status.FAILURE
                        }
                    }));
                    alert.error(error.message);
                }
            );
    };
}

function getWorkflowEditDetail(data) {
    return dispatch => {
        dispatch(dispatchFunction({
            type: status.IN_PROGRESS,
            data: {
                get_workflow_data: null,
                get_workflow_data_status: status.IN_PROGRESS
            }
        }));
        WorkflowServices.getWorkflowEditDetail(data)
            .then(
                response => {
                    if (response.code === 200) {
                        dispatch(dispatchFunction({
                            type: status.SUCCESS,
                            data: {
                                get_workflow_data: response.object,
                                get_workflow_data_status: status.SUCCESS
                            }
                        }));
                    } else {
                        dispatch(dispatchFunction({
                            type: status.FAILURE,
                            data: {
                                get_workflow_data: response,
                                get_workflow_data_status: status.FAILURE
                            }
                        }));
                        alert.error(response.message);
                    }
                },
                error => {
                    dispatch(dispatchFunction({
                        type: status.FAILURE,
                        data: {
                            get_workflow_data: error.message,
                            get_workflow_data_status: status.FAILURE
                        }
                    }));
                    alert.error(error.message);
                }
            );
    };
}

function editWorkflow(data) {
    return dispatch => {
        dispatch(dispatchFunction({
            type: status.IN_PROGRESS,
            data: {
                edit_workflow_data: null,
                edit_workflow_status: status.IN_PROGRESS
            }
        }));
        WorkflowServices.editWorkflow(data)
            .then(
                response => {
                    if (response.code === 200) {
                        dispatch(dispatchFunction({
                            type: status.SUCCESS,
                            data: {
                                edit_workflow_data: response.object,
                                edit_workflow_status: status.SUCCESS
                            }
                        }));
                    } else {
                        dispatch(dispatchFunction({
                            type: status.FAILURE,
                            data: {
                                edit_workflow_data: response,
                                edit_workflow_status: status.FAILURE
                            }
                        }));
                        alert.error(response.message);
                    }
                },
                error => {
                    dispatch(dispatchFunction({
                        type: status.FAILURE,
                        data: {
                            edit_workflow_data: error.message,
                            edit_workflow_status: status.FAILURE
                        }
                    }));
                    alert.error(error.message);
                }
            );
    };
}

function updateStageChecklist(data) {
    return dispatch => {
        dispatch(dispatchFunction({
            type: status.IN_PROGRESS,
            data: {
                update_checklist_data: null,
                update_checklist_status: status.IN_PROGRESS
            }
        }));
        WorkflowServices.updateStageChecklist(data)
            .then(
                response => {
                    if (response.code === 200) {
                        dispatch(dispatchFunction({
                            type: status.SUCCESS,
                            data: {
                                update_checklist_data: response.object,
                                update_checklist_status: status.SUCCESS
                            }
                        }));
                        alert.success(response.message)
                    } else {
                        dispatch(dispatchFunction({
                            type: status.FAILURE,
                            data: {
                                update_checklist_data: response,
                                update_checklist_status: status.FAILURE
                            }
                        }));
                        alert.error(response.message);
                    }
                },
                error => {
                    dispatch(dispatchFunction({
                        type: status.FAILURE,
                        data: {
                            update_checklist_data: error.message,
                            update_checklist_status: status.FAILURE
                        }
                    }));
                    alert.error(error.message);
                }
            );
    };
}

function dispatchFunction(data) {
    // if(data.data && data.data.code === 401){
    //     commonFunctions.onLogout();
    //     return {
    //         type: authConstants.USER_LOGOUT,
    //         data: null
    //     };
    // }
    return {
        type: data.type,
        data: data.data
    };
}