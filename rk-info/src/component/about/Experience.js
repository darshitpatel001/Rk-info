import React, { useEffect } from 'react'
import Technicians1 from '../assets/img/Rectangle 64.png'
import social from '../assets/img/Frame 8.png'
import 'animate.css';
import { WOW } from 'wowjs';

export default function Experience() {
    useEffect(() => {
        const wow = new WOW();
        wow.init();
    }, []);
    return (
        <>
            <div className="container-fluid">
                <div className="row">

                    <div className="col-lg-7 col-md-6">
                        <div className="pb-16">
                            <div className="consultation pt-10 content-start  wow animate__backInLeft">
                                <div className="container-fluid px-20">
                                    <h1 className='text-[#1A9EDA] Exp-text'>WHO WE ARE</h1>
                                    <h2 className='text-[#027BB1] Exp-text1'>Get your smartphone or computer<br /> repaired today.</h2>
                                    <p className='text-[#727E8E] Exp-text2'>Netus curabitur massa eu pharetra condimentum proin praesent<br /> vitae letius. Fusce ultricies ipsum dignissim ac id duis ligula<br /> natoque volutpat. Ut molestie luctus felis eros quis iaculis ligula <br />consectetur nisi feugiat.</p>
                                    <a href="/services" className="btn-gett-startedd animate_animated animate_fadeInUp scrollto">Discover more</a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-5 col-md-6 pt-2 pb-10">
                        {/* <div className='Experience'> */}
                        <img src={Technicians1}  alt='' className="img-fluid w-[500px] wow animate__zoomInUp" />
                        {/* <div className="count-boxx  Experience2">
                                <img src={social} className='sociall text-sidee-imagee '/>
                               <h1 className='text-[#027BB1] Expe-font'>10+ Years of Experience</h1>
                                <p className='text-[#727E8E] Expe-font1'>Pulvinar placerat risus pharetra ut felis potenti suspendisse congue aliquet laoreet tristique.</p>
                            </div> */}
                        {/* </div> */}
                    </div>


                </div>
            </div>

        </>
    )
}
