import React, { Component } from 'react';
import '/home/ubuntu/ict/project/src/custom.css';
import { Route, Link } from 'react-router-dom';
import pan from '/home/ubuntu/ict/project/src/images/pan2.png'
import bar from '/home/ubuntu/ict/project/src/images/baricon.png'
class Section2 extends Component {

    render() {
        return (

            <div>
    
                <div className="section2">
                    <img src={ pan } alt="pan" className="pan" />
                    
                    <div className="section2_text"> 
                        집에서 뭐 해먹지? <br />
                    </div>
                    <div className="section2_text2"> 
                        테스트 유도 문구 (ex) 집밥 먹고싶은데 뭐 먹을지 고민 될 때!)<br />
                    </div>
                    <br />
                    <button href="/">Test Start</button>

                    
                </div>

                {/* <div className="startButton">

                    <ul>
                        <li className="button1">
                            배달음식 추천 시작
    </li>

                        <li className="button2">
                            집밥 추천 시작
    </li>
                    </ul>
                </div> */}

            </div>
        );
    }
}

export default Section2;
