import React, { Component } from 'react';
import '/home/ubuntu/ict/project/src/section.css';
import { Route, Link } from 'react-router-dom';
import pan from '/home/ubuntu/ict/project/src/images/pan.png'
class Section extends Component {

    render() {
        return (




            <div className="section">
                <img src={pan} alt="pan" className="pan" />
                <div className="question_1"> <h2>질문1</h2></div>
                <div className="question_2"> <h2>질문2</h2></div>

            </div>






        );
    }
}

export default Section;