import React from 'react';
import {Button} from 'react-bootstrap';
import './Header.css';

const Header = () => { 
    return (
     <div className="button-group">
        <Button bsStyle="primary" >Home</Button>
        &nbsp;
        <Button bsStyle="primary">Gallery</Button>
        <p>Follow Me To Travel Around CANADA</p>
     </div>   
    )
};


export default Header;