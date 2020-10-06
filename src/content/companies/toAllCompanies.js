import React, { Component } from 'react'
import MUIDataTable from 'mui-datatables'
import Navbar from '../../components/navbar'
import SideBar from '../../components/sidebar'
import { Link } from 'react-router-dom'

export default class toAllCompanies extends Component {
    constructor(props){
        super(props);
        this.state={
            color:'red',
            columns : [],
            DataArray: []
        }
    }

    async componentDidMount(){
        try{
            fetch('Http://localhost:5000/company/getAll').then((res) => res.json())
            .then((data) => {
                for (let index = 0; index < data.length; index++) {
                    this.state.DataArray[index] = [data[index].comp_name, data[index].contact_number, data[index].email, data[index].reg_no]
                }
                this.setState({
                    columns: ['Company Name', 'Contact no','Email', 'Reg No']
                })});
        }  catch(error){ 
            this.setState({error: error});
        }
    }
    render() {
        return (
            <div>
                <Navbar />
                <SideBar />
                <div className="admin-content">
                <div className="companies">
                    <div>
                        <button className="compnaytab"><Link style={{color:'black'}} to="/registeredcom" >Registered Companies</Link></button>
                        <button className="compnaytab"><Link style={{color:'black'}} to="/pendingcom">Pending to be Approved</Link></button>
                        <button className="compnaytab"><Link style={{color:'black'}} to="/blacklistedcom">BlackListed Companies</Link></button>
                        <button className="compnaytab"><Link style={{color:'black'}} to="/toAllComs">To All Companies</Link></button>
                    </div>
                    <div className="container-fluid  list_container" style={{ width: '80em', margin: '6em 2em', position: 'fixed' }}>
                        <h1>REGISTERED COMPANY LIST</h1>
                        <MUIDataTable
                            backgroundColor={this.state.color}
                            columns={this.state.columns}
                            data={this.state.DataArray}
                            options={{ download: false,print: false,rowsPerPage: 7,rowsPerPageOptions: false}}/>
                        <div className="p-2 " style={{ marginLeft: '48em' }}>
                            <button className="btn btn-success" style={{ width: '200px', marginRight: '2em' }}>Send Email</button>
                            <button className="btn btn-danger" style={{ width: '200px' }}>Cancel</button>
                        </div>
                    </div>
                </div>
                </div>
            </div>
        )
    }
}
