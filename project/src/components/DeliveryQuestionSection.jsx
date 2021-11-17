import React, { Component } from "react";
import { Link } from "react-router-dom";
import "/home/ubuntu/ict/project/src/custom.css";
import pan from "/home/ubuntu/ict/project/src/images/pan2.png";
import redo from "/home/ubuntu/ict/project/src/images/redo.png";
import axios from "axios";
import ProgressBar from "/home/ubuntu/ict/project/src/components/Progress.jsx";
import $ from "jquery";
import PrivateProperty from '../privateProperty_client.js';

const props = PrivateProperty();
const IP = props.IP;


let result_tmp;
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

let results = []; //질문들의 결과 배열

let tmp1, tmp2;


var percent = 0
var gauge = 0
var testData = [
  { bgcolor: "orange", completed: percent, progress: gauge },
];

class DeliveryQuestionSection extends Component {

  constructor(probs) {
    //state 클래스버전으로 사용
    super(probs);
    this.state = {
      count: 0,
      percent: 0,
      gauge: 0
    };

    // this.updateProgress = (field, val) => {
    //   this.setState({ percent: this.state.percent + 11 });
    // };

  }

  createCourse = async () => {
    let res = await axios.post(`http://${IP}:5000/api`, {
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
    $(document).ready(function () {
      vs = "vs";

    });
    return (
      <div>
        <div className="background">
          <div className="bar_out">
            <div className="bar_in">
              {testData.map((item, idx) => (
                <ProgressBar key={idx} bgcolor={item.bgcolor} completed={[this.state.percent]} progress={[this.state.gauge]} />
              ))}
            </div>
          </div>
        </div>

        <div className="question_section">
          <img src={pan} alt="pan" className="pan" />
          <div className="question">
            <div
              className="question_1"
              onClick={() => {
                // 왼쪽 질문 클릭 시
                this.setState({ percent: this.state.percent + 100 / 9 });
                this.setState({ gauge: this.state.gauge + 1 });


                console.log(this.state.count); //테스트용

                if (this.state.count < q1.length) {


                  if (this.state.count === 0) {
                    results.push(q1[this.state.count]);
                    this.setState({ count: this.state.count + 1 });
                    console.log(`q1:${q1}`);
                    console.log(`q2:${q2}`);
                    console.log(`results:${results}`);
                  }

                  else if (this.state.count === 1) {

                    results.push(q1[this.state.count]);
                    this.setState({ count: this.state.count + 1 });
                    tmp1 = results.pop();
                    tmp2 = results.pop();


                    q1[2] = tmp2;
                    q2[2] = tmp1;

                    q1.push("3만원 이하");
                    q2.push("3만원 이상");

                    console.log(`tmp1:${tmp1}  tmp2:${tmp2}`);
                    console.log(`q1:${q1}`);
                    console.log(`q2:${q2}`);
                    console.log(`results:${results}`);
                  }
                  else {
                    results.push(q1[this.state.count]);
                    this.setState({ count: this.state.count + 1 });
                    console.log(`q1:${q1}`);
                    console.log(`q2:${q2}`);
                    console.log(`results:${results}`);
                  }
                }
                if (this.state.count === q1.length - 1) {
                  result_tmp = results.pop();
                  results.splice(1, 0, result_tmp);

                  console.log(`q1:${q1}`);
                  console.log(`q2:${q2}`);
                  console.log(`results:${results}`);
                  //모든 질문이 끝나면 vs를 요리중으로 변경
                  vs = "결과보기를 Click하세요!";
                  console.log(results);
                  this.createCourse();

                  //데이터베이스 스키마 순서대로 post하기 위함 
                }
              }}
            >
              {" "}
              <h2>{q1[this.state.count]}</h2>
            </div>

            <div className="vs" onClick={() => {
              if (vs === "결과보기를 Click하세요!") {
                //결과보기 클릭 시 결과 페이지(Delivery_result)로 이동 

              }
            }}>
              <h2> {vs} </h2>
            </div>

            <div
              className="question_2"
              onClick={() => {
                //위와 동일한 알고리즘
                this.setState({ percent: this.state.percent + 100 / 9 });
                this.setState({ gauge: this.state.gauge + 1 });

                console.log(this.state.count);

                if (this.state.count < q2.length) {

                  if (this.state.count === 0) {
                    results.push(q2[this.state.count]);
                    this.setState({ count: this.state.count + 1 });
                    console.log(`q1:${q1}`);
                    console.log(`q2:${q2}`);
                    console.log(`results:${results}`);
                  }

                  else if (this.state.count === 1) {
                    results.push(q2[this.state.count]);
                    this.setState({ count: this.state.count + 1 });
                    tmp1 = results.pop();
                    tmp2 = results.pop();

                    q1[2] = tmp2;
                    q2[2] = tmp1;

                    q1.push("3만원 이하");
                    q2.push("3만원 이상");
                    console.log(`tmp1:${tmp1}  tmp2:${tmp2}`);
                    console.log(`q1:${q1}`);
                    console.log(`q2:${q2}`);
                    console.log(`results:${results}`);
                  }

                  else {
                    results.push(q2[this.state.count]);
                    this.setState({ count: this.state.count + 1 });
                    console.log(`q1:${q1}`);
                    console.log(`q2:${q2}`);
                    console.log(`results:${results}`);
                  }
                }

                if (this.state.count === q2.length - 1) {
                  result_tmp = results.pop();
                  results.splice(1, 0, result_tmp);
                  console.log(`q1:${q1}`);
                  console.log(`q2:${q2}`);
                  console.log(`results:${results}`);
                  vs = "결과보기를 Click하세요!";
                  console.log(results);
                  this.createCourse();
                }
              }}
            >
              {" "}
              <h2>{q2[this.state.count]}</h2>
            </div>
          </div>
        </div>


        <div className="background">

          <Link to="/Delivery_result">
            <button href="" className="again_test">
              {" "}
              결과보기
              <img src={redo} className="again_icon" alt="icon" />
            </button>
          </Link>

          <div>
            <button onClick={() => { window.location.reload() }} className="again_test">
              테스트 다시하기
              <img src={redo} className="again_icon" alt="icon" />
            </button>
          </div>


        </div>
      </div>
    );
  }
}

export default DeliveryQuestionSection;

// 프라이팬 이미지 출처
// https://www.pngwing.com/ko/free-png-sxezy/download
