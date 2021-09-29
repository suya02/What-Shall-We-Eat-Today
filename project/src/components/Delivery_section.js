import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import pan from '/home/ubuntu/ict/project/src/images/pan2.png'

class Delibery_section extends Component {
    render() {
        return (
            <div>
                <div className="sections">
                    <img src={ pan } alt="pan" className="pan" />
                    <div className="section_text">
                        <div className="section_text_big"> 
                            배달음식 뭐 먹지? <br />
                        </div>
                        <div className="section_text_small"> 
                            뭐 먹을지 고민 될 때! 1분 안에 메뉴 고르기!<br />
                        </div>

                        <br />

                        
                        <Link to="/delivery_question" >
                            <button className="start_test">
                                Start
                            </button>  
                        </Link>
                    </div>           
                </div>
            </div>
        );
    }
}

export default Delibery_section;