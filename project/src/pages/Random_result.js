import React, { Component } from 'react';
import Header from 'components/Header.jsx'
import RandomResultSection from 'components/RandomResultSection.jsx';
import Share from 'components/Share.jsx'
import Nav from 'components/Nav.jsx'

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