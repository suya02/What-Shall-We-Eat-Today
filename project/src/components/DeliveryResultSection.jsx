import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import pan from '/home/ubuntu/ict/project/src/images/pan2.png'
import redo from "/home/ubuntu/ict/project/src/images/redo.png";
import axios from "axios";
import PrivateProperty from '../privateProperty_client.js';

const props = PrivateProperty();
const IP = props.IP;

class DeliveryResultSection extends Component {
    //state 설정
    state = {
        menu: "현재 충족되는 배달음식이 없습니다. 무작위로 추천받아보시겠어요?",
        ment: "",
        image: "",
    };

    getCourses = async () => {
        //api에서 get요청을 하는 함수
        //이부분에서 결과로 나온 메뉴를 설정해준다.
        let data = await axios
            .get(`http://${IP}:5000/api`)
            .then(({ data }) => data);
        console.log(data);
        console.log(typeof data);
        if (data[0]) { this.setState({ menu: data[0].foodname, ment: data[0].ment }) };
    };

    //마운트가 끝났을 때 get요청을 하는 것이 좋다.
    componentDidMount() {
        this.getCourses();
    }



    render() {
        return (
            <div className="background">
                <div className="result_text"> 내가 오늘 먹을 음식은 ?</div>
                <div className="question_section">
                    <img src={pan} alt="pan" className="pan" />
                    <div className="question">
                        <div className="question_text">
                            <h2>{this.state.menu ? this.state.menu : "요리중"}<br /></h2>
                            <h2>{this.state.ment ? this.state.ment : ""}{" "}</h2>
                        </div>

                    </div>

                    {/*마운트가 되서 menu에 데이터가 들어오면 menu를 출력 그렇지 아니면 로딩중이라는 문구를 출력*/}

                </div>

                {this.state.menu === "현재 충족되는 배달음식이 없습니다. 무작위로 추천받아보시겠어요?" ?
                    <Link to="/random">
                        <button href="" className="again_test">
                            무작위 추천받기!
                        </button>
                    </Link> : ""}
                <div>

                    <Link to="/Delivery_question">
                        <button className="again_test">
                            테스트 다시하기
                    <img src={redo} className="again_icon" alt="icon" />
                        </button>
                    </Link>

                </div>

            </div>
        );
    }
}

export default DeliveryResultSection;