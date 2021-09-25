import React, { Component } from 'react';
import Header from '/home/ubuntu/ict/project/src/components/header.js'
import Random_section from '/home/ubuntu/ict/project/src/components/Random_section.js'
import Share from '/home/ubuntu/ict/project/src/components/share.js'
import Nav from '/home/ubuntu/ict/project/src/components/nav.js'

class Random extends Component {

    render() {
        return (
            <div>
                <Header />
                <Random_section />
                <Share />
                <Nav />
            </div>
        );
    }
}

export default Random;