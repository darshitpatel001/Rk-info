import React from 'react'
import Review from '../assets/img/Rectangle 34.png'
import Review1 from '../assets/img/Rectangle 36.png'
import Review2 from '../assets/img/Rectangle 37.png'

export default function Clientreview1() {
  return (
    <>

      <div className="container pt-28">
        <div className="row">
          <div className="col-lg-7 d-flex flex-column justify-content-center">

            <div className="content bg-[#edf2ff]  border-dashed border-2 border-[#405CA5] wow animate__backInRight" data-wow-duration="1s">
              <p>
              Fake company and fake platform for earning and learning both their agent are campers and do scam with poor people who have lack of knowledge regarding this and they stole their money by making them fool              </p>
            </div>
          </div>

          <div className="col-lg-5">
            <img src={Review} className="img-fluid imgss wow animate__backInLeft" data-wow-duration="1s" />
          </div>
        </div>
      </div>


      <div className="container pt-28">
        <div className="row">

          <div className="col-lg-5">
            <img src={Review1} className="img-fluid imgss wow animate__backInLeft" data-wow-duration="1s" />
          </div>

          <div className="col-lg-7 d-flex flex-column justify-content-center">
            <div className="content bg-[#fdebd8]  border-dashed border-2 border-[#FF9933] wow animate__backInRight" data-wow-duration="1s">
              <p>
              Amrut bhog hybrid work approach demonstrates the company's adaptability and forward-thinking mindset. It allows me to leverage the benefits of remote work, such as increased autonomy and reduced stress, while still enjoying the benefits of fac              </p>
            </div>
          </div>

        </div>
      </div>

      <div className="container pt-28">
        <div className="row">
          <div className="col-lg-7 d-flex flex-column justify-content-center">

            <div className="content bg-[#f8ffed]  border-dashed border-2 border-[#9DCF50] wow animate__backInRight" data-wow-duration="1s">
              <p>
              HR, Sales and Marketing team are so much focused on external environment impact that internal impacts or effect they forced to ignoreAlignment and customer driven approach as 1 company is missing. All Team are running rat race to prove them right and              </p>
            </div>
          </div>

          <div className="col-lg-5">
            <img src={Review2} className="img-fluid imgss wow animate__backInLeft" data-wow-duration="1s" />
          </div>
        </div>
      </div>
    </>
  )
}
