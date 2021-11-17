import React, { Component } from 'react';
import Header from '/home/ubuntu/ict/project/src/components/Header.jsx'
import RandomResultSection from '/home/ubuntu/ict/project/src/components/RandomResultSection.jsx';
import Share from '/home/ubuntu/ict/project/src/components/Share.jsx'
import Nav from '/home/ubuntu/ict/project/src/components/Nav.jsx'

class Random_result extends Component {

    render() {
        return (
            <div>
                <Header />
                <RandomResultSection />
                <Share />
                <Nav />
            </div>
        );
    }
}

export default Random_result;