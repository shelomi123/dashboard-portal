import React from 'react';
import './ad.css';
import 'bootstrap/dist/css/bootstrap.css';
import { Link } from 'react-router-dom'
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
                <form className=" search-bar"  > 
                    <i className="material-icons inline" style={{position:'absolute', margin:'0.6em 32em'}}>search</i>
                    <input type="text"  placeholder="Search.." name="search"></input>
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