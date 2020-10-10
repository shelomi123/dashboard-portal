import React from 'react';
import './students.css'
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
  } from 'reactstrap';
  import { Link } from 'react-router-dom'


function Student_enrolled(){
    
    return (
        <div className="admin-content">
           <div className="student_enrolled">
            <p className="para">300 Out of 300 Students</p>
            <p> have been enrolled.</p>
            {/* <Button className="enroll" style={{padding:'15px',}}>ENROLL STUDENTS</Button> */}
            <Link to='/student_csv' style={{width: "40%"}}><Button className="enroll" style={{padding:'15px',}}>ENROLL STUDENTS </Button></Link>
           </div>
        </div>
    )
}

export default Student_enrolled;