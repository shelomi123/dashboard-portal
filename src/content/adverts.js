import React from 'react';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.css';
import {Link} from 'react-router-dom';

function Adverts(){
    return (
        <div className="admin-content">
           <div className="container">

                <div class="container p-3 my-3 bg-light">
                    <h5>Request advertisements</h5>
                    <Link to="/advertsRequest" className="advertsRequest" style={{ fontSize: '20px' }}>
                        click here
                    </Link>
                </div>

                <div class="container p-3 my-3 bg-light">
                    <h5>Published advertisements</h5>

                    <div class="form-group row">
                        <label for="inputSort" class="col-sm-2 col-form-label">Sort By</label>
                            <div class="col-sm-6">
                                <select id="inputSort" class="form-control">
                                    <option selected>Company</option>
                                    <option>Job Role</option>
                                </select>
                            </div>
                    </div>


                    <table class="table">
                        <thead class="table-info">
                            <tr>
                                <th>#</th>
                                <th>Company</th>
                                <th>Job Role</th>
                                <th>Advertisement</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th>1</th>
                                <td>WSO2</td>
                                <td>Software Engineer</td>
                                <td><button type="button" class="btn btn-secondary">View</button></td>
                            </tr>
                            <tr>
                                <th>2</th>
                                <td>SYSCO</td>
                                <td>Software Engineer</td>
                                <td><button type="button" class="btn btn-secondary">View</button></td>
                            </tr> 
                              
                        </tbody>
                    </table>





                    
                </div>
                

            
           </div>
        </div>
            
        
    )
}

export default Adverts;