import React from 'react';
import headShot from '../../../assets/images/Jeffrey Headshot_profile crop.jpg';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

// default export for AboutMe page

export default function AboutMe() {


    // styles

    const styles = {
        row: {
            paddingTop: '5px',
            margin: 0,
        },
        col: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'start',
            paddingLeft: '10%',
            paddingTop: '10%',
            height: '50%',
        },  
        content: {
            fontSize: '25px',
            textAlign: 'start',
        },
        img: {
            border: 'solid white 5px',
            height: '45%',
            marginBottom: '20px',
        },
        title: {
            color: 'blue',
            paddingBottom: '15px',
        },
    };

    // AboutMe
    return (
        <Row style={styles.row}>
            <Col style={styles.col}>
                <h2 style={styles.title}>About Me</h2>
                <img src={headShot} style={styles.img} alt='Jeff Taylor Headshot'/>
                <p style={styles.content}>
                    Welcome to my about me page! My name is Jeff Taylor and I am working hard to become a web developer.
                    I've worked in a lot of different fields such as, construction, HVAC, large format printing, and Real Estate.
                    However I have finally found my true passion! Writing code! This portfolio site is designed to document and 
                    display my efforts so far as I learn to code. I hope you enjoy!
                </p>
            </Col>
        </Row>
    );
};