import React from 'react'
import Categorie1 from '../assets/img/fire.png'
import Categorie2 from '../assets/img/Wireless.png'
import Categorie3 from '../assets/img/Biometric Solution.png'
import Categorie4 from '../assets/img/Home Automation.png'
import Categorie5 from '../assets/img/Networking.png'
import Categorie6 from '../assets/img/Smart Drawer Lock.png'
import Categorie7 from '../assets/img/Computer Peripherals.png'
import Categorie8 from '../assets/img/Access Control Solution.png'

export default function Categories3() {
  return (
    <>
      <div class="container product-section wow animate__backInUp">
        <div class="row pt-24">
        <div class="col-md-6 col-sm-6 col-lg-3 Categories_item pb-10">
            <img src={Categorie1} className="img-fluid imgsss " alt="" />
            <div className='Categories'>
              <h1>Fire Alarm Solution</h1>
            </div>
          </div>
          <div class="col-md-6 col-sm-6 col-lg-3 Categories_item pb-10">
            <img src={Categorie2} className="img-fluid imgsss " alt="" />
            <div className='Categories'>
              <h1>Wireless Access Point Solution</h1>
            </div>
          </div>
          <div class="col-md-6 col-sm-6 col-lg-3 Categories_item pb-10">
            <img src={Categorie3} className="img-fluid imgsss " alt="" />
            <div className='Categories'>
              <h1>Biometric Solution</h1>
            </div>
          </div>
          <div class="col-md-6 col-sm-6 col-lg-3 Categories_item pb-10">
            <img src={Categorie4} className="img-fluid imgsss " alt="" />
            <div className='Categories'>
              <h1>Home Automation</h1>
            </div>
          </div>
        </div>
      </div>
      <div class="container product-section wow animate__backInUp">
        <div class="row pt-24">
          <div class="col-md-6 col-sm-6 col-lg-3 Categories_item pb-10">
            <img src={Categorie5} className="img-fluid imgsss " alt="" />
            <div className='Categories'>
              <h1>Networking &  IT Solution</h1>
            </div>
          </div>
          <div class="col-md-6 col-sm-6 col-lg-3 Categories_item pb-10">
            <img src={Categorie6} className="img-fluid imgsss " alt="" />
            <div className='Categories'>
              <h1>Smart Drawer Lock</h1>
            </div>
          </div>
          <div class="col-md-6 col-sm-6 col-lg-3 Categories_item pb-10">
            <img src={Categorie7} className="img-fluid imgsss " alt="" />
            <div className='Categories'>
              <h1>Computer Peripherals & Accessories</h1>
            </div>
          </div>
          <div class="col-md-6 col-sm-6 col-lg-3 Categories_item pb-10">
            <img src={Categorie8} className="img-fluid imgsss " alt="" />
            <div className='Categories'>
              <h1>Access Control Solution</h1>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
