import React from 'react'
import '../css/index.css'
import services1 from '../assets/img/Rectangle 23.jpg'
import services2 from '../assets/img/Rectangle 22.jpg'
import services3 from '../assets/img/Mask group 1.png'
import services4 from '../assets/img/Rectangle 25.jpg'

export default function Repair() {
  return (
    <>
      <section className="repair pt-24">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-3 col-md-6 col-sm-6 col-12 portfolio-item filter-app">
              <img src={services1} alt='' className="img-fluid imgss" />
              <div>
                <div className="portfolio-info">
                  <h4 className='repair1'>CCTV Cable</h4>
                  <p className='repair2'>selling product</p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6 col-12 portfolio-item filter-web">
              <img src={services2} alt='' className="img-fluid imgss" />
              <div className="portfolio-info">
                <h4 className='repair1'>Power Supply</h4>
                <p className='repair2'>selling product</p>
              </div>
            </div>

            <div className="col-lg-3 col-md-6 col-sm-6 col-12 portfolio-item filter-app">
              <img src={services3} alt='' className="img-fluid imgss" />
              <div className="portfolio-info">
                <h4 className='repair1'>Computer System</h4>
                <p className='repair2'>selling product</p>
              </div>
            </div>

            <div className="col-lg-3 col-md-6 col-sm-6 col-12 portfolio-item filter-card">
              <img src={services4} alt='' className="img-fluid imgss" />
              <div className="portfolio-info">
                <h4 className='repair1'>4G SIM Router</h4>
                <p className='repair2'>selling product</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
