import React from 'react'
import { Link } from 'react-router-dom'


export default function Footer() {
  return (
    <>
      <footer id="footer">
        <div className="footer-top foot">
          <div className="container">
            <div className="row">

              <div className="col-lg-5 col-md-6">
                <div className="footer-info">
                  Trusted Repair Services for <br />All Gadgets
                </div>
              </div>

              <div className="col-lg-2 col-md-6 footer-links">
                <h4>Social</h4>
                <ul>
                  <li><Link to="">Facebook</Link></li>
                  <li><Link to="">Twitter</Link></li>
                  <li><Link to="">Instagram</Link></li>
                  <li><Link to="https://api.whatsapp.com/send?phone=9725483242">Whatsapp</Link>
                  </li>
                </ul>
              </div>

              <div className="col-lg-2 col-md-6 footer-links">
                <h4>Need Help?</h4>
                <ul>
                  <li><Link to="">Customer Services</Link></li>
                  <li><Link to="">Group Sales</Link></li>
                  <li><Link to="">FAQs</Link></li>
                  <li><Link to="">Accessibility</Link></li>
                </ul>
              </div>
              <div className="col-lg-2 col-md-6 footer-links">
                <h4>Service</h4>
                <ul>
                  <li><Link to="">Compare</Link></li>
                  <li><Link to="">Download</Link></li>
                  <li><Link to="">Feedback</Link></li>
                  <li><Link to="">Bug Report</Link></li>
                </ul>
              </div>
            </div>
          </div>
        </div>


        <div className="container-fluid footerbt" >
          <div className="container pt-4">
            <div className="row">
              <div className="col-md-6 text-center text-md-start mb-3 mb-md-0 nav">
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li >
                  <Link to="/abouts">About</Link>
                </li>
                <li >
                  <Link to="/contact">Contact</Link>
                </li>
              </div>
              <div className="col-md-6 text-center text-md-end">
                RK infotech @2023. All Rights Reserved.
              </div>
            </div>
          </div>
        </div>

      </footer >

    </>
  )
}
