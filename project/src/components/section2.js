import React, { Component, useState } from "react";
import { Route, Link } from "react-router-dom";
import "/home/ubuntu/ict/project/src/custom.css";
import bar from "/home/ubuntu/ict/project/src/images/baricon.png";
import pan from "/home/ubuntu/ict/project/src/images/pan2.png";
import redo from "/home/ubuntu/ict/project/src/images/redo.png";
import axios from "axios";

let vs = "vs"; //질문이 모두 끝나면 vs가 요리중 이라는 문자열로 바뀌게 구현
let q1 = [
  "한식",
  "양식",
  "3만원 이하",
  "안 매움",
  "0~500kcal",
  "다인분",
  "국물 없음",
  "술 안주",
]; //왼쪽 질문 모음
let q2 = [
  "일식",
  "아시안",
  "3만원 이상",
  "매움",
  "500~1000kcal",
  "1인분",
  "국물 있음",
  "식사",
]; //오른쪽 질문 모음
let q3 = []; //한식, 일식, 양식, 아시안 중 두 개의 옵션 여기에 추가
let results = []; //질문들의 결과 배열
let check1 = true; //처음 두 질문의 결과는 q3 배열에 넣기 위해 설정
let check2 = true; //처음 두 질문의 결과는 q3 배열에 넣기 위해 설정
let q1_check = 0; //왼쪽 질문만 클릭하는 경우 방지용
let q2_check = 0; //오른쪽 질문만 클릭하는 경우 방지용

//function reload() { (location || window.location || document.location).reload(); }  //페이지 새로고침 함수, 테스트 다시하기 시

//결과보기 클릭 시 result 배열을 node서버로 post하는  함수 생성

/*
function postResults() {

    axios.post(('http://3.36.96.79:5000/api'), {
        result1: (results[0]),
        result2: (results[1]),
        result3: (results[2]),
        result4: (results[3]),
        result5: (results[4]),
        result6: (results[5]),
        result7: (results[6]),
    })
        .then(function (response) {
            console.log(response);
        })
        .catch(function (error) {
            console.log(error);
        });




}

*/

class Section2 extends Component {
  constructor(probs) {
    //state 클래스버전으로 사용
    super(probs);
    this.state = {
      count: 0,
    };
  }

  createCourse = async () => {
    let res = await axios.post("http://3.35.17.24:5000/api", {
      result1: results[0],
      result2: results[1],
      result3: results[2],
      result4: results[3],
      result5: results[4],
      result6: results[5],
      result7: results[6],
    });
    console.log(res);
  };

  render() {
    return (
      <div>
        <div className="bar_out">
          (바 좌측에 "뒤로" /// 우측엔 질문 진행율) ex) 1 / 10
          <div>
            <img src={bar} alt="pan" className="bar_in" />
          </div>
        </div>

        <div className="question">
          <img src={pan} alt="pan" className="pan" />
          <div
            className="question_1"
            onClick={() => {
              // 왼쪽 질문 클릭 시
              console.log(this.state.count); //테스트용
              q1_check = q1_check + 1;

              if (this.state.count < q1.length + 1) {
                //count가 q1배열의 길이보다 작을동안, 즉 질문이 다 끝날때동안

                results.push(q1[this.state.count]); //클릭된 질문을 results 배열의 뒤에 삽입

                if (this.state.count <= 1) {
                  //첫번째, 두번째 한식,양식,일식,아시안 중에 묻는 질문은
                  q3.push(results[this.state.count]); //q3에 따로 저장
                }
                if (this.state.count > 1 && check1 == true) {
                  //q3에 있는 질문을 다시 q1배열의 맨 뒤에 삽입 (4개의 국가 음식 중 하나를 뽑아내기 위함)
                  q1.push(q3[0]);
                  check1 = false; //check를 다시 false로 주어 한번만 실행되게 함
                }

                if (q1_check == 8) {
                  //왼쪽 질문만 클릭했을때
                  q2.push(q3[1]);
                }

                this.setState({ count: this.state.count + 1 }); //count값 증가

                if (this.state.count > 7) {
                  //모든 질문이 끝나면 vs를 요리중으로 변경
                  vs = "요리중";
                  results.shift();
                  results.shift();
                  let tmp = results.pop();
                  results.unshift(tmp);
                  console.log(results);
                  this.createCourse();
                  //result배열에 있는 국가별 음식 중 하나가 배열의 맨 앞부분과 뒷부분에 겹치므로 앞부분의 음식 종류(한식,일식,양식,아시안)는 제거해야 함
                  //제거 한 뒤에는 pop으로 맨 뒤에있는 원소(한식,양식,아시안,중식)중 하나를 뽑아낸다음 배열의 맨 앞에 다시 삽입
                  //데이터베이스 스키마 순서대로 post하기 위함
                }
              }
            }}
          >
            {" "}
            <h2>{q1[this.state.count]} </h2>
          </div>
          <div className="vs"> {vs} </div>
          <div
            className="question_2"
            onClick={() => {
              //위와 동일한 알고리즘
              console.log(this.state.count);
              q2_check = q2_check + 1;

              if (this.state.count < q2.length + 1) {
                results.push(q2[this.state.count]);

                if (this.state.count <= 1) {
                  q3.push(results[this.state.count]);
                }

                if (this.state.count > 1 && check2 == true) {
                  q2.push(q3[1]);
                  check2 = false;
                }

                if (q2_check == 8) {
                  //오른쪽 질문만 클릭했을때
                  q1.push(q3[0]);
                }

                this.setState({ count: this.state.count + 1 });
                if (this.state.count > 7) {
                  vs = "요리중";
                  results.shift();
                  results.shift();
                  let tmp = results.pop();
                  results.unshift(tmp);
                  console.log(results);
                  this.createCourse();
                }
              }
            }}
          >
            {" "}
            <h2>{q2[this.state.count]}</h2>
          </div>
        </div>

        <div className="background">
          <Link to="/delivery_question">
            <button href="" className="again_test">
              테스트 다시하기
              <img src={redo} className="again_icon" />
            </button>
          </Link>

          <Link to="/Delivery_result">
            <button href="" className="again_test">
              {" "}
              결과보기
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

export default Section2;

// 프라이팬 이미지 출처
// https://www.pngwing.com/ko/free-png-sxezy/download
