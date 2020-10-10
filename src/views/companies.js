import React, { Component } from 'react';
import Navbar from '../components/navbar'
import SideBar from '../components/sidebar'
import Content from '../content/companies/companies';

export default class Companies extends Component{
    render(){
        return (
            <div>
            <Navbar/>
            <SideBar/>
            <Content/>
            </div>
        );
    }
}
