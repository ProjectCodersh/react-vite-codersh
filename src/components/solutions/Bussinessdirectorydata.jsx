// import { useState, useEffect } from 'react';
import { Link } from "react-router-dom";  // Import Link from react-router-dom
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from 'swiper/modules';
import Star2Img from "../../assets/images/v1/icon/star2.webp";
import '../../assets/assets/css/swiper-bundle.min.css'; // Import Swiper styles
import VideoSlider from '../common/VideoSlider';
import Check from "../../assets/images/icon/check.svg";

import Slider1Img from '../../assets/images/images2/tinified/hpn-global-front-page.webp';
import Slider2Img from '../../assets/images/images2/tinified/tyrepages-front-page.webp';
import Slider3Img from '../../assets/images/images2/tinified/redesign-hub-front-page.webp';

import Logo1Img from '../../assets/images/images2/tyrepage.webp';
import Logo2Img from '../../assets/images/images2/hpn-logo-1.webp';
import Logo3Img from '../../assets/images/images2/redesign-hub-logo.webp';
import Logo4Img from '../../assets/images/images2/tyrepage.webp';
import Logo5Img from '../../assets/images/images2/hpn-logo-1.webp';
import Logo6Img from '../../assets/images/images2/redesign-hub-logo.webp';
import FadeInStagger from "../animation/FadeInStagger";


