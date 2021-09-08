import React, { Component } from 'react';
import Header from '/home/ubuntu/ict/project/src/components/header.js'
import Section2 from '/home/ubuntu/ict/project/src/components/section2.js'
import Share from '/home/ubuntu/ict/project/src/components/share.js'
import Nav from '/home/ubuntu/ict/project/src/components/nav.js'

class Delivery_question extends Component {

    render() {
        return (
            <div>
                <Header />
                <Section2 />
                <Share />
                <Nav />
            </div>
        );
    }
}

export default Delivery_question;