import React from 'react';
import Navbar from '../components/navbar'
import SideBar from '../components/sidebar'
import Content from '../content/studentCvs';


function StudentCvs(){
    return (
        <div>
        <Navbar/>
        <SideBar/>
        <Content/>
        </div>
    );
}

export default StudentCvs;