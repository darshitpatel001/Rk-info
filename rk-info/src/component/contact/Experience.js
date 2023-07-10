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
            <div className="container pb-10 contact-section">
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
                                <input type="text" name='address' className="form-control form-con" />
                                <label htmlFor="address" className='formm'>Address :-</label>
                            </div>
                            <div className="form-floating mb-3">
                                <input type="email" name='email' className="form-control form-con" />
                                <label htmlFor="email" className='formm'>Email address :-</label>
                            </div>
                            <div className="form-floating mb-3">
                                <input type="tel" className="form-control form-con" name="mobile" pattern="[0-9]{10}" required />
                                <label htmlFor="mobile" className='formm'>Phone :-</label>
                            </div>
                            <div className='text-center'>
                                <button type="submit" className="btn-get-startedd scrollto">Free Consultation</button>
                            </div>
                        </form>
                    </div>

                    <div className="col-lg-6 maps wow animate__rubberBand">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3719.3926833238165!2d72.87254061128283!3d21.21627158122954!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be04f12ab25f475%3A0x16a8e2de07701aab!2sMohan%20Ni%20Chal%2C%2052-53%2C%20Lambe%20Hanuman%20Rd%2C%20Mohan%20Nagar%2C%20Varachha%2C%20Surat%2C%20Gujarat%20395006!5e0!3m2!1sen!2sin!4v1688986319462!5m2!1sen!2sin" width="100%" height="100%" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="map" ></iframe>

                    </div>

                </div>
            </div>

        </>
    )
}
