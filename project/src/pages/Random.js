import React, { Component } from 'react';
import Header from 'components/Header.jsx'
import RandomSection from 'components/RandomSection.jsx'
import Share from 'components/Share.jsx'
import Nav from 'components/Nav.jsx'

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