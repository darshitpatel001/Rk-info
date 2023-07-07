import React from 'react'
import Categories1 from '../assets/img/Cable.png'
import Categories2 from '../assets/img/Cpu.png'
import Categories3 from '../assets/img/cctv rock.png'
import Categories4 from '../assets/img/Epabx.png'

export default function Categorie2() {
  return (
    <>
      <div class="container wow animate__backInUp">
        <div class="row pt-24">
        <div class="col-md-6 col-lg-3 Categories_item pb-10">
            <img src={Categories1} className="img-fluid imgsss " alt="" />
            <div className='Categories'>
              <h1>CCTV Cable</h1>
            </div>
          </div>
          <div class="col-md-6 col-lg-3 Categories_item pb-10">
            <img src={Categories2} className="img-fluid imgsss " alt="" />
            <div className='Categories'>
              <h1>DC UPS</h1>
            </div>
          </div>
          <div class="col-md-6 col-lg-3 Categories_item pb-10">
            <img src={Categories3} className="img-fluid imgsss " alt="" />
            <div className='Categories'>
              <h1>CCTV Rack</h1>
            </div>
          </div>
          <div class="col-md-6 col-lg-3 Categories_item pb-10">
            <img src={Categories4} className="img-fluid imgsss " alt="" />
            <div className='Categories'>
              <h1>EPABX Telephone</h1>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
