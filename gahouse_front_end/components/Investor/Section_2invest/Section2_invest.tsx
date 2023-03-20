import React from 'react'
import img_23 from '../../../public/images/bg-1-1.jpg'
import Subsection2_invest from './Subsection2_invest'
import Subsection_invest from './Subsection_invest'

function Section2_invest() {
  return (
    <section className="bg-patten-05 mb-13">
        <div className="container">
          <div className="card  z-index-3 pt-10 border-0">
            <div className="card-body p-0">
              <h2 className="text-dark lh-1625 text-center mb-2">INVESTOR HOTSPOT</h2>
              <p className="mxw-751 text-center mb-8 px-8">
              ONE STOP GUIDE</p>
            </div>
          </div>
          <div className="row mb-9">
            <div className="col-sm-6 mb-6 bg-img-cover-center" >
              <img src='images/investor1-1.jpg' alt='investor1-1' />
            </div>
               
             
            <div className="col-sm-6 mb-6">
              <div className="card border-hover shadow-hover-lg-1  h-100 bg-transparent bg-hover-white">
                
                <div className="card-body px-0  pb-0 text-center">
                  <h4 className="card-title fs-18 lh-17 text-dark ">With a burgeoning population, the Atlanta metro area is a great place for real estate investors. We have a dedicated team of specialists in 1-4 unit rentals, larger rentals of 5 units or more, fix and flip properties, wholesaling, and the BRRRR (Buy, Rehab, Rent, Refinance, Repeat) investment strategy.</h4>
                  <p className="card-text">
                  In addition to helping you find properties, we can also assist you in achieving the correct financing for your real estate strategy. We have a large database of both national and local lenders that have loans specifically designed for the nuanced needs of investors.

Many of our investor clients start as homeowners, rehabbing their first home and living in it before moving on to their second. The cash flow from their first home, which they keep as a rental, helps pay the mortgage on their second.

At this point, they catch the investment bug and ask us to help them find more. We look forward to helping you build wealth in one of the most buoyant real estate markets in the nation.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-sm-6 mb-6">
              <div className="card border-hover shadow-hover-lg-1 px-7 pb-6 pt-4 h-100 bg-transparent bg-hover-white">
                <div className="card-img-top d-flex align-items-end justify-content-center">
                  <span className="text-primary fs-90 lh-1">
                    <svg className="icon icon-e3"><use xlinkHref="#icon-e3"></use></svg>
                  </span>
                </div>
                <div className="card-body px-0 pt-6 text-center pb-0">
                  <h4 className="card-title fs-18 lh-17 text-dark mb-2">Why Us</h4>
                  <p className="card-text px-2">
                  Not every prime Georgia neighborhood is also a good place to invest. That’s because many areas have “rental restrictions,” imposed by the local town. We have a full database of these restricted areas. 
                  </p>
                </div>
              </div>
            </div>
            <div className="col-sm-6 mb-6 bg-img-cover-center" style={{backgroundImage: "url(images/key.jpg)"}}>
            </div>
            
          </div>
          
        </div>
            <div className='container-fulid'>
            <div className='row'>
            <div className='col-md-8'>
            <Subsection_invest />
            <Subsection2_invest />
            </div>
            <div className='col-md-4 border bg-overlay bg-img-cover-center d-flex justify-content-center align-items-center"' style={{backgroundImage:"url(images/house.jpg)"}}>
               <h1 className='text-light'>Rental Restrictions</h1>
            </div>
            </div>
            </div>

      </section>
  )
}

export default Section2_invest