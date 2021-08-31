import React, { Component } from 'react';

import '/home/ubuntu/ict/project/src/custom.css';
import { Link } from 'react-router-dom';

class Section2 extends Component {

    render() {
        return (
<>
            <div className="section2">

                <div className="card1">
                    사진1
                </div>
                
                <div className="card2">
                    사진2
                </div>

                <div className="card3">
                    사진3
                </div>

            </div>
            <br />
            
            <div className="section2">
                <div className="card1-1">
                    배달음식 뭐 먹지?
                </div>            
                
                <div className="card2-1">
                    집에서 뭐 해먹지?
                </div>

                <div className="card3-1">
                    1초안에 알려줘!
                </div>
            </div>

            <br />
            
            <div className="section2">
                <div className="card1-2">
                    배달음식 뭐 먹지? 페이지 간단 설명
                </div>            
                
                <div className="card2-2">
                    집에서 뭐 해먹지? 페이지 간단 설명
                </div>

                <div className="card3-2">
                    1초안에 알려줘! 페이지 간단 설명
                </div>
            </div>
</>
        );
    }
}

export default Section2;

