import React from 'react';
import './students.css';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button, Form
  } from 'reactstrap';
import ReactFileReader from 'react-file-reader';

function Student_enrolling(){
    
    return (
        <div className="admin-content">
           <div className="student_enrolling">
            <p className="para">PDC has not enrolled</p>
            <p> students yet.</p>
            <Button className="enroll" onClick="#">ENROLL STUDENTS </Button>
           </div>
          
        </div>
    )
}

export default Student_enrolling;