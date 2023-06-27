import React from 'react'

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
                  <li><a href="#">Facebook</a></li>
                  <li><a href="#">Twitter</a></li>
                  <li><a href="#">Instagram</a></li>
                  <li><a href="#">Whatsapp</a></li>
                </ul>
              </div>

              <div className="col-lg-2 col-md-6 footer-links">
                <h4>Need Help?</h4>
                <ul>
                  <li><a href="">Customer Services</a></li>
                  <li><a href="">Group Sales</a></li>
                  <li><a href="">FAQs</a></li>
                  <li><a href="">Accessibility</a></li>
                </ul>
              </div>
              <div className="col-lg-2 col-md-6 footer-links">
                <h4>Service</h4>
                <ul>
                  <li><a href="">Compare</a></li>
                  <li><a href="">Download</a></li>
                  <li><a href="">Feedback</a></li>
                  <li><a href="">Bug Report</a></li>
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
                  <a href="#">Home</a>
                </li>
                <li >
                  <a href="#">About</a>
                </li>
                <li >
                  <a href="#">Contact</a>
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
