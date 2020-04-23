import React from 'react';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import './App.css';

import Nav from './Nav';
import Home from './Home';
import Horse from './Horse';
import Shop from './Shop';
import Contact from './Contact';
import Dogs from './Dogs'
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
                    <Route path='/shop' exact component={Shop} />
                    <Route path='/contact' exact component={Contact} />
                    <Route path='/dogs' exact component={Dogs} />
                    <Route path='/dogs/:id' component={AnimalDetail} />
                </Switch>
            </div>
        </Router>
    );
}

export default AppTest;
