import React from 'react'
import Review from '../assets/img/Group 100.png'
import Review1 from '../assets/img/Group 101.png'
import Review2 from '../assets/img/Group 102.png'

export default function Clientreview4() {
    return (
        <>
            <div className="container pt-28">
                <div className="row">
                    <div className="col-lg-5">
                        <img src={Review} className="img-fluid imgss wow animate__backInLeft" data-wow-duration="1s" />
                    </div>
                    <div className="col-lg-7 d-flex flex-column justify-content-center">
                        <div className="content bg-[#eae6fd] border-dashed border-2 border-[#3B2B98] wow animate__backInRight" data-wow-duration="1s">
                            <p>
                            The office used to be a positive work environment characterized by friendly employees, supportive management, and a healthy work culture. However, it has now turned into a toxic workplace where open communication is restricted, tea breaks are not all                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container pt-28">
                <div className="row">
                    <div className="col-lg-7 d-flex flex-column justify-content-center">

                        <div className="content bg-[#e3f2ff]  border-dashed border-2 border-[#186BB5] wow animate__backInRight" data-wow-duration="1s">
                            <p>
                            I observed that the senior members of the team exhibit unkind behavior and lack respect towards their juniors. When I made an effort to approach the HR team regarding my concerns, they initially refused to listen and advised me to speak with my manag                            </p>
                        </div>
                    </div>

                    <div className="col-lg-5">
                        <img src={Review1} className="img-fluid imgss wow animate__backInLeft" data-wow-duration="1s" />
                    </div>
                </div>
            </div>

            <div className="container pt-28">
                <div className="row">

                    <div className="col-lg-5">
                        <img src={Review2} className="img-fluid imgss wow animate__backInLeft" data-wow-duration="1s" />
                    </div>

                    <div className="col-lg-7 d-flex flex-column justify-content-center">
                        <div className="content bg-[#f1fff6]  border-dashed border-2 border-[#00A13A] wow animate__backInRight" data-wow-duration="1s">
                            <p>
                            Dharmajivan high.sec.school Inc hasn't been paying us(Precision Technologies) on time and we were not able to get a hold of the manager too when he should be the one who should be on top of it and release our payments. No proper update has been given to us regar                            </p>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}
