import React, { Component } from 'react';

import '/home/ubuntu/ict/project/src/custom.css';
import { Link } from 'react-router-dom';
import call from '/home/ubuntu/ict/project/src/images/callicon.png'
import egg from '/home/ubuntu/ict/project/src/images/egg2.png'

class Main_section extends Component {

    render() {
        return (
            <div className="section">
                <div className="Main_section">

                    <div className="card1">
                        <img src={ call } onMouseOver="this.src='/images/egg2.png'" onmouseout="this.src={ call }"/>
                    </div>
                    
                    <div className="card2">
                        사진2
                    </div>

                    <div className="card3">
                        사진3
                    </div>

                </div>
                <br />
                
                <div className="Main_section">
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
                
                <div className="Main_section">
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
            </div>
        );
    }
}

export default Main_section;

