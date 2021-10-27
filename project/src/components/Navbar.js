import React, { Component } from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import '/home/ubuntu/ict/project/src/custom.css';
import egg from '/home/ubuntu/ict/project/src/images/egg2.png'

class MainHeader extends Component {
    render() {
        return (
            <Navbar className="MainHeader" expand="lg">
            <Container>
                <Navbar.Brand className="header_logo" href="/"><img src={egg} alt="logo" className="eggLogo" />오늘 뭐 먹지?</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="header_menu_ul">
                    <Nav.Link href="/delivery">배달음식 뭐 먹지?</Nav.Link>
                    <Nav.Link href="/homemeal">집에서 뭐 해먹지?</Nav.Link>
                    <Nav.Link href="/random">1초안에 알려줘!</Nav.Link>
                </Nav>
                </Navbar.Collapse>
            </Container>
            </Navbar>
        );
    }
}

export default MainHeader;

