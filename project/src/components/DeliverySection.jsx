import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import pan from '/home/ubuntu/ict/project/src/images/pan2.png'

class DeliverySection extends Component {
    render() {
        return (
            <div>
                <div className="sections">
                    <div className="wid">
                        <img src={pan} alt="pan" className="pan" />
                    </div>

                    <div className="section_text_big">
                        배달음식 뭐 먹지? <br />
                    </div>
                    <div className="section_text_small">
                        뭐 먹을지 고민 될 때! 1분 안에 메뉴 고르기!<br />
                    </div>

                    <br />

                    <Link to="/delivery_question" >
                        <div className="center">
                            <button className="start_test">
                                Start
                            </button>
                        </div>
                    </Link>
                </div>
            </div>
        );
    }
}

export default DeliverySection;