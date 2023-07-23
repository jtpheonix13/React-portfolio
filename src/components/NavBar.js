import React from 'react';
import Row from 'react-bootstrap/Row';

// styles for the navbar page
const styles= {
    links: {
        display: 'flex',
        width: '100%',
        justifyContent: 'space-around',
        alignItems: 'center',
        marginBottom: '0px',
    },
    row: {
        display:'flex',
        alignItems: 'center',
    },
};

// Nav component function with destructured props
function NavBar({currentPage, handlePageChange}) {
    // return statement to set the status of the links in the navbar
    return (
        <Row style={styles.row}>
            <ul style={styles.links}>
                <li className = 'link-item'>
                    <a href="#aboutMe" onClick={() => handlePageChange('AboutMe')} 
                        className={currentPage === 'AboutMe' ? 'active-link' : 'inactive-link'}
                    >
                        About Me
                    </a>
                </li>
                <li className = 'link-item'>
                    <a href="#resume" onClick={() => handlePageChange('Resume')} 
                        className={currentPage === 'Resume' ? 'active-link' : 'inactive-link'}
                    >
                        My Resume
                    </a>
                </li>
                <li className = 'link-item'>
                    <a href="#portfolio" onClick={() => handlePageChange('Portfolio')} 
                        className={currentPage === 'Portfolio' ? 'active-link' : 'inactive-link'}
                    >
                        My Portfolio
                    </a>
                </li>
                <li className = 'link-item'>
                    <a href="#contactMe" onClick={() => handlePageChange('ContactMe')} 
                        className={currentPage === 'ContactMe' ? 'active-link' : 'inactive-link'}
                    >
                        Contact Me
                    </a>
                </li>
            </ul>
        </Row>
    );
;}

// export NavBar component

export default NavBar;