

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import * as serviceWorker from './serviceWorker';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

import DashboardHome from './views/dashboardr-home'
import Companies from './views/companies'
import Students from './views/students'
import Adverts from './views/adverts'
import StudentCvs from './views/studentCvs'
import Emailing from './views/emailing'
import Notifications from './views/notifications'
import setDeadline from './content/advertisements2/setDeadline'
import Users from './views/users'
import adCategories from './content/advertisements2/adCategories'
import regCompanyList from './content/advertisements2/regCompanyList'

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Switch>
        <Route path="/dashboard" component={DashboardHome} />
        <Route path="/companies" component={Companies} />
        <Route path="/students" component={Students} />
        <Route path="/adverts" component={Adverts} />
        <Route path="/cvs" component={StudentCvs} />
        <Route path="/emailing" component={Emailing} />
        <Route path="/users" component={Users} />
        <Route path="/notifications" component={Notifications} />
        <Route path="/setDeadline" component={setDeadline} />
        <Route path="/adCategories" component={adCategories} />
        <Route path="/regCompanyList" component={regCompanyList} />
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
