import React, { Component } from 'react';
import box1 from '/home/ubuntu/ict/project/src/images/box1.png'
import box2 from '/home/ubuntu/ict/project/src/images/box2.png'
import redo from "/home/ubuntu/ict/project/src/images/redo.png";
import pan from '/home/ubuntu/ict/project/src/images/pan2.png'
import axios from "axios";
import $ from "jquery";

class Random_result_section extends Component {

  state = {
    menu: "",
    image: "",
    ment: ""
  };
  timeouts = [];

  getRandomMenu = async () => {
    //api에서 get요청을 하는 함수
    //이부분에서 결과로 나온 메뉴를 설정해준다.
    let data = await axios
      .get("http://3.35.17.24:5000/randomapi")
      .then(({ data }) => data);
    console.log(data);
    console.log(typeof data);
    if (data[0]) { this.setState({ menu: data[0].foodname, ment: data[0].ment }) };
    if ($('#show').css('display') == 'none' && $('#show2').css('display') == 'none') {
      $('#show').show();
      $("#show2").show();
    }
    $('#hide').hide();
    $('#hide1').hide();

  };

  render() {
    return (
      <div className="background">

        <div className="result_text">오늘은 뭐 먹지?</div>

        <div className="random_section" >
          <h2>
            <div className="bounce" id="hide1">
              Box Open
            </div>
          </h2>
          <div className="question_section" id='show2' style={{ display: 'none' }}>
            <img src={pan} alt="pan" className="pan3" />
            <div className="question">
              <div className="question_text">
                {this.state.menu ? this.state.menu : ""}<br />
                {this.state.ment ? this.state.ment : ""}
              </div>
            </div>
          </div>

          <div className="box" onClick={() => {
            this.getRandomMenu();
          }}>

            <div className="imgswap" id="hide" >
              <img src={box1} className="bounce2" />
              <img src={box2} className="box2" />
            </div>
            <div>
              <button onClick={() => {
                this.getRandomMenu();
              }} className="again_test" id="show" style={{ display: 'none' }}>
                테스트 다시하기
              <img src={redo} className="again_icon" />
              </button>
            </div>
          </div>

        </div>
      </div>
    );
  }
}

export default Random_result_section;