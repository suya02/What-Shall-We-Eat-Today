import React, { Component } from 'react';
import 'custom.css';
import Header from 'components/Header.jsx'
import HomemealResultSection from 'components/HomemealResultSection.jsx'
import Share from 'components/Share.jsx'
import Nav from 'components/Nav.jsx'

class Result extends Component {

    render() {
        return (
            <div>
                <Header />
                <HomemealResultSection />
                <Share />
                <Nav />
            </div>
        );
    }
}

export default Result;