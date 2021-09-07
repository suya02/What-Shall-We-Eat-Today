import React, { Component } from 'react';
import Header from '/home/ubuntu/ict/project/src/components/header.js'
import Share from '/home/ubuntu/ict/project/src/components/share.js'
import Nav from '/home/ubuntu/ict/project/src/components/nav.js'
import Lotto from '/home/ubuntu/ict/project/src/components/Lotto2';

class Random extends Component {

    render() {
        return (
            <div>
                <Header />
                <Lotto />
                <Share />
                <Nav />
            </div>
        );
    }
}

export default Random;