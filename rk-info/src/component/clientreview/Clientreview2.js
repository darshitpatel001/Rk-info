import React from 'react'
import Review from '../assets/img/Rectangle 35.png'
import Review1 from '../assets/img/Rectangle 39.png'
import Review2 from '../assets/img/Rectangle 40.png'

export default function Clientreview2() {
    return (
        <>
            <div className="container pt-28">
                <div className="row">
                    <div className="col-lg-5">
                        <img src={Review} alt='' className="img-fluid imgss wow animate__backInLeft" data-wow-duration="1s" />
                    </div>
                    <div className="col-lg-7 d-flex flex-column justify-content-center">
                        <div className="content bg-[#e8f2ff] border-dashed border-2 border-[#5F83AF] wow animate__backInRight" data-wow-duration="1s">
                            <p>
                                Majority of my skills get utilized over here. It gives true satisfaction is what I would like to tell you all. Along the way, I also get to upgrade my knowledge. Nothing better than this!                             </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container pt-28">
                <div className="row">
                    <div className="col-lg-7 d-flex flex-column justify-content-center">

                        <div className="content bg-[rgb(247,255,241)]  border-dashed border-2 border-[#87CA5B] wow animate__backInRight" data-wow-duration="1s">
                            <p>
                                I have joined Expedien company as a software engineer and it has been great working here with excellent culture. They reach the level of customer satisfaction. They understand the customer requirement.                            </p>
                        </div>
                    </div>

                    <div className="col-lg-5">
                        <img src={Review1} alt='' className="img-fluid imgss wow animate__backInLeft" data-wow-duration="1s" />
                    </div>
                </div>
            </div>

            <div className="container pt-28">
                <div className="row">

                    <div className="col-lg-5">
                        <img src={Review2} alt='' className="img-fluid imgss wow animate__backInLeft" data-wow-duration="1s" />
                    </div>

                    <div className="col-lg-7 d-flex flex-column justify-content-center">
                        <div className="content bg-[#fff2e8]  border-dashed border-2 border-[#ED995D] wow animate__backInRight" data-wow-duration="1s">
                            <p>
                                BCT understands the importance of recognizing and rewarding employee efforts. The company's performance-based compensation model incentivizes employees to excel in their roles and contribute to the company's success. It's refreshing to work for a com.                            </p>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}
