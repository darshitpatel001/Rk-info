import React, { useEffect } from 'react'
import prof1 from '../assets/img/Group 125.png'
import prof2 from '../assets/img/Group 126.png'
import prof3 from '../assets/img/Group 127.png'
import 'animate.css';
import { WOW } from 'wowjs';

export default function Professional() {
    useEffect(() => {
        const wow = new WOW();
        wow.init();
    }, []);
    return (
        <>
            <section className="proff bg-[#F3F5F9]" >
                <div className="container-fluid  pt-32 pb-20">
                    <div className="text-center">
                        <h2 className='prof wow animate__backInDown' data-wow-duration="1s">Affordable and professional repair <br />services for all your devices</h2>
                    </div>

                    <div className="container text-center pt-8">
                        <div className="imgss wow animate__flipInX" data-wow-duration="1s">
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

                        </div>
                    </div>
                </div>


            </section>

        </>
    )
}
