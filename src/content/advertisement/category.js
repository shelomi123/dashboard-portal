import React from 'react';
import './ad.css';
import 'bootstrap/dist/css/bootstrap.css';
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
                    <div class="col-md-9">
                        <h6>ADVERTISEMENT CATEGORIES</h6>
                    </div>
                    <div class="col-md-3">
                        <button type="button" class="btn btn-info" style={{ background: '#1a84ad' }}>Add New Category</button>
                    </div>
                </div>
            </div>

            <div class="container p-3 my-3 bg-light" style={{ height:'10cm' }}>
               
                <table class="table">
                        <thead class="table-info">
                            <tr>
                                <th>CATEGORY CODE</th>
                                <th>CATEGORY NAME</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th></th>
                                <td></td>
                            </tr>
                            
                              
                        </tbody>
                    </table>



            </div>
            
            <div className="row" style={{ height:'1cm' }}>
            <div class="col-md-10"></div>    
            <div class="col-md-2">
            <button type="button" class="btn btn-secondary">BACK</button>
            </div>
            </div>
            

        </div>
        </div>
    )
}

export default Adverts;