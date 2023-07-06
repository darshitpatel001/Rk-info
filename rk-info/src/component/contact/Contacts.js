import React from 'react'
import { Link } from 'react-router-dom'

export default function Contacts() {
  return (
    <>
       <div className="containerrr Contact">
        <h1 className='text-center text-[40px]'>Contact</h1>
        <div className="containerr">
          <ol>
            <li><Link to="/">Home</Link></li>
            <li>Contact</li>
          </ol>
        </div>
      </div>
    </>
  )
}
