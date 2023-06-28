import React, { useEffect } from 'react'
import 'animate.css';
import { WOW } from 'wowjs';

export default function Experience() {
    useEffect(() => {
        const wow = new WOW();
        wow.init();
    }, []);
    return (
        <>
            <div className="container pb-10">
                <div className="row">
                    <div className="col-lg-6">
                        <div className="container pt-5" data-aos="zoom-in">
                            <div className="wow animate__backInDown" data-wow-duration="1s">
                                <p className='text-[#027BB1] text-[40px]'>We Have 10 Years Experience InThis Passion</p>
                                <p className='text-[#727E85] text-[18px]'>
                                    Portfo quntum imperdiet Deartuis sagittis are Praesent mauris fusce nec tellus sedeus sedye.
                                </p>
                            </div>
                        </div>
                        <form action="https://formsubmit.co/rktechnology2022@gmail.com" method="POST" >
                            <div className="form-floating mb-3">
                                <input type="text" className="form-control form-con" id="floatingPassword" placeholder="Password" />
                                <label htmlFor="floatingPassword" className='formm'>Address :-</label>
                            </div>
                            <div className="form-floating mb-3">
                                <input type="email" className="form-control form-con" id="floatingInput" placeholder="name@example.com" />
                                <label htmlFor="floatingInput" className='formm'>Email address :-</label>
                            </div>
                            <div className="form-floating mb-3">
                                <input type="tel" className="form-control form-con" id="typePhone" placeholder="Password" />
                                <label htmlFor="typePhone" className='formm'>Phone :-</label>
                            </div>
                            <div className='text-center'>
                                <button type="submit" className="btn-get-startedd scrollto">Free Consultation</button>
                            </div>
                        </form>
                    </div>

                    <div className="col-lg-6 maps wow animate__rubberBand">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3719.0300517715145!2d72.89328587605831!3d21.23065688081199!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be04fa3bc89d225%3A0xbb36f06baa85efca!2sSARTHANA%20BUSINESS%20HUB!5e0!3m2!1sen!2sin!4v1687870918643!5m2!1sen!2sin" width="600" height="450" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>

                    </div>

                </div>
            </div>

        </>
    )
}
