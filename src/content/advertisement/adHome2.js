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

            <div class="container p-3 my-3 bg-light">
                <div class="form-group row">
                    <label for="inputSort" class="col-sm-2 col-form-label"><h6>Filter By</h6> </label>
                    <div class="col-md-2">
                        <button type="button" class="btn btn-secondary btn-sm custom">Company</button>
                    </div>
                    <div class="col-md-2">
                        <button type="button" class="btn btn-secondary btn-sm custom">Category</button>
                    </div>
                    <div class="col-md-2">
                        <button type="button" class="btn btn-secondary btn-sm custom">None</button>
                    </div>
                </div>        

                <div class="search-container">
                    <form action="/action_page.php">
                        <input class="col-md-11" type="text" placeholder="Search.." name="search"></input>
                        <button type="submit">Submit</button>
                    </form>
  </div>
                     fdffffffffff   
            </div>
                
                

            
           
        </div>
            
        
    )
}

export default Adverts;