import React from 'react';
import '../../App.css';
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
                                <th>Advertisement123</th>
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

{/*///////////////////////////////////////*/}
<div class="col-md-4 col-sm-6 col-12">
                        <div class="card h-100">
                            <img src={com} alt="Logo" style={{ height:'3cm' , width:'3cm' }}/>
                            <h5 class="card-title">Nitendo Switch</h5>
                            <div class="text-center">
                                <p>2899.0000</p>
                                <p>2017-06-10 10:00:00</p>
                                <div class="container p-3 my-3" style={{ background: '#b2ebf2' }}>
                                    <div class="form-group row">
                                        <div class="col-md-4">
                                        <button type="button" class="btn btn-secondary ">SUMMARY</button>
                                        </div>
                                        <div class="col-md-4">
                                        <button type="button" class="btn btn-secondary">PENDING</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>







                    
                </div>
                

            
           </div>
        </div>
            
        
    )
}

export default Adverts;