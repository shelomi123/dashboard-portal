import React from 'react';
import './students.css';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button, Form
  } from 'reactstrap';

function Student_enrolling(){
    
    return (
        <div className="admin-content">
           <div className="student_enrolling">
            <p className="para">PDC has not enrolled</p>
            <p> students yet.</p>
            <Button className="enroll" onClick="#" style={{padding:'15px',}}>ENROLL STUDENTS </Button>
           </div>
          
        </div>
    )
}

export default Student_enrolling;