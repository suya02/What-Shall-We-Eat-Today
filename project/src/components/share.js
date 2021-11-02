import React, { Component } from 'react';
import '/home/ubuntu/ict/project/src/custom.css';
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


                <img src={baemin} className="share_icon" />



                <img src={link} className="share_icon" />

            </div>
        );
    }
}

export default Share;