import React, { Component } from 'react';
import '/home/ubuntu/ict/project/src/custom.css';
import pan from '/home/ubuntu/ict/project/src/images/pan2.png'
import Header from '/home/ubuntu/ict/project/src/components/header.js'
import Share from '/home/ubuntu/ict/project/src/components/share.js'
import Nav from '/home/ubuntu/ict/project/src/components/nav.js'
import axios from 'axios';





class Delivery_Result extends Component {
    //state 설정
    state = {
        menu: "디폴트",
        image: ""
    }


    getCourses = async () => {  //api에서 get요청을 하는 함수
        //이부분에서 결과로 나온 메뉴를 설정해준다.
        let data = await axios.get('http://3.35.17.24:5000/api').then(({ data }) => data);
        console.log(data);
        console.log(typeof (data));
        this.setState({ menu: data.result1 })
    }


    //마운트가 끝났을 때 get요청을 하는 것이 좋다.
    componentDidMount() {
        this.getCourses();
    }


    render() {
        return (
            <div>
                <Header />

                <div className="background">
                    <div className="result_text"> 내가 오늘 먹을 음식은 ?</div>
                    <div>
                        {this.state.menu ? this.state.menu : "로딩중"} {/*마운트가 되서 menu에 데이터가 들어오면 menu를 출력 그렇지 아니면 로딩중이라는 문구를 출력*/}
                        <img src={pan} className="result_pan" />

                    </div>
                </div>

                <Share />
                <Nav />
            </div>
        );
    }
}

export default Delivery_Result;