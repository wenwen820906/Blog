import React from 'react';
import Section from './Section';
import './Main.css';

const Main = () => {
    return(
        <div id="main">
            <Section
                city='Canada'
                title='The First Time'
                id='section1'
            />
            <Section
                city='Kelowna'
                title='The First Time'
                id='section2'
            />
            <Section
                city='Lake Louise'
                title='The First Time'
                id='section3'
            />
            <Section
                city='East of Canada'
                title='The First Time'
                id='section4'
            />
        </div>

    )
};

export default Main ;