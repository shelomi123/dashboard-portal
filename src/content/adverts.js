import React from 'react';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.css';
import {Link} from 'react-router-dom';

function Adverts(){
    return (
        <div className="admin-content">
           <div className="container">

                <div class="container p-3 my-3 bg-light">
                    <h5>Request advertisements</h5>
                    <Link to="/advertsRequest" className="advertsRequest" style={{ fontSize: '20px' }}>
                        click here
                    </Link>
                    
                </div>

            
           </div>
          
        </div>
            
        
    )
}

export default Adverts;