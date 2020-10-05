import React, { useState } from 'react'
import './students.css';
import MUIDataTable from "mui-datatables";
import {Button, Modal, Form, Col, Row} from 'react-bootstrap';
import axios from 'axios';


function Student_list2() {

  const [show_1, setShow_1] = useState(false);
  const [show_2, setShow_2] = useState(false);

  const handleClose_1 = () => setShow_1(false);
  const handleClose_2 = () => setShow_2(false);
  const handleShow_1 = () => setShow_1(true);
  const handleShow_2 = () => setShow_2(true);



    const columns = ["Student Name", "Registration No", "Index No", "Course" , "Email" , 
    {
        name: "",
        options: {
        customBodyRender: (value, tableMeta, updateValue) => {
            return (
            <Button size="sm" onClick={handleShow_1}>
                {`View more`}
            </Button>
            );
        }
        }
    }
    ]

    const data = [
    ["Joe James", "2017cs005", "17000051", "CS" , "thirunihp@gmail.com" , ""],
    ["John Walsh", "2017cs005", "17000051", "CS" , "thirunihp@gmail.com" , ""],
    ["Bob Herm", "2017cs005", "17000051", "CS" , "thirunihp@gmail.com" , ""],
    ["James Houston", "2017cs005", "17000051", "IS" , "thirunihp@gmail.com" , ""]

    ]

    const options = {
    filterType: 'checkbox',

    }

    const [validated, setValidated] = useState(false);

    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
        event.preventDefault();
        event.stopPropagation();
        }

        setValidated(true);
    };


    return(
        <div className="admin-content">
           <div className="student">
               <div className="student_list2 container-fluid">
                    <h1>REGISTERED STUDENT LIST</h1>
                    <MUIDataTable  
                    data={data} 
                    columns={columns} 
                    options={{options,
                        print : false,
                        download: false,
                    }} 
                    />

                <div>
                    
                    <Modal show={show_1} onHide={handleClose_1} >
                        <Modal.Header closeButton style={{}} >
                        <Modal.Title style={{ marginLeft: '28%', fontSize: 24, fontWeight: 'bold', fontFamily: 'TimesNewRoman', color: '#6e6b6b' }}>Student Details</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                        {/* <Form>
                            <Form.Group>
                            <div style={{ display: 'flex', alignItems: 'center' }}>
                                <Form.Label style={{ fontSize: 18, fontWeight: 'bold', fontFamily: 'TimesNewRoman', color: 'grey' }}>Student Name:</Form.Label>
                                <Form.Text style={{ fontSize: 14, fontWeight: 'bold', margin: '0px' }}>vvhjjkh</Form.Text>
                            </div>

                            <div style={{ display: 'flex', alignItems: 'center' }}>
                                <Form.Label style={{ fontSize: 18, fontWeight: 'bold', fontFamily: 'TimesNewRoman', color: 'grey' }}>Registration No:</Form.Label>
                                <Form.Text style={{ fontSize: 14, fontWeight: 'bold'}}>4546</Form.Text>
                            </div>
                            <div row style={{ display: 'flex', alignItems: 'center' }}>
                                <Form.Label style={{ fontSize: 18, fontWeight: 'bold', fontFamily: 'TimesNewRoman', color: 'grey' }}>Index No:</Form.Label>
                                <Form.Text style={{ fontSize: 14, fontWeight: 'bold'}}>hjgjh</Form.Text>
                            </div>
                            <Form.Label style={{ fontSize: 18, fontWeight: 'bold', fontFamily: 'TimesNewRoman' }}>Course:</Form.Label>
                            <Form.Text style={{ fontSize: 14, fontWeight: 'bold'}}>vbjh</Form.Text>

                            <Form.Label style={{ fontSize: 18, fontWeight: 'bold', fontFamily: 'TimesNewRoman', color: 'grey' }}>Email:</Form.Label>
                            <Form.Text style={{ fontSize: 14, fontWeight: 'bold'}}>njnjk</Form.Text>

                            <Form.Label style={{ fontSize: 18, fontWeight: 'bold', fontFamily: 'TimesNewRoman', color: 'grey' }}>Contact No:</Form.Label>
                            <Form.Text style={{ fontSize: 14, fontWeight: 'bold'}}>bhjh</Form.Text>

                            <Form.Label style={{ fontSize: 18, fontWeight: 'bold', fontFamily: 'TimesNewRoman', color: 'grey' }}>Student CV:</Form.Label>
                            <Form.Text style={{ fontSize: 14, fontWeight: 'bold'}}>vgvh</Form.Text> */}

                            {/* <Form.Label style={{ fontSize: 18, fontWeight: 'bold', fontFamily: 'TimesNewRoman', color: 'grey' }}>Fax no:</Form.Label>
                            <Form.Text style={{ fontSize: 14, fontWeight: 'bold', marginLeft: '28%' }}></Form.Text>

                            <Form.Label style={{ fontSize: 18, fontWeight: 'bold', fontFamily: 'TimesNewRoman', color: 'grey' }}>Number of employess</Form.Label>
                            <Form.Text style={{ fontSize: 14, fontWeight: 'bold', marginLeft: '28%' }}></Form.Text>

                            <Form.Label style={{ fontSize: 18, fontWeight: 'bold', fontFamily: 'TimesNewRoman', color: 'grey' }}>Number of tech leads</Form.Label>
                            <Form.Text style={{ fontSize: 14, fontWeight: 'bold', marginLeft: '28%' }}></Form.Text> */}

                            {/* </Form.Group>
                        </Form> */}
                        <Form>
                            <Form.Group as={Row} controlId="name">
                                <Form.Label column sm="3" style={{ fontSize: 17, fontWeight: 'bold', fontFamily: 'TimesNewRoman', color: 'grey' }}>
                                Name : 
                                </Form.Label>
                                <Col sm="9">
                                <Form.Control  defaultValue="Thiruni"/>
                                </Col>
                            </Form.Group>
                            <Form.Group as={Row} controlId="regno">
                                <Form.Label column sm="3" style={{ fontSize: 17, fontWeight: 'bold', fontFamily: 'TimesNewRoman', color: 'grey' }}>
                                Reg No :
                                </Form.Label>
                                <Col sm="9">
                                <Form.Control  defaultValue="2017cs001"/>
                                </Col>
                            </Form.Group>
                            <Form.Group as={Row} controlId="indexno">
                                <Form.Label column sm="3" style={{ fontSize: 17, fontWeight: 'bold', fontFamily: 'TimesNewRoman', color: 'grey' }}>
                                Index No :
                                </Form.Label>
                                <Col sm="9">
                                <Form.Control defaultValue="17000051"/>
                                </Col>
                            </Form.Group>
                            <Form.Group as={Row} controlId="degree">
                                <Form.Label column sm="3" style={{ fontSize: 17, fontWeight: 'bold', fontFamily: 'TimesNewRoman', color: 'grey' }}>
                                Degree :
                                </Form.Label>
                                <Col sm="9">
                                <Form.Control defaultValue="Computer Science"/>
                                </Col>
                            </Form.Group>
                            <Form.Group as={Row} controlId="email">
                                <Form.Label column sm="3" style={{ fontSize: 17, fontWeight: 'bold', fontFamily: 'TimesNewRoman', color: 'grey' }}>
                                Email :
                                </Form.Label>
                                <Col sm="9">
                                <Form.Control defaultValue="abc@gmail.com"/>
                                </Col>
                            </Form.Group>
                            <Form.Group as={Row} controlId="ademail">
                                <Form.Label column sm="3" style={{ fontSize: 17, fontWeight: 'bold', fontFamily: 'TimesNewRoman', color: 'grey' }}>
                                Additional Email :
                                </Form.Label>
                                <Col sm="9">
                                <Form.Control defaultValue="abc@gmail.com"/>
                                </Col>
                            </Form.Group>
                            <Form.Group as={Row} controlId="contact">
                                <Form.Label column sm="3" style={{ fontSize: 17, fontWeight: 'bold', fontFamily: 'TimesNewRoman', color: 'grey' }}>
                                Contact No:
                                </Form.Label>
                                <Col sm="9">
                                <Form.Control defaultValue="011255474"/>
                                </Col>
                            </Form.Group>
                            <Form.Group as={Row} controlId="cv">
                                <Form.Label column sm="3" style={{ fontSize: 17, fontWeight: 'bold', fontFamily: 'TimesNewRoman', color: 'grey' }}>
                                Student CV:
                                </Form.Label>
                                <Col sm="9">
                                <Form.Control  defaultValue="cv link"/>
                                </Col>
                            </Form.Group>
                        </Form>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button variant="secondary" onClick={handleClose_1}>
                                Close
                            </Button>
                            <Button variant="primary">Update & Save</Button>
                            </Modal.Footer>

                    </Modal>

                </div>

                <div className="row">
                  <div className="col-7"></div>
                    <div className="btn_set col-5">    
                        <button className="btn cancelbtn btn-danger clearfix float-right" style={{ width: '200px', marginRight: '2em' }}>Cancel</button>  
                        <button className="btn enrollbtn btn-primary clearfix float-right"  style={{ width: '200px' }} onClick={handleShow_2}>Enroll</button>
                        
                        <Modal show={show_2} onHide={handleClose_2} size="lg">
                            
                            <Modal.Header closeButton style={{}} >
                            <Modal.Title style={{ marginLeft: '35%', fontSize: 24, fontWeight: 'bold', fontFamily: 'TimesNewRoman', color: '#6e6b6b' }}>Add New Student</Modal.Title>
                            </Modal.Header>
                           
                            <Modal.Body>
                              <Form noValidate validated={validated} onSubmit={handleSubmit}>

                                <Form.Group as={Row} controlId="name">
                                    <Form.Label column sm="3" style={{ fontSize: 17, fontWeight: 'bold', fontFamily: 'TimesNewRoman', color: 'grey' }}>
                                    Name With Initials : 
                                    </Form.Label>
                                    <Col sm="9">
                                    <Form.Control type="text" required placeholder="Name with initials"/>
                                    <Form.Control.Feedback type="invalid"> Please provide the student name.</Form.Control.Feedback>
                                    </Col>
                                </Form.Group>
                                
                                <Form.Group as={Row} controlId="regno">
                                    <Form.Label column sm="3" style={{ fontSize: 17, fontWeight: 'bold', fontFamily: 'TimesNewRoman', color: 'grey' }}>
                                    Registration No :
                                    </Form.Label>
                                    <Col sm="9">
                                    <Form.Control type="text" required placeholder="2017cs001"/>
                                    <Form.Control.Feedback type="invalid"> Please provide the Registration Number.</Form.Control.Feedback>
                                    </Col>
                                </Form.Group>

                                <Form.Group as={Row} controlId="indexno">
                                    <Form.Label column sm="3" style={{ fontSize: 17, fontWeight: 'bold', fontFamily: 'TimesNewRoman', color: 'grey' }}>
                                    Index No :
                                    </Form.Label>
                                    <Col sm="9">
                                    <Form.Control required  placeholder="17000001"/>
                                    <Form.Control.Feedback type="invalid"> Please provide the Index Number.</Form.Control.Feedback>
                                    </Col>
                                </Form.Group>

                                <Form.Group as={Row} controlId="degree">
                                    <Form.Label column sm="3" style={{ fontSize: 17, fontWeight: 'bold', fontFamily: 'TimesNewRoman', color: 'grey' }}>
                                    Degree Programme:
                                    </Form.Label>
                                    <Col sm="9">
                                    <Form.Control required as="select" placeholder="Choose...">
                                        <option>Computer Science</option>
                                        <option>Information Systems</option>
                                    </Form.Control>
                                    <Form.Control.Feedback type="invalid"> Please select the Degree Programme.</Form.Control.Feedback>
                                    </Col>
                                </Form.Group>

                                <Form.Group as={Row} controlId="email">
                                    <Form.Label column sm="3" style={{ fontSize: 17, fontWeight: 'bold', fontFamily: 'TimesNewRoman', color: 'grey' }}>
                                    Email :
                                    </Form.Label>
                                    <Col sm="9">
                                    <Form.Control required type="email" placeholder="abc@gmail.com"/>
                                    <Form.Control.Feedback type="invalid"> Please provide a valid email.</Form.Control.Feedback>
                                    </Col>
                                </Form.Group>

                                <Form.Group as={Row} controlId="ademail">
                                    <Form.Label column sm="3" style={{ fontSize: 17, fontWeight: 'bold', fontFamily: 'TimesNewRoman', color: 'grey' }}>
                                    Additional Email :
                                    </Form.Label>
                                    <Col sm="9">
                                    <Form.Control type="email" placeholder="abc@gmail.com"/>
                                    </Col>
                                </Form.Group>

                                <Form.Group as={Row} controlId="contact">
                                    <Form.Label column sm="3" style={{ fontSize: 17, fontWeight: 'bold', fontFamily: 'TimesNewRoman', color: 'grey' }}>
                                    Contact No:
                                    </Form.Label>
                                    <Col sm="9">
                                    <Form.Control required placeholder="Mobile Number"/>
                                    <Form.Control.Feedback type="invalid"> Please provide the Contact Number.</Form.Control.Feedback>
                                    </Col>
                                </Form.Group>
                                <Modal.Footer>
                                    <Button type="submit">Add Student</Button>
                                    <Button variant="secondary" onClick={handleClose_2}>
                                        Close
                                    </Button>
                                </Modal.Footer>
                                
                            </Form>
                            </Modal.Body>
                            {/* <Modal.Footer>
                                <Button variant="secondary" onClick={handleClose_2}>
                                    Close
                                </Button>
                                <Button variant="primary">Submit</Button>
                            </Modal.Footer> */}

                        </Modal>
                                    
                    </div>
                  </div>
                </div>
            </div>
        </div>        
    )
}


export default Student_list2