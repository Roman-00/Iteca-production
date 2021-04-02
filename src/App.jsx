import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import { Home } from './Layout/Home';


const App = () => {
    return (
        <>
            <main>
                <Router>
                    <Switch>
                        <Route exact path="/" component={Home}/>
                    </Switch>
                </Router>
            </main>
        </>
    );
};

export default App;