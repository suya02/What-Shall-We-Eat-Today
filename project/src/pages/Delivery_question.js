import React, { Component } from 'react';
import Header from '/home/ubuntu/ict/project/src/components/header.js'
import Delivery_question_section from '/home/ubuntu/ict/project/src/components/Delivery_question_section.js'
import Share from '/home/ubuntu/ict/project/src/components/share.js'
import Nav from '/home/ubuntu/ict/project/src/components/nav.js'



class Delivery_question extends Component {



    render() {
        return (
            <div>
                <Header />
                <Delivery_question_section />
                <Share />
                <Nav />
            </div>
        );
    }
}

export default Delivery_question;