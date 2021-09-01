import React, { Component } from 'react';
import '/home/ubuntu/ict/project/src/custom.css';
import { Link } from 'react-router-dom';

import git from '/home/ubuntu/ict/project/src/images/githubicon.png'
import email from '/home/ubuntu/ict/project/src/images/emailicon.png'
import call from '/home/ubuntu/ict/project/src/images/callicon.png'

class Nav extends Component {

    render() {
        return (

            <div className="nav">
                <div className="contect">
                    Contects
                </div>

                <br />
                <img src={ email } className="navicon" />&nbsp; 
                E-mail : ~~@naver.com
                <br /><br />

                <img src={ call } className="navicon" />&nbsp; 
                010 0000 0000
                <br /><br />
                
                <img src={ git } className="navicon" />&nbsp; 
                <a href="https://github.com/Paydaypermanently/What-Shall-We-Eat-Today" target="_blank"> Github </a> 

               
                <br /><br /><br />
                copyright(c) 2021. code your choice. All rights reserved.
            </div>



        );
    }
}

export default Nav;

//  아이콘 출처

// email
// https://www.pngwing.com/ko/free-png-dggjw

// github
// https://www.flaticon.com/kr/free-icon/github-logo_25231#
// <div>아이콘 제작자 <a href="https://www.flaticon.com/kr/authors/dave-gandy" title="Dave Gandy">Dave Gandy</a> from <a href="https://www.flaticon.com/kr/" title="Flaticon">www.flaticon.com</a></div>
