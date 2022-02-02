import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { WorkflowAction } from './../_action';
import { connect } from 'react-redux';
import { status } from './../_constants';
import newUsecase from '../assets/images/new-usecase.png';
import { useNavigate } from 'react-router';
import routes from './../Routes/routes';

const Sidebar = (props) => {
    const navigate = useNavigate()
    const [workflow, setAllWorkflow] = useState({});
    const [activeMenu, setActiveMenu] = useState('')
    const location = useLocation();

    useEffect(() => {
        props.dispatch(WorkflowAction.getAllWorkflowDetail());
        if (location.pathname === '/') {
            setActiveMenu(0)
        }
    }, []);

    useEffect(() => {
        let url = location.pathname;
        url = url.split('/');
        if (routes && routes.length > 0 && url !== '/') {
            for (let i = 0; i < routes.length; i++) {
                let routeurl = routes[i].path.split('/');
                if (routeurl[1] === url[1]) {
                    setActiveMenu(routes[i].activePage);
                }
            }
        }
    }, [location.pathname])

    useEffect(() => {
        setAllWorkflow(props.workflow_all_data);
    }, [props.workflow_all_detail_status === status.SUCCESS]);

    const displayWorkflow = () => {
        let list = [];
        if (workflow && workflow.length > 0) {
            for (let i = 0; i < workflow.length; i++) {
                let data = workflow[i];
                list.push(
                    <li key={i} onClick={() => setCurrentPage(i + 1, data.id)}><span className={activeMenu == i + 1 ? "active" : ''}>{data.name}</span></li>
                );
            }
        }
        return list;
    }

    const setCurrentPage = (page, id) => {
        setActiveMenu(page);
        navigate(`/dashboard/${id}`);
    }

    return (
        <ul>
            <li onClick={() => setActiveMenu(0)}>
                <Link to="/" className={activeMenu == 0 ? "active" : ''}><img src={newUsecase} alt="" /> New Usecase</Link>
            </li>
            {displayWorkflow()}
        </ul>
    )
}

function mapStateToProps(state) {
    const { workflow_all_detail_status, workflow_all_data } = state.workflow;
    return {
        workflow_all_detail_status,
        workflow_all_data,
    }
}
export default connect(mapStateToProps)(Sidebar);