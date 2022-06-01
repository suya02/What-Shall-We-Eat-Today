import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import pan from 'images/pan.png'

class HomemealSection extends Component {
    render() {
        return (
            <div className="sections">
                <div className="wid">
                    <img src={pan} alt="pan" className="pan2" />
                </div>
                <div className="section_text_big">
                    집에서 뭐 해먹지? <br />
                </div>
                <div className="section_text_small">
                    조리시간으로 뭐 해먹을지 결정하기!<br />
                </div>

                <br />

                <Link to="/Homemeal_question" >    
                    <div className="center">              
                    <button className="start_test" style={{cursor:'pointer'}}>
                        Start
                    </button>
                    </div>
                </Link>
            </div>
        );
    }
}

export default HomemealSection;