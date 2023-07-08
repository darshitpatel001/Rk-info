import React from 'react'
import Product1 from '../assets/img/product-image5-470x470.jpg'
import Product2 from '../assets/img/product-image9-470x470.jpg'
import Product3 from '../assets/img/product-image10-470x470.jpg'
import Product4 from '../assets/img/product-image7-470x470.jpg'
// import Product5 from '../assets/img/Group 47.png'
import Fram from '../assets/img/Frame.png'

export default function Ourshop() {

  return (
    <>
      <section id="cta" className="cta wow animate__backInDown" data-wow-duration="2s" >
        <div className="container">
          <div className="text-center">
            <p className='ctaa'>OUR SHOP</p>
            <p className='text-[35px]'>Best-Selling Products</p>
          </div>
        </div>
      </section>

      <section id="Products" className="Products">
        <div className="container pb-10">

          <div className="row">

            <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-12 pb-4">
              <div className="Product wow animate__backInUp Categories_item" data-wow-duration="1s">
                <img src={Product1} alt='' className="img-fluid imgss w-100" />
                <div className='cte1'>
                  <h1 className='pt-2'>Discount, CCTV Camera</h1>

                  <div className="text-side-image">
                    <div className="text">
                      <p className='cte2'>Wi-Fi Camera</p>
                    </div>
                    <img src={Fram} alt='' className='pr-4 ' />
                  </div>
                </div>
              </div>
            </div>

            <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-12 pb-4">
              <div className="Product wow animate__backInUp Categories_item" data-wow-duration="1s">
                <img src={Product2} alt='' className="img-fluid imgss w-100" />
                <div className='cte1'>
                  <h1 className='pt-2'>Discount, Card</h1>

                  <div className="text-side-image">
                    <div className="text">
                      <p className='cte2'>Rfidcard</p>
                    </div>
                    <img src={Fram} alt='' className='pr-4 ' />
                  </div>
                </div>
              </div>
            </div>

            <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-12 pb-4">
              <div className="Product wow animate__backInUp Categories_item" data-wow-duration="1s">
                <img src={Product3} alt='' className="img-fluid imgss w-100" />
                <div className='cte1'>
                  <h1 className='pt-2'>New, Door Lock</h1>

                  <div className="text-side-image">
                    <div className="text">
                      <p className='cte2'>Fingerprint & Wireless door lock</p>
                    </div>

                  </div>
                </div>
              </div>
            </div>

            <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-12">
              <div className="Product wow animate__backInUp Categories_item" data-wow-duration="1s">
                <img src={Product4} alt='' className="img-fluid imgss w-100" />
                <div className='cte1'>
                  <h1 className='pt-2'>Accessories, Discount</h1>

                  <div className="text-side-image">
                    <div className="text">
                      <p className='cte2'>KeyBoard - Mouse</p>
                    </div>
                    <img src={Fram} alt='' className='pr-4' />
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* <div className='containerr pt-5'>
        <img src={Product5} className='arrow' />
      </div> */}

    </>

  )
}
