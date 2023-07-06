import React from 'react'
import '../css/index.css'
import Social1 from '../assets/img/Frame1.png'
import Social2 from '../assets/img/Frame2.png'
import Social3 from '../assets/img/Frame3.png'
import Social4 from '../assets/img/Group 58.png'

export default function Social() {
    return (
        <>
            <section className="services">
                <div className="container text-center pt-20 pb-16">
                    <div className=" grid xl:grid-cols-3 lg:grid-cols-3 md:grid-1 py-2 mb-2 imgss wow animate__flipInX" data-wow-duration="1s">
                        
                        <div>
                            <img src={Social1} alt="" className='social' />
                            <div>
                                <h1 className='social1'>Online Shop</h1>
                                <h2 className='social2'>You can find new and second-hand
                                    gadgets at our online shop.</h2>
                                <a href='/product'><img src={Social4} alt=""  className='social' /></a>
                            </div>
                        </div>

                        <div>
                            <img src={Social2} alt="" className='social' />
                            <div>
                                <h1 className='social1'>Locations</h1>
                                <h2 className='social2'>Find a repair shop near you. View
                                    more contact information.</h2>
                                    <a href='/contact'><img src={Social4} alt=""  className='social' /></a>
                            </div>
                        </div>

                        <div>
                            <img src={Social3} alt="" className='social' />
                            <div>
                                <h1 className='social1'>Support</h1>
                                <h2 className='social2'>We offer a 24/7 customer hotline<br />
                                    so we can help you online.</h2>
                                    <a href='/contact'><img src={Social4} alt="" className='social' /></a>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </>
    )
}
