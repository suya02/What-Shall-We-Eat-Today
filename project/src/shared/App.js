import React, { Component } from 'react';
import Home from '/home/ubuntu/ict/project/src/pages/Home.js';
import Delivery from '/home/ubuntu/ict/project/src/pages/Delivery.js';
import Delivery_test from '/home/ubuntu/ict/project/src/pages/Delivery2.js';
import Homemeal from '/home/ubuntu/ict/project/src/pages/Homemeal.js';
import Random from '/home/ubuntu/ict/project/src/pages/Random.js';
import ScrollIntoView from "../components/f_routertotop";
import { BrowserRouter, Route } from 'react-router-dom';

class App extends Component {
    render() {
        return (
            <div className='App'>
                <BrowserRouter>
                    <ScrollIntoView>
                        <Route path="/" component={Home} exact />
                        <Route path="/delivery" component={Delivery} exact />
                        <Route path="/delivery/test" component={Delivery_test} exact />
                        <Route path="/homemeal" component={Homemeal} exact />
                        <Route path="/random" component={Random} exact />
                    </ScrollIntoView>
                </BrowserRouter>
            </div>
        );
    }
}
export default App;