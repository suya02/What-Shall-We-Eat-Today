import React, { Component } from 'react';
import '/home/ubuntu/ict/project/src/custom.css';
import { Route, Link } from 'react-router-dom';
import pan from '/home/ubuntu/ict/project/src/images/pan2.png'
import Header from '/home/ubuntu/ict/project/src/components/header.js'
import Share from '/home/ubuntu/ict/project/src/components/share.js'
import Nav from '/home/ubuntu/ict/project/src/components/nav.js'

class Result extends Component {

    render() {
        return (
            <div>
                <Header />

                <div className="background">
                    <div className="result_text"> 내가 오늘 먹을 음식은 ?</div>
                    <div>
                        <img src={ pan } className="result_pan" />
                    </div> 
                </div> 

                <Share />
                <Nav />
            </div>
        );
    }
}

export default Result;