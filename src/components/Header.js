import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import NavBar from './NavBar';

// styles to be added to the header component
const styles = {
    header: {
        background: 'grey',
        display: 'flex',
        padding: '15px',
        justifyContent: 'center',
        alignItems: 'center',
    },
    row: {
        width: '100%',
        alignItems: 'center',
        display: 'flex',
    },
    name: {
        display: 'flex',
        color: 'blue',
        justifyContent: 'center',
    },
}

// function for the Header component with destructured props
function Header({currentPage, handlePageChange}) {
    return (
        <div style={styles.header}>
            <Row style={styles.row}>
                <Col style={styles.name}>
                    <h1>Jeffrey Taylor</h1>
                </Col>
                {/* {NavBar component with props being passed in} */}
                <Col md={8} xs={10} style={styles.col}>
                    <NavBar currentPage={currentPage} handlePageChange={handlePageChange} />
                </Col>
            </Row>
        </div>
    );
};

// export statement for the Header component
export default Header;