import React, { Component } from 'react';
import Ball from './Ball';
import machine from '/home/ubuntu/ict/project/src/images/random.png'
import box1 from '/home/ubuntu/ict/project/src/images/box1.png'
import box2 from '/home/ubuntu/ict/project/src/images/box2.png'
import axios from "axios";


function getWinNumbers() {
  console.log('getWinNumbers');
  const candidate = Array(45).fill().map((v, i) => i + 1);
  const shuffle = [];
  while (candidate.length > 0) {
    shuffle.push(candidate.splice(Math.floor(Math.random() * candidate.length), 1)[0]);
  }
  const winNumbers = shuffle.slice(0, 2).sort((p, c) => p - c);
  return [...winNumbers];
}

// 박스  onclick 시 박스 이미지변경하면서 메뉴 나타내기
// function ChangeImg(){
//   document.getElementById("imgId").src = "images/box2.png";
//   console.log(src);
// }

class Random_result extends Component {

  state = {
    winNumbers: getWinNumbers(), // 당첨 숫자들
    winBalls: [],
    redo: false,
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

  runTimeouts = () => {
    console.log('runTimeouts');
    const { winNumbers } = this.state;
    for (let i = 0; i < winNumbers.length - 1; i++) {
      this.timeouts[i] = setTimeout(() => {
        this.setState((prevState) => {
          return {
            winBalls: [...prevState.winBalls, winNumbers[i]],
          };
        });
      }, (i + 1) * 1000);
    }
    this.timeouts[1] = setTimeout(() => {
      this.setState({
        bonus: winNumbers[1],
        redo: true,
      });
    }, 3000);
  };

  componentDidMount() {

    console.log('didMount');
    this.runTimeouts();
    console.log('로또 숫자를 생성합니다.');
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('didUpdate');
    if (this.state.winBalls.length === 0) {
      this.runTimeouts();
    }
    if (prevState.winNumbers !== this.state.winNumbers) {
      console.log('로또 숫자를 생성합니다.');
    }
  }

  componentWillUnmount() {
    this.timeouts.forEach((v) => {
      clearTimeout(v);
    });
  }

  onClickRedo = () => {

    console.log('onClickRedo');
    this.setState({
      winNumbers: getWinNumbers(), // 당첨 숫자들
      winBalls: [],
      redo: false,
    });

    this.timeouts = [];
    console.log(this.state.winNumbers[0]);







  };

  render() {
    const { winBalls, redo, i_src } = this.state;
    return (
      <div>
        <div className="background">
          <div className="result_text">오늘은 뭐 먹지?</div>

          <div className="random_section">
            {/* <img src={ machine } alt="machine" className="pan" /> */}
            <div className="bounce">open </div>
            <div className="box" onClick="ChangeImg()" >
              <img id="imgId" src={box1} alt="box1" className="box1" />
            </div>


          </div>
          <div className="random_result">
            {winBalls.map((v) => <Ball key={v} number={v} />)}
            {this.state.menu ? this.state.menu : "랜덤으로 메뉴 선택중~!"}
          </div>
          {redo && <button className="start_test" onClick={this.onClickRedo}>한 번 더!</button>}

          <h2>
            <button onClick={() => {
              this.getRandomMenu();
            }}>여기 누르면 메뉴가 랜덤으로 나옴</button>
          </h2>

        </div>



      </div>



    );
  }
}

export default Random_result;