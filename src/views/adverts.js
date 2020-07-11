import React from 'react';
import Navbar from '../components/navbar'
import SideBar from '../components/sidebar'
import Content from '../content/advertisement/category';


function Adverts(){
    return (
        <div>
        <Navbar/>
        <SideBar/>
        <Content/>
        </div>
    );
}

export default Adverts;