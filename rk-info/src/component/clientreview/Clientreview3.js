import React from 'react'
import Review from '../assets/img/Rectangle 41.png'
import Review1 from '../assets/img/Group 98.png'
import Review2 from '../assets/img/Group 99.png'

export default function Clientreview3() {
    return (
        <>
            <div className="container pt-28">
                <div className="row">
                    <div className="col-lg-7 d-flex flex-column justify-content-center">

                        <div className="content bg-[#ffdede]  border-dashed border-2 border-[#C85053] wow animate__backInRight" data-wow-duration="1s">
                            <p>
                            I have been working at Xportsoft Technologies for over two years, and it has been an incredible journey. The company fosters a collaborative and supportive work environment where everyone's ideas are valued.                             </p>
                        </div>
                    </div>

                    <div className="col-lg-5">
                    <img src={Review} alt='' className="img-fluid imgss wow animate__backInLeft" data-wow-duration="1s"/>
                    </div>
                </div>
            </div>


            <div className="container pt-28">
                <div className="row">

                    <div className="col-lg-5">
                    <img src={Review1} alt='' className="img-fluid imgss wow animate__backInLeft" data-wow-duration="1s"/>
                    </div>

                    <div className="col-lg-7 d-flex flex-column justify-content-center">
                        <div className="content bg-[#fffbee]  border-dashed border-2 border-[#D3B84D] wow animate__backInRight" data-wow-duration="1s">
                            <p>
                            Ignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi. sint occaecatii gnissimos ducimus qui blanditiis praesentium.                            </p>
                        </div>
                    </div>

                </div>
            </div>

            <div className="container pt-28">
                <div className="row">
                    <div className="col-lg-7 d-flex flex-column justify-content-center">

                        <div className="content bg-[#f7f7f7]  border-dashed border-2 border-[#D8DDD9] wow animate__backInRight" data-wow-duration="1s">
                            <p>
                            Infodrive India is a true catalyst for growth and innovation. The company's forward-thinking approach and emphasis on continuous learning create an environment where new ideas flourish. The leadership team provides guidance and support, encouraging e                            </p>
                        </div>
                    </div>

                    <div className="col-lg-5">
                    <img src={Review2} alt='' className="img-fluid imgss wow animate__backInLeft" data-wow-duration="1s"/>
                    </div>
                </div>
            </div>
        </>
    )
}
