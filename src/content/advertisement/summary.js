import React from 'react';
import './ad.css';
import 'bootstrap/dist/css/bootstrap.css';
import { Link } from 'react-router-dom'
import Navbar from '../../components/navbar'
import SideBar from '../../components/sidebar'

function Adverts(){
    return (
        <div>
      <Navbar />
      <SideBar />
        <div className="admin-content">
             

            <div class="container p-3 my-3 bg-light">
            <div class="form-group row">
                        <div class="col-md-3">
                            <button type="button" class="btn btn-info custom "><Link style={{color:'white'}} to="/summary" >SUMMARY</Link></button>
                        </div>
                        <div class="col-md-3">
                            <button type="button" class="btn btn-info custom"><Link style={{color:'white'}} to="/pending" >PENDING APPROVAL</Link></button>
                        </div>
                        <div class="col-md-3">
                            <button type="button" class="btn btn-info custom" ><Link style={{color:'white'}} to="/approved" >APPROVED</Link></button>
                        </div>
                        <div class="col-md-3">
                            <button type="button" class="btn btn-info custom"><Link style={{color:'white'}} to="/declined" >DECLINED</Link></button>
                        </div>
                    </div>
            </div>

            <div className="adverts" >
               <center>0 Ads from</center> 
               <center>50 registered companies </center>
               <center>have been received</center>
               <br></br>
               <button type="button" class="btn btn-info" style={{ background: '#01506e' }}><Link style={{color:'white'}} to="/setDeadline" >CHANGE THE DEADLINE</Link></button>
               
           </div>
    </div>
    </div>
    )
}

export default Adverts;