import React, { Component } from 'react';
import '/home/ubuntu/ict/project/src/custom.css';
import pan from '/home/ubuntu/ict/project/src/images/pan2.png'
import Header from '/home/ubuntu/ict/project/src/components/header.js'
import Share from '/home/ubuntu/ict/project/src/components/share.js'
import Nav from '/home/ubuntu/ict/project/src/components/nav.js'
import axios from 'axios';
const tmp = "damn"

class Delivery_Result extends Component {
    //state 설정
    state = {
        menu: "",
        image: ""
    }

    //꼭 마운트 끝났을 때 데이터 불러오기 
    //axios를 이용한 Aip 호출
    componentDidMount() {

        axios.get('http://3.36.96.79:5000/api')
            .then(res => {
                console.log(res.data.menu);
                this.setState({ menu: res.data.menu });
            })
            .catch(err => {
                console.log(err);
            })


        //ip를 입력하면 http통신 가능
        axios.post(('http://3.36.96.79:5000/apipost'), {
            firstName: (tmp),
            lastName: 'Flintstone'
        })
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });


    }





    //fetch를 이용한 API호출
    /*
        componentDidMount() {
            this.callApi()
                .then(res => this.setState({ menu: res.menu }))
                .catch(err => console.log(err));
    
        }
    
        callApi = async () => {
            const response = await fetch('/api');
            const body = await response.json();
            return body;
        }
    */
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