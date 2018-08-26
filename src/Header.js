import React from 'react';
import {Nav,Navbar,NavItem,MenuItem,NavDropdown} from 'react-bootstrap';
import { LinkContainer ,IndexLinkContainer} from 'react-router-bootstrap';
import './Header.css';

const Header = () => { 
    return (
     <div className='background'>
        <div className='navbar'>
       <Navbar collapseOnSelect>
       
        <Navbar.Header>
            <Navbar.Brand>
                <a href="#brand">My Trip</a>
            </Navbar.Brand>
            <Navbar.Toggle />
        </Navbar.Header>

        <Navbar.Collapse>
            <Nav>
                <IndexLinkContainer to="/"> 
                    <NavItem eventKey={1}>
                     Home
                    </NavItem>
                </IndexLinkContainer>
                <LinkContainer to="/gallery"> 
                     <NavItem eventKey={2}>
                     Gallery
                    </NavItem>
                 </LinkContainer>
                <NavDropdown eventKey={3} title="Articles" id="basic-nav-dropdown">
                    <LinkContainer to="/article?id=section1">
                        <MenuItem eventKey={3.1}>The First Time In Canada</MenuItem>
                    </LinkContainer>
                    <LinkContainer to="/article?id=section2">
                        <MenuItem eventKey={3.2}>My Life In Kelowna</MenuItem>
                    </LinkContainer>
                    <LinkContainer to="/article?id=section3">
                        <MenuItem eventKey={3.3}>The Backyard Lake Louise</MenuItem>
                    </LinkContainer>
                    <LinkContainer to="/article?id=section4">
                        <MenuItem eventKey={3.4}>Head To East Of Canada</MenuItem>
                    </LinkContainer>
                </NavDropdown>
             </Nav>
        </Navbar.Collapse>
        
        </Navbar>
        </div>
        <div className='backgroundcol'>
            <div className='texts'>
            <h1>Follow Me To Travel Around CANADA</h1>
            <h3>In 2016, I went to CANADA for working holiday.</h3>
            <h3>And this is the memory of my trip.</h3>
            <h3>Hope you guys enjoy it!</h3>
            </div>
        </div>    
     </div>   
    )
};


export default Header;