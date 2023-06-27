import React, { useEffect } from 'react'
import Carousel1 from '../assets/img/Rectangle 2.jpg'
import Carousel2 from '../assets/img/Rectangle 2.jpg'
import Carousel3 from '../assets/img/Rectangle 2.jpg'
import 'animate.css';
import { WOW } from 'wowjs';

export default function Carousel() {
    useEffect(() => {
        const wow = new WOW();
        wow.init();
    }, []);
    return (
        <>
            {/* <div id="demo" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#demo" data-bs-slide-to="0" className="active"></button>
                    <button type="button" data-bs-target="#demo" data-bs-slide-to="1"></button>
                    <button type="button" data-bs-target="#demo" data-bs-slide-to="2"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src={Carousel1} alt="Los Angeles" className="d-block" />
                        <div className="carousel-container wow animate__backInLeft">
                            <div className="container">
                                <h2 className='demoo'>What Problems can <br />repair solve</h2>
                                <p>RK is a neat, feature-rich landing page
                                    template <br />designed to showcase your product or service in <br />style.</p>
                                <a href="" className="btn-get-started animate_animated animate_fadeInUp scrollto">Visit Online Store</a>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src={Carousel2} alt="Chicago" className="d-block" />
                        <div className="carousel-container">
                            <div className="container">
                                <h2 className='demoo'>What Problems Can</h2>
                                <p>RK is a neat, feature-rich landing page
                                    template <br />designed to showcase your product or service in <br />style.</p>
                                <a href="" className="btn-get-started animate_animated animate_fadeInUp scrollto">Visit Online Store</a>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src={Carousel3} alt="New York" className="d-block" />
                        <div className="carousel-container">
                            <div className="container">
                                <h2 className='demoo'>What Problems Can</h2>
                                <p>RK is a neat, feature-rich landing page
                                    template <br />designed to showcase your product or service in <br />style.</p>
                                <a href="" className="btn-get-started animate_animated animate_fadeInUp scrollto">Visit Online Store</a>
                            </div>
                        </div>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#demo" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon"></span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#demo" data-bs-slide="next">
                    <span className="carousel-control-next-icon"></span>
                </button>
            </div> */}
            <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
                <div class="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div class="carousel-inner ">
                    <div class="carousel-item active">
                        <img src={Carousel3} alt="New York" className="d-block" />
                        <div class="carousel-caption text-left">
                            <div className="container wow animate__bounceInRight">
                                <h2 className='demoo'>What Problems Can</h2>
                                <p>RK is a neat, feature-rich landing page
                                    template <br />designed to showcase your product or service in <br />style.</p>
                                <a href="" className="btn-get-started animate_animated animate_fadeInUp scrollto">Visit Online Store</a>
                            </div>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <img src={Carousel3} alt="New York" className="d-block" />
                        <div class="carousel-caption text-left">
                            <div className="container">
                                <h2 className='demoo'>What Problems Can</h2>
                                <p>RK is a neat, feature-rich landing page
                                    template <br />designed to showcase your product or service in <br />style.</p>
                                <a href="" className="btn-get-started animate_animated animate_fadeInUp scrollto">Visit Online Store</a>
                            </div>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <img src={Carousel3} alt="New York" className="d-block" />
                        <div class="carousel-caption text-left">
                            <div className="container">
                                <h2 className='demoo'>What Problems Can</h2>
                                <p>RK is a neat, feature-rich landing page
                                    template <br />designed to showcase your product or service in <br />style.</p>
                                <a href="" className="btn-get-started animate_animated animate_fadeInUp scrollto">Visit Online Store</a>
                            </div>
                        </div>
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>
        </>
    )
}
