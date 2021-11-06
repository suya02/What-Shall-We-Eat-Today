import React, { Component } from 'react';
import egg from '/home/ubuntu/ict/project/src/images/egg2.png'
import nav from '/home/ubuntu/ict/project/src/images/nav.png'
import '/home/ubuntu/ict/project/src/custom.css';
import { Link } from 'react-router-dom';
import $ from "jquery";

class Main_header extends Component {

    render() {
        $(document).ready(function() {
            const toggleBtn = document.querySelector('.navbar__toogleBtn');
            const menu = document.querySelector('.navbar__menu');

            toggleBtn.addEventListener('click', () => {
            menu.classList.toggle('active'); // 클릭시 active없으면 active추가
            });
        });
        
        return (
            <>
            <div className="pc_ver">
            <header className="Main_header">
            
            <div className="header_logo">
                    <Link to="/"> 
                        <img src={egg} alt="logo" className="eggLogo" /> 
                        <div className="link_font">
                            오늘 뭐 먹지? 
                        </div>
                    </Link>
                </div>

                <ul className="header_menu_ul">
                    <li> 
                        <Link to="/delivery"> 
                        <div className="link_font">배달음식 뭐 먹지?</div>
                        </Link>
                    </li>
                    <li> <Link to="/homemeal"> 
                        <div className="link_font">집에서 뭐 해먹지? </div>
                        </Link>
                    </li>

                    <li> <Link to="/random"> 
                        <div className="link_font">1초안에 알려줘! </div>
                        </Link>
                    </li>
                </ul>
            </header>
            </div>

            <div className="mo_ver">
            <nav className="navbar">
                <Link to="/"> 
                    <img src={egg} alt="logo" className="eggLogo_mo" /> 
                    <div className="navbar__logo">오늘 뭐 먹지?</div>
                </Link>
    
                <ul className="navbar__menu">
                    <li><Link to="/delivery"> 배달음식 뭐 먹지?</Link></li>
                    <li><Link to="/homemeal">집에서 뭐 해먹지?</Link></li>
                    <li><Link to="/random"> 1초안에 알려줘!</Link></li>
                </ul>
             
                <div className="navbar__toogleBtn">
                    <img src={nav} alt="logo" className="nav_img" /> 
                </div>
            </nav>
            </div>
        
            </>
        );
    }
}

export default Main_header;