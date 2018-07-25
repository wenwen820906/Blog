import React from 'react';
import {Button} from 'react-bootstrap';
import './Section.css';

class Section extends React.Component {
    render() {
        return (
            <div className='section' id={this.props.id}>
                <h1>{this.props.country}</h1>
                <h1>{this.props.title}</h1>
        
                <Button bsStyle="primary" >More</Button>
            </div>
        )
    }
}

export default Section;