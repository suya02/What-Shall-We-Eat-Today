import React, { Component } from 'react';
import Header from '/home/ubuntu/ict/project/src/components/Header.jsx'
import HomemealQuestionSection from '/home/ubuntu/ict/project/src/components/HomemealQuestionSection.jsx'
import Share from '/home/ubuntu/ict/project/src/components/Share.jsx'
import Nav from '/home/ubuntu/ict/project/src/components/Nav.jsx'

import '/home/ubuntu/ict/project/src/custom.css';



class Homemeal_question extends Component {

    render() {
        return (
            <div>
                <Header />
                <HomemealQuestionSection />
                <Share />
                <Nav />
            </div>
        );
    }
}

export default Homemeal_question;