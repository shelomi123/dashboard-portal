import React from 'react';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.css';
import {Link} from 'react-router-dom';

function advertsRequest(){
    return (
        
           <div className="container">

                <div class="container p-3 my-3 bg-light">
                    
                    <div class="form-group row">
                    <h3>Industrial Placement Programme : </h3>
                            <div class="col-sm-2">
                                <select id="inputSort" class="form-control">
                                    <option selected>2020</option>
                                    <option>2021</option>
                                </select>
                            </div>
                            <h3>University of Colombo School of Computing (UCSC) </h3>
                    </div>
                    

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


                    



                    
                </div>
                

            
           </div>
        
            
        
    )
}

export default advertsRequest;