import React from 'react';
import './Section.css';
import {Link} from 'react-router-dom';


class Section extends React.Component {
    render() {
        return (
            <Link to={`/Blog/article?id=${this.props.id}`} className='link' >
                <div className='section' id={this.props.id}>
                    <div className='content'>
                        <h2>{this.props.title}{this.props.city} </h2>         
                    </div>    
                </div>
            </Link>
        )
    }
}

export default Section;