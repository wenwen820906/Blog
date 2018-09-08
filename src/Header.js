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
                <IndexLinkContainer to="/Blog"> 
                    <NavItem eventKey={1}>
                     Home
                    </NavItem>
                </IndexLinkContainer>
                
                <NavDropdown eventKey={2} title="Articles" id="basic-nav-dropdown">
                    <LinkContainer to="/Blog/article?id=section1">
                        <MenuItem eventKey={2.1}>The First Time In Canada</MenuItem>
                    </LinkContainer>
                    <LinkContainer to="/Blog/article?id=section2">
                        <MenuItem eventKey={2.2}>My Life In Kelowna</MenuItem>
                    </LinkContainer>
                    <LinkContainer to="/Blog/article?id=section3">
                        <MenuItem eventKey={2.3}>The Backyard Lake Louise</MenuItem>
                    </LinkContainer>
                    <LinkContainer to="/Blog/article?id=section4">
                        <MenuItem eventKey={2.4}>Head To East Of Canada</MenuItem>
                    </LinkContainer>
                </NavDropdown>
                <LinkContainer to="/Blog/gallery"> 
                     <NavItem eventKey={3}>
                     Gallery
                    </NavItem>
                 </LinkContainer>
             </Nav>
        </Navbar.Collapse>
        
        </Navbar>
        </div>
        <div className='backgroundcol'>
            <div className='texts'>
            <h1>Follow Me To Travel Around CANADA</h1><hr/>
            <p>In 2016, I went to CANADA for working holiday.</p>
            <p>And this is the memory of my trip .</p>
            <p>Hope you guys enjoy it!</p>
            </div>
        </div>    
     </div>   
    )
};


export default Header;