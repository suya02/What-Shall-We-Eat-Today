import React, { Component } from 'react';
import '/home/ubuntu/ict/project/src/custom.css';
import Header from '/home/ubuntu/ict/project/src/components/Header.jsx'
import HomemealResultSection from '/home/ubuntu/ict/project/src/components/HomemealResultSection.jsx'
import Share from '/home/ubuntu/ict/project/src/components/Share.jsx'
import Nav from '/home/ubuntu/ict/project/src/components/Nav.jsx'

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