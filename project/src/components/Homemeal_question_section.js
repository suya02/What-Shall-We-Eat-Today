import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '/home/ubuntu/ict/project/src/custom.css';
import clock from '/home/ubuntu/ict/project/src/images/clock.png'
import redo from '/home/ubuntu/ict/project/src/images/redo.png'

class Homemeal_question_section extends Component {

    render() {
        return (

            <div>
                <div className="result_text">
                    조리 시간으로 뭐 해먹을지 추천받기!
                </div>

                {/* <div className="question_section2">   
                    <img src={clock} className="clock" />
                    <div className="h_question"> 30분 이내 </div>
                </div>

                <div className="question_section2">   
                    <img src={clock} className="clock" />
                    <div className="h_question"> 1시간 이내 </div>
                </div>
       
                <div className="question_section2">   
                    <img src={clock} className="clock" />
                    <div className="h_question"> 1시간 30분 이내 </div>
                </div>
                
                <div className="question_section2">   
                    <img src={clock} className="clock" />
                    <div className="h_question"> 2시간 </div>
                </div> */}

                <div className="background">
                    <table className="h_table">
                        <tr>
                            <td><img src={clock} className="clock" /></td>
                            <td><div className="h_question"> 30분 이내 </div></td>
                            
                        </tr>
                        <tr>
                            <td><img src={clock} className="clock" /></td>
                            <td><div className="h_question"> 1시간 30분 이내 </div></td>
                            
                        </tr>
                        <tr>
                            <td><img src={clock} className="clock" /></td>
                            <td><div className="h_question"> 30분 이내 </div></td>
                            
                        </tr>
                        <tr>
                            <td><img src={clock} className="clock" /></td>
                            <td><div className="h_question"> 30분 이내 </div></td>
                            
                        </tr>
                    </table>
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