import React from 'react';
import './students.css';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
  } from 'reactstrap';
import arrow from '../../assets/images/arrow.png';
import CSVReader from "react-csv-reader";
import {Tabs, Tab} from 'react-bootstrap';


function Student_csv(){
    
    return (
        <div className="admin-content">
           <div className="file container">
               {/* <div className="file_upload">
                    <div className="fu-content-wrapper">
                        <div className="fu-empty-container">
                        <div className="upload-arrow"><img className="imge" src={arrow}></img></div>
                            <div className="upload-msg">
                                You can drag and drop csv file here.
                                <br/>     
                            </div>
                        </div>
                    </div>
                    
               </div> */}
               {/* <div className="files container">
                 <CSVReader id="csv_reader" onFileLoaded={(data, fileInfo) => console.dir(data, fileInfo)} inputStyle={{color: 'red'}}>
                 <Button className="upload">Upload</Button></CSVReader>
                </div>
               <div className="row">
                <div className="col-xl-8 col-lg-6 col-md-4"></div>
               <div className="buttons col-xl-4 col-lg-6 col-md-">
                    <Button className="upload">Upload</Button>
                    <Button className="cancel">Cancel</Button>
                </div>
                </div> */}
                <Tabs defaultActiveKey="profile" id="controlled-tab-example">
                    <Tab eventKey="home" title="Computer Science">
                        <div className="files container">
                            <CSVReader id="csv_reader" onFileLoaded={(data, fileInfo) => console.dir(data, fileInfo)} inputStyle={{color: 'red'}}>
                            </CSVReader>
                        </div>
                        <div className="row">
                            <div className="col-xl-8 col-lg-6 col-md-4"></div>
                            <div className="buttons col-xl-4 col-lg-6 col-md-8">
                                <Button className="upload">Upload</Button>
                                <Button className="cancel">Cancel</Button>
                            </div>
                        </div>
                    </Tab>
                    <Tab eventKey="profile" title="Information Systems">
                        <div className="files container">
                                <CSVReader id="csv_reader" onFileLoaded={(data, fileInfo) => console.dir(data, fileInfo)} inputStyle={{color: 'red'}}>
                                </CSVReader>
                        </div>
                        <div className="row">
                            <div className="col-xl-8 col-lg-6 col-md-4"></div>
                            <div className="buttons col-xl-4 col-lg-6 col-md-8">
                                <Button className="upload">Upload</Button>
                                <Button className="cancel">Cancel</Button>
                            </div>
                        </div>
                    </Tab>
                    
                </Tabs>
            </div>
            
           
        </div>
    )
}

export default Student_csv;