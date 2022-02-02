import { commonFunctions } from "../_utilities";
import config from '../config';

export const WorkflowServices = {
    createNewWorkflow,
    getWorkflowDetail,
    updateWorkflowStep,
    getAllWorkflowDetail,
    updateWorkflowStage,
    getWorkflowEditDetail,
    editWorkflow,
    updateStageChecklist
}

function createNewWorkflow(data) {
    const extraHeaders = {
        "Content-Type": "application/json"
    };
    const requestoptions = commonFunctions.getRequestOptions("POST", extraHeaders, JSON.stringify(data));
    return fetch(`${config.apiUrl}/workflow`, requestoptions).then(response => response.json());
}

function getWorkflowDetail(data) {
    const extraHeaders = {
        "Content-Type": "application/json"
    };
    const requestoptions = commonFunctions.getRequestOptions("GET", extraHeaders, null);
    return fetch(`${config.apiUrl}/workflow/${data.id}/detail`, requestoptions).then(response => response.json());
}

function updateWorkflowStep(data) {
    const extraHeaders = {
        "Content-Type": "application/json"
    };
    const requestoptions = commonFunctions.getRequestOptions("POST", extraHeaders, JSON.stringify(data.step));
    return fetch(`${config.apiUrl}/step/${data.id}`, requestoptions).then(response => response.json());
}

function getAllWorkflowDetail(data) {
    const extraHeaders = {
        "Content-Type": "application/json"
    };
    const requestoptions = commonFunctions.getRequestOptions("GET", extraHeaders, null);
    return fetch(`${config.apiUrl}/workflows`, requestoptions).then(response => response.json());
}

function updateWorkflowStage(data) {
    const extraHeaders = {
        "Content-Type": "application/json"
    };
    const requestoptions = commonFunctions.getRequestOptions("POST", extraHeaders, JSON.stringify(data.stage));
    return fetch(`${config.apiUrl}/stage/${data.id}`, requestoptions).then(response => response.json());
}

function getWorkflowEditDetail(data) {
    const extraHeaders = {
        "Content-Type": "application/json"
    };
    const requestoptions = commonFunctions.getRequestOptions("GET", extraHeaders, null);
    return fetch(`${config.apiUrl}/workflow/${data.id}`, requestoptions).then(response => response.json());
}

function editWorkflow(data) {
    const extraHeaders = {
        "Content-Type": "application/json"
    };
    const requestoptions = commonFunctions.getRequestOptions("POST", extraHeaders, JSON.stringify(data));
    return fetch(`${config.apiUrl}/workflow/${data.id}`, requestoptions).then(response => response.json());
}

function updateStageChecklist(data) {
    const extraHeaders = {
        "Content-Type": "application/json"
    };
    const requestoptions = commonFunctions.getRequestOptions("POST", extraHeaders, JSON.stringify(data));
    return fetch(`${config.apiUrl}/checklist/${data.id}`, requestoptions).then(response => response.json());
}