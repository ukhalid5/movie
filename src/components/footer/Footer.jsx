import React from 'react';

import './footer.scss';

import { Link } from 'react-router-dom';

import bg from '../../assets/download.jpeg';


const Footer = () => {
    return (
        <div className="footer" style={{backgroundImage: `url(${bg})`}}>
            <div className="footer__content container">
                <div className="footer__content__logo">
                    <div className="logo">
                       
                        <Link to="/">FreeMovies</Link>
                    </div>
                </div>
              
            </div>
        </div>
    );
}

export default Footer;
