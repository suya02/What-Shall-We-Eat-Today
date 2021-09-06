import React, { Component } from 'react';
import egg from '/home/ubuntu/ict/project/src/images/egg2.png'
import '/home/ubuntu/ict/project/src/custom.css';
import { Link } from 'react-router-dom';

class Header2 extends Component {

    render() {
        return (
            <>
            <header className="header2">
                
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
            </>
        );
    }
}

export default Header2;