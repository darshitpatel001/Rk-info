import React from 'react'
import Categories1 from '../assets/img/system.png'
import Categories2 from '../assets/img/laptop.png'
import Categories3 from '../assets/img/cctv.png'
import Categories4 from '../assets/img/door.png'
import Categories5 from '../assets/img/cameraa.png'
import Categories6 from '../assets/img/video door.png'
import icon from '../assets/img/system 1.png'
import icon1 from '../assets/img/cctv1.png'
import icon2 from '../assets/img/door1.png'
import icon3 from '../assets/img/telephone1.png'
import icon4 from '../assets/img/mouse1.png'
import icon5 from '../assets/img/moniter.png'
import icon6 from '../assets/img/wifi camera.png'
export default function Categorie1() {
  return (
    <>
      <div className='container pt-24  wow animate__backInUp'>
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          <div class="col-span-1">
            <img src={Categories1} className="img-fluid imgsss " alt="" />
            <div className='Categories'>
              <h1>Computer System</h1>
            </div>
          </div>
          <div class="col-span-1">
            <img src={Categories2} className="img-fluid imgsss " alt="" />
            <div className='Categories'>
              <h1>Laptop</h1>
            </div>
          </div>
          <div class="col-span-1">
            <img src={Categories3} className="img-fluid imgsss " alt="" />
            <div className='Categories'>
              <h1>CCTV Camera</h1>
            </div>
          </div>

          <div class="col-span-1">
            <div className='container Categorie1 wow animate__rubberBand'>
              <p className='text-[35px] text-[#1D3A59] p-3 text-center'>Product Categories</p>
              <hr />
              <ul className='text-[20px] text-[#727E8E]'>

                <div className="Categories-icon  pt-2">
                  <div className="text">
                    <h1 className='text-[20px] text-[#727E8E]'>Computer System</h1>
                  </div>
                  <img src={icon} />
                </div>

                <div className="Categories-icon  pt-2">
                  <div className="text">
                    <h1 className='text-[20px] text-[#727E8E]'>CCTV Camera</h1>
                  </div>
                  <img src={icon1} />
                </div>

                <div className="Categories-icon  pt-2">
                  <div className="text">
                    <h1 className='text-[20px] text-[#727E8E]'>Smart Door Lock</h1>
                  </div>
                  <img src={icon2} />
                </div>

                <div className="Categories-icon  pt-2">
                  <div className="text">
                    <h1 className='text-[20px] text-[#727E8E]'>EPABX Telephone</h1>
                  </div>
                  <img src={icon3} />
                </div>

                <div className="Categories-icon  pt-2">
                  <div className="text">
                    <h1 className='text-[20px] text-[#727E8E]'>Keyboard Mouse</h1>
                  </div>
                  <img src={icon4} />
                </div>

                <div className="Categories-icon  pt-2">
                  <div className="text">
                    <h1 className='text-[20px] text-[#727E8E]'>Moniter</h1>
                  </div>
                  <img src={icon5} />
                </div>

                <div className="Categories-icon  pt-2">
                  <div className="text">
                    <h1 className='text-[20px] text-[#727E8E]'>Wi - Fi Camera</h1>
                  </div>
                  <img src={icon6} />
                </div>
              </ul>
            </div>
          </div>
          <div class="col-span-1">
            <img src={Categories4} className="img-fluid imgsss " alt="" />
            <div className='Categories'>
              <h1>Nokee Door Lock</h1>
            </div>
          </div>
          <div class="col-span-1">
            <img src={Categories5} className="img-fluid imgsss " alt="" />
            <div className='Categories'>
              <h1>CCTV Camera</h1>
            </div>
          </div>     <div class="col-span-1">
            <img src={Categories6} className="img-fluid imgsss " alt="" />
            <div className='Categories'>
              <h1>Video Door</h1>
            </div>
          </div>

        </div>
      </div>

    </>
  )
}
