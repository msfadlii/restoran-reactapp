import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Swiper from 'swiper/bundle';
import 'swiper/css';
import 'swiper/css/pagination';
import '../../assets/landing_page/vendor/bootstrap/css/bootstrap.min.css';
import '../../assets/landing_page/vendor/bootstrap-icons/bootstrap-icons.css';
import '../../assets/landing_page/vendor/aos/aos.css';
import '../../assets/landing_page/vendor/glightbox/css/glightbox.min.css';
import '../../assets/landing_page/vendor/swiper/swiper-bundle.min.css';
import '../../assets/landing_page/css/main.css';
import  image1  from "../../assets/landing_page/img/eventsimg/events-1.jpg";
import  image2  from "../../assets/landing_page/img/eventsimg/events-2.jpg";
import  image3  from "../../assets/landing_page/img/eventsimg/events-3.jpg";
import  image4  from "../../assets/landing_page/img/eventsimg/events-4.jpg";
import reservation from "../../assets/landing_page/img/reservation.jpg";

function LandingPage() {
    useEffect(() => {
        AOS.init();
        const swiper = new Swiper('.init-swiper', {
            loop: true,
            speed:600,
            autoplay:{
                delay: 5000,
            },
            slidesPerView: 'auto',
            pagination: {
                el: '.swiper-pagination',
                type: 'bullets',
                clickable: true,
            },
            breakpoints: {
                320: {
                    slidesPerView: 1,
                    spaceBetween:40,
                },
                1200: {
                    slidesPerView: 3,
                    spaceBetween: 1,
                }
            },
        });

        // return () => {
        //     if (swiper) swiper.destroy();
        // };
        }, []);

        useEffect (() => {
            AOS.init({duration: 1200 });
        },[]);
    
    
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
                            <img src="/img/about.jpg" className="img-fluid mb-4" alt="" />
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
                                    <img src="/img/about-2.jpg" className="img-fluid" alt="" />
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
                <section id="stats" className="stats section dark-background">
                <img src="/img/stats-bg.jpg" alt="" data-aos="fade-in" />

                <div className="container position-relative" data-aos="fade-up" data-aos-delay="100">
                    <div className="row gy-4">
                        <div className="col-lg-3 col-md-6">
                            <div className="stats-item text-center w-100 h-100">
                                <span
                                    data-purecounter-start="0"
                                    data-purecounter-end="232"
                                    data-purecounter-duration="1"
                                    className="purecounter"
                                />
                                <p>Clients</p>
                            </div>
                        </div>
                        {/* End Stats Item */}

                        <div className="col-lg-3 col-md-6">
                            <div className="stats-item text-center w-100 h-100">
                                <span
                                    data-purecounter-start="0"
                                    data-purecounter-end="521"
                                    data-purecounter-duration="1"
                                    className="purecounter"
                                />
                                <p>Projects</p>
                            </div>
                        </div>
                        {/* End Stats Item */}

                        <div className="col-lg-3 col-md-6">
                            <div className="stats-item text-center w-100 h-100">
                                <span
                                    data-purecounter-start="0"
                                    data-purecounter-end="1453"
                                    data-purecounter-duration="1"
                                    className="purecounter"
                                />
                                <p>Hours Of Support</p>
                            </div>
                        </div>
                        {/* End Stats Item */}

                        <div className="col-lg-3 col-md-6">
                            <div className="stats-item text-center w-100 h-100">
                                <span
                                    data-purecounter-start="0"
                                    data-purecounter-end="32"
                                    data-purecounter-duration="1"
                                    className="purecounter"
                                />
                                <p>Workers</p>
                            </div>
                        </div>
                        {/* End Stats Item */}
                    </div>
                </div>
            </section>
            <section id="menu" className="menu section">
            {/* Section Title */}
            <div className="container section-title" data-aos="fade-up">
                <h2>Our Menu</h2>
                <p>
                    <span>Check Our</span> <span className="description-title">Yummy Menu</span>
                </p>
            </div>
            {/* End Section Title */}

            <div className="container">
                <ul className="nav nav-tabs d-flex justify-content-center" data-aos="fade-up" data-aos-delay="100">
                    <li className="nav-item">
                        <a className="nav-link active show" data-bs-toggle="tab" data-bs-target="#menu-starters">
                            <h4>Starters</h4>
                        </a>
                    </li>
                    {/* End tab nav item */}

                    <li className="nav-item">
                        <a className="nav-link" data-bs-toggle="tab" data-bs-target="#menu-breakfast">
                            <h4>Breakfast</h4>
                        </a>
                    </li>
                    {/* End tab nav item */}

                    <li className="nav-item">
                        <a className="nav-link" data-bs-toggle="tab" data-bs-target="#menu-lunch">
                            <h4>Lunch</h4>
                        </a>
                    </li>
                    {/* End tab nav item */}

                    <li className="nav-item">
                        <a className="nav-link" data-bs-toggle="tab" data-bs-target="#menu-dinner">
                            <h4>Dinner</h4>
                        </a>
                    </li>
                    {/* End tab nav item */}
                </ul>

                <div className="tab-content" data-aos="fade-up" data-aos-delay="200">
                    {/* Starters Menu Content */}
                    <div className="tab-pane fade active show" id="menu-starters">
                        <div className="tab-header text-center">
                            <p>Menu</p>
                            <h3>Starters</h3>
                        </div>

                        <div className="row gy-5">
                            {menuItems.map((item, index) => (
                                <div className="col-lg-4 menu-item" key={index}>
                                    <a href={item.image} className="glightbox">
                                        <img src={item.image} className="menu-img img-fluid" alt={item.title} />
                                    </a>
                                    <h4>{item.title}</h4>
                                    <p className="ingredients">{item.ingredients}</p>
                                    <p className="price">{item.price}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                    {/* End Starter Menu Content */}

                    {/* Repeat similar structure for Breakfast, Lunch, Dinner */}
                    <div className="tab-pane fade" id="menu-breakfast">
                        <div className="tab-header text-center">
                            <p>Menu</p>
                            <h3>Breakfast</h3>
                        </div>
                        <div className="row gy-5">{/* Similar items as above */}</div>
                    </div>
                    {/* End Breakfast Menu Content */}

                    <div className="tab-pane fade" id="menu-lunch">
                        <div className="tab-header text-center">
                            <p>Menu</p>
                            <h3>Lunch</h3>
                        </div>
                        <div className="row gy-5">{/* Similar items as above */}</div>
                    </div>
                    {/* End Lunch Menu Content */}

                    <div className="tab-pane fade" id="menu-dinner">
                        <div className="tab-header text-center">
                            <p>Menu</p>
                            <h3>Dinner</h3>
                        </div>
                        <div className="row gy-5">{/* Similar items as above */}</div>
                    </div>
                    {/* End Dinner Menu Content */}
                </div>
            </div>
        </section>
       
        <section id="testimonials" className="testimonials section light-background">
            {/* Section Title */}
            <div className="container section-title" data-aos="fade-up">
                <h2>TESTIMONIALS</h2>
                <p>
                What Are They <span className="description-title">Saying About Us</span>
                </p>
            </div>
            {/* End Section Title */}

            <div className="container" data-aos="fade-up" data-aos-delay="100">
                <div className="swiper init-swiper">
                <div className="swiper-wrapper">
                    {/* Testimonial Item 1 */}
                    <div className="swiper-slide">
                    <div className="testimonial-item">
                        <div className="row gy-4 justify-content-center">
                        <div className="col-lg-6">
                            <div className="testimonial-content">
                            <p>
                                <i className="bi bi-quote quote-icon-left"></i>
                                <span>
                                Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit
                                rhoncus. Accusantium quam, ultricies eget id, aliquam eget nibh et. Maecen aliquam,
                                risus at semper.
                                </span>
                                <i className="bi bi-quote quote-icon-right"></i>
                            </p>
                            <h3>Saul Goodman</h3>
                            <h4>Ceo &amp; Founder</h4>
                            <div className="stars">
                                <i className="bi bi-star-fill"></i>
                                <i className="bi bi-star-fill"></i>
                                <i className="bi bi-star-fill"></i>
                                <i className="bi bi-star-fill"></i>
                                <i className="bi bi-star-fill"></i>
                            </div>
                            </div>
                        </div>
                        <div className="col-lg-2 text-center">
                            <img src="/img/testimonials/testimonials-1.jpg" className="img-fluid testimonial-img" alt="" />
                        </div>
                        </div>
                    </div>
                    </div>
                    {/* End testimonial item */}

                    {/* Testimonial Item 2 */}
                    <div className="swiper-slide">
                    <div className="testimonial-item">
                        <div className="row gy-4 justify-content-center">
                        <div className="col-lg-6">
                            <div className="testimonial-content">
                            <p>
                                <i className="bi bi-quote quote-icon-left"></i>
                                <span>
                                Export tempor illum tamen malis malis eram quae irure esse labore quem cillum quid
                                cillum eram malis quorum velit fore eram velit sunt aliqua noster fugiat irure amet
                                legam anim culpa.
                                </span>
                                <i className="bi bi-quote quote-icon-right"></i>
                            </p>
                            <h3>Sara Wilsson</h3>
                            <h4>Designer</h4>
                            <div className="stars">
                                <i className="bi bi-star-fill"></i>
                                <i className="bi bi-star-fill"></i>
                                <i className="bi bi-star-fill"></i>
                                <i className="bi bi-star-fill"></i>
                                <i className="bi bi-star-fill"></i>
                            </div>
                            </div>
                        </div>
                        <div className="col-lg-2 text-center">
                            <img src="/img/testimonials/testimonials-2.jpg" className="img-fluid testimonial-img" alt="" />
                        </div>
                        </div>
                    </div>
                    </div>
                    {/* End testimonial item */}

                    {/* Testimonial Item 3 */}
                    <div className="swiper-slide">
                    <div className="testimonial-item">
                        <div className="row gy-4 justify-content-center">
                        <div className="col-lg-6">
                            <div className="testimonial-content">
                            <p>
                                <i className="bi bi-quote quote-icon-left"></i>
                                <span>
                                Enim nisi quem export duis labore cillum quae magna enim sint quorum nulla quem veniam
                                duis minim tempor labore quem eram duis noster aute amet eram fore quis sint minim.
                                </span>
                                <i className="bi bi-quote quote-icon-right"></i>
                            </p>
                            <h3>Jena Karlis</h3>
                            <h4>Store Owner</h4>
                            <div className="stars">
                                <i className="bi bi-star-fill"></i>
                                <i className="bi bi-star-fill"></i>
                                <i className="bi bi-star-fill"></i>
                                <i className="bi bi-star-fill"></i>
                                <i className="bi bi-star-fill"></i>
                            </div>
                            </div>
                        </div>
                        <div className="col-lg-2 text-center">
                            <img src="/img/testimonials/testimonials-3.jpg" className="img-fluid testimonial-img" alt="" />
                        </div>
                        </div>
                    </div>
                    </div>
                    {/* End testimonial item */}

                    {/* Testimonial Item 4 */}
                    <div className="swiper-slide">
                    <div className="testimonial-item">
                        <div className="row gy-4 justify-content-center">
                        <div className="col-lg-6">
                            <div className="testimonial-content">
                            <p>
                                <i className="bi bi-quote quote-icon-left"></i>
                                <span>
                                Fugiat enim eram quae cillum dolore dolor amet nulla culpa multos export minim
                                fugiat minim velit minim dolor enim duis veniam ipsum anim magna sunt elit fore quem
                                dolore labore illum veniam.
                                </span>
                                <i className="bi bi-quote quote-icon-right"></i>
                            </p>
                            <h3>John Larson</h3>
                            <h4>Entrepreneur</h4>
                            <div className="stars">
                                <i className="bi bi-star-fill"></i>
                                <i className="bi bi-star-fill"></i>
                                <i className="bi bi-star-fill"></i>
                                <i className="bi bi-star-fill"></i>
                                <i className="bi bi-star-fill"></i>
                            </div>
                            </div>
                        </div>
                        <div className="col-lg-2 text-center">
                            <img src="/img/testimonials/testimonials-4.jpg" className="img-fluid testimonial-img" alt="" />
                        </div>
                        </div>
                    </div>
                    </div>
                    {/* End testimonial item */}
                </div>
                <div className="swiper-pagination"></div>
                </div>
            </div>
        </section>
        
        <section id="events" className="events section">
      <div className="container-fluid" data-aos="fade-up" data-aos-delay="100">
        <div className="swiper init-swiper">
          <div className="swiper-wrapper">
            <div
              className="swiper-slide event-item d-flex flex-column justify-content-end"
              style={{ backgroundImage: `url(${image1})` }} // Ensure the correct path
            >
              <h3>Custom Parties</h3>
              <div className="price align-self-start">$99</div>
              <p className="description">
                Quo corporis voluptas ea ad. Consectetur inventore sapiente ipsum voluptas eos omnis facere.
                Enim facilis veritatis id est rem repudiandae nulla expedita quas.
              </p>
            </div>
            {/* End Event item */}

            <div
              className="swiper-slide event-item d-flex flex-column justify-content-end"
              style={{ backgroundImage: `url(${image2})` }} // Ensure the correct path
            >
              <h3>Private Parties</h3>
              <div className="price align-self-start">$289</div>
              <p className="description">
                In delectus sint qui et enim. Et ab repudiandae inventore quaerat doloribus. Facere nemo vero
                est ut dolores ea assumenda et. Delectus saepe accusamus aspernatur.
              </p>
            </div>
            {/* End Event item */}

            <div
              className="swiper-slide event-item d-flex flex-column justify-content-end"
              style={{ backgroundImage: `url(${image3})` }} // Ensure the correct path
            >
              <h3>Birthday Parties</h3>
              <div className="price align-self-start">$499</div>
              <p className="description">
                Laborum aperiam atque omnis minus omnis est qui assumenda quos. Quis id sit quibusdam.
                Esse quisquam ducimus officia ipsum ut quibusdam maxime. Non enim perspiciatis.
              </p>
            </div>
            {/* End Event item */}

            <div
              className="swiper-slide event-item d-flex flex-column justify-content-end"
              style={{ backgroundImage: `url(${image4})` }} // Ensure the correct path
            >
              <h3>Wedding Parties</h3>
              <div className="price align-self-start">$899</div>
              <p className="description">
                Laborum aperiam atque omnis minus omnis est qui assumenda quos. Quis id sit quibusdam.
                Esse quisquam ducimus officia ipsum ut quibusdam maxime. Non enim perspiciatis.
              </p>
            </div>
            {/* End Event item */}
          </div>
          <div className="swiper-pagination"></div>
        </div>
      </div>
        </section>

        <section id="chefs" className="chefs section">
            {/* Section Title */}
            <div className="container section-title" data-aos="fade-up">
                <h2>Chefs</h2>
                <p><span>Our</span> <span className="description-title">Professional Chefs<br /></span></p>
            </div>{/* End Section Title */}

            <div className="container">

                <div className="row gy-4">

                <div className="col-lg-4 d-flex align-items-stretch" data-aos="fade-up" data-aos-delay="100">
                    <div className="team-member">
                    <div className="member-img">
                        <img src="/img/chefs/chefs-1.jpg" className="img-fluid" alt="" />
                        <div className="social">
                        <a href=""><i className="bi bi-twitter-x"></i></a>
                        <a href=""><i className="bi bi-facebook"></i></a>
                        <a href=""><i className="bi bi-instagram"></i></a>
                        <a href=""><i className="bi bi-linkedin"></i></a>
                        </div>
                    </div>
                    <div className="member-info">
                        <h4>Walter White</h4>
                        <span>Master Chef</span>
                        <p>Velit aut quia fugit et et. Dolorum ea voluptate vel tempore tenetur ipsa quae aut. Ipsum exercitationem iure minima enim corporis et voluptate.</p>
                    </div>
                    </div>
                </div>{/* End Chef Team Member */}

                <div className="col-lg-4 d-flex align-items-stretch" data-aos="fade-up" data-aos-delay="200">
                    <div className="team-member">
                    <div className="member-img">
                        <img src="/img/chefs/chefs-2.jpg" className="img-fluid" alt="" />
                        <div className="social">
                        <a href=""><i className="bi bi-twitter-x"></i></a>
                        <a href=""><i className="bi bi-facebook"></i></a>
                        <a href=""><i className="bi bi-instagram"></i></a>
                        <a href=""><i className="bi bi-linkedin"></i></a>
                        </div>
                    </div>
                    <div className="member-info">
                        <h4>Sarah Johnson</h4>
                        <span>Patissier</span>
                        <p>Quo esse repellendus quia id. Est eum et accusantium pariatur fugit nihil minima suscipit corporis. Voluptate sed quas reiciendis animi neque sapiente.</p>
                    </div>
                    </div>
                </div>{/* End Chef Team Member */}

                <div className="col-lg-4 d-flex align-items-stretch" data-aos="fade-up" data-aos-delay="300">
                    <div className="team-member">
                    <div className="member-img">
                        <img src="/img/chefs/chefs-3.jpg" className="img-fluid" alt="" />
                        <div className="social">
                        <a href=""><i className="bi bi-twitter-x"></i></a>
                        <a href=""><i className="bi bi-facebook"></i></a>
                        <a href=""><i className="bi bi-instagram"></i></a>
                        <a href=""><i className="bi bi-linkedin"></i></a>
                        </div>
                    </div>
                    <div className="member-info">
                        <h4>William Anderson</h4>
                        <span>Cook</span>
                        <p>Vero omnis enim consequatur. Voluptas consectetur unde qui molestiae deserunt. Voluptates enim aut architecto porro aspernatur molestiae modi.</p>
                    </div>
                    </div>
                </div>{/* End Chef Team Member */}

                </div>
            </div>
        </section>

        <section id="book-a-table" className="book-a-table section">
            {/* Booktable */}
            <div className="container section-title" data-aos="fade-up">
                <h2>Book A Table</h2>
                <p><span>Book Your</span> <span className="description-title">Stay With Us<br /></span></p>
            </div>

            <div className="container">

                <div className="row g-0" data-aos="fade-up" data-aos-delay="100">

                <div className="col-lg-4 reservation-img" style={{ backgroundImage: `url(${reservation})` }}></div>

                <div className="col-lg-8 d-flex align-items-center reservation-form-bg" data-aos="fade-up" data-aos-delay="200">
                    <form action="forms/book-a-table.php" method="post" role="form" className="php-email-form">
                    <div className="row gy-4">
                        <div className="col-lg-4 col-md-6">
                        <input type="text" name="name" className="form-control" id="name" placeholder="Your Name" required />
                        </div>
                        <div className="col-lg-4 col-md-6">
                        <input type="email" className="form-control" name="email" id="email" placeholder="Your Email" required />
                        </div>
                        <div className="col-lg-4 col-md-6">
                        <input type="text" className="form-control" name="phone" id="phone" placeholder="Your Phone" required />
                        </div>
                        <div className="col-lg-4 col-md-6">
                        <input type="date" name="date" className="form-control" id="date" placeholder="Date" required />
                        </div>
                        <div className="col-lg-4 col-md-6">
                        <input type="time" className="form-control" name="time" id="time" placeholder="Time" required />
                        </div>
                        <div className="col-lg-4 col-md-6">
                        <input type="number" className="form-control" name="people" id="people" placeholder="# of people" required />
                        </div>
                    </div>

                    <div className="form-group mt-3">
                        <textarea className="form-control" name="message" rows="5" placeholder="Message"></textarea>
                    </div>

                    <div className="text-center mt-3">
                        <div className="loading">Loading</div>
                        <div className="error-message"></div>
                        <div className="sent-message">Your booking request was sent. We will call back or send an Email to confirm your reservation. Thank you!</div>
                        <button type="submit">Book a Table</button>
                    </div>
                    </form>
                </div>{/* End Reservation Form */}

                </div>

            </div>
        </section>
        
        <section id="gallery" className="gallery section light-background">
                {/* Section Title */}
                <div className="container section-title" data-aos="fade-up">
                    <h2>Gallery</h2>
                    <p><span>Check</span> <span className="description-title">Our Gallery</span></p>
                </div>{/* End Section Title */}

                <div className="container" data-aos="fade-up" data-aos-delay="100">

                    <div className="swiper init-swiper">
                    <script type="application/json" className="swiper-config">
                        {JSON.stringify({
                        loop: true,
                        speed: 600,
                        autoplay: {
                            delay: 5000
                        },
                        slidesPerView: "auto",
                        centeredSlides: true,
                        pagination: {
                            el: ".swiper-pagination",
                            type: "bullets",
                            clickable: true
                        },
                        breakpoints: {
                            320: {
                            slidesPerView: 1,
                            spaceBetween: 0
                            },
                            768: {
                            slidesPerView: 3,
                            spaceBetween: 20
                            },
                            1200: {
                            slidesPerView: 5,
                            spaceBetween: 20
                            }
                        }
                        })}
                    </script>
                    <div className="swiper-wrapper align-items-center">
                        <div className="swiper-slide">
                        <a className="glightbox" data-gallery="images-gallery" href="/img/gallery/gallery-1.jpg">
                            <img src="/img/gallery/gallery-1.jpg" className="img-fluid" alt="" />
                        </a>
                        </div>
                        <div className="swiper-slide">
                        <a className="glightbox" data-gallery="images-gallery" href="/img/gallery/gallery-2.jpg">
                            <img src="/img/gallery/gallery-2.jpg" className="img-fluid" alt="" />
                        </a>
                        </div>
                        <div className="swiper-slide">
                        <a className="glightbox" data-gallery="images-gallery" href="/img/gallery/gallery-3.jpg">
                            <img src="/img/gallery/gallery-3.jpg" className="img-fluid" alt="" />
                        </a>
                        </div>
                        <div className="swiper-slide">
                        <a className="glightbox" data-gallery="images-gallery" href="/img/gallery/gallery-4.jpg">
                            <img src="/img/gallery/gallery-4.jpg" className="img-fluid" alt="" />
                        </a>
                        </div>
                        <div className="swiper-slide">
                        <a className="glightbox" data-gallery="images-gallery" href="/img/gallery/gallery-5.jpg">
                            <img src="/img/gallery/gallery-5.jpg" className="img-fluid" alt="" />
                        </a>
                        </div>
                        <div className="swiper-slide">
                        <a className="glightbox" data-gallery="images-gallery" href="/img/gallery/gallery-6.jpg">
                            <img src="/img/gallery/gallery-6.jpg" className="img-fluid" alt="" />
                        </a>
                        </div>
                        <div className="swiper-slide">
                        <a className="glightbox" data-gallery="images-gallery" href="/img/gallery/gallery-7.jpg">
                            <img src="/img/gallery/gallery-7.jpg" className="img-fluid" alt="" />
                        </a>
                        </div>
                        <div className="swiper-slide">
                        <a className="glightbox" data-gallery="images-gallery" href="/img/gallery/gallery-8.jpg">
                            <img src="/img/gallery/gallery-8.jpg" className="img-fluid" alt="" />
                        </a>
                        </div>
                    </div>
                    <div className="swiper-pagination"></div>
                    </div>
                </div>
        </section>

        <footer id="footer" className="footer dark-background">

                <div className="container">
                    <div className="row gy-3">
                    <div className="col-lg-3 col-md-6 d-flex">
                        <i className="bi bi-geo-alt icon"></i>
                        <div className="address">
                        <h4>Address</h4>
                        <p>A108 Adam Street</p>
                        <p>New York, NY 535022</p>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-6 d-flex">
                        <i className="bi bi-telephone icon"></i>
                        <div>
                        <h4>Contact</h4>
                        <p>
                            <strong>Phone:</strong> <span>+1 5589 55488 55</span><br />
                            <strong>Email:</strong> <span>info@example.com</span><br />
                        </p>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-6 d-flex">
                        <i className="bi bi-clock icon"></i>
                        <div>
                        <h4>Opening Hours</h4>
                        <p>
                            <strong>Mon-Sat:</strong> <span>11AM - 23PM</span><br />
                            <strong>Sunday:</strong> <span>Closed</span>
                        </p>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-6">
                        <h4>Follow Us</h4>
                        <div className="social-links d-flex">
                        <a href="#" className="twitter"><i className="bi bi-twitter-x"></i></a>
                        <a href="#" className="facebook"><i className="bi bi-facebook"></i></a>
                        <a href="#" className="instagram"><i className="bi bi-instagram"></i></a>
                        <a href="#" className="linkedin"><i className="bi bi-linkedin"></i></a>
                        </div>
                    </div>

                    </div>
                </div>

            <div className="container copyright text-center mt-4">
                <p>© <span>Copyright</span> <strong className="px-1 sitename">Yummy</strong> <span>All Rights Reserved</span></p>
                <div className="credits">
                {/* All the links in the footer should remain intact. */}
                {/* You can delete the links only if you've purchased the pro version. */}
                {/* Licensing information: https://bootstrapmade.com/license/ */}
                {/* Purchase the pro version with working PHP/AJAX contact form: [buy-url] */}
                Designed by <a href="https://bootstrapmade.com/">BootstrapMade</a>
                </div>
            </div>

        </footer>


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

const menuItems = [
    {
        title: "Magnam Tiste",
        ingredients: "Lorem, deren, trataro, filede, nerada",
        price: "$5.95",
        image: "/img/menu/menu-item-1.png",
    },
    {
        title: "Aut Luia",
        ingredients: "Lorem, deren, trataro, filede, nerada",
        price: "$14.95",
        image: "/img/menu/menu-item-2.png",
    },
    {
        title: "Est Eligendi",
        ingredients: "Lorem, deren, trataro, filede, nerada",
        price: "$8.95",
        image: "/img/menu/menu-item-3.png",
    },
    {
        title: "Eos Luibusdam",
        ingredients: "Lorem, deren, trataro, filede, nerada",
        price: "$12.95",
        image: "/img/menu/menu-item-4.png",
    },
    {
        title: "Laboriosam Direva",
        ingredients: "Lorem, deren, trataro, filede, nerada",
        price: "$9.95",
        image: "/img/menu/menu-item-5.png",
    },
    {
        title: "Laboriosam Direva",
        ingredients: "Lorem, deren, trataro, filede, nerada",
        price: "$12.95",
        image: "/img/menu/menu-item-6.png",
    },
];

export default LandingPage;