function Bussinessdirectorydata() {

    // const [isLaptop, setIsLaptop] = useState(false);
    // useEffect(() => {
    //     const handleResize = () => {
    //         // Set to true if screen width is 1024px or more
    //         setIsLaptop(window.innerWidth >= 1024);
    //     };
    //     // Add event listener on mount
    //     window.addEventListener('resize', handleResize);
    //     // Call once to set initial state
    //     handleResize();
    //     // Cleanup the event listener on unmount
    //     return () => window.removeEventListener('resize', handleResize);
    // }, []);

    return (
        <div>
            <FadeInStagger>
                <div className="section aximo-project-page logo-slider dark-bg  border-top">
                    <div className="container py-5">
                        <h3 className="light-text text-center mb-3">
                            Partnering with Leading Wine Retailers Worldwide.
                        </h3>
                        <Swiper
                            spaceBetween={30} // Space between slides
                            slidesPerView={5} // Number of slides visible at once
                            loop={true} // Infinite loop of the slides
                            autoplay={{
                                delay: 2500,
                                disableOnInteraction: false,
                            }} // Autoplay settings
                            speed={1000}  // Transition speed in ms (1000ms = 1 second)
                            modules={[Autoplay]} // Adding the Autoplay module
                            breakpoints={{
                                // When window width is >= 320px
                                320: {
                                    slidesPerView: 3, // 1 slide per view
                                },
                                // When window width is >= 480px
                                480: {
                                    slidesPerView: 3, // 2 slides per view
                                },
                                // When window width is >= 768px
                                768: {
                                    slidesPerView: 3, // 3 slides per view
                                },
                                // When window width is >= 1024px
                                1024: {
                                    slidesPerView: 5, // 4 slides per view
                                },
                            }}
                        >
                            <SwiperSlide>
                                <img src={Logo1Img} alt="Brand Logo" className="mx-auto d-block" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src={Logo2Img} alt="Brand Logo" className="mx-auto d-block" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src={Logo3Img} alt="Brand Logo" className="mx-auto d-block" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src={Logo4Img} alt="Brand Logo" className="mx-auto d-block" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src={Logo5Img} alt="Brand Logo" className="mx-auto d-block" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src={Logo6Img} alt="Brand Logo" className="mx-auto d-block" />
                            </SwiperSlide>
                        </Swiper>
                    </div>
                </div>

                <div className="section aximo-project-page aximo-section-padding5"
                >
                    <div className="container-fluid">
                        <Swiper
                            spaceBetween={30} // Space between slides
                            // centeredSlides={true}
                            slidesPerView={3} // Number of slides visible at once
                            loop={true} // Infinite loop of the slides
                            autoplay={{
                                delay: 2500,
                                disableOnInteraction: false,
                            }} // Autoplay settings
                            speed={1000}  // Transition speed in ms (1000ms = 1 second)
                            modules={[Autoplay]} // Adding the Autoplay module
                            breakpoints={{
                                // When window width is >= 320px
                                320: {
                                    slidesPerView: 1, // 1 slide per view
                                },
                                // When window width is >= 480px
                                480: {
                                    slidesPerView: 2, // 2 slides per view
                                },
                                // When window width is >= 768px
                                768: {
                                    slidesPerView: 2, // 3 slides per view
                                },
                                // When window width is >= 1024px
                                1024: {
                                    slidesPerView: 3, // 4 slides per view
                                },
                            }}

                        >
                            <SwiperSlide>
                                <div className="aximo-project-thumb wow fadeInUpX Solution-slider" style={{ cursor: "grab" }} data-wow-delay="0.1s">
                                    <img src={Slider1Img} alt="Project Image" />
                                    {/* <div className="aximo-project-wrap">
                                    <div className="aximo-project-data">
                                        <Link to="#">
                                            <h3>Credi Coach</h3>
                                        </Link>
                                    </div>
                                    <Link className="aximo-project-icon" to="#" style={{ cursor: "pointer" }} >
                                        <svg width="34" height="28" viewBox="0 0 34 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M19.9795 2C19.9795 2 20.5 8 25.9795 11.2C28.4887 12.6653 31.9795 14 31.9795 14M31.9795 14H2M31.9795 14C31.9795 14 28.5339 15.415 25.9795 16.8C19.9795 20.0533 19.9795 26 19.9795 26"
                                                stroke="#FDFDE1" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </Link>
                                </div> */}
                                </div>
                            </SwiperSlide>

                            <SwiperSlide>
                                <div className="aximo-project-thumb wow fadeInUpX Solution-slider" style={{ cursor: "grab" }} data-wow-delay="0.2s">
                                    <img src={Slider2Img} alt="Project Image" />
                                    {/* <div className="aximo-project-wrap">
                                    <div className="aximo-project-data">
                                        <Link to="#">
                                            <h3>Credit Saint</h3>
                                        </Link>
                                    </div>
                                    <Link className="aximo-project-icon" to="#" style={{ cursor: "pointer" }} >
                                        <svg width="34" height="28" viewBox="0 0 34 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M19.9795 2C19.9795 2 20.5 8 25.9795 11.2C28.4887 12.6653 31.9795 14 31.9795 14M31.9795 14H2M31.9795 14C31.9795 14 28.5339 15.415 25.9795 16.8C19.9795 20.0533 19.9795 26 19.9795 26"
                                                stroke="#FDFDE1" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </Link>
                                </div> */}
                                </div>
                            </SwiperSlide>

                            <SwiperSlide>
                                <div className="aximo-project-thumb wow fadeInUpX Solution-slider" style={{ cursor: "grab" }} data-wow-delay="0.3s">
                                    <img src={Slider3Img} alt="Project Image" />
                                    {/* <div className="aximo-project-wrap">
                                    <div className="aximo-project-data">
                                        <Link to="#">
                                            <h3>Credit 101</h3>
                                        </Link>
                                    </div>
                                    <Link className="aximo-project-icon" to="#" style={{ cursor: "pointer" }} >
                                        <svg width="34" height="28" viewBox="0 0 34 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M19.9795 2C19.9795 2 20.5 8 25.9795 11.2C28.4887 12.6653 31.9795 14 31.9795 14M31.9795 14H2M31.9795 14C31.9795 14 28.5339 15.415 25.9795 16.8C19.9795 20.0533 19.9795 26 19.9795 26"
                                                stroke="#FDFDE1" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </Link>
                                </div> */}
                                </div>
                            </SwiperSlide>

                            <SwiperSlide>
                                <div className="aximo-project-thumb wow fadeInUpX Solution-slider" style={{ cursor: "grab" }} data-wow-delay="0.1s">
                                    <img src={Slider1Img} alt="Project Image" />
                                    {/* <div className="aximo-project-wrap">
                                    <div className="aximo-project-data">
                                        <Link to="#">
                                            <h3>Credi Coach</h3>
                                        </Link>
                                    </div>
                                    <Link className="aximo-project-icon" to="#" style={{ cursor: "pointer" }} >
                                        <svg width="34" height="28" viewBox="0 0 34 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M19.9795 2C19.9795 2 20.5 8 25.9795 11.2C28.4887 12.6653 31.9795 14 31.9795 14M31.9795 14H2M31.9795 14C31.9795 14 28.5339 15.415 25.9795 16.8C19.9795 20.0533 19.9795 26 19.9795 26"
                                                stroke="#FDFDE1" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </Link>
                                </div>  */}
                                </div>
                            </SwiperSlide>



                            {/* Add more SwiperSlides as needed */}
                        </Swiper>
                    </div>
                </div>

                <div className="section aximo-project-page text-center dark-bg">
                    <div className="container aximo-section-padding5">
                        <h2 className="mb-4 light-text">
                            <span className="aximo-title-animation">
                                Professional Business
                                <span className="aximo-title-icon">
                                    <img src={Star2Img} alt="Star2Img" />
                                </span>
                            </span>
                            <br />
                            Directory Website Solutions
                        </h2>
                        <p className="section-description light-text">
                            In today’s fast-paced digital world, having a professional and user-friendly business directory website
                            is essential for standing out and thriving. Whether you’re looking to create a local business directory,
                            a niche industry listing, or a comprehensive nationwide platform, we’re here to make it happen. With our
                            experience in building successful directory websites, we design platforms that are not only visually
                            appealing but also highly functional and scalable. Our solutions help you connect businesses with their
                            target audience, drive user engagement, and generate revenue through smart monetization options. Partner
                            with us to bring your vision to life and create a directory website that truly delivers results.
                        </p>
                        <Link className="get-in-touch-btn aximo-header-btn pill " to="/contact-us" style={{ borderRadius: "50px" }} >
                            Get In Touch
                        </Link>
                    </div>
                </div>
                {/* End */}

                {/* <div className="section aximo-project-page logo-slider dark-bg">
                <div className="container border-top py-5">
                    <h3 className="light-text text-center mb-3">Partnering with Leading Wine Retailers Worldwide.
                    </h3>
                    <div className="logo-slider row">
                        <div className="col-lg-4">
                            <img src="src/assets/images/images2/tyrepage.webp" alt className="mx-auto d-block" />
                        </div>
                        <div className="col-lg-4">
                            <img src="src/assets/images/images2/hpn-logo-1.webp" alt className="mx-auto d-block" />
                        </div>
                        <div className="col-lg-4">
                            <img src="src/assets/images/images2/redesign-hub-logo.webp" alt className="mx-auto d-block" />
                        </div>
                    </div>
                </div>
            </div>  */}

                <div className="section aximo-project-page py-5 services">
                    <div className="container my-5">
                        <h3 className="text-center mb-5">
                            Features of Our Service
                        </h3>
                        <div className="services-list d-md-flex justify-content-around">
                            <ul className>
                                <li><img src={Check} alt="check" style={{ color: '#000000', marginRight: '20px' }} /> Advanced Search and Filter Functionality</li>
                                <li><img src={Check} alt="check" style={{ color: '#000000', marginRight: '20px' }} />  User-Friendly Business Listings</li>
                                <li><img src={Check} alt="check" style={{ color: '#000000', marginRight: '20px' }} />  Mobile and SEO-Optimized Design</li>
                            </ul>
                            <ul className>
                                <li><img src={Check} alt="check" style={{ color: '#000000', marginRight: '20px' }} />  Reviews and Ratings Integration</li>
                                <li><img src={Check} alt="check" style={{ color: '#000000', marginRight: '20px' }} />  Easy Admin Panel for Updates</li>
                                <li><img src={Check} alt="check" style={{ color: '#000000', marginRight: '20px' }} />  Monetization Features (e.g., paid listings,
                                    advertisements)</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <FadeInStagger>
                    <div className="review-section text-center pb-5">
                        <div className="container border-top py-5">
                            <div>
                                <h3>Our Client's Reviews</h3>
                                <p>
                                    We are very proud of the service we provide and stand by every product we carry.
                                    See our testimonials from our happy customers.
                                </p>
                            </div>
                            <VideoSlider />
                        </div>
                    </div>
                </FadeInStagger>

            </FadeInStagger>

        </div>
    )
}

export default Bussinessdirectorydata