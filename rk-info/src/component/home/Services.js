import React from 'react'
import '../css/index.css'
import Services1 from '../assets/img/Rectangle 9.png'
import Services2 from '../assets/img/Analog Camera.png'
import Services3 from '../assets/img/Rectangle 10.png'
import Fram from '../assets/img/Frame.png'


export default function Services() {

  return (
    <>
      <section id="cta" className="cta">
        <div className="container wow animate__backInDown" data-wow-duration="1s">

          <div className="text-center">
            <p className='ctaa'>WHAT WE DO</p>
            <p className='text-[35px]'>Repair and Support AllWindows/Linux PC<br />and Service Apple/Mac Computers</p>
          </div>

        </div>
      </section>

      <section id="Products" className="Products section-bg">
        <div className="container" >

          <div className="row justify-content-center">

            <div className="col-xl-3 col-lg-3 col-sm-6 col-12">
              <div className="Product wow animate__backInUp Categories_item" data-wow-duration="1s">
                <img src={Services1} alt="" className="img-fluid imgss"/>
                <div className='cte1'>
                  <h1 className='pt-2'>Accessories, Service</h1>
                  <p className='pt-2 pb-2'><b>Windows CPU</b></p>
                  <div className="text-side-imagee">
                    <div className="text">
                      <b className='cte2'><del>$165.00</del></b>
                    </div>
                    <img src={Fram} alt="" className='px-1'/>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-xl-3 col-lg-3 col-sm-6 col-12">
              <div className="Product wow animate__backInUp Categories_item" data-wow-duration="1s">
                <img src={Services2} className="img-fluid imgss" alt="" />
                <div className='cte1'>
                  <h1 className='pt-2'>Security Solution</h1>
                  <p className='pt-2 pb-2'><b>Analog Camera Solution</b></p>
                  <div className="text-side-imagee">
                    <div className="text">
                      <b className='cte2'><del>$199.00</del></b>
                    </div>
                    <img src={Fram} alt="" className='px-1'/>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-xl-3 col-lg-3 col-sm-6 col-12">
              <div className="Product wow animate__backInUp Categories_item" data-wow-duration="1s">
                <img src={Services3} className="img-fluid imgss" alt="" />
                <div className='cte1'>
                  <h1 className='pt-2'>Computer System Solution</h1>
                  <p className='pt-2 pb-2'><b>Windows 10 Solution</b></p>
                  <div className="text-side-imagee">
                    <div className="text">
                      <b className='cte2'><del>$149.00</del></b>
                    </div>
                    <img src={Fram} alt='' className='px-1'/>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  )
}
