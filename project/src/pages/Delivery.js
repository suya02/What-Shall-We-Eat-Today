import React, { Component } from 'react';
import Header from 'components/Header.jsx'
import DeliverySection from 'components/DeliverySection.jsx'
import Share from 'components/Share.jsx'
import Nav from 'components/Nav.jsx'


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