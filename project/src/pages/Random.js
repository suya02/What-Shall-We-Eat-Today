import React, { Component } from 'react';
import Header from '/home/ubuntu/ict/project/src/components/header.js'
import Section2 from '/home/ubuntu/ict/project/src/components/section2.js'
import Share from '/home/ubuntu/ict/project/src/components/share.js'
import Nav from '/home/ubuntu/ict/project/src/components/nav.js'

class Random extends Component {

    render() {
        return (
            <div>
                <Header />
                룰렛 or 사다리타기 or 버튼 클릭 시 바로 메뉴 추천
                <Share />
                <Nav />
            </div>
        );
    }
}

export default Random;