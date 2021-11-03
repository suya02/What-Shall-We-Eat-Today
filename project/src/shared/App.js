import React, { Component } from 'react';
import Home from '/home/ubuntu/ict/project/src/pages/Home.js';
import Delivery from '/home/ubuntu/ict/project/src/pages/Delivery.js';
import Delivery_question from '/home/ubuntu/ict/project/src/pages/Delivery_question.js';
import Delivery_result from '/home/ubuntu/ict/project/src/pages/Delivery_result.js';
import Homemeal from '/home/ubuntu/ict/project/src/pages/Homemeal.js';
import Homemeal_question from '/home/ubuntu/ict/project/src/pages/Homemeal_question.js';
import Homemeal_result from '/home/ubuntu/ict/project/src/pages/Homemeal_result.js';

import Random from '/home/ubuntu/ict/project/src/pages/Random.js';
import Random_result from '/home/ubuntu/ict/project/src/pages/Random_result.js';

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
                        <Route path="/delivery_question" component={Delivery_question} exact />
                        <Route path="/Delivery_result" component={Delivery_result} exact />

                        <Route path="/homemeal" component={Homemeal} exact />
                        <Route path="/homemeal_question" component={Homemeal_question} exact />
                        <Route path="/Homemeal_result" component={Homemeal_result} exact />

                        <Route path="/random" component={Random} exact />
                        <Route path="/random/result" component={Random_result} exact />
                      

                    </ScrollIntoView>
                </BrowserRouter>
            </div>
        );
    }
}
export default App;