import React from 'react';
import Section from './Section';
import './Main.css';

const Main = () => {
    return(
        <div id="main">
            <Section
                city='Canada'
                title='The First Time In '
                id='section1'
            />
            <Section
                city='Kelowna'
                title='My Life In '
                id='section2'
            />
            <Section
                city='Lake Louise'
                title='The Backyard .'
                id='section3'
            />
            <Section
                city='East of Canada'
                title='Head To '
                id='section4'
            />
        </div>

    )
};

export default Main ;