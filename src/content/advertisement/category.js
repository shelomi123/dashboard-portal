import React from 'react';
import './ad.css';
import 'bootstrap/dist/css/bootstrap.css';


function Adverts(){
    return (
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
                <h6>ADVERTISEMENT CATEGORIES</h6>




            </div>
            
            <div className="cat" style={{ height:'1cm' }}>
            <div class="col-md-6"></div>    
            <div class="col-md-2">
            <button type="button" class="btn btn-secondary">BACK</button>
            </div>
            </div>
            

        </div>
    )
}

export default Adverts;