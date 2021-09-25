import React, { Component } from 'react';
import Header from '/home/ubuntu/ict/project/src/components/header.js'
import Random_result from '/home/ubuntu/ict/project/src/components/Random_result';
import Share from '/home/ubuntu/ict/project/src/components/share.js'
import Nav from '/home/ubuntu/ict/project/src/components/nav.js'

class Random extends Component {

    render() {
        return (
            <div>
                <Header />
                <Random_result />
                <Share />
                <Nav />
            </div>
        );
    }
}

export default Random;