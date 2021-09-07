import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import machine from '/home/ubuntu/ict/project/src/images/random.jpg'

class Section extends Component {
    render() {
        return (
            <div>
                <div className="section1">
                    <img src={ machine } alt="machine" className="pan" />
                    
                    <div className="section1_text"> 
                        1초안에 알려줘 <br />
                    </div>
                    <div className="section1_text2"> 
                        랜덤으로 추천받기<br />
                    </div>

                    <br />

                    
                    <Link to="/random/result">
                        <button className="start_test">
                            Start
                        </button>  
                    </Link>
                                      
                </div>
            </div>
        );
    }
}

export default Section;