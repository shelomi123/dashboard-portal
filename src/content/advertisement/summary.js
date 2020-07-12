import React from 'react';
import './ad.css';
import 'bootstrap/dist/css/bootstrap.css';


function Adverts(){
    return (
        <div className="admin-content">
             

            <div class="container p-3 my-3 bg-light">
                    <div class="form-group row">
                        <div class="col-md-3">
                            <button type="button" class="btn btn-info custom ">SUMMARY</button>
                        </div>
                        <div class="col-md-3">
                            <button type="button" class="btn btn-info custom">PENDING APPROVAL</button>
                        </div>
                        <div class="col-md-3">
                            <button type="button" class="btn btn-info custom">APPROVED</button>
                        </div>
                        <div class="col-md-3">
                            <button type="button" class="btn btn-info custom">DECLINED</button>
                        </div>
                    </div>
            </div>

            <div className="adverts" >
               <center>0 Ads from</center> 
               <center>50 registered companies </center>
               <center>have been received</center>
               <br></br>
               <button type="button" class="btn btn-info" style={{ background: '#01506e' }}>CHANGE THE DEADLINE</button>
               
           </div>
    </div>
    )
}

export default Adverts;