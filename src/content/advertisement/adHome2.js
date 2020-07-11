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

                <br></br>
                     

{/*------------------------------------------------------------card begin-------------------------------------------------------*/}
                
                <div class="row">
                    <div class="col-md-3 col-sm-6 col-12">
                        <div class="card h-100">
                            <h1 class="card-title">BeatsX</h1>
                            <div class="text-center">
                                <p>1188.0000</p>
                                <p>2017-06-09 10:00:00</p>
                            </div>
                        </div>
                    </div>

                    <div class="col-md-4 col-sm-6 col-12">
                        <div class="card h-100">
                            {/*<img src="images/dieux/Agni.jpg" alt="Nitendo Switch"> */}
                            <h1 class="card-title">Nitendo Switch</h1>
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
                    <div class="col-md-4 col-sm-6 col-12">
                        <div class="card h-100">
                            <h1 class="card-title">iPhone 7 128GB (Jet Blakc)</h1>
                            <div class="text-center">
                                <p>6388.0000</p>
                                <p>2017-06-06 10:00:00</p>
                            </div>
                        </div>
                    </div>
                </div>
{/*------------------------------------------------------------card end-------------------------------------------------------*/}
               







                  
            </div>
                
                

            
           
       
            
    </div>
    )
}

export default Adverts;