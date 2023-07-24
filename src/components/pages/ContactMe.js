import React, { useState } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { validateEmail } from '../../utils/helpers';

// function export for ContactMe component

export default function ContactMe() {
    // alert user when input is invalid
    const [alert, setAlert ] = useState('');

    // prevent page reload
    const onFormSubmit = (event) => {
        event.preventDefault();
    };

    // styles for page
    const styles = {
        alert: {
            color: 'red',
        },
        col: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'start',
            paddingTop: '10px',
            paddingLeft: '10px',
            height: '75vh',
        },
        row: {
            margin: 0,
            paddingTop: '5px',
        },
        form: {
            width: '100%',
            height: '100%',
        },
        message: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'start',
            height: '50%',
            width: '100%',
            paddingTop: '10px',
        },
        input: {
            width: '60%',
        },
        section: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'start',
            paddingTop: '10px',
        },
        text: {
            width: '60%',
            height: '100%'
        },
    };

    // function for input fields
    const inputField = (e) => {
        if (e.target.name === 'name') {
            if(e.target.value.length === 0) {
                setAlert("Field cannot be empty.");
            } else {
                setAlert('');
            }
        } else if (e.target.name === 'email') {
            const checkEmail = validateEmail(e.target.value);
            if(checkEmail === false) {
                setAlert("Enter a valid email.");
            } else {
                setAlert('');
            }
        } else {
            if (e.target.value.length <= 0) {
                setAlert("message cannot be empty");
            } else {
                setAlert('');
            }
        }
    };

    // return for component
    return (
        <Row style={styles.row}>
            <Col style={styles.col} xs={12} md={8}>
                <h2>Contact Me</h2>
                <form style={styles.form} className='contact-form' onSubmit={onFormSubmit}>
                    <div style={styles.section} className='name'>
                        <label htmlFor='name'>Name: </label>
                        <input type='text' name='name'onBlur={inputField}/>
                    </div>
                    <div style={styles.section} className='email'>
                        <label htmlFor='email'>Email: </label>
                        <input type='text' name='email'onBlur={inputField}/>
                    </div>
                    <div style={styles.message} className='message'>
                        <label htmlFor='message'>Message: </label>
                        <textarea style={styles.text} name='message'onBlur={inputField}/>
                    </div>
                    <div style={styles.section}>
                        <p style={styles.alert}>{alert}</p>
                    </div>
                    <div style={styles.section}>
                        <input type='submit'/>
                    </div>
                </form>
            </Col>
        </Row>
    );
};