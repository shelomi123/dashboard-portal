import React from 'react'
import './students.css';
import MUIDataTable from "mui-datatables";
import {Button} from 'react-bootstrap';

const columns = ["Student Name", "Registration No", "Index No", "Course" , "Email" , 
                {
                    name: "",
                    options: {
                    customBodyRender: (value, tableMeta, updateValue) => {
                        return (
                        <Button size="sm">
                            {`View more`}
                        </Button>
                        );
                    }
                    }
                }
]

const data = [
 ["Joe James", "2017cs005", "17000051", "CS" , "thirunihp@gmail.com" , ""],
 ["John Walsh", "2017cs005", "17000051", "CS" , "thirunihp@gmail.com" , ""],
 ["Bob Herm", "2017cs005", "17000051", "CS" , "thirunihp@gmail.com" , ""],
 ["James Houston", "2017cs005", "17000051", "IS" , "thirunihp@gmail.com" , ""]
 
]

const options = {
  filterType: 'checkbox',

}

function student_list2(){
    return(
        <div className="admin-content">
           <div className="student">
               <div className="student_list2 container-fluid">
                    <h1>REGISTERED STUDENT LIST</h1>
                    <MUIDataTable  
                    data={data} 
                    columns={columns} 
                    options={{options,
                        print : false,
                        download: false,
                    }} 
                    />
                    <div className="row">
                    <div className="col-7"></div>
                    <div className="btn_set col-5">    
                        <button className="btn cancelbtn btn-danger clearfix float-right" style={{ width: '200px', marginRight: '2em' }}>Cancel</button>  
                        <button className="btn enrollbtn btn-primary clearfix float-right"  style={{ width: '200px' }}>Enroll</button>
                    </div>
                    </div>
                </div>
            </div>
        </div>        
    )
}


export default student_list2