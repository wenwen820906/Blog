import React from 'react';
import {Nav,Navbar,NavItem} from 'react-bootstrap';
import './Header.css';

const Header = () => { 
    return (
     <div>
       <Navbar inverse collapseOnSelect>
       
        <Navbar.Header>
            <Navbar.Brand>
                <a href="#brand">My Trip</a>
            </Navbar.Brand>
            <Navbar.Toggle />
        </Navbar.Header>

        <Navbar.Collapse>
            <Nav>
                <NavItem eventKey={1} href="#">
                     Home
                </NavItem>
                 <NavItem eventKey={2} href="#">
                     Gallery
                 </NavItem>
             </Nav>
        </Navbar.Collapse>
        
        </Navbar>
        <div className = 'button-group' >
            <h1>Follow Me To Travel Around CANADA</h1>
        </div>
     </div>   
    )
};


export default Header;