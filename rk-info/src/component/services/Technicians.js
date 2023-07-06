import React from 'react'
import Technicians1 from '../assets/img/Group 123.png'
import Fram1 from '../assets/img/Group 119.png'
export default function Technicians() {
    return (
        <>

            <section className="inner-page">
                <div className="container">
                    <div className="row">

                        <div className="col-lg-6 pt-16">
                            <h1 className='quick11 wow animate__backInLeft' data-wow-duration="1s">Our experienced technicians<br /> are ready to repair your<br /> device right now!</h1>
                            <p className='quick22 wow animate__backInLeft' data-wow-duration="1s">consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper<br /> mattis, more pulvinar dapibus leo.</p>
                            <div className=' wow animate__backInLeft' data-wow-duration="2s">
                                <div className="service mt-10">
                                    <div className="text-side-imageee">
                                        <img src={Fram1} alt="" />
                                    </div>
                                    <span>

                                        <div className="ml-3  text-start">
                                            <h1 className='text-[#1D3A59]'>Repair for pesonal device</h1>
                                            <p className='text-[#727E8E]'>Pretium facilisi porttitor vulputate nostra dolor tincidunt molestie sem fames.</p>

                                        </div>
                                    </span>
                                </div>
                                <div className="service">
                                    <div className="text-side-imageee">
                                        <img src={Fram1} alt="" />
                                    </div>
                                    <span>

                                        <div className="ml-3  text-start">
                                            <h1 className='text-[#1D3A59]'>Repair for business device</h1>
                                            <p className='text-[#727E8E]'>Quisque felis sed nascetur platea congue habitasse sollicitudin suspendisse iaculis </p>

                                        </div>
                                    </span>
                                </div>
                                <div className="service">
                                    <div className="text-side-imageee">
                                        <img src={Fram1} alt="" />
                                    </div>
                                    <span>

                                        <div className="ml-3  text-start">
                                            <h1 className='text-[#1D3A59]'>Claim Repair Assurance</h1>
                                            <p className='text-[#727E8E]'>Pretium facilisi porttitor vulputate nostra dolor tincidunt molestie sem fames.</p>

                                        </div>
                                    </span>
                                </div>

                            </div>
                        </div>

                        <div className="col-lg-6">
                            <img
                                className='service1 repire imgss wow animate__zoomInUp'
                                data-wow-duration="3s"
                                src={Technicians1}
                                alt="" />
                        </div>


                        {/* <div className="col-lg-6 technicians1">
                            <img
                                className='technicians2 repire imgss wow animate__zoomInUp'
                                data-wow-duration="3s"
                                src={Technicians1} />
                            <img
                                className='technicians3 repire imgss wow animate__zoomInUp'
                                data-wow-duration="3s"
                                src={Technicians2} />
                        </div>
                    </div> */}
                    </div>
                </div>
            </section>

        </>
    )
}
