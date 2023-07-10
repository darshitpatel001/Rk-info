import React, { useEffect } from 'react'
import Review from '../assets/img/Rectangle 32.png'
import Review1 from '../assets/img/Rectangle 33.png'
import Review2 from '../assets/img/Rectangle 34.png'
import Review3 from '../assets/img/Rectangle 35.png'
import Review4 from '../assets/img/Rectangle 36.png'
import Review5 from '../assets/img/Rectangle 37.png'
import Review6 from '../assets/img/Rectangle 38.png'
import Review7 from '../assets/img/Rectangle 39.png'
import Review8 from '../assets/img/Rectangle 40.png'
import Review9 from '../assets/img/Rectangle 41.png'
import Review10 from '../assets/img/Group 98.png'
import Review11 from '../assets/img/Group 99.png'
import Review12 from '../assets/img/Group 100.png'
import Review13 from '../assets/img/Group 101.png'
import Review14 from '../assets/img/Group 102.png'
import Review15 from '../assets/img/Group 103.png'
import Review16 from '../assets/img/Group 104.png'
import Review17 from '../assets/img/Group 111.png'
import Review18 from '../assets/img/Group 112.png'
import Review19 from '../assets/img/Group 113.png'
import 'animate.css';
import { WOW } from 'wowjs';
import { Link } from 'react-router-dom';

