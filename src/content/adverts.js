import React from 'react';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.css';
import {Link} from 'react-router-dom';

function Adverts(){
    return (
        <div className="admin-content">
           <div className="adverts">
                <div className="row">
                    <Link /*onClick={this.gologin}*/  className="adreqSend_btn">
                        Advertisement Request
                    </Link>
                </div>
               

            
               <div className="row">
                    <button /*onClick={this.gologin}*/ type="button" className="adreqSend_btn" style={{ align:'' }}>
                        SEND
                    </button>

               </div>
            
           </div>
          
        </div>
            
        
    )
}

export default Adverts;