import React, { useState, useEffect } from 'react';
import { Link, useParams, useLocation } from 'react-router-dom';
import { connect } from 'react-redux';
import FilterIcon from '../assets/images/filter-icon.png';

const Header = (props) => {
    const [Id, setId] = useState('');
    const location = useLocation();
    const [currentpage, setCurrentPageUrl] = useState(location.pathname);

    useEffect(() => {
        setCurrentPageUrl(location.pathname);
        if (location.pathname && location.pathname !== '' && location.pathname !== '/') {
            let url = location.pathname;
            url = url.split('/');
            if (url[1] == 'workflow' || url[1] == 'matrix-view') {
                setId(url[2])
                if (url[1] == 'workflow') {
                    setCurrentPageUrl('matrix-view');
                } else if (url[1] == 'matrix-view') {
                    setCurrentPageUrl('workflow');
                }
            }
        }
    }, [location.pathname]);

    return (
        <div className="header">
            <div className="row d-flex justify-content-center align-items-center h-100">
                <div className="col-md-6">
                    <div className="head-left">
                        <h5>Procurement Workflow management </h5>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="d-flex justify-content-end align-items-center w-100 head-right">
                        <div className="filter-icon">
                            {(Id && currentpage !== '' && currentpage !== '/') && (currentpage == 'matrix-view' || currentpage == 'workflow') ?
                                <Link to={`/${currentpage}/${Id}`}>
                                    <img src={FilterIcon} alt="" />
                                </Link>
                                :
                                <img src={FilterIcon} alt="" />
                            }
                        </div>
                        <div className="dropdown search-filter">
                            <select class="form-select">
                                <option selected>Filter by</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                            </select>
                        </div>
                        <div class="input-group searchbar">
                            <input type="text" class="form-control" placeholder="Search for..." />
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

function mapStateToProps(state) {
    const { } = state.workflow;
    return {
    }
}
export default connect(mapStateToProps)(Header);