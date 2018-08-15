import React from 'react';
import './Section.css';
import {Link} from 'react-router-dom';


class Section extends React.Component {
    render() {
        return (
            <Link to={`/article?id=${this.props.id}`} className='link' >
                <div className='section' id={this.props.id}>
                    <div className='content'>
                        <h1>{this.props.city} {this.props.title} </h1>         
                    </div>    
                </div>
            </Link>
        )
    }
}

export default Section;