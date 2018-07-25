import React from 'react';
import Section from './Section';
import './Main.css';

const Main = () => {
    return(
        <div id="main">
            <Section
                country='Canada'
                title='The First Time'
                id='section1'
            />
            <Section
                country='Kelowna'
                title='The First Time'
                id='section2'
            />
            <Section
                country='Lake Louise'
                title='The First Time'
                id='section3'
            />
            <Section
                country='East of Canada'
                title='The First Time'
                id='section4'
            />
        </div>

    )
};

export default Main ;