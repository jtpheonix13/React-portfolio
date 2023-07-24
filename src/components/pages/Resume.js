import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import resume from '../../assets/files/Resume.pdf';

export default function Resume() {


    // styles
    const styles = {
        row: {
            margin: 0,
            paddingTop: '5px',
        },
        col: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'start',
            height: '75vh',
            paddingTop: '10px',
            paddingLeft: '10px',
        },
        skill: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'start',
            fontSize: '18px',
        },
        heading: {
            color: 'blue',
            paddingBottom: '5px',
        },
        category: {
            color: 'blue',
        },
    };

    return(
        <Row style={styles.row}>
            <Col style={styles.col} xs={12} md={8}>
                <h2 style={styles.heading}>My Resume</h2>
                <h3 style={styles.category}>Back End Skills</h3>
                <ul style={styles.skill}>
                    <li>Node.js</li>
                    <li>Express</li>
                    <li>GraphQL</li>
                    <li>MongoDB</li>
                    <li>SQL</li>
                </ul>
                <h3 style={styles.category}>Front End Skills</h3>
                <ul style={styles.skill}>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>Javascript</li>
                    <li>React</li>
                    <li>Bootstrap</li>
                    <li>Jquery</li>
                    <li>Tailwind</li>
                </ul>
                <a href={resume} download>Download my Resume</a>
            </Col>
        </Row>
    );
};