import React, { useState, useEffect } from 'react'
import './ad.css'
import MUIDataTable from 'mui-datatables'
import 'bootstrap/dist/css/bootstrap.css'
import { Link } from 'react-router-dom'
import Navbar from '../../components/navbar'
import SideBar from '../../components/sidebar'
import { Button } from 'react-bootstrap'
import axios from 'axios'



// const Data = [
//   ['testCompany', 't0001', '5', '0111223344', 'testmail@test.com'],
//   ['testCompany', 't0001', '4', '0111223344', 'testmail@test.com'],
//   ['testCompany', 't0002', '2', '0111223344', 'testmail@test.com'],
//   ['testCompany', 't0001', '4', '0111223344', 'testmail@test.com'],
//   ['testCompany', 't0001', '2', '0111223344', 'testmail@test.com'],
//   ['testCompany', 't0001', '2', '0111223344', 'testmail@test.com'],
//   ['testCompany', 't0001', '2', '0111223344', 'testmail@test.com'],
//   ['testCompany', 't0001', '1', '0111223344', 'testmail@test.com'],
//   ['testCompany', 't0001', '2', '0111223344', 'testmail@test.com'],
//   ['testCompany', 't0001', '2', '0111223344', 'testmail@test.com'],
//   ['testCompany', 't0001', '2', '0111223344', 'testmail@test.com'],
//   ['testCompany', 't0001', '2', '0111223344', 'testmail@test.com'],
//   ['testCompany', 't0001', '2', '0111223344', 'testmail@test.com'],
// ]


function Declined() {
  const [loading, setLoading] = useState(false);
  const [adData, setAdData] = useState([]);
  const [number, setNumber] = useState(0);



  //get all the declined advert data
  useEffect(() => {
    setLoading(true);
    try {
      axios
        .get(`http://localhost:5000/advert/getDeclinedAds`)
        .then(res => {
          setAdData(res.data);
        })
    } catch (error) {
      console.log(error)
    }
    setLoading(false)
  }, [loading])

  //get the number of declined adverts
  useEffect(() => {
    setNumber(adData.length)
  }, [adData])

  const columns = [
    'COMPANY NAME',
    'ADVERT CODE',
    'INTERNSHIP POSITION',
    'NO OF POSITIONS',
    'STATUS',
    {
      Name: 'view more',
      options: {
        customBodyRenderLite: () => {
          return <Button variant="outline-danger" size='sm'>VIEW MORE</Button>
        },
      }

    },
  ]

  let Data = adData
  const options = {
    filterType: 'checkbox',
    responsive: 'vertical',
  }
  return (
    <div>
      <Navbar />
      <SideBar />
      <div className="admin-content">

        {/* 
        <div class="container p-3 my-3 bg-light">
          <div class="form-group row">
            <div class="col-md-3">
              <button type="button" class="btn btn-info custom "><Link style={{ color: 'white' }} to="/summary" >SUMMARY</Link></button>
            </div>
            <div class="col-md-3">
              <button type="button" class="btn btn-info custom"><Link style={{ color: 'white' }} to="/pending" >PENDING APPROVAL</Link></button>
            </div>
            <div class="col-md-3">
              <button type="button" class="btn btn-info custom" ><Link style={{ color: 'white' }} to="/approved" >APPROVED</Link></button>
            </div>
            <div class="col-md-3">
              <button type="button" class="btn btn-info custom"><Link style={{ color: 'white' }} to="/declined" >DECLINED</Link></button>
            </div>
          </div>
        </div> */}
        <div class="container p-3 my-3 bg-light" >
          <div class="form-group row">
            {/* <div class="col-md-3">
              <button type="button" class="btn btn-info custom "><Link style={{ color: 'white' }} to="/adHome2" >Home</Link></button>
            </div> */}
            <div class="col-md-3">
              <Link style={{ color: 'white' }} to="/summary" > <button type="button" class="btn btn-info custom ">SUMMARY</button></Link>
            </div>
            <div class="col-md-3">
              <Link style={{ color: 'white' }} to="/pending" ><button type="button" class="btn btn-info custom">PENDING APPROVAL</button></Link>
            </div>
            <div class="col-md-3">
              <Link style={{ color: 'white' }} to="/approved" > <button type="button" class="btn btn-info custom" >APPROVED</button></Link>
            </div>
            <div class="col-md-3">
              <Link style={{ color: 'white' }} to="/declined" ><button type="button" class="btn btn-info custom">DECLINED</button></Link>
            </div>
          </div>
        </div>

        <br></br>
        <div class="col-md-12">
          <h6 style={{ marginLeft: '40%' }}>{number} advertisements have been declined</h6>
        </div>
        <br></br>
        <div className='container-fluid'>
          <MUIDataTable
            columns={columns}
            // data={Data}
            data={Data.map(item => {
              return [
                item.comp_name,
                item.ad_id,
                item.internship_position,
                item.no_of_positions,
                item.status
              ]
            })}
            options={{
              options,
              selectableRows: false,
              viewColumns: false,
              download: false,
              print: false,
              rowsPerPage: 7,
              rowsPerPageOptions: false,
            }}
          />
        </div>
        <br></br>
        {/* <div class="form-group row">

          <div class="col-md-8">
            <h8>0/104 selected</h8><br></br>
            <button type="button" >Select All</button>
          </div>



          <div class="col-md-2">
            <button type="button" class="btn btn-info smbtn" style={{ background: '#1a84ad' }}>PUBLISH</button>
          </div>
          <div class="col-md-2">
            <button type="button" class="btn btn-info smbtn" style={{ background: '#d12317' }}>CANCEL</button>
          </div>
        </div> */}


      </div>
    </div>
  )
}

export default Declined;