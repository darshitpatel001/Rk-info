import React from 'react'
import Categorie1 from '../assets/img/fire.png'
import Categorie2 from '../assets/img/Wireless.png'
import Categorie3 from '../assets/img/Biometric Solution.png'
import Categorie4 from '../assets/img/Epabx.png'

export default function Categories3() {
  return (
    <>
      <div class="container wow animate__backInUp">
        <div class="row pt-24">
        <div class="col-md-6 col-lg-3 Categories_item pb-10">
            <img src={Categorie1} className="img-fluid imgsss " alt="" />
            <div className='Categories'>
              <h1>Fire Alarm Solution</h1>
            </div>
          </div>
          <div class="col-md-6 col-lg-3 Categories_item pb-10">
            <img src={Categorie2} className="img-fluid imgsss " alt="" />
            <div className='Categories'>
              <h1>Wireless Access Point Solution</h1>
            </div>
          </div>
          <div class="col-md-6 col-lg-3 Categories_item pb-10">
            <img src={Categorie3} className="img-fluid imgsss " alt="" />
            <div className='Categories'>
              <h1>Biometric Solution</h1>
            </div>
          </div>
          <div class="col-md-6 col-lg-3 Categories_item pb-10">
            <img src={Categorie4} className="img-fluid imgsss " alt="" />
            <div className='Categories'>
              <h1>EPABX Telephone Solution</h1>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
