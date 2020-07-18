import React, { Component } from 'react';
import AppRouter from './AppRouter.js';
import { Switch, Route, Redirect } from 'react-router-dom';
import MainLayout from '../views/MainLayout/MainLayout.js';
import Home from '../views/Home/Home.js';
import Content from '../component/Content.js';
import SimInformation from '../component/SimInformation/SimInformation.js';
import NotFound from '../views/NotFound/NotFound.js';
import Pay from '../views/Pay/Pay.js';
import Contact from '../views/Contact/Contact.js';


class RouterDirect extends Component {
    render() {
        return (
            <Switch>
                <AppRouter exact path='/' component={Home} layout={MainLayout} />
                <AppRouter path='/sale' component={Content} layout={MainLayout} />
                <AppRouter path='/info/:simID' component={SimInformation} layout={MainLayout} />
                <Route path='/pay' component={Pay} />
                <Route path='/contact' component={Contact} />
                <AppRouter path='/404-notfound' component={NotFound} layout={MainLayout} />
                <Redirect to="/404-notfound" />
            </Switch>
        );
    }
}

export default RouterDirect;