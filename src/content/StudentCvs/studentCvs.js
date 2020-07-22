import React from 'react';
import './cv.css';
import 'bootstrap/dist/css/bootstrap.css';


function StudentsCVs(){
    return (
        <div className="admin-content">
           <div className="studentCvs">
           <center>PDC is not requesting CVs from the students yet.</center>
           <div className ="row">
           
           <button
              type="button"
              className="cv_button btn-block"
            >
              START REQUESTING STUDENT CVs
            </button>
           

           </div>
           </div>
        </div>
    )
}

export default StudentsCVs;