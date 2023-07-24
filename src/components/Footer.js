import React from 'react';
// icons for links
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithubSquare, faLinkedin, faInstagramSquare } from '@fortawesome/free-brands-svg-icons';

//styles for the footer

const styles = {
    footer: {
        paddingTop: '20px',
        display: 'flex',
        flexDirection: 'column',
        height: 'auto',
        background: 'grey',
        alignItems: 'center',
    },
    name: {
        color: 'blue',
    },
    link: {
        width: '150px',
        display: 'flex',
        justifyContent: 'space-between',
    },
    icon: {
        padding: '5px 20px 5px 20px',
    },
};

// footer default export function

export default function Footer() {
    // return statement
    return (
        <div style={styles.footer}>
            {/* {Icons} */}
            <div style={styles.link}>
                <a href="https://github.com/jtpheonix13"><FontAwesomeIcon className='icons' icon={ faGithubSquare } size='2X'/></a>
                <a href="https://www.linkedin.com"><FontAwesomeIcon className='icons' icon={ faLinkedin } size='2X'/></a>
                <a href="https://www.instagram.com/jeffreygtaylor13/"><FontAwesomeIcon className='icons' icon={ faInstagramSquare } size='2X'/></a>
            </div>
        </div>
    );
};

