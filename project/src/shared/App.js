import React, { Component } from 'react';
import Home from '/home/ubuntu/ict/project/src/pages/Home.js';
import Delivery from '/home/ubuntu/ict/project/src/pages/Delivery.js';
import Homemeal from '/home/ubuntu/ict/project/src/pages/Homemeal.js';
import Random from '/home/ubuntu/ict/project/src/pages/Random.js';
import { BrowserRouter, Route } from 'react-router-dom';


class App extends Component {
    render() {
        return (
            <div className='App'>
                <BrowserRouter>
                    <Route path="/" component={Home} exact />
                    <Route path="/delivery" component={Delivery} exact />
                    <Route path="/homemeal" component={Homemeal} exact />
                    <Route path="/random" component={Random} exact />
                </BrowserRouter>
            </div>
        );
    }
}
export default App;