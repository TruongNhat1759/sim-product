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
import ListSim from '../component/ListSim/ListSim.js';
import General from '../views/General/General.js';
import Security from '../views/Security/Security.js';
import Repay from '../views/Repay/Repay.js';
import Condition from '../views/Condition/Condition.js';
import Juridical from '../views/Juridical/Juridical.js';
import Guideline from '../views/Guideline/Guideline.js';


class RouterDirect extends Component {
    render() {
        return (
            <Switch>
                <AppRouter exact path='/' component={Home} layout={MainLayout} />
                <AppRouter path='/sale' component={Content} layout={MainLayout} />
                <AppRouter path='/info/:simID' component={SimInformation} layout={MainLayout} />
                <AppRouter exact path='/sim/' component={ListSim} layout={MainLayout} />
                <AppRouter path='/sim/:category' component={ListSim} layout={MainLayout} />
                <AppRouter path='/news/:post' component={Content} layout={MainLayout} />
                <AppRouter path='/general' component={General} layout={MainLayout} />
                <AppRouter path='/security' component={Security} layout={MainLayout} />
                <AppRouter path='/repay' component={Repay} layout={MainLayout} />
                <AppRouter path='/condition' component={Condition} layout={MainLayout} />
                <AppRouter path='/juridical' component={Juridical} layout={MainLayout} />
                <AppRouter path='/guideline' component={Guideline} layout={MainLayout} />
                <AppRouter path='/register' component={Security} layout={MainLayout} />
                <AppRouter path='/pawn' component={Security} layout={MainLayout} />
                <AppRouter path='/installment' component={Security} layout={MainLayout} />
                <AppRouter path='/procedure' component={Security} layout={MainLayout} />
                <AppRouter path='/contact' component={Contact} layout={MainLayout} />
                <Route path='/pay' component={Pay} />
                <AppRouter path='/404-notfound' component={NotFound} layout={MainLayout} />
                <Redirect to="/404-notfound" />
            </Switch>
        );
    }
}

export default RouterDirect;