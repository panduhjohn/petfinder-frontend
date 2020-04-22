import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import Dogs from './Dogs'
import Cards from './Cards'

// class App extends Component {
//     render() {
//         return (
//             <div>
                
//                 <Dogs />
//                 <Cards/>

//             </div>
//         )
//     }
// }

// export default App

export default function App() {
    return (
        <Router>
            <div>
                <nav>
                    <ul style={{ display: 'flex', paddingTop: '10px', justifyContent: 'space-around',textDecoration: 'none', listStyle: 'none' }}>
                        <li>
                            <Link to='/dogs'>Dog Finder</Link>
                        </li>
                        <li>
                            <Link to='/'>Home</Link>
                        </li>
                        <li>
                            <Link to='/users'>Users</Link>
                        </li>
                    </ul>
                </nav>

                {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
                <Switch>
                    <Route path='/about'>
                        <About />
                    </Route>
                    <Route path='/users'>
                        <Cards />
                    </Route>
                    <Route path='/'>
                        <Dogs />
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}

function Home() {
    return <h2>Dogs</h2>;
}

function About() {
    return <h2>About</h2>;
}

function Users() {
    return <h2>Users</h2>;
}