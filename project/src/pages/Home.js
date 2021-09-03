import React, { Component } from 'react';
import Header from '/home/ubuntu/ict/project/src/components/header.js'
import Main_section from '/home/ubuntu/ict/project/src/components/Main_section.js'
import Nav from '/home/ubuntu/ict/project/src/components/nav.js'
import Slider from '/home/ubuntu/ict/project/src/components/Slider.js'
import { SliderData } from '/home/ubuntu/ict/project/src/components/SliderData'

class Home extends Component {

    render() {
        return (
            <div>
                <Header />
                <Main_section />
                <Slider slides={SliderData}/>
                <Nav />
            </div>
        );
    }
}

export default Home;