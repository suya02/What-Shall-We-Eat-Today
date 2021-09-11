import React, { Component } from 'react';
import '/home/ubuntu/ict/project/src/custom.css';
import { Route, Link } from 'react-router-dom';
import link from '/home/ubuntu/ict/project/src/images/linkicon.png'
import baemin from '/home/ubuntu/ict/project/src/images/baemin.png'
import kakao from '/home/ubuntu/ict/project/src/images/kakao.png'
import egg from '/home/ubuntu/ict/project/src/images/egg2.png'

class Share extends Component {

    render() {
        return (

            <div className="share">
                <img src={egg} alt="logo" className="eggLogo" />
                친구에게 공유하기
                <img src={egg} alt="logo" className="eggLogo" />
                <br /><br />

                <img src={kakao} className="share_icon" />

                <a href="https://www.baemin.com/shopDetail?shopDetail_shopNo=13566252&shopDetail_categoryTypeCode=1&bm_rfr=SHARE&shopDetail_campaignId=-1">
                    <img src={baemin} className="share_icon" />
                </a>

                <a href="#" onClick="clip(); return false;">
                    <img src={link} className="share_icon" />
                </a>
            </div>
        );
    }
}

export default Share;