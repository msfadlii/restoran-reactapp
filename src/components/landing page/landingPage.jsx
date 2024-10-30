import React, { useEffect } from 'react'; // Tambahkan useEffect di sini
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';

import '../../assets/landing_page/vendor/bootstrap/css/bootstrap.min.css';
import '../../assets/landing_page/vendor/bootstrap-icons/bootstrap-icons.css';
import '../../assets/landing_page/vendor/aos/aos.css';
import '../../assets/landing_page/vendor/glightbox/css/glightbox.min.css';
import '../../assets/landing_page/vendor/swiper/swiper-bundle.min.css';
import '../../assets/landing_page/css/main.css';

function LandingPage() {
    useEffect(() => {
        AOS.init();
    }, []);
    
    return (
        <div className="index-page">
            <header id="header" className="header d-flex align-items-center sticky-top">
                <div className="container position-relative d-flex align-items-center justify-content-between">
                    <Link to="/" className="logo d-flex align-items-center me-auto me-xl-0">
                        <h1 className="sitename">Yummy</h1>
                        <span>.</span>
                    </Link>
                    <nav id="navmenu" className="navmenu">
                        <ul>
                            <li><a href="#hero" className="active">Home</a></li>
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
                    <Link to="/login" className="btn-getstarted">Login</Link>
                    <Link to="/register" className="btn-getstarted">Register</Link>
                </div>
            </header>

            <main className="main">
                <section id="hero" className="hero section light-background">
                    <div className="container">
                        <div className="row gy-4 justify-content-center justify-content-lg-between">
                            <div className="col-lg-5 order-2 order-lg-1 d-flex flex-column justify-content-center">
                                <h1 data-aos="fade-up">Enjoy Your Healthy<br />Delicious Food</h1>
                                <p data-aos="fade-up" data-aos-delay="100">We are a team of talented designers making websites with Bootstrap</p>
                                <div className="d-flex" data-aos="fade-up" data-aos-delay="200">
                                    <a href="#book-a-table" className="btn-get-started">Book a Table</a>
                                    <a href="https://www.youtube.com/watch?v=13ARO0HDZsQ&pp=ygUMc2FmZSBuIHNvdW5k" className="glightbox btn-watch-video d-flex align-items-center">
                                        <i className="bi bi-play-circle"></i><span>Watch Video</span>
                                    </a>
                                </div>
                            </div>
                            <div className="col-lg-5 order-1 order-lg-2 hero-img" data-aos="zoom-out">
                                <img src="/img/hero-img.png" className="img-fluid animated" alt="" />
                            </div>
                        </div>
                    </div>
                </section>

            <section id="about" className="about section">
                {/* Section Title */}
                <div className="container section-title" data-aos="fade-up">
                    <h2>About Us<br /></h2>
                    <p><span>Learn More</span> <span className="description-title">About Us</span></p>
                </div>
                {/* End Section Title */}

                <div className="container">
                    <div className="row gy-4">
                        <div className="col-lg-7" data-aos="fade-up" data-aos-delay="100">
                            <img src="../../assets/landing_page/img/about.jpg" className="img-fluid mb-4" alt="" />
                            <div className="book-a-table">
                                <h3>Book a Table</h3>
                                <p>+1 5589 55488 55</p>
                            </div>
                        </div>
                        <div className="col-lg-5" data-aos="fade-up" data-aos-delay="250">
                            <div className="content ps-0 ps-lg-5">
                                <p className="fst-italic">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                </p>
                                <ul>
                                    <li><i className="bi bi-check-circle-fill"></i> <span>Ullamco laboris nisi ut aliquip ex ea commodo consequat.</span></li>
                                    <li><i className="bi bi-check-circle-fill"></i> <span>Duis aute irure dolor in reprehenderit in voluptate velit.</span></li>
                                    <li><i className="bi bi-check-circle-fill"></i> <span>Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate trideta storacalaperda mastiro dolore eu fugiat nulla pariatur.</span></li>
                                </ul>
                                <p>
                                    Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident
                                </p>

                                <div className="position-relative mt-4">
                                    <img src="../../assets/landing_page/img/about-2.jpg" className="img-fluid" alt="" />
                                    <a href="https://www.youtube.com/watch?v=Y7f98aduVJ8" className="glightbox pulsating-play-btn"></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section id="why-us" className="why-us section light-background">
                <div className="container">
                    <div className="row gy-4">
                        <div className="col-lg-4" data-aos="fade-up" data-aos-delay="100">
                            <div className="why-box">
                                <h3>Why Choose Yummy</h3>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis aute irure dolor in reprehenderit
                                    Asperiores dolores sed et. Tenetur quia eos. Autem tempore quibusdam vel necessitatibus optio ad corporis.
                                </p>
                                <div className="text-center">
                                    <a href="#" className="more-btn"><span>Learn More</span> <i className="bi bi-chevron-right"></i></a>
                                </div>
                            </div>
                        </div>
                        {/* End Why Box */}

                        <div className="col-lg-8 d-flex align-items-stretch">
                            <div className="row gy-4" data-aos="fade-up" data-aos-delay="200">
                                <div className="col-xl-4">
                                    <div className="icon-box d-flex flex-column justify-content-center align-items-center">
                                        <i className="bi bi-clipboard-data"></i>
                                        <h4>Corporis voluptates officia eiusmod</h4>
                                        <p>Consequuntur sunt aut quasi enim aliquam quae harum pariatur laboris nisi ut aliquip</p>
                                    </div>
                                </div>
                                {/* End Icon Box */}

                                <div className="col-xl-4" data-aos="fade-up" data-aos-delay="300">
                                    <div className="icon-box d-flex flex-column justify-content-center align-items-center">
                                        <i className="bi bi-gem"></i>
                                        <h4>Ullamco laboris ladore lore pan</h4>
                                        <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt</p>
                                    </div>
                                </div>
                                {/* End Icon Box */}

                                <div className="col-xl-4" data-aos="fade-up" data-aos-delay="400">
                                    <div className="icon-box d-flex flex-column justify-content-center align-items-center">
                                        <i className="bi bi-inboxes"></i>
                                        <h4>Labore consequatur incidid dolore</h4>
                                        <p>Aut suscipit aut cum nemo deleniti aut omnis. Doloribus ut maiores omnis facere</p>
                                    </div>
                                </div>
                                {/* End Icon Box */}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
        <script src="../../assets/landing_page/vendor/bootstrap/js/bootstrap.bundle.min.js"></script>
        <script src="../../assets/landing_page/vendor/php-email-form/validate.js"></script>
        <script src="../../assets/landing_page/vendor/aos/aos.js"></script>
        <script src="../../assets/landing_page/vendor/glightbox/js/glightbox.min.js"></script>
        <script src="../../assets/landing_page/vendor/purecounter/purecounter_vanilla.js"></script>
        <script src="../../assets/landing_page/vendor/swiper/swiper-bundle.min.js"></script>
        <script src="../../assets/landing_page/js/main.js"></script>
    </div>
    
    );
}

export default LandingPage;