export default function Clientreview() {
    useEffect(() => {
        const wow = new WOW();
        wow.init();
    }, []);

    return (
        <>
            <div className="containerrr Client">
                <h1 className='text-center text-[40px]'>Our Client</h1>
                <div className="containerr">
                    <ol>
                        <li><Link to="/">Home</Link></li>
                        <li>Our Client</li>
                    </ol>
                </div>
            </div>
            <section id="cta" className="cta">
                <div className="container" data-aos="zoom-in">
                    <div className="wow animate__backInDown box" data-wow-duration="1s">
                        <p className='text-[35px]'>What they say about us</p>
                        <p className='text-[#727E85] text-[18px]'>
                            Portfo quntum imperdiet Deartuis sagittis are Praesent mauris fusce nec tellus sedeus sedye.
                        </p>
                    </div>
                </div>
            </section>

            <section className="client-section">
                <div className="container">
                    <div className="client-box red">
                        <img src={Review} className="img-fluid imgss wow animate__backInLeft"  alt='' data-wow-duration="1s" />
                        <div className="client-box-content">
                            <svg viewBox="0 0 95 72" xmlns="http://www.w3.org/2000/svg">
                                <path d="M8.53933 66.1765C3.20225 60.353 0 54 0 43.4118C0 24.8824 13.3427 8.47059 32.0225 0L36.8258 6.88235C19.2135 16.4118 15.4775 28.5882 14.4101 36.5294C17.0787 34.9412 20.8146 34.4118 24.5506 34.9412C34.1573 36 41.6292 43.4118 41.6292 53.4706C41.6292 58.2353 39.4944 63 36.2921 66.7059C32.5562 70.4118 28.2865 72 22.9494 72C17.0787 72 11.7416 69.353 8.53933 66.1765ZM61.9101 66.1765C56.573 60.353 53.3708 54 53.3708 43.4118C53.3708 24.8824 66.7135 8.47059 85.3933 0L90.1966 6.88235C72.5843 16.4118 68.8483 28.5882 67.7809 36.5294C70.4494 34.9412 74.1854 34.4118 77.9214 34.9412C87.5281 36 95 43.4118 95 53.4706C95 58.2353 92.8652 63 89.6629 66.7059C86.4607 70.4118 81.6573 72 76.3202 72C70.4494 72 65.1124 69.353 61.9101 66.1765Z" fill="#FB2C29"/>
                            </svg>
                            <p>From internal promotions to cross-functional projects and international assignments, the company values and nurtures talent, allowing individuals to explore diverse career paths and reach their professional goals.</p>
                        </div>
                    </div>
                    <div className="client-box blue">
                        <img src={Review1} className="img-fluid imgss wow animate__backInLeft"  alt='' data-wow-duration="1s" />
                        <div className="client-box-content">
                            <svg viewBox="0 0 95 72" xmlns="http://www.w3.org/2000/svg">
                                <path d="M8.53933 66.1765C3.20225 60.353 0 54 0 43.4118C0 24.8824 13.3427 8.47059 32.0225 0L36.8258 6.88235C19.2135 16.4118 15.4775 28.5882 14.4101 36.5294C17.0787 34.9412 20.8146 34.4118 24.5506 34.9412C34.1573 36 41.6292 43.4118 41.6292 53.4706C41.6292 58.2353 39.4944 63 36.2921 66.7059C32.5562 70.4118 28.2865 72 22.9494 72C17.0787 72 11.7416 69.353 8.53933 66.1765ZM61.9101 66.1765C56.573 60.353 53.3708 54 53.3708 43.4118C53.3708 24.8824 66.7135 8.47059 85.3933 0L90.1966 6.88235C72.5843 16.4118 68.8483 28.5882 67.7809 36.5294C70.4494 34.9412 74.1854 34.4118 77.9214 34.9412C87.5281 36 95 43.4118 95 53.4706C95 58.2353 92.8652 63 89.6629 66.7059C86.4607 70.4118 81.6573 72 76.3202 72C70.4494 72 65.1124 69.353 61.9101 66.1765Z" fill="#FB2C29"/>
                            </svg>
                            <p>It is a great experience to be a part of such a wonderful team. Awesome place to workone thing I like about the organization is freedom. every employee has a freedom to work in creative manner which adds value in our skills and also keeps our perform</p>
                        </div>
                    </div>
                    <div className="client-box yellow">
                        <img src={Review6} className="img-fluid imgss wow animate__backInLeft"  alt='' data-wow-duration="1s" />
                        <div className="client-box-content">
                            <svg viewBox="0 0 95 72" xmlns="http://www.w3.org/2000/svg">
                                <path d="M8.53933 66.1765C3.20225 60.353 0 54 0 43.4118C0 24.8824 13.3427 8.47059 32.0225 0L36.8258 6.88235C19.2135 16.4118 15.4775 28.5882 14.4101 36.5294C17.0787 34.9412 20.8146 34.4118 24.5506 34.9412C34.1573 36 41.6292 43.4118 41.6292 53.4706C41.6292 58.2353 39.4944 63 36.2921 66.7059C32.5562 70.4118 28.2865 72 22.9494 72C17.0787 72 11.7416 69.353 8.53933 66.1765ZM61.9101 66.1765C56.573 60.353 53.3708 54 53.3708 43.4118C53.3708 24.8824 66.7135 8.47059 85.3933 0L90.1966 6.88235C72.5843 16.4118 68.8483 28.5882 67.7809 36.5294C70.4494 34.9412 74.1854 34.4118 77.9214 34.9412C87.5281 36 95 43.4118 95 53.4706C95 58.2353 92.8652 63 89.6629 66.7059C86.4607 70.4118 81.6573 72 76.3202 72C70.4494 72 65.1124 69.353 61.9101 66.1765Z" fill="#FB2C29"/>
                            </svg>
                            <p>I placed an order, received call saying it will be cancelled as item is out of stock, but even after a week order showing in process, and when called customer care their behaviour is very arrogant, I think I have lost my money, please don't buy from</p>
                        </div>
                    </div>
                    <div className="client-box blue2">
                        <img src={Review2} className="img-fluid imgss wow animate__backInLeft"  alt='' data-wow-duration="1s" />
                        <div className="client-box-content">
                            <svg viewBox="0 0 95 72" xmlns="http://www.w3.org/2000/svg">
                                <path d="M8.53933 66.1765C3.20225 60.353 0 54 0 43.4118C0 24.8824 13.3427 8.47059 32.0225 0L36.8258 6.88235C19.2135 16.4118 15.4775 28.5882 14.4101 36.5294C17.0787 34.9412 20.8146 34.4118 24.5506 34.9412C34.1573 36 41.6292 43.4118 41.6292 53.4706C41.6292 58.2353 39.4944 63 36.2921 66.7059C32.5562 70.4118 28.2865 72 22.9494 72C17.0787 72 11.7416 69.353 8.53933 66.1765ZM61.9101 66.1765C56.573 60.353 53.3708 54 53.3708 43.4118C53.3708 24.8824 66.7135 8.47059 85.3933 0L90.1966 6.88235C72.5843 16.4118 68.8483 28.5882 67.7809 36.5294C70.4494 34.9412 74.1854 34.4118 77.9214 34.9412C87.5281 36 95 43.4118 95 53.4706C95 58.2353 92.8652 63 89.6629 66.7059C86.4607 70.4118 81.6573 72 76.3202 72C70.4494 72 65.1124 69.353 61.9101 66.1765Z" fill="#FB2C29"/>
                            </svg>
                            <p>Fake company and fake platform for earning and learning both their agent are campers and do scam with poor people who have lack of knowledge regarding this and they stole their money by making them fool</p>
                        </div>
                    </div>
                    <div className="client-box yellow2">
                        <img src={Review4} className="img-fluid imgss wow animate__backInLeft"  alt='' data-wow-duration="1s" />
                        <div className="client-box-content">
                            <svg viewBox="0 0 95 72" xmlns="http://www.w3.org/2000/svg">
                                <path d="M8.53933 66.1765C3.20225 60.353 0 54 0 43.4118C0 24.8824 13.3427 8.47059 32.0225 0L36.8258 6.88235C19.2135 16.4118 15.4775 28.5882 14.4101 36.5294C17.0787 34.9412 20.8146 34.4118 24.5506 34.9412C34.1573 36 41.6292 43.4118 41.6292 53.4706C41.6292 58.2353 39.4944 63 36.2921 66.7059C32.5562 70.4118 28.2865 72 22.9494 72C17.0787 72 11.7416 69.353 8.53933 66.1765ZM61.9101 66.1765C56.573 60.353 53.3708 54 53.3708 43.4118C53.3708 24.8824 66.7135 8.47059 85.3933 0L90.1966 6.88235C72.5843 16.4118 68.8483 28.5882 67.7809 36.5294C70.4494 34.9412 74.1854 34.4118 77.9214 34.9412C87.5281 36 95 43.4118 95 53.4706C95 58.2353 92.8652 63 89.6629 66.7059C86.4607 70.4118 81.6573 72 76.3202 72C70.4494 72 65.1124 69.353 61.9101 66.1765Z" fill="#FB2C29"/>
                            </svg>
                            <p>Amrut bhog hybrid work approach demonstrates the company's adaptability and forward-thinking mindset. It allows me to leverage the benefits of remote work, such as increased autonomy and reduced stress, while still enjoying the benefits of fac</p>
                        </div>
                    </div>
                    <div className="client-box green">
                        <img src={Review5} className="img-fluid imgss wow animate__backInLeft"  alt='' data-wow-duration="1s" />
                        <div className="client-box-content">
                            <svg viewBox="0 0 95 72" xmlns="http://www.w3.org/2000/svg">
                                <path d="M8.53933 66.1765C3.20225 60.353 0 54 0 43.4118C0 24.8824 13.3427 8.47059 32.0225 0L36.8258 6.88235C19.2135 16.4118 15.4775 28.5882 14.4101 36.5294C17.0787 34.9412 20.8146 34.4118 24.5506 34.9412C34.1573 36 41.6292 43.4118 41.6292 53.4706C41.6292 58.2353 39.4944 63 36.2921 66.7059C32.5562 70.4118 28.2865 72 22.9494 72C17.0787 72 11.7416 69.353 8.53933 66.1765ZM61.9101 66.1765C56.573 60.353 53.3708 54 53.3708 43.4118C53.3708 24.8824 66.7135 8.47059 85.3933 0L90.1966 6.88235C72.5843 16.4118 68.8483 28.5882 67.7809 36.5294C70.4494 34.9412 74.1854 34.4118 77.9214 34.9412C87.5281 36 95 43.4118 95 53.4706C95 58.2353 92.8652 63 89.6629 66.7059C86.4607 70.4118 81.6573 72 76.3202 72C70.4494 72 65.1124 69.353 61.9101 66.1765Z" fill="#FB2C29"/>
                            </svg>
                            <p>HR, Sales and Marketing team are so much focused on external environment impact that internal impacts or effect they forced to ignoreAlignment and customer driven approach as 1 company is missing. All Team are running rat race to prove them right and</p>
                        </div>
                    </div>
                    <div className="client-box blue3">
                        <img src={Review3} className="img-fluid imgss wow animate__backInLeft"  alt='' data-wow-duration="1s" />
                        <div className="client-box-content">
                            <svg viewBox="0 0 95 72" xmlns="http://www.w3.org/2000/svg">
                                <path d="M8.53933 66.1765C3.20225 60.353 0 54 0 43.4118C0 24.8824 13.3427 8.47059 32.0225 0L36.8258 6.88235C19.2135 16.4118 15.4775 28.5882 14.4101 36.5294C17.0787 34.9412 20.8146 34.4118 24.5506 34.9412C34.1573 36 41.6292 43.4118 41.6292 53.4706C41.6292 58.2353 39.4944 63 36.2921 66.7059C32.5562 70.4118 28.2865 72 22.9494 72C17.0787 72 11.7416 69.353 8.53933 66.1765ZM61.9101 66.1765C56.573 60.353 53.3708 54 53.3708 43.4118C53.3708 24.8824 66.7135 8.47059 85.3933 0L90.1966 6.88235C72.5843 16.4118 68.8483 28.5882 67.7809 36.5294C70.4494 34.9412 74.1854 34.4118 77.9214 34.9412C87.5281 36 95 43.4118 95 53.4706C95 58.2353 92.8652 63 89.6629 66.7059C86.4607 70.4118 81.6573 72 76.3202 72C70.4494 72 65.1124 69.353 61.9101 66.1765Z" fill="#FB2C29"/>
                            </svg>
                            <p>Majority of my skills get utilized over here. It gives true satisfaction is what I would like to tell you all. Along the way, I also get to upgrade my knowledge. Nothing better than this!</p>
                        </div>
                    </div>
                    <div className="client-box green2">
                        <img src={Review7} className="img-fluid imgss wow animate__backInLeft"  alt='' data-wow-duration="1s" />
                        <div className="client-box-content">
                            <svg viewBox="0 0 95 72" xmlns="http://www.w3.org/2000/svg">
                                <path d="M8.53933 66.1765C3.20225 60.353 0 54 0 43.4118C0 24.8824 13.3427 8.47059 32.0225 0L36.8258 6.88235C19.2135 16.4118 15.4775 28.5882 14.4101 36.5294C17.0787 34.9412 20.8146 34.4118 24.5506 34.9412C34.1573 36 41.6292 43.4118 41.6292 53.4706C41.6292 58.2353 39.4944 63 36.2921 66.7059C32.5562 70.4118 28.2865 72 22.9494 72C17.0787 72 11.7416 69.353 8.53933 66.1765ZM61.9101 66.1765C56.573 60.353 53.3708 54 53.3708 43.4118C53.3708 24.8824 66.7135 8.47059 85.3933 0L90.1966 6.88235C72.5843 16.4118 68.8483 28.5882 67.7809 36.5294C70.4494 34.9412 74.1854 34.4118 77.9214 34.9412C87.5281 36 95 43.4118 95 53.4706C95 58.2353 92.8652 63 89.6629 66.7059C86.4607 70.4118 81.6573 72 76.3202 72C70.4494 72 65.1124 69.353 61.9101 66.1765Z" fill="#FB2C29"/>
                            </svg>
                            <p>I have joined Expedien company as a software engineer and it has been great working here with excellent culture. They reach the level of customer satisfaction. They understand the customer requirement.</p>
                        </div>
                    </div>
                    <div className="client-box yellow3">
                        <img src={Review8} className="img-fluid imgss wow animate__backInLeft"  alt='' data-wow-duration="1s" />
                        <div className="client-box-content">
                            <svg viewBox="0 0 95 72" xmlns="http://www.w3.org/2000/svg">
                                <path d="M8.53933 66.1765C3.20225 60.353 0 54 0 43.4118C0 24.8824 13.3427 8.47059 32.0225 0L36.8258 6.88235C19.2135 16.4118 15.4775 28.5882 14.4101 36.5294C17.0787 34.9412 20.8146 34.4118 24.5506 34.9412C34.1573 36 41.6292 43.4118 41.6292 53.4706C41.6292 58.2353 39.4944 63 36.2921 66.7059C32.5562 70.4118 28.2865 72 22.9494 72C17.0787 72 11.7416 69.353 8.53933 66.1765ZM61.9101 66.1765C56.573 60.353 53.3708 54 53.3708 43.4118C53.3708 24.8824 66.7135 8.47059 85.3933 0L90.1966 6.88235C72.5843 16.4118 68.8483 28.5882 67.7809 36.5294C70.4494 34.9412 74.1854 34.4118 77.9214 34.9412C87.5281 36 95 43.4118 95 53.4706C95 58.2353 92.8652 63 89.6629 66.7059C86.4607 70.4118 81.6573 72 76.3202 72C70.4494 72 65.1124 69.353 61.9101 66.1765Z" fill="#FB2C29"/>
                            </svg>
                            <p>BCT understands the importance of recognizing and rewarding employee efforts. The company's performance-based compensation model incentivizes employees to excel in their roles and contribute to the company's success. It's refreshing to work for a com.</p>
                        </div>
                    </div>
                    <div className="client-box red2">
                        <img src={Review9} className="img-fluid imgss wow animate__backInLeft"  alt='' data-wow-duration="1s" />
                        <div className="client-box-content">
                            <svg viewBox="0 0 95 72" xmlns="http://www.w3.org/2000/svg">
                                <path d="M8.53933 66.1765C3.20225 60.353 0 54 0 43.4118C0 24.8824 13.3427 8.47059 32.0225 0L36.8258 6.88235C19.2135 16.4118 15.4775 28.5882 14.4101 36.5294C17.0787 34.9412 20.8146 34.4118 24.5506 34.9412C34.1573 36 41.6292 43.4118 41.6292 53.4706C41.6292 58.2353 39.4944 63 36.2921 66.7059C32.5562 70.4118 28.2865 72 22.9494 72C17.0787 72 11.7416 69.353 8.53933 66.1765ZM61.9101 66.1765C56.573 60.353 53.3708 54 53.3708 43.4118C53.3708 24.8824 66.7135 8.47059 85.3933 0L90.1966 6.88235C72.5843 16.4118 68.8483 28.5882 67.7809 36.5294C70.4494 34.9412 74.1854 34.4118 77.9214 34.9412C87.5281 36 95 43.4118 95 53.4706C95 58.2353 92.8652 63 89.6629 66.7059C86.4607 70.4118 81.6573 72 76.3202 72C70.4494 72 65.1124 69.353 61.9101 66.1765Z" fill="#FB2C29"/>
                            </svg>
                            <p>I have been working at Xportsoft Technologies for over two years, and it has been an incredible journey. The company fosters a collaborative and supportive work environment where everyone's ideas are valued. </p>
                        </div>
                    </div>
                    <div className="client-box yellow4">
                        <img src={Review10} className="img-fluid imgss wow animate__backInLeft"  alt='' data-wow-duration="1s" />
                        <div className="client-box-content">
                            <svg viewBox="0 0 95 72" xmlns="http://www.w3.org/2000/svg">
                                <path d="M8.53933 66.1765C3.20225 60.353 0 54 0 43.4118C0 24.8824 13.3427 8.47059 32.0225 0L36.8258 6.88235C19.2135 16.4118 15.4775 28.5882 14.4101 36.5294C17.0787 34.9412 20.8146 34.4118 24.5506 34.9412C34.1573 36 41.6292 43.4118 41.6292 53.4706C41.6292 58.2353 39.4944 63 36.2921 66.7059C32.5562 70.4118 28.2865 72 22.9494 72C17.0787 72 11.7416 69.353 8.53933 66.1765ZM61.9101 66.1765C56.573 60.353 53.3708 54 53.3708 43.4118C53.3708 24.8824 66.7135 8.47059 85.3933 0L90.1966 6.88235C72.5843 16.4118 68.8483 28.5882 67.7809 36.5294C70.4494 34.9412 74.1854 34.4118 77.9214 34.9412C87.5281 36 95 43.4118 95 53.4706C95 58.2353 92.8652 63 89.6629 66.7059C86.4607 70.4118 81.6573 72 76.3202 72C70.4494 72 65.1124 69.353 61.9101 66.1765Z" fill="#FB2C29"/>
                            </svg>
                            <p>Ignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi. sint occaecatii gnissimos ducimus qui blanditiis praesentium.</p>
                        </div>
                    </div>
                    <div className="client-box gray">
                        <img src={Review11} className="img-fluid imgss wow animate__backInLeft"  alt='' data-wow-duration="1s" />
                        <div className="client-box-content">
                            <svg viewBox="0 0 95 72" xmlns="http://www.w3.org/2000/svg">
                                <path d="M8.53933 66.1765C3.20225 60.353 0 54 0 43.4118C0 24.8824 13.3427 8.47059 32.0225 0L36.8258 6.88235C19.2135 16.4118 15.4775 28.5882 14.4101 36.5294C17.0787 34.9412 20.8146 34.4118 24.5506 34.9412C34.1573 36 41.6292 43.4118 41.6292 53.4706C41.6292 58.2353 39.4944 63 36.2921 66.7059C32.5562 70.4118 28.2865 72 22.9494 72C17.0787 72 11.7416 69.353 8.53933 66.1765ZM61.9101 66.1765C56.573 60.353 53.3708 54 53.3708 43.4118C53.3708 24.8824 66.7135 8.47059 85.3933 0L90.1966 6.88235C72.5843 16.4118 68.8483 28.5882 67.7809 36.5294C70.4494 34.9412 74.1854 34.4118 77.9214 34.9412C87.5281 36 95 43.4118 95 53.4706C95 58.2353 92.8652 63 89.6629 66.7059C86.4607 70.4118 81.6573 72 76.3202 72C70.4494 72 65.1124 69.353 61.9101 66.1765Z" fill="#FB2C29"/>
                            </svg>
                            <p>Infodrive India is a true catalyst for growth and innovation. The company's forward-thinking approach and emphasis on continuous learning create an environment where new ideas flourish. The leadership team provides guidance and support, encouraging e</p>
                        </div>
                    </div>
                    <div className="client-box blue4">
                        <img src={Review12} className="img-fluid imgss wow animate__backInLeft"  alt='' data-wow-duration="1s" />
                        <div className="client-box-content">
                            <svg viewBox="0 0 95 72" xmlns="http://www.w3.org/2000/svg">
                                <path d="M8.53933 66.1765C3.20225 60.353 0 54 0 43.4118C0 24.8824 13.3427 8.47059 32.0225 0L36.8258 6.88235C19.2135 16.4118 15.4775 28.5882 14.4101 36.5294C17.0787 34.9412 20.8146 34.4118 24.5506 34.9412C34.1573 36 41.6292 43.4118 41.6292 53.4706C41.6292 58.2353 39.4944 63 36.2921 66.7059C32.5562 70.4118 28.2865 72 22.9494 72C17.0787 72 11.7416 69.353 8.53933 66.1765ZM61.9101 66.1765C56.573 60.353 53.3708 54 53.3708 43.4118C53.3708 24.8824 66.7135 8.47059 85.3933 0L90.1966 6.88235C72.5843 16.4118 68.8483 28.5882 67.7809 36.5294C70.4494 34.9412 74.1854 34.4118 77.9214 34.9412C87.5281 36 95 43.4118 95 53.4706C95 58.2353 92.8652 63 89.6629 66.7059C86.4607 70.4118 81.6573 72 76.3202 72C70.4494 72 65.1124 69.353 61.9101 66.1765Z" fill="#FB2C29"/>
                            </svg>
                            <p>The office used to be a positive work environment characterized by friendly employees, supportive management, and a healthy work culture. However, it has now turned into a toxic workplace where open communication is restricted, tea breaks are not all</p>
                        </div>
                    </div>
                    <div className="client-box blue5">
                        <img src={Review13} className="img-fluid imgss wow animate__backInLeft"  alt='' data-wow-duration="1s" />
                        <div className="client-box-content">
                            <svg viewBox="0 0 95 72" xmlns="http://www.w3.org/2000/svg">
                                <path d="M8.53933 66.1765C3.20225 60.353 0 54 0 43.4118C0 24.8824 13.3427 8.47059 32.0225 0L36.8258 6.88235C19.2135 16.4118 15.4775 28.5882 14.4101 36.5294C17.0787 34.9412 20.8146 34.4118 24.5506 34.9412C34.1573 36 41.6292 43.4118 41.6292 53.4706C41.6292 58.2353 39.4944 63 36.2921 66.7059C32.5562 70.4118 28.2865 72 22.9494 72C17.0787 72 11.7416 69.353 8.53933 66.1765ZM61.9101 66.1765C56.573 60.353 53.3708 54 53.3708 43.4118C53.3708 24.8824 66.7135 8.47059 85.3933 0L90.1966 6.88235C72.5843 16.4118 68.8483 28.5882 67.7809 36.5294C70.4494 34.9412 74.1854 34.4118 77.9214 34.9412C87.5281 36 95 43.4118 95 53.4706C95 58.2353 92.8652 63 89.6629 66.7059C86.4607 70.4118 81.6573 72 76.3202 72C70.4494 72 65.1124 69.353 61.9101 66.1765Z" fill="#FB2C29"/>
                            </svg>
                            <p>I observed that the senior members of the team exhibit unkind behavior and lack respect towards their juniors. When I made an effort to approach the HR team regarding my concerns, they initially refused to listen and advised me to speak with my manag</p>
                        </div>
                    </div>
                    <div className="client-box green3">
                        <img src={Review14} className="img-fluid imgss wow animate__backInLeft"  alt='' data-wow-duration="1s" />
                        <div className="client-box-content">
                            <svg viewBox="0 0 95 72" xmlns="http://www.w3.org/2000/svg">
                                <path d="M8.53933 66.1765C3.20225 60.353 0 54 0 43.4118C0 24.8824 13.3427 8.47059 32.0225 0L36.8258 6.88235C19.2135 16.4118 15.4775 28.5882 14.4101 36.5294C17.0787 34.9412 20.8146 34.4118 24.5506 34.9412C34.1573 36 41.6292 43.4118 41.6292 53.4706C41.6292 58.2353 39.4944 63 36.2921 66.7059C32.5562 70.4118 28.2865 72 22.9494 72C17.0787 72 11.7416 69.353 8.53933 66.1765ZM61.9101 66.1765C56.573 60.353 53.3708 54 53.3708 43.4118C53.3708 24.8824 66.7135 8.47059 85.3933 0L90.1966 6.88235C72.5843 16.4118 68.8483 28.5882 67.7809 36.5294C70.4494 34.9412 74.1854 34.4118 77.9214 34.9412C87.5281 36 95 43.4118 95 53.4706C95 58.2353 92.8652 63 89.6629 66.7059C86.4607 70.4118 81.6573 72 76.3202 72C70.4494 72 65.1124 69.353 61.9101 66.1765Z" fill="#FB2C29"/>
                            </svg>
                            <p>Dharmajivan high.sec.school Inc hasn't been paying us(Precision Technologies) on time and we were not able to get a hold of the manager too when he should be the one who should be on top of it and release our payments. No proper update has been given to us regar</p>
                        </div>
                    </div>
                    <div className="client-box yellow5">
                        <img src={Review15} className="img-fluid imgss wow animate__backInLeft"  alt='' data-wow-duration="1s" />
                        <div className="client-box-content">
                            <svg viewBox="0 0 95 72" xmlns="http://www.w3.org/2000/svg">
                                <path d="M8.53933 66.1765C3.20225 60.353 0 54 0 43.4118C0 24.8824 13.3427 8.47059 32.0225 0L36.8258 6.88235C19.2135 16.4118 15.4775 28.5882 14.4101 36.5294C17.0787 34.9412 20.8146 34.4118 24.5506 34.9412C34.1573 36 41.6292 43.4118 41.6292 53.4706C41.6292 58.2353 39.4944 63 36.2921 66.7059C32.5562 70.4118 28.2865 72 22.9494 72C17.0787 72 11.7416 69.353 8.53933 66.1765ZM61.9101 66.1765C56.573 60.353 53.3708 54 53.3708 43.4118C53.3708 24.8824 66.7135 8.47059 85.3933 0L90.1966 6.88235C72.5843 16.4118 68.8483 28.5882 67.7809 36.5294C70.4494 34.9412 74.1854 34.4118 77.9214 34.9412C87.5281 36 95 43.4118 95 53.4706C95 58.2353 92.8652 63 89.6629 66.7059C86.4607 70.4118 81.6573 72 76.3202 72C70.4494 72 65.1124 69.353 61.9101 66.1765Z" fill="#FB2C29"/>
                            </svg>
                            <p>Really glad to be a part of this team where I get many opportunities to learn and grow. Happy to be part of helpful events.</p>
                        </div>
                    </div>
                    <div className="client-box purple">
                        <img src={Review16} className="img-fluid imgss wow animate__backInLeft"  alt='' data-wow-duration="1s" />
                        <div className="client-box-content">
                            <svg viewBox="0 0 95 72" xmlns="http://www.w3.org/2000/svg">
                                <path d="M8.53933 66.1765C3.20225 60.353 0 54 0 43.4118C0 24.8824 13.3427 8.47059 32.0225 0L36.8258 6.88235C19.2135 16.4118 15.4775 28.5882 14.4101 36.5294C17.0787 34.9412 20.8146 34.4118 24.5506 34.9412C34.1573 36 41.6292 43.4118 41.6292 53.4706C41.6292 58.2353 39.4944 63 36.2921 66.7059C32.5562 70.4118 28.2865 72 22.9494 72C17.0787 72 11.7416 69.353 8.53933 66.1765ZM61.9101 66.1765C56.573 60.353 53.3708 54 53.3708 43.4118C53.3708 24.8824 66.7135 8.47059 85.3933 0L90.1966 6.88235C72.5843 16.4118 68.8483 28.5882 67.7809 36.5294C70.4494 34.9412 74.1854 34.4118 77.9214 34.9412C87.5281 36 95 43.4118 95 53.4706C95 58.2353 92.8652 63 89.6629 66.7059C86.4607 70.4118 81.6573 72 76.3202 72C70.4494 72 65.1124 69.353 61.9101 66.1765Z" fill="#FB2C29"/>
                            </svg>
                            <p>I have been fortunate enough to gain extensive technical exposure being here. It is a result of me working on multiple platforms & projects till now.These experiences have helped me stay up-to-date with the latest technologies and industry trends</p>
                        </div>
                    </div>
                    <div className="client-box brown">
                        <img src={Review17} className="img-fluid imgss wow animate__backInLeft"  alt='' data-wow-duration="1s" />
                        <div className="client-box-content">
                            <svg viewBox="0 0 95 72" xmlns="http://www.w3.org/2000/svg">
                                <path d="M8.53933 66.1765C3.20225 60.353 0 54 0 43.4118C0 24.8824 13.3427 8.47059 32.0225 0L36.8258 6.88235C19.2135 16.4118 15.4775 28.5882 14.4101 36.5294C17.0787 34.9412 20.8146 34.4118 24.5506 34.9412C34.1573 36 41.6292 43.4118 41.6292 53.4706C41.6292 58.2353 39.4944 63 36.2921 66.7059C32.5562 70.4118 28.2865 72 22.9494 72C17.0787 72 11.7416 69.353 8.53933 66.1765ZM61.9101 66.1765C56.573 60.353 53.3708 54 53.3708 43.4118C53.3708 24.8824 66.7135 8.47059 85.3933 0L90.1966 6.88235C72.5843 16.4118 68.8483 28.5882 67.7809 36.5294C70.4494 34.9412 74.1854 34.4118 77.9214 34.9412C87.5281 36 95 43.4118 95 53.4706C95 58.2353 92.8652 63 89.6629 66.7059C86.4607 70.4118 81.6573 72 76.3202 72C70.4494 72 65.1124 69.353 61.9101 66.1765Z" fill="#FB2C29"/>
                            </svg>
                            <p>I have joined Info Drive India 30 days ago as a fresher. As I don't have experience but I would say that wherever I can join it will not be as good as Info Drive India. Work culture is very friendly. Management is very peace and friendly in nature</p>
                        </div>
                    </div>
                    <div className="client-box yellow6">
                        <img src={Review18} className="img-fluid imgss wow animate__backInLeft"  alt='' data-wow-duration="1s" />
                        <div className="client-box-content">
                            <svg viewBox="0 0 95 72" xmlns="http://www.w3.org/2000/svg">
                                <path d="M8.53933 66.1765C3.20225 60.353 0 54 0 43.4118C0 24.8824 13.3427 8.47059 32.0225 0L36.8258 6.88235C19.2135 16.4118 15.4775 28.5882 14.4101 36.5294C17.0787 34.9412 20.8146 34.4118 24.5506 34.9412C34.1573 36 41.6292 43.4118 41.6292 53.4706C41.6292 58.2353 39.4944 63 36.2921 66.7059C32.5562 70.4118 28.2865 72 22.9494 72C17.0787 72 11.7416 69.353 8.53933 66.1765ZM61.9101 66.1765C56.573 60.353 53.3708 54 53.3708 43.4118C53.3708 24.8824 66.7135 8.47059 85.3933 0L90.1966 6.88235C72.5843 16.4118 68.8483 28.5882 67.7809 36.5294C70.4494 34.9412 74.1854 34.4118 77.9214 34.9412C87.5281 36 95 43.4118 95 53.4706C95 58.2353 92.8652 63 89.6629 66.7059C86.4607 70.4118 81.6573 72 76.3202 72C70.4494 72 65.1124 69.353 61.9101 66.1765Z" fill="#FB2C29"/>
                            </svg>
                            <p>I have been responsible for overseeing and managing the software testing and quality assurance processes for various projects. Due to the responsibilities given, I have understood the importance of things like attention to detail.</p>
                        </div>
                    </div>
                    <div className="client-box brown2">
                        <img src={Review19} className="img-fluid imgss wow animate__backInLeft"  alt='' data-wow-duration="1s" />
                        <div className="client-box-content">
                            <svg viewBox="0 0 95 72" xmlns="http://www.w3.org/2000/svg">
                                <path d="M8.53933 66.1765C3.20225 60.353 0 54 0 43.4118C0 24.8824 13.3427 8.47059 32.0225 0L36.8258 6.88235C19.2135 16.4118 15.4775 28.5882 14.4101 36.5294C17.0787 34.9412 20.8146 34.4118 24.5506 34.9412C34.1573 36 41.6292 43.4118 41.6292 53.4706C41.6292 58.2353 39.4944 63 36.2921 66.7059C32.5562 70.4118 28.2865 72 22.9494 72C17.0787 72 11.7416 69.353 8.53933 66.1765ZM61.9101 66.1765C56.573 60.353 53.3708 54 53.3708 43.4118C53.3708 24.8824 66.7135 8.47059 85.3933 0L90.1966 6.88235C72.5843 16.4118 68.8483 28.5882 67.7809 36.5294C70.4494 34.9412 74.1854 34.4118 77.9214 34.9412C87.5281 36 95 43.4118 95 53.4706C95 58.2353 92.8652 63 89.6629 66.7059C86.4607 70.4118 81.6573 72 76.3202 72C70.4494 72 65.1124 69.353 61.9101 66.1765Z" fill="#FB2C29"/>
                            </svg>
                            <p>Great place to work and management also very helpful to the employees they way of treating candidates Avery good management are very helpful to employees work balance is very stable</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
