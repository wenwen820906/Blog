import React from 'react';
import {Nav,Navbar,NavItem} from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import './Header.css';

const Header = () => { 
    return (
     <div className='nav'>
     <div className='navbar'>
       <Navbar inverse collapseOnSelect>
       
        <Navbar.Header>
            <Navbar.Brand>
                <a href="#brand">My Trip</a>
            </Navbar.Brand>
            <Navbar.Toggle />
        </Navbar.Header>

        <Navbar.Collapse>
            <Nav>
                <LinkContainer to="/"> 
                    <NavItem eventKey={1}>
                     Home
                    </NavItem>
                </LinkContainer>
                <LinkContainer to="/gallery"> 
                     <NavItem eventKey={2}>
                     Gallery
                    </NavItem>
                 </LinkContainer>
             </Nav>
        </Navbar.Collapse>
        
        </Navbar>
        </div>
        <div className = 'backgroundcol' >
            <div className='text'>
            <h3>Follow Me To Travel Around CANADA</h3>
            <h4>In 2016,I went to CANADA for working holiday.</h4>
            <h4>And this is the memory of my trip.</h4>
            <h4>Hope you guys enjoy it!</h4>
            </div>
        </div>
     </div>   
    )
};


export default Header;