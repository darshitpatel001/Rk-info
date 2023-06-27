import React from 'react'
import Ourvalue1 from '../assets/img/Group 163.png'
import Ourvalue2 from '../assets/img/Group 164.png'
export default function Ourvalue() {
    return (
        <>
            <div className='bg-[#F3F5F9]'>
                <div className="container pt-24 pb-24">

                    <div className="text-center wow animate__backInDown" data-wow-duration="1s">
                        <h1 className='text-[18px] text-[#1A9EDA]'>Our Value</h1>
                        <h1 className='text-[45px] text-[#027BB1] pb-4'>The smart way to fix computers</h1>
                        <p className='text-[20px] text-[#727E8E]'>A computer that freezes or runs slowly could be a sign of more serious problems to come. Before <br />you do anything else, be sure to back up your important folders and files while you still have <br />access to them.</p>
                    </div>

                </div>
            </div>
            <div className='container pt-10 pb-20'>
                <div className='row'>
                    <div class="col-lg-6 p-4">
                        <div className="boxx bg-white wow animate__backInRight" data-wow-duration="1s">

                            <div className='row'>
                                <div className='col-lg-2 pt-4'>
                                    <div className="value-img">
                                        <img src={Ourvalue1} />
                                    </div>
                                </div>

                                <div className='col-lg-10 pt-1' >
                                    <p className="ml-3 text-start">
                                        <h1 className='text-[#1D3A59] text-[35px] brand-text'>Our Value</h1>
                                        <p className='text-[#727E8E] text-[18px]'>The computer is indispensable, and its <br />presence has in our daily life, and it has<br /> become easier for ... </p>
                                    </p>
                                </div>

                            </div>
                        </div>
                    </div>

                    <div class="col-lg-6 p-4">
                        <div className="boxx bg-white wow animate__backInLeft" data-wow-duration="1s">

                            <div className='row'>
                                <div className='col-lg-2 pt-4'>
                                    <div className="value-img">
                                        <img src={Ourvalue2} />
                                    </div>
                                </div>

                                <div className='col-lg-10 pt    -1'>
                                    <p className="ml-3 text-start">
                                        <h1 className='text-[#1D3A59] text-[35px] brand-text'>Our Mission</h1>
                                        <p className='text-[#727E8E] text-[18px]'>Our mission is to provide outstanding value to<br /> our customers, employees, and business<br /> partners ...</p>
                                    </p>
                                </div>

                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}
