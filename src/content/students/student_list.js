import React from 'react';
import './students.css'
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
  } from 'reactstrap';
  import {Table,InputGroup, InputGroupAddon, InputGroupText, Input} from 'reactstrap';

function Student_list(){
    
    return (
        <div className="admin-content">
           <div className="student">
               <div className="student_list container">
                <Table hover size="sm">
                <thead>
                    <tr>
                    <th></th>
                    <th>Student Name</th>
                    <th>Registration No</th>
                    <th>Index No</th>
                    <th>Course</th>
                    <th>Email</th>
                    <th></th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <th scope="row">
                        {/* <InputGroupAddon addonType="prepend">
                        <InputGroupText> */}
                            <Input addon type="checkbox"/>
                        {/* </InputGroupText>
                        </InputGroupAddon> */}
                    
                    </th>
                    <td>R.P.T. Amanda</td>
                    <td>2017cs005</td>
                    <td>17000051</td>
                    <td>Computer Science</td>
                    <td>thiruni@gmail.com</td>
                    <td><a href="#" className="label theme-bg">View More</a></td>
                    </tr>
                    
                </tbody>
                </Table>
                </div>
                <div className="container">
                    <div className="row">
                    <div className="btn_row col-2">
                        <Button className="select-btn" color="info">Select All</Button>    
                    </div>
                    <div className="col-3 clearfix float-left">
                        <p className="selected">120/300 Selected</p>
                    </div>
                    <div className="col-2"></div>
                    <div className="btn_set col-5">    
                        <Button className="cancel2 clearfix float-right" color="danger">Cancel</Button>  
                        <Button className="upload2 clearfix float-right" color="info">Enroll</Button>
                    </div>
                    </div>
                </div>
           </div>
        </div>
    )
}

export default Student_list;