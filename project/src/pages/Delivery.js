import React, { Component } from 'react';
import Header from '/home/ubuntu/ict/project/src/components/header.js'
import Delivery_section from '/home/ubuntu/ict/project/src/components/Delivery_section.js'
import Share from '/home/ubuntu/ict/project/src/components/share.js'
import Nav from '/home/ubuntu/ict/project/src/components/nav.js'


class Delivery extends Component {

    render() {
        return (
            <div>
                <Header />
                <Delivery_section />
                <Share />
                <Nav />
            </div>
        );
    }
}

export default Delivery;