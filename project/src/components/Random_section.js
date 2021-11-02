import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import machine from '/home/ubuntu/ict/project/src/images/random.png'
import '/home/ubuntu/ict/project/src/custom.css';

class Random_section extends Component {
    render() {
        return (
            <div>
                <div className="sections">
                    <div className="wid">
                    <img src={ machine } alt="machine" className="pan" />
                    </div>

                    <div className="section_text_big"> 
                        1초안에 알려줘 <br />
                    </div>
                    <div className="section_text_small"> 
                        랜덤으로 추천받기<br />
                    </div>
                    <br />
                    <Link to="/random/result">
                        <div className="center">
                        <button className="start_test">
                            Start
                        </button>  
                        </div>
                    </Link>
                                      
                </div>
            </div>
        );
    }
}

export default Random_section;