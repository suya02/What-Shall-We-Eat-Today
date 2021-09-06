import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import '/home/ubuntu/ict/project/src/custom.css';
import bar from '/home/ubuntu/ict/project/src/images/baricon.png'
import pan from '/home/ubuntu/ict/project/src/images/pan2.png'
import redo from '/home/ubuntu/ict/project/src/images/redo.png'
class Section2 extends Component {

    render() {
        return (

            <div>
                <div className="bar_out">
                    (바 좌측에 "뒤로" /// 우측엔 질문 진행율) ex) 1 / 10
                    <div>   
                        <img src={ bar } alt="pan" className="bar_in" />
                    </div>
                </div>

                <div className="question">
                    <img src={ pan } alt="pan" className="pan" />
                    <div className="question_1"> <h2>질문1 </h2></div>
                    <div className="vs"> VS </div>
                    <div className="question_2"> <h2>질문2</h2></div>
                </div>

                <div className="background">
                    <Link to="/delivery/test">
                        <button href="" className="again_test" >테스트 다시하기 
                            <img src={ redo } className="again_icon"/>
                        </button>
                    </Link>

                    <Link to="/result">
                        <button href="" className="again_test" > 결과보기
                            <img src={ redo } className="again_icon"/>
                        </button>
                    </Link>
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

// 프라이팬 이미지 출처
// https://www.pngwing.com/ko/free-png-sxezy/download