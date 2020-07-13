import React from 'react';
import './students.css'
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
  } from 'reactstrap';


function Student_enrolled(){
    
    return (
        <div className="admin-content">
           <div className="student_enrolled">
            <p className="para">300 Out of 300 Students</p>
            <p> have been enrolled.</p>
            <Button className="enroll">ENROLL STUDENTS</Button>
           </div>
        </div>
    )
}

export default Student_enrolled;