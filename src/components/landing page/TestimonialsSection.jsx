import React, { useEffect } from 'react';
import Swiper from 'swiper/bundle';
import 'swiper/css';
import 'swiper/css/pagination';
import AOS from 'aos';
import 'aos/dist/aos.css';

const TestimonialsSection = () => {
  useEffect(() => {
    const swiper = new Swiper('.init-swiper', {
      loop: true,
      speed: 600,
      pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true,
      },
    });

    // Cleanup to destroy Swiper instance when component unmounts
    return () => {
      swiper.destroy();
    };
  }, []);

  useEffect(() => {
    AOS.init({ duration: 1200 });
  }, []);

  return (
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
  );
};

export default TestimonialsSection;