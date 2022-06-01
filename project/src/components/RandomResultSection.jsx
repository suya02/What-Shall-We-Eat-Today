import React, { Component } from 'react';
import box1 from 'images/box1.png'
import box2 from 'images/box2.png'
import redo from "images/redo.png";
import pan from 'images/pan2.png'
import axios from "axios";
import $ from "jquery";
// import PrivateProperty from '../privateProperty_client.js';

// const props = PrivateProperty();
// const IP = "";

class RandomResultSection extends Component {

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
      .get(`http://locallhost:3000/randomapi`)
      .then(({ data }) => data);
    console.log(data);
    console.log(typeof data);
    if (data[0]) { this.setState({ menu: data[0].foodname, ment: data[0].ment }) };
    if ($('#show').css('display') === 'none' && $('#show2').css('display') === 'none') {
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

          {/* text */}
          <h2>
            <div className="bounce" id="hide1">
              Box Open
            </div>
          </h2>

          {/* 결과 */}
          <div className="question_section" id='show2' style={{ display: 'none' }}>
            <img src={pan} alt="pan" className="pan" />
            <div className="question">
              <div className="question_text">
                <h2>{this.state.menu ? this.state.menu : ""}</h2>
                <h3>{this.state.ment ? this.state.ment : ""}</h3>
              </div>
            </div>
          </div>

          <div className="box" onClick={() => { this.getRandomMenu() }}>
            <div className="imgswap" id="hide" >
              <img src={box1} className="box1" alt="box" />
              <img src={box2} className="box2" alt="box" />
            </div>
            <div>
              <button onClick={() => {
                this.getRandomMenu();
              }} className="again_test" id="show" style={{ display: 'none', cursor:'pointer'}}>
                다른메뉴 추천받기
              <img src={redo} className="again_icon" alt="icon" />
              </button>
            </div>
          </div>

        </div>
      </div>
    );
  }
}

export default RandomResultSection;