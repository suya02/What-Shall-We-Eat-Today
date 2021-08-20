import React, { Component } from 'react';
import Header from '/home/ubuntu/ict/project/src/components/header.js'
import Section from '/home/ubuntu/ict/project/src/components/section.js'
import Nav from '/home/ubuntu/ict/project/src/components/nav.js'


class Home extends Component {

    render() {
        return (
            <div>
                <Header />
                <Section />
                <Nav />

            </div>
        );
    }
}

export default Home;