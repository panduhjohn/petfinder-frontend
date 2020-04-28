import React from 'react';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import './App.css';

import Nav from './Nav';
import Home from './Home';
import Horse from './Horse';
import Shop from './Shop';
import Organization from './Organizations';
import Dogs from './Dogs'
import Cats from './Cats'
import AnimalDetail from './AnimalDetail'

function AppTest() {
    return (
        <Router>
            <div className='App'>
                <Nav />
                
                <Switch>
                    <Route path='/' exact component={Home} />
                    <Route path='/horse' exact component={Horse} />
                    <Route path='/horse/:id' component={AnimalDetail} />
                    <Route path='/cats' exact component={Cats} />
                    <Route path='/cats/:id' component={AnimalDetail} />
                    <Route path='/dogs' exact component={Dogs} />
                    <Route path='/dogs/:id' component={AnimalDetail} />
                    <Route path='/shop' exact component={Shop} />
                    <Route path='/organization' exact component={Organization} />
                </Switch>
            </div>
        </Router>
    );
}

export default AppTest;
