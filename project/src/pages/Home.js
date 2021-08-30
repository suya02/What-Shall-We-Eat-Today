import React, { Component } from 'react';
import Header from '/home/ubuntu/ict/project/src/components/header.js'
import Section from '/home/ubuntu/ict/project/src/components/section.js'
import Section2 from '/home/ubuntu/ict/project/src/components/section2.js'
import Nav from '/home/ubuntu/ict/project/src/components/nav.js'
import Nav2 from '/home/ubuntu/ict/project/src/components/nav2.js'
import Slider from '/home/ubuntu/ict/project/src/components/Slider.js'
import { SliderData } from '/home/ubuntu/ict/project/src/components/SliderData'


class Home extends Component {

    render() {
        return (
            <div>
                <Header />
                <Slider slides={SliderData}/>
                {/* <Section />
                <Nav /> */}


                <Section2 />
                <Nav2 />
           

            </div>
        );
    }
}

export default Home;