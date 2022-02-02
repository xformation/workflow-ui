import React from 'react';
import Dashboard from "../pages/dashboard";
import WorkflowManagment from "../pages/WorkflowManagment";
import Kanban from '../pages/Kanban';
import MatrixView from '../pages/MatrixView';

const routes = [
    { path: '/', name: 'Dashboard', exact: true, element: Dashboard, activePage: 0 },
    { path: '/editworkflow/:id', exact: true, name: 'Dashboard', element: Dashboard, activePage: 0 },
    { path: '/dashboard/:id', exact: true, name: 'WorkflowManagment', element: WorkflowManagment, activePage: 1 },
    { path: '/kanban/:id', exact: true, name: 'Kanban', element: Kanban, activePage: 1 },
    { path: '/matrix-view', exact: true, name: 'MatrixView', element: MatrixView, activePage: 1 }
];

export default routes;