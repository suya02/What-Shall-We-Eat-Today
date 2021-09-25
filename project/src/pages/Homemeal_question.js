import React, { Component } from 'react';
import Header from '/home/ubuntu/ict/project/src/components/header.js'
import Homemeal_question_section from '/home/ubuntu/ict/project/src/components/Homemeal_question_section'
import Share from '/home/ubuntu/ict/project/src/components/share.js'
import Nav from '/home/ubuntu/ict/project/src/components/nav.js'

import '/home/ubuntu/ict/project/src/custom.css';



class Homemeal_question extends Component {

    render() {
        return (
            <div>
                <Header />
                <Homemeal_question_section />
                <Share />
                <Nav />
            </div>
        );
    }
}

export default Homemeal_question;