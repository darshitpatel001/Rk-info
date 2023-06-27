import React from 'react'
import Review from '../assets/img/Group 103.png'
import Review1 from '../assets/img/Group 104.png'
import Review2 from '../assets/img/Group 111.png'

export default function Clientreview5() {
    return (
        <>
            <div className="container pt-28">
                <div className="row">
                    <div className="col-lg-7 d-flex flex-column justify-content-center">

                        <div className="content bg-[#fffbea]  border-dashed border-2 border-[#FCCF00] wow animate__backInRight" data-wow-duration="1s">
                            <p>
                            Really glad to be a part of this team where I get many opportunities to learn and grow. Happy to be part of helpful events.                            </p>
                        </div>
                    </div>

                    <div className="col-lg-5">
                        <img src={Review} className="img-fluid imgss wow animate__backInLeft" data-wow-duration="1s" />
                    </div>
                </div>
            </div>


            <div className="container pt-28">
                <div className="row">

                    <div className="col-lg-5">
                        <img src={Review1} className="img-fluid imgss wow animate__backInLeft" data-wow-duration="1s" />
                    </div>

                    <div className="col-lg-7 d-flex flex-column justify-content-center">
                        <div className="content bg-[#f7e5f3]  border-dashed border-2 border-[#500B41] wow animate__backInRight" data-wow-duration="1s">
                            <p>
                            I have been fortunate enough to gain extensive technical exposure being here. It is a result of me working on multiple platforms & projects till now.These experiences have helped me stay up-to-date with the latest technologies and industry trends                            </p>
                        </div>
                    </div>

                </div>
            </div>

            <div className="container pt-28">
                <div className="row">
                    <div className="col-lg-7 d-flex flex-column justify-content-center">

                        <div className="content bg-[#fff5ed]  border-dashed border-2 border-[#B3825A] wow animate__backInRight" data-wow-duration="1s">
                            <p>
                            I have joined Info Drive India 30 days ago as a fresher. As I don't have experience but I would say that wherever I can join it will not be as good as Info Drive India. Work culture is very friendly. Management is very peace and friendly in nature                            </p>
                        </div>
                    </div>

                    <div className="col-lg-5">
                        <img src={Review2} className="img-fluid imgss wow animate__backInLeft" data-wow-duration="1s" />
                    </div>
                </div>
            </div>
        </>
    )
}
