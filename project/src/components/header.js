import React, { Component } from 'react';
import '/home/ubuntu/ict/project/src/header.css'

class Header extends Component {

    render() {
        return (
            <header className="header">



                <div className="header_logo">
                    오늘 뭐 먹지?
                </div>


                <ul className="header_menu_ul">

                    <li> <Link to="/delivery"> About me </Link></li>
                    <li> <Link to="/homemeal"> Albums </Link></li>
                    <li> <Link to="/random"> Photos </Link></li>
                </ul>


            </header>





        );
    }
}

export default Header;