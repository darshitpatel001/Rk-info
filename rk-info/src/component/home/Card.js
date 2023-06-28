import React, { useEffect } from 'react'
import '../css/index.css'
import Computer from '../assets/img/Rectangle 5.png'
import Cctv from '../assets/img/Camera.png'
import Telephone from '../assets/img/Telephone.png'
import Smartdoor from '../assets/img/Rectangle 15.jpg'
import 'animate.css';
import { WOW } from 'wowjs';


export default function Card() {
    useEffect(() => {
        const wow = new WOW();
        wow.init();
    }, []);
    return (
        <>
            <section id="team" className="team section-bg  pt-20 pb-20 wow animate__backInUp" data-wow-duration="1s">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-3 col-lg-4 col-md-6">
                            <div className="member">
                                <img src={Computer} className="img-fluid imgsss " alt="" />
                                <div className="member-info-content">
                                    <h6>Computer System</h6>
                                    <button href="" className="member-infoo">
                                        <a href="/product" className="hvr-icon-wobble-horizontal ">Shop Now <i className="fa fa-arrow-right hvr-icon"></i>
                                        </a>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-md-6">
                            <div className="member">
                                <img src={Cctv} className="img-fluid imgsss" alt="" />
                                <div className="member-info-content">
                                    <h5 className="member-infooo">CCTV Camera</h5>
                                    <button href="" className="member-infoo">
                                        <a href="/product" className="hvr-icon-wobble-horizontal ">Shop Now <i className="fa fa-arrow-right hvr-icon"></i>
                                        </a>
                                    </button>
                                </div>
                            </div>
                        </div>

                        <div className="col-xl-3 col-lg-4 col-md-6">
                            <div className="member">
                                <img src={Telephone} className="img-fluid imgsss" alt="" />
                                <div className="member-info-content">
                                    <h6>EPABX Telephone</h6>
                                    <button href="" className="member-infoo">
                                        <a href="/product" className="hvr-icon-wobble-horizontal ">Shop Now <i className="fa fa-arrow-right hvr-icon"></i>
                                        </a>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-md-6">
                            <div className="member">
                                <img src={Smartdoor} className="img-fluid imgsss" alt="" />
                                <div className="member-info-content">
                                    <h6>Smart Door Lock</h6>
                                    <button href="" className="member-infoo">
                                        <a href="/product" className="hvr-icon-wobble-horizontal ">Shop Now <i className="fa fa-arrow-right hvr-icon"></i>
                                        </a>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
