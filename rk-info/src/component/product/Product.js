import React from 'react'
import { Link } from 'react-router-dom'

export default function Product() {
  return (
    <>
      <div className="containerrr products">
        <h1 className='text-center text-[40px]'>Product</h1>
        <div className="containerr">
          <ol>
            <li><Link to="/">Home</Link></li>
            <li>Product</li>
          </ol>
        </div>
      </div>
    </>
  )
}
