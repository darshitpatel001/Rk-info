import React from 'react'
import Brands1 from '../assets/img/Frame 4.png'
import Brands2 from '../assets/img/Frame 5.png'
import Brands3 from '../assets/img/Frame 6.png'
import Brands4 from '../assets/img/Frame 7.png'

export default function Brands() {
    return (
        <>
            <section className="Brands wow animate__backInDown pt-20" data-wow-duration="1s" >
                <div className="container">
                    <div className="text-center">
                        <p className='Brands1'>WHY CHOOSE US</p>
                        <h2 className='Brands2 wow animate__backInDown' data-wow-duration="1s">We repair laptops and desktops for all <br /> major brands.</h2>
                    </div>
                </div>
            </section>
            <section className="inner-page">
                <div className="container">
                    <div className="row  pt-10 pb-20">

                        <div className="col-lg-6">
                            <div className='wow animate__backInRight' data-wow-duration="1s">
                                <div className="service mt-10">
                                    <div className="text-sidee-imageee">
                                        <img src={Brands1} alt=""/>
                                    </div>
                                    <span>

                                        <div className="ml-3 text-start">
                                            <h1 className='text-[#1D3A59] text-[35px] brand-text'>Limited Lifetime Warranty</h1>
                                            <p className='text-[#727E8E] brand-text1'>A limited warranty can mean virtually anything the manufacturer decides, so it is important to fully understand the meanin</p>

                                        </div>
                                    </span>
                                </div>
                                <div className="service">
                                    <div className="text-sidee-imageee">
                                        <img src={Brands2} alt=""/>
                                    </div>
                                    <span>

                                        <div className="ml-3 text-start">
                                            <h1 className='text-[#1D3A59] text-[35px] brand-text'>Genuine Parts</h1>
                                            <p className='text-[#727E8E] brand-text1'>A limited warranty can mean virtually anything the manufacturer decides, so it is important to fully understand the meanin</p>

                                        </div>
                                    </span>
                                </div>


                            </div>
                        </div>
                        <div className="col-lg-6 ">
                            <div className='wow animate__backInLeft' data-wow-duration="1s">
                                <div className="service mt-10">
                                    <div className="text-sidee-imageee">
                                        <img src={Brands3} alt="" />
                                    </div>
                                    <span>

                                        <div className="ml-3 text-start">
                                            <h1 className='text-[#1D3A59] text-[35px] brand-text'>Expert Repair Technicians</h1>
                                            <p className='text-[#727E8E] brand-text1'>A limited warranty can mean virtually anything the manufacturer decides, so it is important to fully understand the meanin</p>

                                        </div>
                                    </span>
                                </div>
                                <div className="service">
                                    <div className="text-sidee-imageee">
                                        <img src={Brands4} alt="" />
                                    </div>
                                    <span>

                                        <div className="ml-3 text-start">
                                            <h1 className='text-[#1D3A59] text-[35px] brand-text'>Same Day Repairs</h1>
                                            <p className='text-[#727E8E] brand-text1'>A limited warranty can mean virtually anything the manufacturer decides, so it is important to fully understand the meanin</p>

                                        </div>
                                    </span>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>

            </section>

        </>
    )
}
