import React, { useState, useEffect } from 'react'
import './ad.css'
import MUIDataTable from 'mui-datatables'
import 'bootstrap/dist/css/bootstrap.css'
import { Link, useHistory } from 'react-router-dom'
import Navbar from '../../components/navbar'
import SideBar from '../../components/sidebar'
import { Button } from 'react-bootstrap'
import axios from 'axios'
import { FcApproval, FcDisapprove } from 'react-icons/fc'
import { Update } from '@material-ui/icons'





function Pending() {
  const [loading, setLoading] = useState(false);
  const [adData, setAdData] = useState([]);
  const [adId, setAdId] = useState();
  const history = useHistory();





  //for getting all adverts data and get pending ads
  useEffect(() => {
    try {
      setLoading(true);
      axios
        .get(`http://localhost:5000/advert/getAll`)
        .then(res => {

          for (var i = 0; i < res.data.length; i++) {
            if (res.data[i].status.toString() === "pending") {
              setAdData(res.data[i]);
            }
          }
        })

    } catch (error) {
      console.log(error);

    }
    setLoading(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loading])

  console.log(adData)


  //when click on row get ad ID
  const handleRowClick = (rowData) => {
    setAdId(rowData[1]);
  }


  //Handle approve 
  const handleApprove = () => {
    console.log(adId);
    let dataObj = {
      id: adId
    }

    console.log(dataObj)
    // for (var i = 0; i < adData.length; i++) {
    //   if (adId === adData[i].ad_id) {

    //   }
    // }
    setTimeout(() => {
      axios
        .put(`http://localhost:5000/advert/ApproveAdvert`, dataObj)
        .then(res => {
          console.log(res.data);
          console.log("approved");
          history.push('/pending');
        })
        .catch(e => {
          console.log(e);
        })

    }, 1000);


  }

  console.log(adData);

  const columns = [
    'COMPANY NAME',
    'ADVERT CODE',
    'INTERNSHIP POSITION',
    'NO OF POSITIONS',

    {
      name: 'viewmore',
      options: {
        customBodyRenderLite: () => {
          return (
            <Button className='btn-info' size="sm">
              {`View More`}
            </Button>
          );
        }
      },
    },
    {
      name: '',
      options: {
        customBodyRenderLite: () => {
          return (
            <Button className='btn-light' size="sm" onClick={handleApprove}>
              <FcApproval size={20} />
            </Button>
          );
        }
      },
    },
    {

      name: '',
      options: {
        customBodyRenderLite: () => {
          return (
            <Button className='btn-light' size="sm">
              <FcDisapprove size={23} />
            </Button>
          );
        }
      },

    }
  ]

  let Data = adData;

  const options = {
    filterType: 'checkbox',
    responsive: 'vertical',
  }

  return (
    <div>
      <Navbar />
      <SideBar />
      <div className="admin-content">
        <div class="container p-3 my-3 bg-light" >
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
        </div>

        <br></br>
        <div className="col-md-8" >
          <h6>30 advertisements are pending approval</h6>
        </div>
        <br></br>
        <div className="container-fluid">
          <MUIDataTable
            columns={columns}
            data={Data.forEach(item => {
              return [
                item.comp_name,
                item.ad_id,
                item.internship_position,
                item.no_of_positions,
              ]
            })}
            options={{
              options,
              download: false,
              print: false,
              rowsPerPage: 5,
              rowsPerPageOptions: [5, 10, 15, 20, 50, 100],
              onRowClick: handleRowClick


            }}
          />
        </div>
        <br></br>
        <div class="form-group row">

          <div class="col-md-8">

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

export default Pending;