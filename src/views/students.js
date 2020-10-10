import React from 'react';
import Navbar from '../components/navbar'
import SideBar from '../components/sidebar'
import Content from '../content/students/student_enrolled';


function Students(){
    return (
        <div>
        <Navbar/>
        <SideBar/>
        <Content/>
        </div>
    );
}

export default Students;