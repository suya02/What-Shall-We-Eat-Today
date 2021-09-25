import React, { Component } from 'react';
import Header from '/home/ubuntu/ict/project/src/components/header.js'
import Homemeal_section from '/home/ubuntu/ict/project/src/components/Homemeal_section'
import Share from '/home/ubuntu/ict/project/src/components/share.js'
import Nav from '/home/ubuntu/ict/project/src/components/nav.js'

class Homemeal extends Component {

    render() {
        return (
            <div>
                <Header />
                <Homemeal_section />
                <Share />
                <Nav />
            </div>
        );
    }
}

export default Homemeal;