import React from 'react';
import './ad.css';
import MUIDataTable from 'mui-datatables';
import 'bootstrap/dist/css/bootstrap.css';

const columns = [
    'COMPANY NAME',
    'ADVERT CODE',
    'NO OF POSITIONS',
    'CONTACT',
    'EMAIL',
    {
      Name: 'view more',
      customBodyRenderLite: (dataIndex) => {
        return <button className="btn btn-primary">VIEW MORE</button>
      },
    },
  ]
  const Data = [
    ['testCompany', 't0001', '5', '0111223344', 'testmail@test.com'],
    ['testCompany', 't0001', '4', '0111223344', 'testmail@test.com'],
    ['testCompany', 't0001', '2', '0111223344', 'testmail@test.com'],
    ['testCompany', 't0001', '4', '0111223344', 'testmail@test.com'],
    ['testCompany', 't0001', '2', '0111223344', 'testmail@test.com'],
    ['testCompany', 't0001', '2', '0111223344', 'testmail@test.com'],
    ['testCompany', 't0001', '2', '0111223344', 'testmail@test.com'],
    ['testCompany', 't0001', '1', '0111223344', 'testmail@test.com'],
    ['testCompany', 't0001', '2', '0111223344', 'testmail@test.com'],
    ['testCompany', 't0001', '2', '0111223344', 'testmail@test.com'],
    ['testCompany', 't0001', '2', '0111223344', 'testmail@test.com'],
    ['testCompany', 't0001', '2', '0111223344', 'testmail@test.com'],
    ['testCompany', 't0001', '2', '0111223344', 'testmail@test.com'],
  ]
  const options = {
    filterType: 'checkbox',
    responsive: 'vertical',
  }

function Adverts(){
    return (
        <div className="admin-content">
             

            <div class="container p-3 my-3 bg-light">
                    <div class="form-group row">
                        <div class="col-md-3">
                            <button type="button" class="btn btn-info custom ">SUMMARY</button>
                        </div>
                        <div class="col-md-3">
                            <button type="button" class="btn btn-info custom">PENDING APPROVAL</button>
                        </div>
                        <div class="col-md-3">
                            <button type="button" class="btn btn-info custom" >APPROVED</button>
                        </div>
                        <div class="col-md-3">
                            <button type="button" class="btn btn-info custom">DECLINED</button>
                        </div>
                    </div>
            </div>

            <br></br>
            <div class="col-md-12">
                <h6>104 advertisements from 50 companies have been approved</h6>
            </div>
            <br></br>
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
                <br></br>
                <div class="form-group row">
                        
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
                    </div>

                    ////////////////
            <div class="container p-3 my-3 bg-light">
                <h6>STUDENTS LIST</h6>

                <table class="table">
                        <thead class="table-info">
                            <tr>
                                <th></th>
                                <th>Company Name</th>
                                <th>Advert Code</th>
                                <th>No of Positions</th>
                                <th>Contact</th>
                                <th>Email</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><input type="checkbox" class="form-check-input" id="1"></input></td>
                                <td>WSO2</td>
                                <td>t1112</td>
                                <td>6</td>
                                <td>011 1234567</td>
                                <td>test@gmail.com</td>
                                <td><button type="button" class="btn btn-secondary">View</button></td>
                            </tr>
                            <tr>
                                <td><input type="checkbox" class="form-check-input" id="1"></input></td>
                                <td>WSO2</td>
                                <td>t1112</td>
                                <td>6</td>
                                <td>011 1234567</td>
                                <td>test@gmail.com</td>
                                <td><button type="button" class="btn btn-secondary">View</button></td>
                            </tr>
                            <tr>
                                <td><input type="checkbox" class="form-check-input" id="1"></input></td>
                                <td>WSO2</td>
                                <td>t1112</td>
                                <td>6</td>
                                <td>011 1234567</td>
                                <td>test@gmail.com</td>
                                <td><button type="button" class="btn btn-secondary">View</button></td>
                            </tr>
                            <tr>
                                <td><input type="checkbox" class="form-check-input" id="1"></input></td>
                                <td>WSO2</td>
                                <td>t1112</td>
                                <td>6</td>
                                <td>011 1234567</td>
                                <td>test@gmail.com</td>
                                <td><button type="button" class="btn btn-secondary">View</button></td>
                            </tr>
                              
                        </tbody>
                    </table>

                    <br></br><br></br>

                    <div class="form-group row">
                        
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
                    </div>
               

                  
            </div>
        </div>
    )
}

export default Adverts;