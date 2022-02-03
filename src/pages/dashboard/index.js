import React, { useEffect, useState } from 'react';
import { WorkflowAction } from './../../_action';
import { connect } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { status } from '../../_constants';
import { useNavigate } from 'react-router';

const Dashboard = (props) => {
  const navigate = useNavigate()
  const { id } = useParams();
  const [usecase, setUsecase] = useState({});
  const [isSubmitted, setSubmitted] = useState(false);
  const [stages, setStaging] = useState([]);

  useEffect(() => {
    if (id && id != '') {
      props.dispatch(WorkflowAction.getWorkflowEditDetail({ 'id': id }));
    } else {
      setUsecase({});
      setStaging([]);
    }
  }, [id]);

  useEffect(() => {
    if (props.get_workflow_data_status === status.SUCCESS && id && id !== '') {
      if (props.get_workflow_data) {
        let data = {
          'assignTo': props.get_workflow_data.assignTo,
          'description': props.get_workflow_data.description,
          'id': props.get_workflow_data.id,
          'name': props.get_workflow_data.name,
        }
        setUsecase(data);
        setStaging(JSON.parse(JSON.stringify(props.get_workflow_data.stages)));
      }
    }
  }, [props.get_workflow_data_status])

  useEffect(() => {
    if (props.edit_workflow_status === status.SUCCESS) {
      if (props.edit_workflow_data) {
        navigate(`/workflow/${props.edit_workflow_data.id}`, { replace: true })
      }
    }
  }, [props.edit_workflow_status])

  const handleStateChange = (e) => {
    const { name, value } = e.target;
    setUsecase({ ...usecase, [name]: value });
  }

  const handleStageDetail = (e, index) => {
    const { name, value } = e.target;
    stages[index] = {
      ...stages[index],
      [name]: value
    };
    setStaging(JSON.parse(JSON.stringify(stages)));
  }

  const validateForm = (submitted) => {
    const validObj = {
      isValid: true,
      message: ""
    };
    let isValid = true;
    const retData = {
      name: validObj,
      description: validObj,
      assignTo: validObj,
      stageDetail: validObj,
      isValid
    };
    if (submitted) {
      if (!usecase.name) {
        retData.name = {
          isValid: false,
          message: "Name is required"
        };
        isValid = false;
      }
      if (!usecase.description) {
        retData.description = {
          isValid: false,
          message: "Description is required"
        };
        isValid = false;
      }
      if (!usecase.assignTo) {
        retData.assignTo = {
          isValid: false,
          message: "Assig to is required"
        };
        isValid = false;
      }
      if (stages && stages.length > 0) {
        for (let i = 0; i < stages.length; i++) {
          if (!stages[i].description || !stages[i].assignedTo || !stages[i].name) {
            retData.stageDetail = {
              isValid: false,
              message: "Stage Detail is required"
            };
            isValid = false;
          }
        }
      }
    }
    retData.isValid = isValid;
    return retData;
  }

  const submitWorkflow = () => {
    setSubmitted(true);
    const errorData = validateForm(true);
    if (errorData.isValid) {
      let sendData = {
        ...usecase,
        stages,
        id
      }
      if (id && id !== '') {
        props.dispatch(WorkflowAction.editWorkflow(sendData));
      } else {
        props.dispatch(WorkflowAction.createNewWorkflow(sendData));
      }
    }
  }

  const addMoreworkflowStage = () => {
    setStaging([...stages, { 'name': '', 'description': '', 'assignedTo': '' }]);
  }

  const removeStage = (index) => {
    stages.splice(index, 1);
    setStaging([...stages]);
  }

  const errorData = validateForm(isSubmitted)
  return (
    <div className="dashboard-content">
      <div className="basic-details">
        <h5>Basic Details</h5>
        <div className="input-group">
          <label>Usecase Name</label>
          <input className="form-control" type="text" name="name" placeholder="name of usecase" value={usecase.name} onChange={handleStateChange} />
        </div>
        {errorData && errorData.name && <span>{errorData.name.message}</span>}
        <div className="input-group">
          <label>Usecase Description</label>
          <textarea className="form-control" rows={3} name="description" placeholder="name of usecase" value={usecase.description} onChange={handleStateChange} />
        </div>
        {errorData && errorData.description && <span>{errorData.description.message}</span>}
        <div className="input-group">
          <label>Assign To</label>
          <select name="assignTo" className="assign" onChange={handleStateChange}>
            <option value="">--select--</option>
            <option value="1">abc</option>.
            <option value="2">def</option>
            <option value="2">xyz</option>
          </select>
        </div>
        {errorData && errorData.assignTo && <span>{errorData.assignTo.message}</span>}
      </div>
      <div className="workflow-detail">
        <h5>Workflow Stage Detail</h5>
      </div>
      {errorData && errorData.stageDetail && <span className='error'>{errorData.stageDetail.message}</span>}
      {stages && stages.length > 0 &&
        stages.map((val, i) => {
          return (
            <div className="add-workflow-list">
              <span>{i + 1}</span>
              <div className="workflow-type">
                <input className="form-control" type="text" name="name" placeholder="Enter your workflow type" value={val.name} onChange={(e) => handleStageDetail(e, i)} />
                <div className="close" onClick={() => removeStage(i)}><button>&#9747;</button></div>
              </div>
              <div className="description">
                <label>Description</label>
                <textarea className="form-control" rows={3} type="text" name="description" placeholder="describe task and checklist to be followed at this stage" value={val.description} onChange={(e) => handleStageDetail(e, i)} />
              </div>
              <div className="description">
                <label>Assign To</label>
                <select name="assignedTo" className="assign" value={val.assignedTo} onChange={(e) => handleStageDetail(e, i)}>
                  <option value="">--select--</option>
                  <option value="1">abc</option>
                  <option value="2">def</option>
                  <option value="3">xyz</option>
                </select>
              </div>
            </div>
          )
        })
      }
      <div className="workflow-detail">
        <button className="btn btn-primary add-workflow-btn" onClick={addMoreworkflowStage}><span>add More Workflow Stage</span></button>
      </div>

      {stages && stages.length > 0 &&
        <div className="basic-details-btn">
          <button className="btn btn-primary" onClick={submitWorkflow}>Save</button>
        </div>
      }
    </div>
  )
}

function mapStateToProps(state) {
  const { workflow_status, workflow_data, get_workflow_data_status, get_workflow_data, edit_workflow_data, edit_workflow_status } = state.workflow;
  return {
    workflow_status,
    workflow_data,
    get_workflow_data_status,
    get_workflow_data,
    edit_workflow_data,
    edit_workflow_status
  }
}
export default connect(mapStateToProps)(Dashboard);