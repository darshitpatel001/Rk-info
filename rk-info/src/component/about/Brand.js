import React from 'react'
import brand from '../assets/img/Rectangle 32.png'
import brand1 from '../assets/img/Rectangle 33.png'
import brand2 from '../assets/img/Rectangle 38.png'
import brand3 from '../assets/img/Rectangle 34.png'
import brand4 from '../assets/img/Rectangle 37.png'
import brand5 from '../assets/img/Rectangle 35.png'
import brand6 from '../assets/img/Rectangle 39.png'
import brand7 from '../assets/img/Rectangle 40.png'


export default function Brand() {
    return (
        <>
            <div className="brand-sections">
                <div className="container pt-10">

                    <div className="text-center wow animate__backInDown" data-wow-duration="1s">
                        <h1 className='text-[45px] text-[#027BB1] pb-4'>Support brand</h1>
                        <p className='text-[20px] text-[#727E8E]'>The process of creating the brand identity of a company. This process also delivers <br />materials that support the brand.</p>
                    </div>

                </div>

                <div className="container pt-10 pb-10">
                    <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4">
                        <div className="col">
                            <div className="p-1">
                                <img src={brand} alt='' className='clientt' />
                            </div>
                        </div>
                        <div className="col">
                            <div className="p-1">
                                <img src={brand1} alt='' className='clientt' />
                            </div>
                        </div>
                        <div className="col">
                            <div className="p-1">
                                <img src={brand2} alt='' className='clientt' />
                            </div>
                        </div>
                        <div className="col">
                            <div className="p-1">
                                <img src={brand3} alt='' className='clientt' />
                            </div>
                        </div>
                        <div className="col">
                            <div className="p-1">
                                <img src={brand4} alt='' className='clientt' />
                            </div>
                        </div>
                        <div className="col">
                            <div className="p-1">
                                <img src={brand5} alt='' className='clientt' />
                            </div>
                        </div>
                        <div className="col">
                            <div className="p-1">
                                <img src={brand6} alt='' className='clientt' />
                            </div>
                        </div>
                        <div className="col">
                            <div className="p-1">
                                <img src={brand7} alt='' className='clientt' />
                            </div>
                        </div>
                    </div>
                </div>


            </div>

        </>
    )
}
