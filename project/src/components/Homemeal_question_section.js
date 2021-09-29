import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '/home/ubuntu/ict/project/src/custom.css';
import checkbox from '/home/ubuntu/ict/project/src/images/checkbox1.png'
import redo from '/home/ubuntu/ict/project/src/images/redo.png'

class Homemeal_question_section extends Component {

    render() {
        return (

            <div>
                <div className="result_text">
                    조리 시간으로 뭐 해먹을지 추천받기!
                </div>
                
                
                <div className="question_section">
                    <input type="checkbox" name="30min" />     
                    
                    <div className="question_1"> <h2>30분 이내 </h2></div>
                    <div className="question_2"> <h2>1시간 이내</h2></div>
                    <div className="question_2"> <h2>1시간 30분 이내</h2></div>
                    <div className="question_2"> <h2>2시간 이상</h2></div>
       
                </div>

                <div className="background">
                    
                        <button onClick={() =>{window.location.reload()}} className="again_test" >테스트 다시하기
                            <img src={redo} className="again_icon" />
                        </button>

                    <Link to="/Homemeal_result">
                        <button href="" className="again_test" > 결과보기
                            <img src={redo} className="again_icon" />
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

export default Homemeal_question_section;

// 프라이팬 이미지 출처
// https://www.pngwing.com/ko/free-png-sxezy/download