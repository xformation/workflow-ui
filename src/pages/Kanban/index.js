import React, { useEffect, useState } from 'react';
import { WorkflowAction } from './../../_action';
import { connect } from 'react-redux';
import { status } from '../../_constants';
import { Link, useParams } from 'react-router-dom';

const Kanban = (props) => {
    const { id } = useParams();
    const [usecaseList, setUsecaseList] = useState({});
    const [Id, setId] = useState(id);

    useEffect(() => {
        props.dispatch(WorkflowAction.getWorkflowDetail({ 'id': Id }));
    }, []);

    useEffect(() => {
        setUsecaseList(props.workflow_detail_data);
    }, [props.workflow_detail_status === status.SUCCESS])

    const displayUsecaseList = () => {
        let retData = [];
        if (usecaseList && usecaseList.stages && usecaseList.stages.length > 0) {
            for (let i = 0; i < usecaseList.stages.length; i++) {
                let row = usecaseList.stages[i];
                retData.push(
                    <div className="col-md-4 col-12">
                        <div className={i == 0 ? 'active receive-rfq-box' : i == 1 ? 'inprosseg receive-rfq-box' : 'receive-rfq-box'}>
                            <div className="receive-number">{i + 1}</div>
                            <div className="heading">
                                <h5>{row.name}</h5>
                            </div>
                            <ul>
                                {displaySteps(row.steps)}
                            </ul>
                        </div>
                    </div>
                );
            }
        }
        return retData;
    }

    const displaySteps = (step) => {
        const retStepData = [];
        if (step && step.length > 0) {
            for (let i = 0; i < step.length; i++) {
                retStepData.push(
                    <Link to="/devlopment">
                        <li className={step[i].link !== '' ? 'active' : ''}>
                            {step[i].label}
                        </li>
                    </Link>
                )
            }
        }
        return retStepData;
    }

    return (
        <div className="receive-rfq-content">
            <div className="line">
                <span className="line1"></span>
                <span className="line2"></span>
                <span className="line3"></span>
            </div>
            <div className="row">
                {displayUsecaseList()}
            </div>
        </div>
    );
}
function mapStateToProps(state) {
    const { workflow_detail_status, workflow_detail_data } = state.workflow;
    return {
        workflow_detail_status,
        workflow_detail_data,
    }
}
export default connect(mapStateToProps)(Kanban);