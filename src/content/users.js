import React, { useState, useEffect } from 'react';
import MUIDataTable from 'mui-datatables';
import { Modal, Button, Form, Alert } from 'react-bootstrap';
import axios from 'axios'
import '../App.css';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function Users() {

    const [show, setShow] = useState(false);
    const [isAdding, setIsAdding] = useState(false);
    const [modalData, setModalData] = useState({
        userid: '',
        f_name: '',
        l_name: '',
        email: '',
        username: '',
        password: '',


    });

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleChange = evt => {
        evt.preventDefault();
        setModalData({ ...modalData, [evt.target.name]: evt.target.value })

    }

    let userData = { newUser: modalData }
    console.log(userData);

    const handleAddUser = evt => {
        evt.preventDefault();
        setIsAdding(true);
        axios
            .post(`http://localhost:5000/auth/PDCUserRegister`,)


    }

    const onEnter = () => {
        return (
            <Alert>
                <Alert.Heading>Roles are Nuumbered as follow</Alert.Heading>
                <p>Administrator = 1</p>
                <p>Coordinator = 2</p>
                <p>Project Assistant = 3</p>
            </Alert>
        )
    }

    const columns = ['First Name', 'Last Name', 'email', 'Contact Number']
    const data = [
        ['hasantha', 'malshan', 'hasantha@gmail.com', '0777176789']
    ]
    return (
        <div className="admin-content">
            <div className="users">
                <h1> PDC Users Details</h1>
                <div className="addbtn">
                    <Button onClick={handleShow}>Add New User</Button>
                </div>
                <Modal show={show} onHide={handleClose}>
                    <Modal.Header >
                        <Modal.Title style={{ marginLeft: '30%' }}>Add New User</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form>
                            <Form.Group>
                                <Form.Label>User ID</Form.Label>
                                <Form.Control type="text" name="userid" id='userid' placeholder="Enter User ID" onChange={handleChange} >
                                </Form.Control>

                                <Form.Label>First Name</Form.Label>
                                <Form.Control type="text" name='f_name' id="f_name" placeholder="Enter First Name" onChange={handleChange} >
                                </Form.Control>

                                <Form.Label>Last Name</Form.Label>
                                <Form.Control type="text" name="l_name" id="l_name" placeholder="Enter Last Name" onChange={handleChange} >
                                </Form.Control>

                                <Form.Label>Email</Form.Label>
                                <Form.Control type="text" name="email" id="email" placeholder="Enter Email" onChange={handleChange}  >
                                </Form.Control>

                                <Form.Label>Role</Form.Label>
                                <Form.Control type="Number" name="role" id="role" placeholder="Role of user" onChange={handleChange}
                                    onTouchStart={onEnter}>
                                </Form.Control>

                                <Form.Label>Username</Form.Label>
                                <Form.Control type="text" name='username' id='username' placeholder="Enter Username" onChange={handleChange} >
                                </Form.Control>

                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" name='password' id='password' placeholder="Enter Password" onChange={handleChange} >
                                </Form.Control>
                            </Form.Group>
                        </Form>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Close
                        </Button>
                        <Button variant="primary" type="submit" onClick={handleAddUser} >
                            Register User
                        </Button>
                    </Modal.Footer>
                </Modal>
                <div className="container">
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