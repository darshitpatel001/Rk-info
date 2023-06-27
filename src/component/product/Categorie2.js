import React from 'react'
import Categories1 from '../assets/img/Cable.png'
import Categories2 from '../assets/img/Cpu.png'
import Categories3 from '../assets/img/cctv rock.png'
import Categories4 from '../assets/img/Epabx.png'

export default function Categorie2() {
  return (
    <>
<div className='container  pt-24 pb-10 wow animate__backInUp'>
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">

    <div className="col-span-1">
      <img src={Categories1} className="img-fluid imgsss" alt="" />
      <div className='Categories'>
        <h1>CCTV Cable</h1>
      </div>
    </div>

    <div className="col-span-1">
      <img src={Categories2} className="img-fluid imgsss" alt="" />
      <div className='Categories'>
        <h1>DC CPU</h1>
      </div>
    </div>

    <div className="col-span-1">
      <img src={Categories3} className="img-fluid imgsss" alt="" />
      <div className='Categories'>
        <h1>CCTV Rack</h1>
      </div>
    </div>

    <div className="col-span-1">
      <img src={Categories4} className="img-fluid imgsss" alt="" />
      <div className='Categories'>
        <h1>EPABX Telephone</h1>
      </div>
    </div>

  </div>
</div>

    </>
  )
}
