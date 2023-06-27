import React from 'react'
import Client1 from '../assets/img/Rectangle 32.png'
import Client2 from '../assets/img/Rectangle 33.png'
import Client3 from '../assets/img/Rectangle 38.png'
import Client4 from '../assets/img/Rectangle 34.png'
import Client5 from '../assets/img/Rectangle 36.png'
import Client6 from '../assets/img/Rectangle 37.png'
import Client7 from '../assets/img/Rectangle 35.png'
import Client8 from '../assets/img/Rectangle 39.png'
import Client9 from '../assets/img/Rectangle 40.png'
import Client10 from '../assets/img/Rectangle 41.png'


export default function Ourclients() {

  return (

    <div>
      <section id="cta" className="cta">
        <div className="container">

          <div className="text-center wow animate__backInDown" data-wow-duration="1s">
            <p className='ctaa'>OUR Clients</p>
            <p className='text-[35px]'>Take a look at our clients</p>
          </div>

        </div>
      </section>

      <section id="client" className="services">
        <div className="container">

          <div className=" grid xl:grid-cols-5 lg:grid-cols-2 md:grid-1 py-2 mb-2 imgss ">
            <div className='clientt'><img src={Client1} /></div>
            <div className='clientt'><img src={Client2} /></div>
            <div className='clientt'><img src={Client3} /></div>
            <div className='clientt'><img src={Client4} /></div>
            <div className='clientt'><img src={Client5} /></div>
            <div className='clientt'><img src={Client6} /></div>
            <div className='clientt'><img src={Client7} /></div>
            <div className='clientt'><img src={Client8} /></div>
            <div className='clientt'><img src={Client9} /></div>
            <div className='clientt'><img src={Client10} /></div>

          </div>
          <button  className="btn ">  <a href="/clientreview" class="hvr-icon-wobble-horizontal ">
            Try Us Out <i class="fa fa-arrow-right hvr-icon"></i>
          </a></button>

          {/* <div className="row">
            <div className="col-xl-2 col-lg-5 col-md-6" data-aos="zoom-in" data-aos-delay="100">
              <img src={Client1} />
            </div>

            <div className="col-xl-2 col-lg-5 col-md-6" data-aos="zoom-in" data-aos-delay="100">
              <img src={Client2} />
            </div>

            <div className="col-xl-2 col-lg-4 col-md-6" data-aos="zoom-in" data-aos-delay="100">
              <img src={Client3} />
            </div>

            <div className="col-xl-2 col-lg-4 col-md-6" data-aos="zoom-in" data-aos-delay="100">
              <img src={Client4} />
            </div>

            <div className="col-xl-2 col-lg-4 col-md-6" data-aos="zoom-in" data-aos-delay="100">
              <img src={Client4} />
            </div>
          </div>

          <div className="row pt-20">
            <div className="col-xl-2 col-lg-4 col-md-6" data-aos="zoom-in" data-aos-delay="100">
              <img src={Client5} />
            </div>

            <div className="col-xl-3 col-lg-4 col-md-6" data-aos="zoom-in" data-aos-delay="100">
              <img src={Client6} />
            </div>

            <div className="col-xl-3 col-lg-4 col-md-6" data-aos="zoom-in" data-aos-delay="100">
              <img src={Client7} />
            </div>

            <div className="col-xl-3 col-lg-4 col-md-6" data-aos="zoom-in" data-aos-delay="100">
              <img src={Client8} />
            </div>

          </div> */}
        </div>
      </section>

    </div>
  )
}
