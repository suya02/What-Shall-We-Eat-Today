import React, { Component } from 'react';
import Header from 'components/Header.jsx'
import DeliveryQuestionSection from 'components/DeliveryQuestionSection.jsx'
import Share from 'components/Share.jsx'
import Nav from 'components/Nav.jsx'



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