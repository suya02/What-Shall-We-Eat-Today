import React, { Component } from 'react';
import Header from '/home/ubuntu/ict/project/src/components/Header.jsx'
import DeliverySection from '/home/ubuntu/ict/project/src/components/DeliverySection.jsx'
import Share from '/home/ubuntu/ict/project/src/components/Share.jsx'
import Nav from '/home/ubuntu/ict/project/src/components/Nav.jsx'


class Delivery extends Component {

    render() {
        return (
            <div>
                <Header />
                <DeliverySection />
                <Share />
                <Nav />
            </div>
        );
    }
}

export default Delivery;