import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';

import UserPic from '../assets/img/user-pic.jpg';
import LexLogo from '../assets/img/lex-logo.png';

export default function TopNav(props) {
    console.log(props)
    return <>
        <Navbar className="top-nav p-2" bg="dark">
            <Button type="button" id="sidebarCollapse" className="btn btn-danger mx-3" onClick={props.onPressToggle} >
                <i class="fa fa-bars"></i>
            </Button>
            <Navbar.Brand href="#home" className="mr-auto">
                <h2>Detail View</h2>
            </Navbar.Brand>
            <Nav className="ml-auto mr-2">
                <Nav.Link href="#user" className="top-nav-li"><span className="align-middle">Phill Moran</span></Nav.Link>
                <Nav.Link href="#"><img
                        src={UserPic}
                        className="d-inline-block align-top user-pic"
                        alt="Lexington innovations logo"
                    /></Nav.Link>
                <Nav.Link href="#pricing"><img
                        src={LexLogo}
                        className="d-inline-block align-top logo"
                        alt="Lexington innovations logo"
                    /></Nav.Link>
            </Nav>
        </Navbar>
    </>
}
