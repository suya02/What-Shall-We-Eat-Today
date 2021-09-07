import React, { Component } from 'react';
import Home from '/home/ubuntu/ict/project/src/pages/Home.js';
import Delivery from '/home/ubuntu/ict/project/src/pages/Delivery.js';
import Delivery_test from '/home/ubuntu/ict/project/src/pages/Delivery2.js';
import result from '/home/ubuntu/ict/project/src/pages/result.js';
import Homemeal from '/home/ubuntu/ict/project/src/pages/Homemeal.js';
import Random from '/home/ubuntu/ict/project/src/pages/Random.js';
import Random_result from '/home/ubuntu/ict/project/src/pages/Random_result.js';
import ScrollIntoView from "../components/f_routertotop";
import { BrowserRouter, Route } from 'react-router-dom';


import Home2 from '/home/ubuntu/ict/project/src/pages/Home2.js';
import Home3 from '/home/ubuntu/ict/project/src/pages/Home3.js';

class App extends Component {
    render() {
        return (
            <div className='App'>
                <BrowserRouter>
                    <ScrollIntoView>
                        <Route path="/" component={Home} exact />
                        <Route path="/delivery" component={Delivery} exact />
                        <Route path="/delivery/test" component={Delivery_test} exact />
                        <Route path="/random/result" component={Random_result} exact />
                        <Route path="/result" component={result} exact />
                        <Route path="/homemeal" component={Homemeal} exact />
                        <Route path="/random" component={Random} exact />
                        <Route path="/Home2" component={Home2} exact />
                        <Route path="/Home3" component={Home3} exact />
                    </ScrollIntoView>
                </BrowserRouter>
            </div>
        );
    }
}
export default App;