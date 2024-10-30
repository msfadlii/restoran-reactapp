import React from 'react';
import { Link } from 'react-router-dom';

import '../../assets/landing_page/vendor/bootstrap/css/bootstrap.min.css';
import '../../assets/landing_page/vendor/bootstrap-icons/bootstrap-icons.css';
import '../../assets/landing_page/vendor/aos/aos.css';
import '../../assets/landing_page/vendor/glightbox/css/glightbox.min.css';
import '../../assets/landing_page/vendor/swiper/swiper-bundle.min.css';
import '../../assets/landing_page/css/main.css';

function LandingPage() {
    return (
        <div className="index-page">
        <header id="header" className="header d-flex align-items-center sticky-top">
            <div className="container position-relative d-flex align-items-center justify-content-between">
                <a href="index.html" className="logo d-flex align-items-center me-auto me-xl-0">
                    <h1 className="sitename">Yummy</h1>
                    <span>.</span>
                </a>
                <nav id="navmenu" className="navmenu">
                    <ul>
                        <li><a href="#hero" className="active">Home<br/></a></li>
                        <li><a href="#about">About</a></li>
                        <li><a href="#menu">Menu</a></li>
                        <li><a href="#events">Events</a></li>
                        <li><a href="#chefs">Chefs</a></li>
                        <li><a href="#gallery">Gallery</a></li>
                        <li className="dropdown"><a href="#"><span>Dropdown</span></a>
                            <ul>
                                <li><a href="#">Dropdown 1</a></li>
                                <li className="dropdown"><a href="#"><span>Deep Dropdown</span></a>
                                    <ul>
                                        <li><a href="#">Deep Dropdown 1</a></li>
                                        <li><a href="#">Deep Dropdown 2</a></li>
                                        <li><a href="#">Deep Dropdown 3</a></li>
                                        <li><a href="#">Deep Dropdown 4</a></li>
                                        <li><a href="#">Deep Dropdown 5</a></li>
                                    </ul>
                                </li>
                                <li><a href="#">Dropdown 2</a></li>
                                <li><a href="#">Dropdown 3</a></li>
                                <li><a href="#">Dropdown 4</a></li>
                            </ul>
                        </li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>
                    <i className="mobile-nav-toggle d-xl-none bi bi-list"></i>
                </nav>
                <a className="btn-getstarted" href="/login">Login</a>
                <a className="btn-getstarted" href="/register">Register</a>
            </div>
        </header>
    </div>
    );
}

export default LandingPage;
