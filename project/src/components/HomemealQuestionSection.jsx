import React, { Component } from "react";
import { Link } from 'react-router-dom';
import 'custom.css';
import clock from 'images/clock.png'
import redo from 'images/redo.png'
import axios from "axios";
// import PrivateProperty from '../privateProperty_client.js';

// const props = PrivateProperty();
// const IP = "";


let time = "";


class HomemealQuestionSection extends Component {

    state = {
        letter1: "30분 이내",
        letter2: "30분~1시간",
        letter3: "1시간~1시간 30분",
        letter4: "1시간 30분 이상"
    };

    render() {
        return (
            <div>
                <div className="result_text">
                    조리 시간으로 뭐 해먹을지 추천받기!
                </div>

                <div className="background">
                <br />
                    <table className="h_table">
                        <tr>
                            <td><img src={clock} className="clock" alt="clock" /></td>
                            <td><div className="h_question" onClick={() => {
                                this.setState({
                                    letter1: "결과보기 Click!",
                                    letter2: " ",
                                    letter3: " ",
                                    letter4: " "
                                })


                                time = "30분";
                                console.log(time);

                                let post = async () => {
                                    let res = await axios.post(`http://locallhost:3000/homemealapi`, {
                                        times: time
                                    });
                                    console.log(`전송 -> ${res}`);
                                };

                                post();
                            }}> {this.state.letter1} </div></td>

                        </tr>
                        <tr>
                            <td><img src={clock} className="clock" alt="clock" /></td>
                            <td><div className="h_question" onClick={() => {
                                this.setState({
                                    letter1: " ",
                                    letter2: "결과보기 Click!",
                                    letter3: " ",
                                    letter4: " "
                                })
                                time = "1시간";
                                console.log(time);

                                let post = async () => {
                                    let res = await axios.post(`http://locallhost:3000/homemealapi`, {
                                        times: time
                                    });
                                    console.log(`전송 -> ${res}`);
                                };

                                post();

                            }}> {this.state.letter2} </div></td>

                        </tr>
                        <tr>
                            <td><img src={clock} className="clock" alt="clock" /></td>
                            <td><div className="h_question" onClick={() => {
                                this.setState({
                                    letter1: " ",
                                    letter2: " ",
                                    letter3: "결과보기 Click!",
                                    letter4: " "
                                })

                                time = "1시간 30분";
                                console.log(time);

                                let post = async () => {
                                    let res = await axios.post(`http://locallhost:3000/homemealapi`, {
                                        times: time
                                    });
                                    console.log(`전송 -> ${res}`);
                                };

                                post();

                            }}> {this.state.letter3} </div></td>

                        </tr>
                        <tr>
                            <td><img src={clock} className="clock" alt="clock" /></td>
                            <td><div className="h_question" onClick={() => {

                                this.setState({
                                    letter1: " ",
                                    letter2: " ",
                                    letter3: " ",
                                    letter4: "결과보기 Click!"
                                })
                                time = "2시간 이상";
                                console.log(time);

                                let post = async () => {
                                    let res = await axios.post(`http://locallhost:3000/homemealapi`, {
                                        times: time
                                    });
                                    console.log(`전송 -> ${res}`);
                                };

                                post();

                            }}> {this.state.letter4}  </div></td>

                        </tr>
                    </table>
                    <br />
                </div>

                <div className="background">
                <br />
                    <Link to="/Homemeal_result">
                        <button href="" className="again_test" style={{cursor:'pointer'}} > 결과보기
                            <img src={redo} className="again_icon" alt="icon" />
                        </button>
                    </Link>        

                    <button onClick={() => { window.location.reload() }} className="again_test" style={{cursor:'pointer'}}>테스트 다시하기
                            <img src={redo} className="again_icon" alt="icon" />
                    </button>


                </div>
            </div>
        );
    }
}

export default HomemealQuestionSection;