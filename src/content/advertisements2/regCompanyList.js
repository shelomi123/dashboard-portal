import React from 'react'
import MUIDataTable from 'mui-datatables'
import Navbar from '../../components/navbar'
import SideBar from '../../components/sidebar'
import './ads2.css'
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'

const columns = [
  'Company Name',
  'Registration No',
  'Registration Date',
  'Contact no',
  'Email',
  {
    Name: 'view more',
    customBodyRenderLite: (dataIndex) => {
      return <button className="btn btn-primary">view More</button>
    },
  },
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

function regCompanyList() {
  return (
    <div>
      <Navbar />
      <SideBar />
      <div
        className="container-fluid  list_container"
        style={{ width: '85%', marginLeft: '13em', position: 'fixed' }}
      >
        <h1>REGISTERED COMPANY LIST</h1>
        <MUIDataTable
          columns={columns}
          data={Data}
          options={{
            options,
            download: false,
            print: false,
            rowsPerPage: 7,
            rowsPerPageOptions: false,
          }}
        />
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

export default regCompanyList
