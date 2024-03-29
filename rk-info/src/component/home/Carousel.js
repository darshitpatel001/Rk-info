import React, { useEffect } from 'react'
import Carousel1 from '../assets/img/Rectangle 2.jpg'
import Carousel2 from '../assets/img/Rectangle 2.jpg'
import Carousel3 from '../assets/img/Rectangle 2.jpg'
import Carouselmobile from '../assets/img/slider-mobile-img.jpg'
import 'animate.css';
import { WOW } from 'wowjs';
import { Link } from 'react-router-dom';

export default function Carousel() {
    useEffect(() => {
        const wow = new WOW();
        wow.init();
    }, []);
    return (
        <>
            <div id="carouselExampleCaptions" className="carousel slide desktop" data-bs-ride="carousel">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner ">
                    <div className="carousel-item active">
                        <img src={Carousel3} alt="" className="d-block" />
                        <div className="carousel-caption text-left">
                            <div className="container wow animate__bounceInRight">
                                <h2 className='demoo'>What Problems Can</h2>
                                <p>RK is a neat, feature-rich landing page
                                    template <br />designed to showcase your product or service in <br />style.</p>
                                <Link to="/product" className="btn-get-started animate_animated animate_fadeInUp scrollto">Visit Online Store</Link>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src={Carousel2} alt="" className="d-block" />
                        <div className="carousel-caption text-left">
                            <div className="container">
                                <h2 className='demoo'>What Problems Can</h2>
                                <p>RK is a neat, feature-rich landing page
                                    template <br />designed to showcase your product or service in <br />style.</p>
                                <Link to="/product" className="btn-get-started animate_animated animate_fadeInUp scrollto">Visit Online Store</Link>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src={Carousel1} alt="" className="d-block" />
                        <div className="carousel-caption text-left">
                            <div className="container">
                                <h2 className='demoo'>What Problems Can</h2>
                                <p>RK is a neat, feature-rich landing page
                                    template <br />designed to showcase your product or service in <br />style.</p>
                                <Link to="/product" className="btn-get-started animate_animated animate_fadeInUp scrollto">Visit Online Store</Link>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button> */}
            </div>
            <div id="carouselExampleCaptions" className="carousel slide mobile" data-bs-ride="carousel">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner ">
                    <div className="carousel-item active">
                        <img src={Carouselmobile} alt="" className="d-block" />
                        <div className="carousel-caption text-left">
                            <div className="container wow animate__bounceInRight">
                                <h2 className='demoo'>What Problems Can</h2>
                                <p>RK is a neat, feature-rich landing page
                                    template <br />designed to showcase your product or service in <br />style.</p>
                                <Link to="/product" className="btn-get-started animate_animated animate_fadeInUp scrollto">Visit Online Store</Link>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src={Carouselmobile} alt="" className="d-block" />
                        <div className="carousel-caption text-left">
                            <div className="container">
                                <h2 className='demoo'>What Problems Can</h2>
                                <p>RK is a neat, feature-rich landing page
                                    template <br />designed to showcase your product or service in <br />style.</p>
                                <Link to="/product" className="btn-get-started animate_animated animate_fadeInUp scrollto">Visit Online Store</Link>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src={Carouselmobile} alt="" className="d-block" />
                        <div className="carousel-caption text-left">
                            <div className="container">
                                <h2 className='demoo'>What Problems Can</h2>
                                <p>RK is a neat, feature-rich landing page
                                    template <br />designed to showcase your product or service in <br />style.</p>
                                <Link to="/product" className="btn-get-started animate_animated animate_fadeInUp scrollto">Visit Online Store</Link>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button> */}
            </div>
        </>
    )
}
