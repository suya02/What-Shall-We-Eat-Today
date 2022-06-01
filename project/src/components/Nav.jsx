import React, { Component } from 'react';
import '../custom.css';
import git from 'images/githubicon.png'
import email from 'images/emailicon.png'
import call from 'images/callicon.png'

class Nav extends Component {

    render() {
        return (

            <div className="nav">
                <div className="contact">
                    Contacts
                </div>
                <br />

                <div className="contact_text">
                    <div>
                        <img src={email} className="navicon" alt="navicon" />&nbsp;
                        E-mail : lch92458@gmail.com
                    </div>

                    <div>
                        <img src={call} className="navicon" alt="navicon" />&nbsp;
                        010 3949 9245
                    </div>

                    <div>
                        <img src={git} className="navicon" alt="navicon" />&nbsp;
                        <a href="https://github.com/Paydaypermanently/What-Shall-We-Eat-Today" target="_blank" rel="noreferrer"> Github </a>
                    </div>

                    <br />
                    <div>
                        copyright(c) 2021. code your choice (이춘호, 류수현, 오태양, 김이현). All rights reserved.
                    </div>
                </div>
            </div>



        );
    }
}

export default Nav;

//  아이콘 출처
// 아이콘몬스터
// https://iconmonstr.com/