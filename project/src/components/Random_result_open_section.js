import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from "axios";

class Random_result_open_section extends Component {

  state = {
    menu: "",
    image: "",
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
    if (data[0]) { this.setState({ menu: data[0].foodname }) };
  };
  // boxopen = () => {
  //   setTimeout(() => {
  //     this.getRandomMenu;
  //   }, 2000);
  // }

  render() {
    const menu = this.state;
    return (
     
        <div className="background">
          <div className="result_text">오늘 먹을 음식은?</div>

          <div className="random_section" >
            <div className="result_food">
              {this.state.menu}
            </div>

            <h2>
              <button onClick={() => {
                this.getRandomMenu();
              }}>여기 누르면 메뉴가 랜덤으로 나옴</button>
            </h2>

            {/* 박스 클릭 페이지로 이동 */}
            <Link to="/random/result" > 
              <button className="start_test"> 박스 다시 열기</button>
            </Link>

            {/* 현재 페이지 재로딩으로 메뉴 바꾸기 */}
            <button onClick={() =>{window.location.reload()}} className="start_test">
              다른메뉴 추천받기
            </button>

          </div>
      </div>
    
    );
  }
}

export default Random_result_open_section;