import React, { useState } from 'react';
import { connect } from 'react-redux';
import newUsecase from '../../assets/images/new-usecase.png';
import designSpecsImg from '../../assets/images/design-specs-img.png';

const MatrixView = (props) => {
    
    const [activeTab, setActiveTab] = useState("Usecase")

    return (
        <div className="page-content-view">
            <div className="matrix-view-content">
                <div className="header">
                    <div className="row d-flex justify-content-center align-items-center h-100">
                        <div className="col-md-6">
                            <div className="head-left">
                                <h5><img src={newUsecase} alt="" /> Send RFQ &#62; Requirements</h5>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="d-flex justify-content-end align-items-center w-100 head-right">
                                <div class="input-group searchbar">
                                    <input type="text" class="form-control" placeholder="Search for..." />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="tabs">
                    <ul className="tab">
                        <li className={activeTab === "Usecase" ? 'active': ""} onClick={() => setActiveTab("Usecase")}>
                            <span>Usecase Development</span>
                        </li>
                        <li className={activeTab === "Design" ? 'active': ""} onClick={() => setActiveTab("Design")}>
                            <span>Design Specs</span>
                        </li>
                    </ul>
                    <div className="tabs-content">
                        {activeTab === "Usecase" &&
                            <div className="content">
                                <h6>Use Case Name: <span>Attendance of students</span></h6>
                                <h6>Actors:</h6>
                                <ul>
                                    <li>Admin</li>
                                    <li>Class teacher</li>
                                    <li>Parent</li>
                                </ul>
                                <h6>Use Case Description:</h6>
                                <p>This module will help to take attendance of Students in simple and east way.</p>
                                <h6>Triggers:</h6>
                                <ul>
                                    <li>Class teacher / Admin logs in to portal and takes attendance, saves it and automated notification in sent.</li>
                                    <li>Class teacher / Admin logs in to portal </li>
                                    <li>Class teacher / Admin logs in to portal and takes attendance,.</li>
                                    <li>Class teacher / Admin logs in to portal and takes attendance, saves it and .</li>
                                </ul>
                                <h6>Post condition:</h6>
                                <ul>
                                    <li>Class teacher / Admin logs in to</li>
                                    <li>Class teacher / Admin logs in to Class teacher / Admin logs in to</li>
                                    <li>Class teacher / Admin logs in to Class teacher / Admin logs in to Class teacher / Admin logs in to</li>
                                </ul>
                                <h6>Normal Flow:</h6>
                                <ol>
                                    <li>Class teacher / Admin logs in to</li>
                                    <li>Class teacher / Admin logs in to Class teacher / Admin logs in to</li>
                                    <li>Class teacher / Admin logs in to Class teacher / Admin logs in to Class teacher / Admin logs in to</li>
                                    <li>Class teacher / Admin logs in to</li>
                                    <li>Class teacher / Admin logs in to Class teacher / Admin logs in to</li>
                                    <li>Class teacher / Admin logs in to Class teacher / Admin logs in to Class teacher / Admin logs in to</li>
                                    <li>Class teacher / Admin logs in to</li>
                                    <li>Class teacher / Admin logs in to Class teacher / Admin logs in to</li>
                                    <li>Class teacher / Admin logs in to Class teacher / Admin logs in to Class teacher / Admin logs in to</li>
                                    <li>Class teacher / Admin logs in to</li>
                                    <li>Class teacher / Admin logs in to Class teacher / Admin logs in to</li>
                                    <li>Class teacher / Admin logs in to Class teacher / Admin logs in to Class teacher / Admin logs in to</li>
                                </ol>
                                <h6>Altermate Flow:</h6>
                                <p>9A1: Teacher wrongly marks student as absent or student come tale to school.</p>
                                <ol>
                                    <li>Class teacher / Admin logs in to</li>
                                    <li>Class teacher / Admin logs in to Class teacher / Admin logs in to</li>
                                    <li>Class teacher / Admin logs in to Class teacher / Admin logs in to Class teacher / Admin logs in to</li>
                                    <li>Class teacher / Admin logs in to</li>
                                    <li>Class teacher / Admin logs in to Class teacher / Admin logs in to</li>
                                    <li>Class teacher / Admin logs in to Class teacher / Admin logs in to Class teacher / Admin logs in to</li>
                                </ol>
                            </div>
                        }
                        {activeTab === "Design" &&
                            <div className="content">
                                <p><strong>Prototype Link:</strong> <a href="https://xd.adobe.com/view/a29133fd-8214-4aff-7293-b9a01174de5-d4a0/?fullscreen" target="_blank" >https://xd.adobe.com/view/a29133fd-8214-4aff-7293-b9a01174de5-d4a0/?fullscreen</a></p>
                                <div className="design-specs-img"><img src={designSpecsImg} alt="" /></div>
                            </div>
                        }
                    </div>
                </div>
            </div>
        </div>
    );
}

function mapStateToProps(state) {
    const { } = state.workflow;
    return {
    }
}

export default connect(mapStateToProps)(MatrixView);