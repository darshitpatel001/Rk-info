import React, { useEffect } from 'react'
import prof1 from '../assets/img/Group 125.png'
import prof2 from '../assets/img/Group 126.png'
import prof3 from '../assets/img/Group 127.png'
import prof4 from '../assets/img/Group 128.png'
import prof5 from '../assets/img/Group 129.png'
import prof6 from '../assets/img/Group 130.png'
import 'animate.css';
import { WOW } from 'wowjs';
import Slider from "react-slick";

export default function Professional() {
    useEffect(() => {
        const wow = new WOW();
        wow.init();
    }, []);

    var settings = {
        dots: false,
        infinite: true,
        // autoplay: true,
        // autoplaySpeed: 3000,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1280,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 766,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    };

    return (
        <>
            <section className="proff" >
                <div className="container proff-content">
                    <div className="text-center">
                        <h2 className='prof wow animate__backInDown' data-wow-duration="1s">Affordable and professional repair <br />services for all your devices</h2>
                    </div>
                    
                    <Slider {...settings}>
                        <div className='count-box'>
                            <img src={prof1} alt="" className='social' />
                            <div>
                                <h1 className='social1'>Computer System</h1>
                                <h2 className='social2'>Ullamcorper finibus et arcu tellus inceptos habitasse sed augue lobortis at vitae</h2>

                            </div>
                        </div>
                        <div className='count-box'>
                            <img src={prof2} alt="" className='social' />
                            <div>
                                <h1 className='social1'>CCTV & Security</h1>
                                <h2 className='social2'>These cameras share the images across the internet, so CCTV footage can be easily accessed.</h2>

                            </div>
                        </div>
                        <div className='count-box'>
                            <img src={prof3} alt="" className='social' />
                            <div>
                                <h1 className='social1'>Analog EPABX</h1>
                                <h2 className='social2'>Electronic Private Automatic Branch Exchange which is a private telephone network   </h2>

                            </div>
                        </div>
                        <div className='count-box'>
                            <img src={prof4} alt="" className='social' />
                            <div>
                                <h1 className='social1'>Home Automation</h1>
                                <h2 className='social2'>A home automation system will monitor and/or control home attributes such as lighting, </h2>

                            </div>
                        </div>
                        <div className='count-box'>
                            <img src={prof5} alt="" className='social' />
                            <div>
                                <h1 className='social1'>Networking</h1>
                                <h2 className='social2'>A computer network is a set of computers sharing resources or provided by network nodes.</h2>

                            </div>
                        </div>
                        <div className='count-box'>
                            <img src={prof6} alt="" className='social' />
                            <div>
                                <h1 className='social1'>Fire Alarm</h1>
                                <h2 className='social2'>A fire alarm system is a set of devices that detect and alert people</h2>

                            </div>
                        </div>
                    </Slider>
                </div>
            </section>

        </>
    )
}
