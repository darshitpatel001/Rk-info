import React from 'react'

export default function Updates() {
    return (
        <>
            <div className="footer-newsletter">
                <div className="container pt-5 pb-20">
                    <div className="row justify-content-center">
                        <div className="col-lg-12 text-center wow animate__jackInTheBox updates" data-wow-duration="1s">
                            <p className='text-[35px] text-[#1D3A59]'>Want to Get Updates?</p>
                            <p className='social2'>Adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim ad.</p>
                        </div>
                        <div className="col-lg-6">
                            <form action="https://formsubmit.co/rktechnology2022@gmail.com" method="POST" >
                                <input htmlFor="email" type="email" placeholder='Enter Your Email Address' name="email" />
                                <input htmlFor="submit" type="submit" value="Subscribe" className='btn' />
                            </form>
                            <input htmlFor="chakebox" type="checkbox" className="form-check-input" id="check1" name="option1" value="something" />
                            <label className="form-check-label text-[#727E85]" htmlFor="check1"> I agree to the <a href='' className='privacy'>Privacy Policy.</a></label>
                        </div>
                    </div>
                </div>
            </div>
            
        </>
    )
}
