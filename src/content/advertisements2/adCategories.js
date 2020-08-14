import React, { useState } from 'react'
import MUIDataTable from 'mui-datatables'
import { Card, Modal, Button, Form } from 'react-bootstrap'
import './ads2.css'
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Navbar from '../../components/navbar'
import SideBar from '../../components/sidebar'
import { Link } from 'react-router-dom'

const columns = ['Category Code', 'Category Name']
const data = [
  ['SE-J', 'Software Engineer(Java/J2EE)'],
  ['SE-NET', 'Software Engineer(.NET/C#)'],
  ['SE-C', 'Software Engineer(C++)'],
  ['WEB-D', 'Web Developer(PHP/Python/Ruby/JavaScript)'],
  ['SA', 'System Architect'],
  ['QAE', 'Quality Assurance Engineer'],
  ['BA', 'Business Analyst'],
  ['BA', 'Business Analyst'],
  ['BA', 'Business Analyst'],
  ['BA', 'Business Analyst'],
  ['BA', 'Business Analyst'],
]



function adCategories() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleUpload = () => {
    //Adding category to database will be done by this 


  }
  return (
    <div>
      <Navbar />
      <SideBar />
      <div className="container-fluid cat_container" style={{ width: '85%', marginLeft: '13em', position: 'fixed' }}>
        <h1>ADVERTISEMENT CATEGORIES</h1>
        <div className="new_category_btn_position">
          <button className="new_category_btn " style={{ outline: 'none' }} onClick={handleShow}>
            Add New Categroy
          </button>
          <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>Add Advertisement Category</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Form>
                <Form.Group>
                  <Form.Label>Category Code</Form.Label>
                  <Form.Control type='text' placeholder="Enter Category Code">
                  </Form.Control>
                  <Form.Label>Category Name</Form.Label>
                  <Form.Control type='text' placeholder="Enter Category Name">
                  </Form.Control>
                </Form.Group>
              </Form>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Close
          </Button>
              <Button variant="primary" onClick={handleUpload()}>
                Save Changes
          </Button>
            </Modal.Footer>
          </Modal>
        </div>
        <div>
          <Card className="ad_card ">
            <MUIDataTable
              columns={columns}
              data={data}
              options={{
                selectableRows: false,
                download: false,
                print: false,
                viewColumns: false,
                sort: false,
                pagination: true,
                rowsPerPage: 6,
                rowsPerPageOptions: false,
              }}
            />
          </Card>
        </div>

        <div className="ad_back_btn_position">

          <Link style={{ color: "white" }} to='/setDeadline'>
            <button className="ad_back_btn" style={{ outline: 'none' }}> Back</button>
          </Link>

        </div>
      </div>
    </div>
  )
}

export default adCategories
