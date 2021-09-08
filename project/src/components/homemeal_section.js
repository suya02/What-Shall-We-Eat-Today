import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import pan from '/home/ubuntu/ict/project/src/images/pan.png'

class Homemeal_Section extends Component {
    render() {
        return (
            <div>
                <div className="section1">
                    
                    <div className="left">
                        <div className="section1_text"> 
                            집에서 뭐 해먹지? <br />
                        </div>
                        <div className="section1_text2"> 
                            테스트 유도 문구 (ex) 집에 있는 재료로 뭘 해먹지?)<br />
                        </div>
                        

                        <br />

                        
                        <Link to="/Homemeal_question" >
                            <button className="start_test">
                                Start Test
                            </button>  
                        </Link>

                        
                    </div>
                    <img src={ pan } alt="pan" className="pan2" />
                                      
                </div>
            </div>
        );
    }
}

export default Homemeal_Section;