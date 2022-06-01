import React, { Component } from 'react';
import Header from 'components/Header.jsx'
import HomemealSection from 'components/HomemealSection.jsx'
import Share from 'components/Share.jsx'
import Nav from 'components/Nav.jsx'

class Homemeal extends Component {

    render() {
        return (
            <div>
                <Header />
                <HomemealSection />
                <Share />
                <Nav />
            </div>
        );
    }
}

export default Homemeal;