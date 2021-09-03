import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';

import pan from '/home/ubuntu/ict/project/src/images/pan2.png'

class Section2 extends Component {
    render() {
        return (
            <div>
                <div className="section2">
                    <img src={ pan } alt="pan" className="pan" />
                    
                    <div className="section2_text"> 
                        배달음식 뭐 먹지? <br />
                    </div>
                    <div className="section2_text2"> 
                        테스트 유도 문구 (ex) 뭐 먹을지 고민 될 때! 1분 안에 메뉴 고르기!)<br />
                    </div>
                    <br />
                    <button>
                    <Link to="/delivery/test" >Test Start</Link></button>                    
                </div>
            </div>
        );
    }
}

export default Section2;