import React, { Component } from 'react';
import Header from '/home/ubuntu/ict/project/src/components/header.js'
import Homemeal_Section2 from '/home/ubuntu/ict/project/src/components/homemeal_section2.js'
import Share from '/home/ubuntu/ict/project/src/components/share.js'
import Nav from '/home/ubuntu/ict/project/src/components/nav.js'

class Homemeal_question extends Component {

    render() {
        return (
            <div>
                <Header />
                <Homemeal_Section2 />
                <Share />
                <Nav />
            </div>
        );
    }
}

export default Homemeal_question;