import React, { Suspense } from 'react';
import { BrowserRouter, Route, Routes, useParams } from 'react-router-dom';
import { connect } from 'react-redux';
import Sidebar from "./../components/_sideBar";
import Header from "./../components/_headerBar";
import routes from './../Routes/routes';

function DefaultLayout(props) {
  const createRoutes = () => {
    const retData = routes.map((route, index) => {
      return (route.element) ? (
        <Route
          key={index}
          path={route.path}
          exact={route.exact}
          name={route.name}
          element={<route.element props={props} />} />
      ) : (null);
    });
    return retData;
  };

  return (
    <div className="page-content-view">
      <div className="header-main">
        <Header props={props} />
      </div>
      <div className="page-content">
        <div className="sidebar">
          <Sidebar props={props} />
        </div>
        <Suspense fallback="loading">
          <div className="right-content">
            <Routes>
              {createRoutes()}
            </Routes>
          </div>
        </Suspense>
      </div>
    </div>
  )
}

export default DefaultLayout;
