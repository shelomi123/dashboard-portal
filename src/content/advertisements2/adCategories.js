import React from 'react'
import MUIDataTable from 'mui-datatables'
import { Card } from 'react-bootstrap'
// import Navbar from '../../components/navbar'
// import SideBar from '../../components/sidebar'

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
  return (
    <div>
      {/* <Navbar />
      <SideBar /> */}

      <div className="container-fluid cat_container">
        <h1>ADVERTISEMENT CATEGORIES</h1>
        <div className="new_category_btn_position">
          <button className="new_category_btn " style={{ outline: 'none' }}>
            Add New Categroy
          </button>
        </div>
        <div>
          <Card className="ad_card">
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
                rowsPerPage: 5,
              }}
            />
          </Card>
        </div>

        <div className="ad_back_btn_position">
          <button className="ad_back_btn" style={{ outline: 'none' }}>
            Back
          </button>
        </div>
      </div>
    </div>
  )
}

export default adCategories
