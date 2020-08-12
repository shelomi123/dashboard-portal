

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import * as serviceWorker from './serviceWorker';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

import DashboardHome from './views/dashboardr-home'
import Companies from './views/companies'
import Students from './views/students'

import StudentCvs from './views/studentCvs'
import Emailing from './views/emailing'
import Notifications from './views/notifications'
import setDeadline from './content/advertisements2/setDeadline'
import Users from './views/users'
import adCategories from './content/advertisements2/adCategories'
import regCompanyList from './content/advertisements2/regCompanyList'

import adHome1 from './content/advertisement/adHome1'
import adHome2 from './content/advertisement/adHome2'
import approved from './content/advertisement/approved'
import pending from './content/advertisement/pending'
import declined from './content/advertisement/declined'
import category from './content/advertisement/category'
import summary from './content/advertisement/summary'
import Adverts from './views/adverts';

// import Companies from './content/companies/companies'
import BlackListedCompany from './content/companies/blackListedCompanies'
import RegisteredCompany from './content/companies/registeredCompanies'
import PendingCompany from './content/companies/pendingCompanies'


ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Switch>
        <Route path="/dashboard" component={DashboardHome} />
        <Route path="/companies" component={Companies} />
        <Route path="/students" component={Students} />
        <Route path='/adverts' component={Adverts} />
        <Route path="/cvs" component={StudentCvs} />
        <Route path="/emailing" component={Emailing} />
        <Route path="/users" component={Users} />
        <Route path="/notifications" component={Notifications} />
        <Route path="/setDeadline" component={setDeadline} />
        <Route path="/adCategories" component={adCategories} />
        <Route path="/regCompanyList" component={regCompanyList} />

        
        <Route path="/adHome1" component={adHome1} />
        <Route path="/adHome2" component={adHome2} />
        <Route path="/approved" component={approved} />
        <Route path="/pending" component={pending} />
        <Route path="/declined" component={declined} />
        <Route path="/category" component={category} />
        <Route path="/summary" component={summary} />

        <Route path="/registeredcom" component={RegisteredCompany}/>
        <Route path="/pendingcom" component={PendingCompany}/>
        <Route path="/blacklistedcom" component={BlackListedCompany}/>

        <Redirect from="/" to="/dashboard" />
      </Switch>
    </BrowserRouter>
    ,
  </React.StrictMode>,
  document.getElementById('root'),
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
