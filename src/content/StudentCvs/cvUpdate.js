import React from 'react';
import './cv.css';
import 'bootstrap/dist/css/bootstrap.css';


function cvs(){
    return (
        <div className="admin-content">
             

            <div class="container p-3 my-3 bg-light">
                    <div class="form-group row">
                        <div class="col-md-3">
                            <button type="button" class="btn btn-info custom ">SUMMARY</button>
                        </div>
                        <div class="col-md-3">
                            <button type="button" class="btn btn-info custom">PENDING TO BE APPROVED</button>
                        </div>
                        <div class="col-md-3">
                            <button type="button" class="btn btn-info custom">APPROVED</button>
                        </div>
                        <div class="col-md-3">
                            <button type="button" class="btn btn-info custom">DECLINED</button>
                        </div>
                    </div>
            </div>

            <div className="cvs" >
               <center>0/300</center> 
               <center>students have submitted </center>
               <center>the cvs</center>
               <br></br>
               <button type="button" class="btn btn-info change" >CHANGE THE DEADLINE</button>
               
           </div>
    </div>
    )
}

export default cvs;