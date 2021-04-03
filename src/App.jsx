import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import { Home } from './Layout/Home';
import { Services } from './Layout/Services';


const App = () => {
    return (
        <>
            <main>
                <Router>
                    <Switch>
                        <Route exact path="/" component={Home}/>
                        <Route path="/services" component={Services}/>
                    </Switch>
                </Router>
            </main>
        </>
    );
};

export default App;