import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import pan from 'images/pan2.png'
import redo from 'images/redo.png'
import axios from "axios";
// import PrivateProperty from '../privateProperty_client.js';

// const props = PrivateProperty();
// const IP = "";


class HomemealResultSection extends Component {
    state = {
        menu: "",
        image: "",
        supplies: "",
        recipe: "",

    };

    getrecipe = async () => {
        //api에서 get요청을 하는 함수
        //이부분에서 결과로 나온 메뉴를 설정해준다.
        let data = await axios
            .get(`http://locallhost:3000/homemealapi`)
            .then(({ data }) => data);
        console.log(data);
        console.log(typeof data);
        if (data[0]) {
            this.setState({
                menu: data[0].foodname,
                supplies: data[0].supplies,
                recipe: data[0].recipes
            })
        };
    };

    //마운트가 끝났을 때 get요청을 하는 것이 좋다.
    componentDidMount() {
        this.getrecipe();
    }


    render() {
        return (
            <div className="background">
                <div className="result_text"> 내가 오늘 먹을 음식은 ?</div>
                <div className="question_section">
                    <img src={pan} alt="pan" className="pan" />
                    <div className="question">
                        <div className="question_text">
                            <h3>{this.state.menu ? this.state.menu : "메뉴 찾는 중"}{" "}</h3>
                            <h4>{this.state.supplies ? this.state.supplies : "재료 구매 중"}{" "}</h4>
                            <h4>{this.state.recipe ? this.state.recipe : "레시피 뒤지는 중"}{" "}</h4>
                        </div>
                    </div>
                </div>

                <Link to="/Homemeal_question">
                        <button href="" className="again_test" style={{cursor:'pointer'}} > 테스트 다시하기
                            <img src={redo} className="again_icon" alt="icon" />
                        </button>
                    </Link>   
            </div>
        );
    }
}

export default HomemealResultSection;