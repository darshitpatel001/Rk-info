import React from 'react'
import { Link } from 'react-router-dom'

export default function Sevices() {
    return (
        <>

            <div className="Sevices text-center">
                <div className="wow animate__backInLeft">
                    <div className="container-fluid px-20">
                        <h2 className='text-[40px] cons-fon'><b>We're Here To Help You Computer Repair Service</b></h2><br />
                        <p className='text-[20px]'>We handle all the major smartphones are different brands. Using the best quality little <br />expensive toolsand equipment help us to repair phones in a much convenient<br /> way.</p>
                        <Link to="" className="btn-get-startedd animate_animated animate_fadeInUp scrollto">Free Consultation</Link>
                    </div>
                </div>
            </div>

            <div className="container-fluid bg-[#F3F5F9] pt-20 pb-14" >

                <div className="row text-center wow animate__swing" data-wow-duration="1s">

                    <div className="col-lg-3 col-md-6 d-md-flex p-3 align-items-md-stretch ">
                        <div className="countt-box bg-white clientt">
                            <h1 className='text-[#F16621] text-[40px]'>14K+</h1>
                            <h6 className='text-[#727E8E] text-[20px]'>Happy clients</h6>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-6 d-md-flex p-3 align-items-md-stretch">
                        <div className="countt-box bg-white clientt">
                            <h1 className='text-[#F16621] text-[40px]'>4K+</h1>
                            <h6 className='text-[#727E8E] text-[20px]'>Members Active</h6>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-6 d-md-flex p-3 align-items-md-stretch">
                        <div className="countt-box bg-white clientt">
                            <h1 className='text-[#F16621] text-[40px]'>27+</h1>
                            <h6 className='text-[#727E8E] text-[20px]'>Certified Experts</h6>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-6 d-md-flex p-3 align-items-md-stretch">
                        <div className="countt-box bg-white clientt">
                            <h1 className='text-[#F16621] text-[40px]'>10+</h1>
                            <h6 className='text-[#727E8E] text-[20px]'>Years of Experience</h6>
                        </div>
                    </div>

                </div>

            </div>
        </>
    )
}
