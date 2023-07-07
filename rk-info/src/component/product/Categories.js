import React, { useEffect } from 'react'
import Categories1 from '../assets/img/wifi.png'
import Categories2 from '../assets/img/mouse.png'
import Categories3 from '../assets/img/keyboard.png'
import 'animate.css';
import { WOW } from 'wowjs';


export default function Categories() {
    useEffect(() => {
        const wow = new WOW();
        wow.init();
    }, []);
    return (
        <>
            <section className="cta">
                <div className="container">
                    <div className="wow animate__backInDown" data-wow-duration="1s">
                        <p className='text-[40px]'>Product</p>
                        <p className='text-[#727E85] text-[18px]'>
                            Showing all 12 results
                        </p>
                    </div>
                </div>
            </section>
            <div className='container wow animate__backInUp'>
                <div class="row">
                    <div class="col-md-6 col-lg-3 Categories_item pb-10">
                        <img src={Categories1} className="img-fluid imgsss " alt="" />
                        <div className='Categories'>
                            <h1>Wifi Router</h1>
                        </div>
                    </div>
                    <div class="col-md-6 col-lg-3 Categories_item pb-10">
                        <img src={Categories2} className="img-fluid imgsss " alt="" />
                        <div className='Categories'>
                            <h1>Mouse</h1>
                        </div>
                    </div>
                    <div class="col-md-6 col-lg-3 Categories_item pb-10">
                        <img src={Categories3} className="img-fluid imgsss " alt="" />
                        <div className='Categories'>
                            <h1>Keyboard</h1>
                        </div>
                    </div>


                    <div class="col-md-6 col-lg-3 Categories_item pb-10">
                        <div className='container Categorie text-center wow animate__rubberBand'>
                            <p className='text-[35px] text-[#1D3A59] p-3'>Product Categories</p>
                            <hr />
                            <ul className='text-[20px] text-[#727E8E]'>
                                <li className='p-2 pt-4'>Anti Virus</li>
                                <li className='p-2'>Hard Disk</li>
                                <li className='p-2'>Mother Boards</li>
                                <li className='p-2'>Processor</li>
                                <li className='p-2'>Uncategorized</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
