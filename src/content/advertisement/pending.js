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






function Pending() {
  const [loading, setLoading] = useState(false);
  const [adData, setAdData] = useState([]);
  const [adId, setAdId] = useState();
  const [pendingNum, setPendingNum] = useState(0);
  const history = useHistory();





  //for getting all adverts data and get pending ads
  useEffect(() => {
    try {
      setLoading(true);
      axios
        .get(`http://localhost:5000/advert/getPending`)
        .then(res => {
          setAdData(res.data);
        })

    } catch (error) {
      console.log(error);

    }


    setLoading(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loading])

  console.log(adData)

  //get the number of pending adverts
  useEffect(() => {
    setPendingNum(adData.length);
  }, [adData])
  console.log(pendingNum)




  //when click on row get ad ID
  const handleRowClick = (rowData) => {
    setAdId(rowData[1]);
  }


  //Handle approve  adverts
  const handleApprove = () => {
    console.log(adId);
    let dataObj = {
      id: adId
    }

    console.log(dataObj)
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

  //handle decline adverts
  const handleDecline = () => {
    console.log(adId);
    let dataObj = {
      id: adId
    }

    console.log(dataObj)
    setTimeout(() => {
      axios
        .put(`http://localhost:5000/advert/DeclineAdvert`, dataObj)
        .then(res => {
          console.log(res.data);
          console.log("Declined");
          history.push('/pending');
        })
        .catch(e => {
          console.log(e);
        })

    }, 1000);
  }






  const columns = [
    'COMPANY NAME',
    'ADVERT CODE',
    'INTERNSHIP POSITION',
    'NO OF POSITIONS',

    {
      name: '',
      options: {
        customBodyRenderLite: () => {
          return (
            <Button variant="outline-info" size="sm">
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
            <Button className='btn-light' size="sm" onClick={handleDecline}>
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
        <div className="col-md-8" >
          <h6 style={{ marginLeft: '56%' }}>{pendingNum} advertisements  pending the approval</h6>
        </div>
        <br></br>
        <div className="container-fluid">
          <MUIDataTable
            columns={columns}
            data={Data.map(item => {
              return [
                item.comp_name,
                item.ad_id,
                item.internship_position,
                item.no_of_positions,
              ]
            })}
            options={{
              options,
              selectableRows: false,
              viewColumns: false,
              download: false,
              print: false,
              rowsPerPage: 5,
              rowsPerPageOptions: [5, 10, 15, 20, 50, 100],
              onRowClick: handleRowClick


            }}
          />
        </div>
        <br></br>
        {/* <div class="form-group row">

          <div class="col-md-8">

          </div>



          <div class="col-md-2">
            <button type="button" class="btn btn-info smbtn" style={{ background: '#1a84ad' }}>PUBLISH</button>
          </div>
          <div class="col-md-2">
            <button type="button" class="btn btn-info smbtn" style={{ background: '#d12317' }}>CANCEL</button>
          </div>
        </div> */}


      </div>
    </div >
  )
}

export default Pending;