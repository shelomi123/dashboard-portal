import React, { Component } from 'react';
import '../App.css';
import { withRouter } from 'react-router-dom';

function advertsRequest(){
    return (
        <div className="admin-content">
           <div className="advertsRequest">
               Companies
           </div>
        </div>
    )
}
export default withRouter(advertsRequest)
