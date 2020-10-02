import React, { useState } from 'react'
import MUIDataTable from 'mui-datatables'
import Navbar from '../../components/navbar'
import SideBar from '../../components/sidebar'
import './ads2.css'
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { Button, Modal, Form } from 'react-bootstrap'
// import { Link } from 'react-router-dom'



function RegCompanyList() {

  const [show, setShow] = useState(false);
  //const [Loading, setLoading] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);



  const columns = [
    'Company Name',
    'Registration No',
    'Registration Date',
    'Contact no',
    'Email',

    {
      name: "",
      options: {
        customBodyRender: () => {
          return (
            <Button className='btn' size="sm" onClick={handleShow}>
              {`View more`}
            </Button>
          );
        }
      }
    }
  ]
  const Data = [
    ['testCompany', 't0001', '2001/01/02', '0111223344', 'testmail@test.com'],
    ['testCompany', 't0001', '2001/01/02', '0111223344', 'testmail@test.com'],
    ['testCompany', 't0001', '2001/01/02', '0111223344', 'testmail@test.com'],
    ['testCompany', 't0001', '2001/01/02', '0111223344', 'testmail@test.com'],
    ['testCompany', 't0001', '2001/01/02', '0111223344', 'testmail@test.com'],
    ['testCompany', 't0001', '2001/01/02', '0111223344', 'testmail@test.com'],
    ['testCompany', 't0001', '2001/01/02', '0111223344', 'testmail@test.com'],
    ['testCompany', 't0001', '2001/01/02', '0111223344', 'testmail@test.com'],
    ['testCompany', 't0001', '2001/01/02', '0111223344', 'testmail@test.com'],
    ['testCompany', 't0001', '2001/01/02', '0111223344', 'testmail@test.com'],
    ['testCompany', 't0001', '2001/01/02', '0111223344', 'testmail@test.com'],
    ['testCompany', 't0001', '2001/01/02', '0111223344', 'testmail@test.com'],
    ['testCompany', 't0001', '2001/01/02', '0111223344', 'testmail@test.com'],
  ]
  const options = {
    filterType: 'checkbox',
    responsive: 'vertical',
  }



  return (
    <div>
      <Navbar />
      <SideBar />
      <div
        className="container-fluid  list_container"
        style={{ width: '85%', marginLeft: '13em', position: 'relative' }}
      >
        <h1>REGISTERED COMPANY LIST</h1>
        <MUIDataTable
          columns={columns}
          data={Data}
          options={{
            options,
            download: false,
            print: false,
            rowsPerPage: 5,
            rowsPerPageOptions: [5, 10, 20, 50],
          }}
        />

        <div>
          {/* model to show company details */}
          <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton >
              <Modal.Title style={{ marginLeft: '28%', fontSize: 24, fontWeight: 'bold', fontFamily: 'TimesNewRoman', color: '#6e6b6b' }}>Company Details</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Form>
                <Form.Group>
                  <Form.Label style={{ fontSize: 18, fontWeight: 'bold', fontFamily: 'TimesNewRoman', color: 'grey' }}>Company Name:</Form.Label>
                  <Form.Text style={{ fontSize: 14, fontWeight: 'bold', marginLeft: '28%' }}>testCompany</Form.Text>

                  <Form.Label style={{ fontSize: 18, fontWeight: 'bold', fontFamily: 'TimesNewRoman', color: 'grey' }}>Registration No:</Form.Label>
                  <Form.Text style={{ fontSize: 14, fontWeight: 'bold', marginLeft: '28%' }}>t0001</Form.Text>

                  <Form.Label style={{ fontSize: 18, fontWeight: 'bold', fontFamily: 'TimesNewRoman', color: 'grey' }}>Registration Date:</Form.Label>
                  <Form.Text style={{ fontSize: 14, fontWeight: 'bold', marginLeft: '28%' }}>2001/01/02</Form.Text>

                  <Form.Label style={{ fontSize: 18, fontWeight: 'bold', fontFamily: 'TimesNewRoman', color: 'grey' }}>Email:</Form.Label>
                  <Form.Text style={{ fontSize: 14, fontWeight: 'bold', marginLeft: '28%' }}>	testmail@test.com</Form.Text>

                  <Form.Label style={{ fontSize: 18, fontWeight: 'bold', fontFamily: 'TimesNewRoman', color: 'grey' }}>Website:</Form.Label>
                  <Form.Text style={{ fontSize: 14, fontWeight: 'bold', marginLeft: '28%' }}>testCompany.com</Form.Text>

                  <Form.Label style={{ fontSize: 18, fontWeight: 'bold', fontFamily: 'TimesNewRoman', color: 'grey' }}>Address:</Form.Label>
                  <Form.Text style={{ fontSize: 14, fontWeight: 'bold', marginLeft: '28%' }}>testaddress  </Form.Text>

                  <Form.Label style={{ fontSize: 18, fontWeight: 'bold', fontFamily: 'TimesNewRoman', color: 'grey' }}>Contact no:</Form.Label>
                  <Form.Text style={{ fontSize: 14, fontWeight: 'bold', marginLeft: '28%' }}>0111223344</Form.Text>

                  <Form.Label style={{ fontSize: 18, fontWeight: 'bold', fontFamily: 'TimesNewRoman', color: 'grey' }}>Fax no:</Form.Label>
                  <Form.Text style={{ fontSize: 14, fontWeight: 'bold', marginLeft: '28%' }}>0111223344</Form.Text>

                  <Form.Label style={{ fontSize: 18, fontWeight: 'bold', fontFamily: 'TimesNewRoman', color: 'grey' }}>Number of employess</Form.Label>
                  <Form.Text style={{ fontSize: 14, fontWeight: 'bold', marginLeft: '28%' }}>100</Form.Text>

                  <Form.Label style={{ fontSize: 18, fontWeight: 'bold', fontFamily: 'TimesNewRoman', color: 'grey' }}>Number of tech leads</Form.Label>
                  <Form.Text style={{ fontSize: 14, fontWeight: 'bold', marginLeft: '28%' }}>20</Form.Text>

                </Form.Group>
              </Form>
            </Modal.Body>

          </Modal>

        </div>
        <div className="p-2 " style={{ marginLeft: '48em' }}>
          <button
            className="btn btn-success"
            style={{ width: '200px', marginRight: '2em' }}
          >
            Request ADs
          </button>
          <button className="btn btn-danger" style={{ width: '200px' }}>
            Cancel

          </button>
        </div>
      </div>
    </div>
  )
}

export default RegCompanyList
