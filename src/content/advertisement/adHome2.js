import React from 'react';
import './ad.css';
import 'bootstrap/dist/css/bootstrap.css';
import com from '../../assets/images/com.png';
import Navbar from '../../components/navbar'
import SideBar from '../../components/sidebar'

function adHome2(){
    return (
    <div>
      <Navbar />
      <SideBar />

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
                     

{/*------------------------------------------------------------card begin----------------------------------------------*/}
                
                <div class="row">
                    {/*card1111111111111111*/}
                    <div class="col-md-4 col-sm-6 col-12">
                        <div class="card h-80">
                            <div class="card md-3" style={{ width:'540px' }}/>
                                <div class="row no-gutters">
                                    <div class="col-md-4">
                                        <img src={com} alt="Logo" style={{ height:'3cm' , width:'3cm' }}/>
                                    </div>
                                    <div class="col-md-8">
                                        <div class="card-body">
                                            <h5 class="card-title">Card title</h5>
                                            <p class="card-text">This is a wider card with</p>
                                        </div>
                                    </div>
                                    <div class="container p-3 my-3" style={{ background: '#b2ebf2' }}>
                                        <div class="form-group row">
                                            <div class="col-md-12">
                                                <center>
                                                <button type="button" class="btn btn-secondary cardbtn">View more</button>
                                                </center>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>

{/*card2222222222222222*/}
                        <div class="col-md-4 col-sm-6 col-12">
                        <div class="card h-80">
                            <div class="card md-3" style={{ width:'540px' }}/>
                                <div class="row no-gutters">
                                    <div class="col-md-4">
                                        <img src={com} alt="Logo" style={{ height:'3cm' , width:'3cm' }}/>
                                    </div>
                                    <div class="col-md-8">
                                        <div class="card-body">
                                            <h5 class="card-title">Card title</h5>
                                            <p class="card-text">This is a wider card with</p>
                                        </div>
                                    </div>
                                    <div class="container p-3 my-3" style={{ background: '#b2ebf2' }}>
                                        <div class="form-group row">
                                            <div class="col-md-12">
                                                <center>
                                                <button type="button" class="btn btn-secondary cardbtn">View more</button>
                                                </center>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
{/*card33333 */}

<div class="col-md-4 col-sm-6 col-12">
                        <div class="card h-80">
                            <div class="card md-3" style={{ width:'540px' }}/>
                                <div class="row no-gutters">
                                    <div class="col-md-4">
                                        <img src={com} alt="Logo" style={{ height:'3cm' , width:'3cm' }}/>
                                    </div>
                                    <div class="col-md-8">
                                        <div class="card-body">
                                            <h5 class="card-title">Card title</h5>
                                            <p class="card-text">This is a wider card with</p>
                                        </div>
                                    </div>
                                    <div class="container p-3 my-3" style={{ background: '#b2ebf2' }}>
                                        <div class="form-group row">
                                            <div class="col-md-12">
                                                <center>
                                                <button type="button" class="btn btn-secondary cardbtn">View more</button>
                                                </center>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>








                    </div>

<br></br>
{/*ccccccccccaaaaaaaaaaaarrrrrrddddddd bbbbbbbbbbbbbbbbbbbrrrrrrrrrrrrrrrrr*/}

                <div class="row">
                    {/*card1111111111111111*/}
                    <div class="col-md-4 col-sm-6 col-12">
                        <div class="card h-80">
                            <div class="card md-3" style={{ width:'540px' }}/>
                                <div class="row no-gutters">
                                    <div class="col-md-4">
                                        <img src={com} alt="Logo" style={{ height:'3cm' , width:'3cm' }}/>
                                    </div>
                                    <div class="col-md-8">
                                        <div class="card-body">
                                            <h5 class="card-title">Card title</h5>
                                            <p class="card-text">This is a wider card with</p>
                                        </div>
                                    </div>
                                    <div class="container p-3 my-3" style={{ background: '#b2ebf2' }}>
                                        <div class="form-group row">
                                            <div class="col-md-12">
                                                <center>
                                                <button type="button" class="btn btn-secondary cardbtn">View more</button>
                                                </center>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>

{/*card2222222222222222*/}
                        <div class="col-md-4 col-sm-6 col-12">
                        <div class="card h-80">
                            <div class="card md-3" style={{ width:'540px' }}/>
                                <div class="row no-gutters">
                                    <div class="col-md-4">
                                        <img src={com} alt="Logo" style={{ height:'3cm' , width:'3cm' }}/>
                                    </div>
                                    <div class="col-md-8">
                                        <div class="card-body">
                                            <h5 class="card-title">Card title</h5>
                                            <p class="card-text">This is a wider card with</p>
                                        </div>
                                    </div>
                                    <div class="container p-3 my-3" style={{ background: '#b2ebf2' }}>
                                        <div class="form-group row">
                                            <div class="col-md-12">
                                                <center>
                                                <button type="button" class="btn btn-secondary cardbtn">View more</button>
                                                </center>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
{/*card33333 */}

<div class="col-md-4 col-sm-6 col-12">
                        <div class="card h-80">
                            <div class="card md-3" style={{ width:'540px' }}/>
                                <div class="row no-gutters">
                                    <div class="col-md-4">
                                        <img src={com} alt="Logo" style={{ height:'3cm' , width:'3cm' }}/>
                                    </div>
                                    <div class="col-md-8">
                                        <div class="card-body">
                                            <h5 class="card-title">Card title</h5>
                                            <p class="card-text">This is a wider card with</p>
                                        </div>
                                    </div>
                                    <div class="container p-3 my-3" style={{ background: '#b2ebf2' }}>
                                        <div class="form-group row">
                                            <div class="col-md-12">
                                                <center>
                                                <button type="button" class="btn btn-secondary cardbtn">View more</button>
                                                </center>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>








                    </div>

                    
                    
                
{/*------------------------------------------------------------card end-------------------------------------------------------*/}
               







                  
        </div>
    </div>
    </div>
    )
}

export default adHome2;