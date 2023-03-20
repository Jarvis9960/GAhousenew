import CommonCarousel from '@components/CommonCarousel';
import { useRouter } from 'next/router'
import React from 'react'
import { Icon } from '@iconify/react';

function HomePageBanner() {
  const router = useRouter()
  return (<>
    <section data-aos="fade-up" >
      <div className="slick-slider mx-0 custom-arrow-center position-relative "
        data-slick-options='{"slidesToShow": 1, "autoplay":true,"responsive":[{"breakpoint": 1200,"settings": {"slidesToShow":1,"arrows":false,"dots":false}},{"breakpoint": 992,"settings": {"slidesToShow":1,"arrows":false,"dots":false}},{"breakpoint": 768,"settings": {"slidesToShow": 1,"arrows":false,"dots":false}},{"breakpoint": 576,"settings": {"slidesToShow": 1,"arrows":false,"dots":false}}]}'>

        <div className='flex justify-content-center align-content-center w-140px  mr-10 mb-10 position-absolute z-index-10 pos-fixed-bottom-right '>
          <div className=' rounded-1 bg-white  min-w-150px  text-center text-black  font-weight-400  floatingBtn w-160px py-2' style={{ fontSize: "14px" }} >
            Have a Question ?
            <br />
            <Icon icon="material-symbols:call" width="22" /> {" "}
            <span className=' text-danger'>877-749-SALE</span>
          </div>
          <img src='images/profile-avatar.png' className=' hover-image rounded-circle img-fluid border border-4x border-white ' />
          <div className=' rounded-1 btn-primary text-center ' >Aman Grover</div>
        </div>
        <CommonCarousel  >

          <div className="box px-0 d-flex flex-column ">
            <div className="bg-cover d-flex align-items-center custom-vh-02 movingBackground parallaxBg "
              style={{ backgroundImage: "url('images/relocation.jpg')" }}>
              <div className="container" data-aos="fade-right">
                <div className="row py-8" data-animate="zoomIn">
                  <div className=" col-lg-4 col-md-6 d-md-block col-sm-6">
                    <div className='bg-white h-200 rounded-1'>
                      <div className="form-row">
                        <div className=' ml-7 mb-4 mt-4'>
                          <div className=" btn-primary h-10 rounded-1 px-2  text-center btn-block shadow-none">Special</div>
                        </div>

                        <div className="col-md-12 mb-2 ml-7 text-left">
                          <h2>Out Of Town Buyers</h2>
                        </div>
                        <div className="col-md-12 mt-2 mb-4 px-8 text-left">
                          <p>
                            If you're looking to buy a home in Georgia from out-of-state,or even out of county, we'll make the process easy and stress-free.
                          </p>
                        </div>
                        <div className="col-md-12 mt-7 mb-4 px-7">

                        </div>
                        <div className="col-md-12 ">
                          <button type="submit" className="flex-col btn btn-dark btn-lg btn-block shadow-none">
                            <h4 className=' font-weight-bold text-white text-center ' onClick={() => router.push('/Outoftown')}>
                              <Icon icon="material-symbols:home" width={"30"} />{" "}Know More
                            </h4>
                          </button>
                        </div>

                      </div>
                    </div>
                  </div>
                  <div className="col-lg-7 col-md-6">
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="box px-0 d-flex flex-column ">
            <div className="bg-cover d-flex align-items-center custom-vh-02  movingBackground parallaxBg"
              style={{ backgroundImage: "url('images/ga.jpg')" }}>
              <div className="container" data-aos="fade-right">
                <div className="row py-8" data-animate="zoomIn">
                  <div className=" col-lg-4 col-md-6 d-md-block col-sm-6">
                    <div className='bg-white h-200 rounded-1'>
                      <div className="form-row">
                        <div className='ml-7 mb-4 mt-4'>
                          <div className=" btn-primary h-10 rounded-1 px-2  text-center btn-block shadow-none">Special</div>
                        </div>

                        <div className="col-md-12 mb-2 ml-7 text-left">
                          <h2>Georgia Film Biz</h2>
                        </div>
                        <div className="col-md-12 mt-2 mb-4 px-8 text-left">
                          <p>
                            Georgia's film industry is the most prolific in the country with a slew of hit TV shows anf films being shot in the state resulting in an influx of people and businesses and a demand for real estate.
                          </p>
                        </div>
                        <div className="col-md-12 mt-7 mb-4 px-7">

                        </div>
                        <div className="col-md-12 ">

                          <button type="submit" className="flex-col btn btn-dark btn-lg btn-block shadow-none">
                            <h4 className=' font-weight-bold text-white text-center ' onClick={() => router.push('/Gorgia_film_big')}>
                              <Icon icon="material-symbols:home" width={"30"} />{" "}Know More
                            </h4>
                          </button>
                        </div>

                      </div>
                    </div>
                  </div>
                  <div className="col-lg-7 col-md-6">
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="box px-0 d-flex flex-column ">
            <div className="bg-cover d-flex align-items-center custom-vh-02 movingBackground parallaxBg"
              style={{ backgroundImage: "url('images/investor.jpg')" }}>
              <div className="container" data-aos="fade-right">
                <div className="row py-8" data-animate="zoomIn">
                  <div className=" col-lg-4 col-md-6 d-md-block col-sm-6 col-sm-5">
                    <div className='bg-white h-300 rounded-1'>
                      <div className="form-row text-left">
                        <div className='ml-7 mb-4 mt-4'>
                          <center><div className=" btn-primary h-10 rounded-1 px-2  text-center btn-block shadow-none">Special</div></center>
                        </div>
                        <div className="col-md-12 mb-2 ml-7 text-left">
                          <h2>Investor Hotspot</h2>
                        </div>
                        <div className="col-md-12 mt-2 mb-4 px-8 text-left">
                          <p>
                            Georgia's booming economy and population growth have made it and investor hotspot.
                            Whether you are into fix and flips or long-term rentals, we can help.
                          </p>
                        </div>

                        <div className="col-md-12 mt-7 mb-4 px-7">

                        </div>

                      </div>
                      <div className="w-auto ">
                        <button type="submit" className="flex-col btn btn-dark btn-lg btn-block shadow-none">
                          <h4 className=' font-weight-bold text-white text-center ' onClick={() => router.push('/InvestorHotspot')}>
                            <Icon icon="material-symbols:home" width={"30"} />{" "}Know More
                          </h4>
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-7 col-md-6">

                  </div>
                </div>
              </div>
            </div>
          </div>

        </CommonCarousel>

      </div>
    </section>
  </>);
}

export default HomePageBanner