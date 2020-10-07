
import React, { useState, useEffect } from 'react'
import MUIDataTable from 'mui-datatables'
import { Card, Modal, Button, Form } from 'react-bootstrap'
import './ads2.css'
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Navbar from '../../components/navbar'
import SideBar from '../../components/sidebar'
import { Link, useHistory } from 'react-router-dom'
import axios from 'axios'
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';




function AdCategories() {

  const [show, setShow] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [categoryData, setCategoryData] = useState([]);
  const [isAdding, setIsAdding] = useState(false);
  const [modalData, setModalData] = useState({})

  const history = useHistory();



  //for getting all the categories and category codes
  useEffect(() => {
    try {

      setLoading(true);
      axios
        .get(`http://localhost:5000/advert/getCategories`)
        .then(res => {
          //console.log(res.data);
          setCategoryData(res.data);
        })

    } catch (error) {
      console.log(error);

    }

    setLoading(false);
  }, [loading]);

  //column data for the data table
  const columns = ['Category Code', 'Category Name']

  //row data for the datatable
  let data = categoryData;

  //handle form change
  const handleChange = (e) => {
    e.preventDefault();
    setModalData(e.target.value);
    console.log(modalData);

  }
  //
  let Catdata = { category: modalData }

  //uploading new category
  const handleUpload = (evt) => {
    evt.preventDefault();
    setIsAdding(true)
    axios
      .post(`http://localhost:5000/advert/addcategory`, Catdata)
      .then(res => {
        console.log(res.data);
        toast.success('Category Added Successfully ', { position: toast.POSITION.TOP_RIGHT });
        history.push('/adCategories');
      })
      .catch(err => {
        console.log(err);
        toast.error('error occured while adding ', { position: toast.POSITION.TOP_RIGHT });
        history.push('/adCategories');
      })
    setShow(false);
    setIsAdding(false)

  }

  const options = {
    filterType: 'checkbox',
    responsive: 'vertical',
  }


  return (
    <div>
      <div>
        <ToastContainer newestOnTop={true} />
      </div>
      <Navbar />
      <SideBar />
      <div className="container-fluid cat_container" style={{ width: '85%', marginLeft: '13em', position: 'relative' }}>
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
                  <Form.Label>Category Name</Form.Label>
                  <Form.Control type="text" placeholder="Enter Category Name" onChange={handleChange} >
                  </Form.Control>
                </Form.Group>
              </Form>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
              <Button variant="primary" type="submit" onClick={handleUpload} disabled={modalData === null}>
                Save Changes
              </Button>
            </Modal.Footer>
          </Modal>
        </div>
        <div>
          <Card className="ad_card ">
            <MUIDataTable
              columns={columns}
              data={data.map(item => {
                return [
                  item.cat_id,
                  item.cat_name,
                ]
              })}
              options={{
                options,
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

export default AdCategories
