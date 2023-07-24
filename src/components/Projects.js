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
        border: 'solid blue 2px',
        width: '100%',
        height: '100%',
        borderRadius: '20px'

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
    projectInfo: {
        position: 'absolute',
        top: 0,
        left: 0,
        height: '100%',
        width: '100%',
        background: 'black',
        color: 'white',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        borderRadius: '20px'
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
                        <div style={styles.projectInfo} className='projectInfo'>
                            <a className='projectLink' style={styles.link} href={project.Url} target='_blank'>{project.name}</a>
                            <p>{project.code}</p>
                            <a href={project.githubUrl} target='_blank'><FontAwesomeIcon className='gitHubIcon' icon={faGithubSquare} size='2x'/></a>
                        </div>
                    </div>
                </Col>
            ))}
        </Row>
    );
};

// export Project function
export default Project