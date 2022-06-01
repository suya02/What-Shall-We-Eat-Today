import React, { Component } from 'react';
import Home from '../pages/Home.js';
import Delivery from '../pages/Delivery.js';
import Delivery_question from '../pages/Delivery_question.js';
import Delivery_result from '../pages/Delivery_result.js';
import Homemeal from '../pages/Homemeal.js';
import Homemeal_question from '../pages/Homemeal_question.js';
import Homemeal_result from '../pages/Homemeal_result.js';

import Random from '../pages/Random.js';
import Random_result from '../pages/Random_result.js';

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