import React, { Component } from 'react';
import Header from '/home/ubuntu/ict/project/src/components/Header.jsx'
import RandomSection from '/home/ubuntu/ict/project/src/components/RandomSection.jsx'
import Share from '/home/ubuntu/ict/project/src/components/Share.jsx'
import Nav from '/home/ubuntu/ict/project/src/components/Nav.jsx'

class Random extends Component {

    render() {
        return (
            <div>
                <Header />
                <RandomSection />
                <Share />
                <Nav />
            </div>
        );
    }
}

export default Random;