import React from 'react'
import Services1 from '../assets/img/Rectangle 14.png'
import Services2 from '../assets/img/Rectangle 13.png'
import Services3 from '../assets/img/Smartdoor.png'
import { Link } from 'react-router-dom'

export default function Quickrepairs() {

    return (
        <>

            <div className="bg-[#F3F5F9] pb-4">
                <div className="container mx-auto xl:px-[100px] lg:px-[18px] px-[8px] relative z-10">

                    <div className="mx-auto md:px-2  lg:grid lg:grid-cols-3 md:grid-cols-2">

                        <div className='px-2'>
                            <img
                                className='service1 repire imgss wow animate__zoomInUp'
                               data-wow-duration="1s"
                                src={Services1}
                                alt=''
                            />
                        </div>

                        <div>
                            <img
                                className='service3 repir imgss wow animate__zoomInUp'
                                data-wow-duration="1s"
                                src={Services2}
                                alt=''
                            />
                            <img
                                className='service3 repirr imgss wow animate__zoomInUp'
                                data-wow-duration="1s"
                                src={Services3}
                                alt=''
                            />
                        </div>

                        <div className="mb-16 lg:mt-32 xl:mt-12 xl:mr-12 quickk pt-16 ">
                            <h5 className='quick wow animate__backInLeft'>QUICK REPAIRS</h5>
                            <h1 className='quick1 pt-3 wow animate__backInLeft' data-wow-duration="1s">Our Services Save Your Time</h1>
                            <p className='quick2 wow animate__backInLeft' data-wow-duration="1s">Dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit. </p>
                            <div className=' wow animate__backInLeft' data-wow-duration="2s">
                                <div className="service mt-10">
                                    <svg
                                        viewBox="0 0 24 24"
                                        style={{
                                            width: "1.2000000000000002rem",
                                            display: "inline-block",
                                            height: "1.2000000000000002rem",
                                        }}
                                        role="presentation"
                                        className=""
                                        data-align="middle"
                                    >
                                        <path
                                            d="M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z"
                                            style={{ fill: "#FF7400" }}
                                        ></path>
                                    </svg>
                                    <span>

                                        <div className="ml-3  text-start">
                                            <h1 className='text-[#1D3A59]'>Adipiscing eli sed eiusmod</h1>
                                        </div>
                                    </span>
                                </div>
                                <div className="service">
                                    <svg
                                        viewBox="0 0 24 24"
                                        style={{
                                            width: "1.2000000000000002rem",
                                            display: "inline-block",
                                            height: "1.2000000000000002rem",
                                        }}
                                        role="presentation"
                                        className=" service2"
                                        data-align="middle"
                                    >
                                        <path
                                            d="M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z"
                                            style={{ fill: "#FF7400" }}
                                        ></path>
                                    </svg>
                                    <span>
                                        <div className="ml-3  text-start">
                                            <h1 className='text-[#1D3A59]'>Tempor incididunt</h1>
                                        </div>
                                    </span>
                                </div>
                                <div className="service pb-3">
                                    <svg
                                        viewBox="0 0 24 24"
                                        style={{
                                            width: "1.2000000000000002rem",
                                            display: "inline-block",
                                            height: "1.2000000000000002rem",
                                        }}
                                        role="presentation"
                                        className=" service2"
                                        data-align="middle"
                                    >
                                        <path
                                            d="M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z"
                                            style={{ fill: "#FF7400" }}
                                        ></path>
                                    </svg>
                                    <span>
                                        <div className="ml-3  text-start">
                                            <h1 className='text-[#1D3A59]'>Labore et dolore magna</h1>
                                        </div>
                                    </span>
                                </div>

                                <button
                                    type="button"
                                    className="btnn"
                                >
                                    <Link to='/services'> Learn More</Link>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}
