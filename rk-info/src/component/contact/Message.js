import React from 'react'
import icon from '../assets/img/whatsapp.png'
import icon1 from '../assets/img/gmail.png'
import icon2 from '../assets/img/map.png'
export default function Message() {
    return (
        <>
            <div className='bg-[#F3F5F9]'>
                <div className="container pt-24 pb-24">

                    <div className="text-center wow animate__backInDown" data-wow-duration="1s">
                        <h1 className='text-[45px] text-[#027BB1] pb-4'>Send Us Message</h1>
                        <p className='text-[20px] text-[#727E8E]'>Do you have a question for us? we'd love to here from you and we would be happy to answer<br /> your questions. Reach out to us and we'll respond as soon as we can.</p>
                    </div>

                </div>
            </div>
            <div className='pt-20 pb-20'>
                <div className='container boxx'>
                    <div className='row'>
                        <div className='col-lg-4'>
                            <div className='container bg-[#FFE1D2] p-6 rounded message'>
                                <div className='wow animate__backInRight' data-wow-duration="1s">
                                    <h1 className='pt-4 text-[#1D3A59] text-[25px]'><b>Contact Information</b></h1>
                                    <h1 className='pt-4 pb-5 text-[#1D3A59] text-[18 px]'>In publishing and graphic design, Lorem-
                                        ipsu is a ithout relying on meaning content.</h1>

                                    <div className="icon">
                                        <img src={icon} />
                                        <div className="text">
                                            <h1 className='px-2 text-[#1D3A59]'>
                                                <ul>
                                                    <li>+91 82649 21960</li>
                                                    <li>+91 97254 83242</li>
                                                </ul>
                                            </h1>
                                        </div>
                                    </div>

                                    <div className="icon pt-8">
                                        <img src={icon1} />
                                        <div className="text">
                                            <h1 className='px-2 text-[#1D3A59]'>rktechnology2022@gmail.com</h1>
                                        </div>
                                    </div>


                                    <div className="icon pt-8">
                                        <img src={icon2} />
                                        <div className="text">
                                            <h1 className='px-2 text-[#1D3A59]'>112, Skyzone Business Hub, Nr. Shyamdham Temple, Sarathana Jakatnaka, Surat - 395006 IN</h1>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                        <div className='col-lg-8'>
                            <form action="https://formsubmit.co/rktechnology2022@gmail.com" method="POST"  className='pt-5' >

                                <div className="row mb-4">
                                    <div className="col">
                                        <div className="form-outline">

                                            <label className="form-label" for="yname">Your Name</label>
                                            <input type="text" className="form-control" />
                                        </div>
                                    </div>
                                    <div className="col">
                                        <div className="form-outline">
                                            <label className="form-label" for="yemail">Your Email</label>
                                            <input type="email" className="form-control" />
                                        </div>
                                    </div>
                                </div>

                                <div className="form-outline mb-4">
                                    <label className="form-label" for="form6Example4">Your  Subject</label>
                                    <input type="text" className="form-control" />
                                </div>


                                <div className="form-outline mb-4">
                                    <label className="form-label" for="form6Example7">Messages</label>
                                    <textarea className="form-control" rows="4"></textarea>
                                </div>

                                <div className='text-center'>
                                <button type="submit"  className="btn-get-startedd scrollto">Free Consultation</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
