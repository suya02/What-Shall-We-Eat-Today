import React, { Component } from 'react';
import Header from 'components/Header.jsx'
import HomemealQuestionSection from 'components/HomemealQuestionSection.jsx'
import Share from 'components/Share.jsx'
import Nav from 'components/Nav.jsx'

import 'custom.css';



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