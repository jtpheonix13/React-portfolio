import React from 'react';
import Project from '../Projects';

//import images
import quizImg from '../../assets/images/jsQuiz.png';
import audioImg from '../../assets/images/audioRED.png';
import noteImg from '../../assets/images/noteTaker.png';
import outImg from '../../assets/images/outnabout.png';
import weatherImg from '../../assets/images/weather.png';
import workImg from '../../assets/images/work-day.png';

// create and array to hole project info

const projectArray = [
    {
        id: 0,
        imgPath: audioImg,
        Url: 'https://lit-shelf-80408.herokuapp.com/',
        githubUrl: 'https://github.com/jtpheonix13/Audio_Red',
        name: 'AudioRed',
        alt: 'Image of AudioRed site',
        code: 'Javascript, Handlebars, Express, Sequelize, Node',
    },
    {
        id: 1,
        imgPath: outImg,
        Url: 'https://jtpheonix13.github.io/stunning-guacamole/',
        githubUrl: 'https://github.com/jtpheonix13/stunning-guacamole',
        name: 'Out N About',
        alt: 'Image of Out N About site',
        code: 'Javascript, HTML, Bootstrap, GoogleMaps API',
    },
    {
        id: 2,
        imgPath: quizImg,
        Url: 'https://jtpheonix13.github.io/code-quiz',
        githubUrl: 'https://github.com/jtpheonix13/code-quiz',
        name: 'Code Quiz',
        alt: 'Image of Code Quiz site',
        code: 'Javascript, HTML, CSS',
    },
    {
        id: 3,
        imgPath: noteImg,
        Url: 'https://thawing-fjord-44883.herokuapp.com/',
        githubUrl: 'https://github.com/jtpheonix13/note-taker',
        name: 'Note Taker',
        alt: 'Image of Note Taker site',
        code: 'Javascript, Express, Node, REST API',
    },
    {
        id: 4,
        imgPath: weatherImg,
        Url: 'https://jtpheonix.github.io/weather-dashboard',
        githubUrl: 'https://github.com/jtpheonix13/weather-dashboard',
        name: 'Weather Dashboard',
        alt: 'Image of Weather Dashboard site',
        code: 'Javascript, HTML',
    },
    {
        id: 5,
        imgPath: workImg,
        Url: 'https://jtpheonix13.github.io/work-day-scheduler/',
        githubUrl: 'https://github.com/jtpheonix13/work-day-scheduler',
        name: 'Work Day Scheduler',
        alt: 'Image of Work Day Scheduler site',
        code: 'Javascript, HTML, Jquery, CSS',
    },
];

// export to populate Portfolio
export default function Portfolio() {
    return (
        <div>
            <Project projects={projectArray}/>
        </div>
    )
};