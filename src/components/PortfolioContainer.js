import React, { useState } from 'react';
import Footer from './Footer';
import Header from './Header';
import AboutMe from './pages/AboutMe';
import ContactMe from './pages/ContactMe';
import Portfolio from './pages/Portfolio';
import Resume from './pages/Resume';
import '../styles/projects.css';

// default function export to be used in the app.js file
export default function PortfolioContainer() {
    // set state for the current page
    // default state/page will always be the about me page
    const [currentPage, setCurrentPage] = useState('AboutMe');

    // check to see value of current page
    // select which component to render based on current page
    const renderPage = () => {
        if (currentPage === 'AboutMe') {
            return <AboutMe />;
        }
        if (currentPage === 'Portfolio') {
            return <Portfolio />;
        }
        if (currentPage === 'Resume') {
            return <Resume />;
        }
        return <ContactMe />;
    };

    // function to set current page when page changes
    const handlePageChange = (page) => setCurrentPage(page);

    // return statement to pass props to the Header component
    return (
        <div>
            <Header currentPage={currentPage} handlePageChange={handlePageChange} />
            {renderPage()}
            <Footer />
        </div>
    );
};
