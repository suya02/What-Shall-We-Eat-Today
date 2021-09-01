import React, { Component } from 'react';
import '/home/ubuntu/ict/project/src/custom.css';
import { Route, Link } from 'react-router-dom';
import pan from '/home/ubuntu/ict/project/src/images/pan2.png'
import bar from '/home/ubuntu/ict/project/src/images/baricon.png'
class Section extends Component {

    render() {
        return (

            <div>
                <div className="bar_out">
                    (바 우측 상단에 질문 진행율) ex) 1 / 10
                    <div>   
                        <img src={ bar } alt="pan" className="bar_in" />
                    </div>
                </div>

                <div className="delivery_section">
                    <img src={ pan } alt="pan" className="pan" />
                    <div className="question_1"> <h2>질문1 </h2></div>
                    <div className="vs"> VS </div>
                    <div className="question_2"> <h2>질문2</h2></div>
                </div>

                <div className="background">
                    <button href="" className="again_test" >테스트 다시하기 (icon)</button>
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

export default Section;

// 프라이팬 이미지 출처
// https://www.pngwing.com/ko/free-png-sxezy/download