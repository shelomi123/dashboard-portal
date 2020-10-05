import React, { useState, useEffect } from 'react';
import MUIDataTable from 'mui-datatables';
import { Modal, Button, Form } from 'react-bootstrap';
import axios from 'axios'
import '../App.css';


function Users() {

    const [show, setShow] = useState(false);
    const [modalData, setModalData] = useState({});

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleChange = () => {

    }

    const handleUpload = () => {

    }

    const columns = ['First Name', 'Last Name', 'email', 'Contact Number']
    const data = [
        ['hasantha malshan', 'hasantha@gmail.com', '0777176789']
    ]
    return (
        <div className="admin-content">
            <div className="users">
                <h1>User Details</h1>
                <div className="addbtn">
                    <Button onClick={handleShow}>Add New User</Button>
                </div>
                <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title style={{ marginLeft: '30%' }}>Add New User</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form>
                            <Form.Group>
                                <Form.Label>User ID</Form.Label>
                                <Form.Control type="text" placeholder="Enter User ID" onChange={handleChange} >
                                </Form.Control>

                                <Form.Label>First Name</Form.Label>
                                <Form.Control type="text" placeholder="Enter First Name" onChange={handleChange} >
                                </Form.Control>

                                <Form.Label>Last Name</Form.Label>
                                <Form.Control type="text" placeholder="Enter Last Name" onChange={handleChange} >
                                </Form.Control>

                                <Form.Label>Email</Form.Label>
                                <Form.Control type="text" placeholder="Enter Email" onChange={handleChange} >
                                </Form.Control>

                                <Form.Label>Role</Form.Label>
                                <Form.Control type="Number" placeholder="Role of user" onChange={handleChange} >
                                </Form.Control>

                                <Form.Label>Username</Form.Label>
                                <Form.Control type="text" placeholder="Enter Username" onChange={handleChange} >
                                </Form.Control>

                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" placeholder="Enter Password" onChange={handleChange} >
                                </Form.Control>
                            </Form.Group>
                        </Form>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Close
                        </Button>
                        <Button variant="primary" type="submit" onClick={handleUpload} >
                            Register User
                        </Button>
                    </Modal.Footer>
                </Modal>
                <div className="container-fluid ">
                    <MUIDataTable
                        columns={columns}
                        data={data}
                        options={{
                            selectableRows: "none",
                            download: false,
                            print: false,
                            viewColumns: false,
                            sort: false,
                            pagination: true,
                            rowsPerPage: 5,
                            rowsPerPageOptions: [5, 10, 15, 20],
                        }}
                    />
                </div>
            </div>
            <div></div>
        </div>
    )
}

export default Users;