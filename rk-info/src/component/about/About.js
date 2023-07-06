import React from 'react'
import { Link } from 'react-router-dom'

export default function About() {
  return (
    <>
      <div className="containerrr About">
        <h1 className='text-center text-[40px]'>About us</h1>
        <div className="containerr">
          <ol>
            <li><Link to="/">Home</Link></li>
            <li>About us</li>
          </ol>
        </div>
      </div>
      
    </>
  )
}
