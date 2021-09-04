import React, { Component } from 'react';
import egg from '/home/ubuntu/ict/project/src/images/egg2.png'
import 'custom.css';
import { Link } from 'react-router-dom';

class Header3 extends Component {

    render() {
        return (
            <>
            <header className="header3">

                <div className="header_logo">
                    <img src={egg} alt="logo" className="eggLogo" /> 
                    <Link to="/"> 오늘 뭐 먹지? </Link>
                </div>

                <ul className="header_menu_ul">
                    <li> <Link to="/delivery" > 배달음식 뭐 먹지? </Link></li>
                    <li> <Link to="/homemeal"> 집에서 뭐 해먹지? </Link></li>
                    <li> <Link to="/random"> 1초안에 알려줘! </Link></li>
                </ul>

            </header>
            </>
        );
    }
}

export default Header3;