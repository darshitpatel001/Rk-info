import React from 'react'
import Review from '../assets/img/Group 112.png'
import Review1 from '../assets/img/Group 113.png'

export default function Clientreview6() {
    return (
        <>
            <div className="container pt-28">
                <div className="row">
                    <div className="col-lg-5">
                        <img src={Review} alt="" className="img-fluid imgss wow animate__backInLeft" data-wow-duration="1s" />
                    </div>
                    <div className="col-lg-7 d-flex flex-column justify-content-center">
                        <div className="content bg-[#fffbdf] border-dashed border-2 border-[#ECD21A] wow animate__backInRight" data-wow-duration="1s">
                            <p>
                            I have been responsible for overseeing and managing the software testing and quality assurance processes for various projects. Due to the responsibilities given, I have understood the importance of things like attention to detail.                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container pt-28">
                <div className="row">
                    <div className="col-lg-7 d-flex flex-column justify-content-center">

                        <div className="content bg-[#fff0eb]  border-dashed border-2 border-[#A13C1E] wow animate__backInRight" data-wow-duration="1s">
                            <p>
                            Great place to work and management also very helpful to the employees they way of treating candidates Avery good management are very helpful to employees work balance is very stable                            </p>
                        </div>
                    </div>

                    <div className="col-lg-5">
                        <img src={Review1} alt='' className="img-fluid imgss wow animate__backInLeft" data-wow-duration="1s" />
                    </div>
                </div>
            </div>


        </>
    )
}
