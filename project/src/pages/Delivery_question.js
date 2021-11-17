import React, { Component } from 'react';
import Header from '/home/ubuntu/ict/project/src/components/Header.jsx'
import DeliveryQuestionSection from '/home/ubuntu/ict/project/src/components/DeliveryQuestionSection.jsx'
import Share from '/home/ubuntu/ict/project/src/components/Share.jsx'
import Nav from '/home/ubuntu/ict/project/src/components/Nav.jsx'



class Delivery_question extends Component {



    render() {
        return (
            <div>
                <Header />
                <DeliveryQuestionSection />
                <Share />
                <Nav />
            </div>
        );
    }
}

export default Delivery_question;