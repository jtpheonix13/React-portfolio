// import necessary dependencies for react and logos
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithubSquare } from '@fortawesome/free-brands-svg-icons';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

// styles for the project cards

const styles = {
    img: {
        display: 'block',
        border: 'solid white 5px',
        width: '100%',
        height: '100%',

    },
    row: {
        margin: '0px',
        display: 'flex',
        justifyContent: 'center',
        paddingTop: '5px',
    },
    col: {
        display: 'flex',
        justifyContent: 'center',
    },
    project: {
        position: 'relative',
        height: 'calc(200px + 8vw',
        width: '100%',
        margin: '5px',
    },
    overlay: {
        position: 'absolute',
        top: 0,
        left: 0,
        height: '100%',
        width: '100%',
        background: 'grey',
        color: 'blue',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
};

// function for the Project component page

function Project({ projects }) {
    // return statement
    return (
        <Row style={styles.row}>
            {/* { map through projects array } */}
            {projects.map((project) => (
                <Col md={5} xs={10} style={styles.col} key={project.id}>
                    <div className='project' style={styles.project}>
                        <img src={project.imgPath} style={styles.img} alt={project.alt}/>
                        <div style={styles.overlay} className='overlay'>
                            <a className='projectLink' style={styles.link} href={project.Url}>{project.name}</a>
                            <p>{project.code}</p>
                            <a href={project.githubUrl}><FontAwesomeIcon className='gitHubIcon' icon={faGithubSquare} size='2x'/></a>
                        </div>
                    </div>
                </Col>
            ))}
        </Row>
    );
};

// export Project function
export default Project