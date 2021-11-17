import React, { Component } from 'react';
import Header from '/home/ubuntu/ict/project/src/components/Header.jsx'
import HomemealSection from '/home/ubuntu/ict/project/src/components/HomemealSection.jsx'
import Share from '/home/ubuntu/ict/project/src/components/Share.jsx'
import Nav from '/home/ubuntu/ict/project/src/components/Nav.jsx'

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