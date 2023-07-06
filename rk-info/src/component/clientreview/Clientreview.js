import React, { useEffect } from 'react'
import Review from '../assets/img/Rectangle 32.png'
import Review1 from '../assets/img/Rectangle 33.png'
import Review2 from '../assets/img/Rectangle 38.png'
import 'animate.css';
import { WOW } from 'wowjs';

export default function Clientreview() {
    useEffect(() => {
        const wow = new WOW();
        wow.init();
    }, []);

    return (
        <>
            <div className="containerrr Client">
                <h1 className='text-center text-[40px]'>Our Client</h1>
                <div className="containerr">
                    <ol>
                        <li><a href="/">Home</a></li>
                        <li>Our Client</li>
                    </ol>
                </div>
            </div>
            <section id="cta" className="cta">
                <div className="container" data-aos="zoom-in">
                    <div className="wow animate__backInDown" data-wow-duration="1s">
                        <p className='text-[35px]'>What they say about us</p>
                        <p className='text-[#727E85] text-[18px]'>
                            Portfo quntum imperdiet Deartuis sagittis are Praesent mauris fusce nec tellus sedeus sedye.
                        </p>
                    </div>
                </div>
            </section>

            <div className="container">
                <div className="row">
                    <div className="col-lg-5">
                        <img src={Review} className="img-fluid imgss wow animate__backInLeft"  alt='' data-wow-duration="1s" />
                    </div>
                    <div className="col-lg-7 d-flex flex-column justify-content-center">
                        <div className="content bg-[#ffe9e9] border-dashed border-2 border-[#FB2C29] wow animate__backInRight" data-wow-duration="1s">
                            <p>
                                From internal promotions to cross-functional projects and international assignments, the company values and nurtures talent, allowing individuals to explore diverse career paths and reach their professional goals.                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container pt-28">
                <div className="row">
                
                    <div className="col-lg-7 d-flex flex-column justify-content-center">
                      
                          
                            <div className="content bg-[#edf2ff]  border-dashed border-2 border-[#405CA5] wow animate__backInRight" data-wow-duration="1s">
                                <p>
                                    It is a great experience to be a part of such a wonderful team. Awesome place to workone thing I like about the organization is freedom. every employee has a freedom to work in creative manner which adds value in our skills and also keeps our perform                            </p>
                            </div>
                  
                    </div>

                    <div className="col-lg-5">
                        <img src={Review1} alt='' className="img-fluid imgss  wow animate__backInLeft" data-wow-duration="1s" />
                    </div>
                </div>
            </div>

            <div className="container pt-28">
                <div className="row">

                    <div className="col-lg-5">
                        <img src={Review2} alt='' className="img-fluid imgss  wow animate__backInLeft" data-wow-duration="1s" />
                    </div>

                    <div className="col-lg-7 d-flex flex-column justify-content-center">
                        <div className="content bg-[#fdebd8]  border-dashed border-2 border-[#FF9933] wow animate__backInRight" data-wow-duration="1s">
                            <p>
                                I placed an order, received call saying it will be cancelled as item is out of stock, but even after a week order showing in process, and when called customer care their behaviour is very arrogant, I think I have lost my money, please don't buy from                               </p>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}
