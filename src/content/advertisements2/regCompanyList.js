import React, { useState, useEffect } from 'react'
import MUIDataTable from 'mui-datatables'
import Navbar from '../../components/navbar'
import SideBar from '../../components/sidebar'
import './ads2.css'
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { Button, Modal, Form } from 'react-bootstrap'
// import { Link } from 'react-router-dom'
import axios from 'axios'



function RegCompanyList() {

  const [show, setShow] = useState(false);
  const [loading, setLoading] = useState(false);
  const [regCompanyData, setRegCompanyData] = useState([])
  const [modalData, setModalData] = useState([]);
  const handleClose = () => setShow(false);


  // getting data from the server to pass to the modal 
  const handleShow = (rowData, rowMeta) => {
    let key = rowData[4];
    for (var i = 0; i < regCompanyData.length; i++) {
      if (key === regCompanyData[i].email) {
        setModalData(regCompanyData[i]);
      }
    }

    setShow(true);


  }

  console.log(modalData);


  // for getting all registered company data 
  useEffect(() => {
    try {
      setLoading(true);
      axios
        .get(`http://localhost:5000/company/getAll`)
        .then(res => {
          //console.log(res.data);
          setRegCompanyData(res.data);
        })

    } catch (error) {
      console.log(error);

    }
    setLoading(false)
  }, [loading])



  const columns = [
    'Company Name',
    'Registration No',
    'Registration Date',
    'Contact no',
    'Email',

    {
      name: "",
      options: {
        customBodyRenderLite: () => {


          return (

            <Button className='btn' size="sm" onClick={handleShow}>
              {`View more`}
            </Button>

          );


        }
      }
    }
  ]
  let data = regCompanyData;



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
          data={data.map(item => {
            return [

              item.comp_name,
              item.reg_no,
              item.date_of_establishment,
              item.contact_number,
              item.email,



            ]
          })}
          options={{
            options,
            download: false,
            print: false,
            rowsPerPage: 5,
            rowsPerPageOptions: [5, 10, 20, 50],
            onRowClick: handleShow
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
                  <Form.Text style={{ fontSize: 14, fontWeight: 'bold', marginLeft: '28%' }}>{modalData.comp_name}</Form.Text>

                  <Form.Label style={{ fontSize: 18, fontWeight: 'bold', fontFamily: 'TimesNewRoman', color: 'grey' }}>Registration No:</Form.Label>
                  <Form.Text style={{ fontSize: 14, fontWeight: 'bold', marginLeft: '28%' }}>{modalData.reg_no}</Form.Text>

                  <Form.Label style={{ fontSize: 18, fontWeight: 'bold', fontFamily: 'TimesNewRoman', color: 'grey' }}>Registration Date:</Form.Label>
                  <Form.Text style={{ fontSize: 14, fontWeight: 'bold', marginLeft: '28%' }}>{modalData.date_of_establishment}</Form.Text>

                  <Form.Label style={{ fontSize: 18, fontWeight: 'bold', fontFamily: 'TimesNewRoman', color: 'grey' }}>Email:</Form.Label>
                  <Form.Text style={{ fontSize: 14, fontWeight: 'bold', marginLeft: '28%' }}>	{modalData.email}</Form.Text>

                  <Form.Label style={{ fontSize: 18, fontWeight: 'bold', fontFamily: 'TimesNewRoman', color: 'grey' }}>Website:</Form.Label>
                  <Form.Text style={{ fontSize: 14, fontWeight: 'bold', marginLeft: '28%' }}>{modalData.comp_website}</Form.Text>

                  <Form.Label style={{ fontSize: 18, fontWeight: 'bold', fontFamily: 'TimesNewRoman', color: 'grey' }}>Address:</Form.Label>
                  <Form.Text style={{ fontSize: 14, fontWeight: 'bold', marginLeft: '28%' }}>{modalData.address} </Form.Text>

                  <Form.Label style={{ fontSize: 18, fontWeight: 'bold', fontFamily: 'TimesNewRoman', color: 'grey' }}>Contact no:</Form.Label>
                  <Form.Text style={{ fontSize: 14, fontWeight: 'bold', marginLeft: '28%' }}>{modalData.contact_number}</Form.Text>

                  <Form.Label style={{ fontSize: 18, fontWeight: 'bold', fontFamily: 'TimesNewRoman', color: 'grey' }}>Fax no:</Form.Label>
                  <Form.Text style={{ fontSize: 14, fontWeight: 'bold', marginLeft: '28%' }}>{modalData.fax_number}</Form.Text>

                  <Form.Label style={{ fontSize: 18, fontWeight: 'bold', fontFamily: 'TimesNewRoman', color: 'grey' }}>Number of employess</Form.Label>
                  <Form.Text style={{ fontSize: 14, fontWeight: 'bold', marginLeft: '28%' }}>{modalData.num_of_employees}</Form.Text>

                  <Form.Label style={{ fontSize: 18, fontWeight: 'bold', fontFamily: 'TimesNewRoman', color: 'grey' }}>Number of tech leads</Form.Label>
                  <Form.Text style={{ fontSize: 14, fontWeight: 'bold', marginLeft: '28%' }}>{modalData.num_of_techleads}</Form.Text>

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
