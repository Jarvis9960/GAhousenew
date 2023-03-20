import Link from 'next/link'
import React from 'react'

function BlogsHomePage() {
  return (
    <div className="pb-7 pb-md-11 mt-10" data-aos="fade-up">
      <div className="container">
        <div className="row flex flex-wrap d-flex" data-aos="fade-up">
          <div className=" mt-lg-4" data-animate="fadeInLeft">
            <h2 className="text-center font-weight-500 letter-spacing-263 text-uppercase mb-5">
              Updates From Our Blog
            </h2>
            <p className="text-center  mb-7 lh-15" style={{ color: "#ba935c" }}> READ ABOUT THE REAL ESTATE TOPICS THAT MATTER!</p>
          </div>
          <div className="row mt-6 mt-lg-0 " data-animate="fadeInRight">

            <div className='col-md-4 hover-to-top'>
              <div className="ml-5 card border-0 col-sm-11 mb-sm-0 mb-7 " data-aos="fade-up">
                <div className="position-relative d-flex align-items-end card-img">
                  <Link href="/BlogReport" className="hover-shine">
                    <img style={{}} src="images/investor.jpg"
                      alt="Retail banks wake up to digital lending this year" />
                  </Link>
                </div>
                <div className="card-body p-0 " data-aos="fade-up">
                  <ul className="list-inline text-gray-lighter">
                    <li className="list-inline-item mr-4"><i className="far fa-calendar mr-1"></i>November 9,2021
                    </li>
                    <li className="list-inline-item mr-4"><i className="far fa-eye mr-1"></i> </li>
                  </ul>
                  <h3 className="fs-18 text-heading lh-194" style={{ height: "8vh" }}>
                    <Link href="/BlogReport" className="text-heading ">First Time Home Buyers</Link>
                  </h3>
                  <p className="mb-4" style={{}}>We love working with first-time homebuyers beacuse it's an opportunity not only to introdurce ...</p>
                  <Link href="/BlogReport" className="btn  " style={{ backgroundColor: "#ba935c", color: "white" }}>Read more <i
                    className="far fa-long-arrow-right ml-1"></i></Link>
                </div>
              </div>
            </div>

            <div className='col-md-4 hover-to-top'>
              <div className="card border-0 col-sm-11 mb-sm-0 mb-7" data-aos="fade-up">
                <div className="position-relative d-flex align-items-end card-img">
                  <Link href="/DifferentLoanOption" className="hover-shine">
                    <img style={{}} src="images/housebg1.jpg"
                      alt="Retail banks wake up to digital lending this year" />
                  </Link>
                  {/* <a href="#"
                    className="badge pos-fixed-bottom text-white bg-dark-opacity-04 fs-13 font-weight-500 bg-hover-primary hover-white m-2 position-absolute">
                    rental
                  </a> */}
                </div>
                <div className="card-body p-0 " data-aos="fade-up">
                  <ul className="list-inline text-gray-lighter">
                    <li className="list-inline-item mr-4"><i className="far fa-calendar mr-1"></i>October 9, 2021
                    </li>
                    <li className="list-inline-item mr-4"><i className="far fa-eye mr-1"></i> </li>
                  </ul>
                  <h3 className="fs-18 text-heading lh-194" style={{ height: "8vh" }}>
                    <Link href="/DifferentLoanOption" className="text-heading ">Different Loan Options</Link>
                  </h3>
                  <p className="mb-4" style={{}}>
                    Although most homeowners choose to get a conventional 30-year mortgage, that doesn’t mean...</p>
                  <Link href="/DifferentLoanOption" className="btn" style={{ backgroundColor: "#ba935c", color: "white" }}>Read more <i
                    className="far fa-long-arrow-right ml-1"></i></Link>
                </div>
              </div>
            </div>
            <div className='col-md-4 hover-to-top'>
              <div className="card border-0 col-sm-11 mb-sm-0 mb-7">
                <div className="position-relative d-flex align-items-end card-img">
                  <Link href="/HowtofixCredit" className="hover-shine">
                    <img style={{}} src="images/18060611_05.jpg"
                      alt="Within the construction industry as their overdraft" />
                  </Link>
                </div>
                <div className="card-body p-0 " data-aos="fade-up">
                  <ul className="list-inline text-gray-lighter">
                    <li className="list-inline-item mr-4"><i className="far fa-calendar mr-1"></i>September 9, 2021
                    </li>
                    <li className="list-inline-item mr-4"><i className="far fa-eye mr-1"></i> 149 views</li>
                  </ul>
                  <h3 className="fs-18 text-heading lh-194" style={{ height: "8vh" }}>
                    <Link href="/HowtofixCredit" className="text-heading">
                      How To Fix Your Credit Before Purchasing House</Link>
                  </h3>
                  <p className="mb-4" style={{}}>
                    Fixing your credit should be the first thing you think about doing after deciding that you want to...</p>
                  <Link href="/HowtofixCredit" className="btn" style={{ backgroundColor: "#ba935c", color: "white" }}>Read more <i
                    className="far fa-long-arrow-right ml-1"></i></Link>
                </div>
              </div>
            </div>


          </div>
        </div>
      </div>
    </div>
  )
}

export default BlogsHomePage