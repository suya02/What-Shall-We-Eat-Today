import React, { Component } from 'react';
import { Link } from 'react-router-dom';
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
                
                {/* 제거 시 App.js에서 라우터, pages에서 js파일 제거 */}
                <Link to="/Home2" className="start_test">ver2</Link>
                <Link to="/Home3" className="start_test">ver3</Link>
                
            </div>
        );
    }
}

export default Home;