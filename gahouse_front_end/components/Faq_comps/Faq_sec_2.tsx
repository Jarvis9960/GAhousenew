// import img from 'next/image'
// import React from 'react'
import { useEffect, useState } from "react"

function Faq_sec_2() {

  const [currentTab, setCurrentTab] = useState("5")

  const tabHandler2 = (value) =>{
    console.log(value)
    setCurrentTab(value)
  }

  useEffect(() => {
    console.log(currentTab)
  
    return () => {
      
    }
  }, [currentTab])
  

  return (
    <section   className="pt-12">
        <h2   className="fs-32 lh-16 mb-7 text-dark text-center">Frequently Asked Questions</h2>
        <div className="collapse-tabs">
          <ul className="tabs-02 nav nav-pills d-none d-md-flex justify-content-center text-uppercase"
            role="tablist">
            <li className="nav-item" onClick={()=>{tabHandler2("4"), console.log("line 32")}}>
              <a    
                   className="nav-link btn btn-lg rounded-0 mx-2 bg-gray-01 text-heading"
                   data-toggle="tab" role="tab">
                Question about selling
              </a>
            </li>
            <li className="nav-item" onClick={()=>{tabHandler2("5"), console.log("line 38")}}>
              <a  className="nav-link active rounded-0 btn btn-lg mx-2 bg-gray-01 text-heading"
                   data-toggle="tab" role="tab">
                Question about renting
              </a>
            </li>
            <li className="nav-item dropdown" onClick={()=>{()=> {tabHandler2("6"), console.log("line 44")}}}>
              <a 
                   className="nav-link btn btn-lg mx-2 rounded-0 bg-gray-01 text-heading"
                   data-toggle="tab" role="tab">
                Other question
              </a>
            </li>
          </ul>
          <div className="tab-content shadow-none rounded-0 pt-9 pb-12 px-0">
            <div id="collapse-tabs-accordion-02">
              {currentTab === "4" && (<div className="tab-pane tab-pane-parent fade container" id="selling2" role="tabpanel"> 
    
              </div>)}
              {currentTab === "5" && (<div className="tab-pane fade container tab-pane-parent show active" id="renting2" role="tabpanel">
                <div className="card border-0 bg-transparent">
                  <div className="card-header border-0 d-block d-md-none bg-transparent px-0 py-1"
                             id="headingRenting-02">
                    <h5 className="mb-0">
                      <button className="btn lh-2 fs-20 py-1 px-6 w-100 collapse-parent bg-gray-01"
                                        data-toggle="collapse"
                                        data-target="#renting-collapse-02"
                                        aria-expanded="true"
                                        aria-controls="renting-collapse-02">
                        Question about renting
                      </button>
                    </h5>
                  </div>
                  <div id="renting-collapse-02" className="collapse show collapsible"
                             aria-labelledby="headingRenting-02"
                             data-parent="#collapse-tabs-accordion-02">
                    <div className="row">
                      <div className="col-md-6 mb-6 mb-md-0">
                        <div id="accordion-style-02-1" className="accordion accordion-02 my-7 mt-md-0">
                          <div className="card border-top-0 border-right-0 border-left-0 border-bottom rounded-0 pb-5 mb-4 pl-7 pr-5 position-relative">
                            <div className="card-header border-0 bg-white p-0" id="heading_23">
                              <h5 className="mb-0">
                                <button className="btn btn-link fs-18 fs-md-22 font-weight-500 p-0 border-0"
                                                            data-toggle="collapse"
                                                            data-target="#collapse_23" aria-expanded="true"
                                                            aria-controls="collapse_23">
                                  How do I delete my account?
                                </button>
                              </h5>
                            </div>
                            <div id="collapse_23" className="collapse show" aria-labelledby="heading_23"
                                                 data-parent="#accordion-style-02-1">
                              <div className="card-body px-0 pt-2 pb-1 lh-214">
                                Lorem ipsum dolor sit amet, consectetur cing elit. Suspe ndisse
                                suscipit
                                sagittis leo sit met
                                condime ntum esti laiolainx bulum iscipit sagittis leo sit met con
                                ndisse su
                                Lorem ipsum dolor sit amet, consectetur cing elit. Suspe ndisse
                                suscipit
                                sagittis leo sit met
                                condime ntum esti laiolainx bulum iscipit.
                              </div>
                            </div>
                          </div>
                          <div className="card border-top-0 border-right-0 border-left-0 border-bottom rounded-0 pb-5 mb-4 pl-7 pr-5 position-relative">
                            <div className="card-header border-0 bg-white p-0" id="heading_24">
                              <h5 className="mb-0">
                                <button className="btn btn-link fs-18 fs-md-22 font-weight-500 p-0 border-0 collapsed"
                                                            data-toggle="collapse"
                                                            data-target="#collapse_24" aria-expanded="true"
                                                            aria-controls="collapse_24">
                                  How can we help?
                                </button>
                              </h5>
                            </div>
                            <div id="collapse_24" className="collapse" aria-labelledby="heading_24"
                                                 data-parent="#accordion-style-02-1">
                              <div className="card-body px-0 pt-2 pb-1 lh-214">
                                Lorem ipsum dolor sit amet, consectetur cing elit. Suspe ndisse
                                suscipit
                                sagittis leo sit met
                                condime ntum esti laiolainx bulum iscipit sagittis leo sit met con
                                ndisse su
                                Lorem ipsum dolor sit amet, consectetur cing elit. Suspe ndisse
                                suscipit
                                sagittis leo sit met
                                condime ntum esti laiolainx bulum iscipit.
                              </div>
                            </div>
                          </div>
                          <div className="card border-top-0 border-right-0 border-left-0 border-bottom rounded-0 pb-5 mb-4 pl-7 pr-5 position-relative">
                            <div className="card-header border-0 bg-white p-0" id="heading_25">
                              <h5 className="mb-0">
                                <button className="btn btn-link fs-18 fs-md-22 font-weight-500 p-0 border-0 collapsed"
                                                            data-toggle="collapse"
                                                            data-target="#collapse_25" aria-expanded="true"
                                                            aria-controls="collapse_25">
                                  Do you store any of my information?
                                </button>
                              </h5>
                            </div>
                            <div id="collapse_25" className="collapse" aria-labelledby="heading_25"
                                                 data-parent="#accordion-style-02-1">
                              <div className="card-body px-0 pt-2 pb-1 lh-214">
                                Lorem ipsum dolor sit amet, consectetur cing elit. Suspe ndisse
                                suscipit
                                sagittis leo sit met
                                condime ntum esti laiolainx bulum iscipit sagittis leo sit met con
                                ndisse su
                                Lorem ipsum dolor sit amet, consectetur cing elit. Suspe ndisse
                                suscipit
                                sagittis leo sit met
                                condime ntum esti laiolainx bulum iscipit.
                              </div>
                            </div>
                          </div>
                          <div className="card border-top-0 border-right-0 border-left-0 border-bottom rounded-0 pb-5 mb-4 pl-7 pr-5 position-relative">
                            <div className="card-header border-0 bg-white p-0" id="heading_26">
                              <h5 className="mb-0">
                                <button className="btn btn-link fs-18 fs-md-22 font-weight-500 p-0 border-0 collapsed"
                                                            data-toggle="collapse"
                                                            data-target="#collapse_26" aria-expanded="true"
                                                            aria-controls="collapse_26">
                                  What is cloud backup?
                                </button>
                              </h5>
                            </div>
                            <div id="collapse_26" className="collapse" aria-labelledby="heading_26"
                                                 data-parent="#accordion-style-02-1">
                              <div className="card-body px-0 pt-2 pb-1 lh-214">
                                Lorem ipsum dolor sit amet, consectetur cing elit. Suspe ndisse
                                suscipit
                                sagittis leo sit met
                                condime ntum esti laiolainx bulum iscipit sagittis leo sit met con
                                ndisse su
                                Lorem ipsum dolor sit amet, consectetur cing elit. Suspe ndisse
                                suscipit
                                sagittis leo sit met
                                condime ntum esti laiolainx bulum iscipit.
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6 mb-6 mb-md-0">
                        <div className="card border-0 pl-lg-6">
                          <img src="images/faqs.jpg" alt="FAQs" className="card-img" />
                          <div className="card-img-overlay d-flex align-items-center justify-content-center">
                            <a href="http://www.youtube.com/watch?v=0O2aH4XLbto"
                                               className="d-inline-block m-auto position-relative play-animation"
                                               data-gtf-mfp="true" data-mfp-options='{"type":"iframe"}'>
                              <span className="text-white bg-primary w-78px h-78 rounded-circle d-flex align-items-center justify-content-center">
                              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-play-fill" viewBox="0 0 16 16">
  <path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z"/>
</svg>
                              </span>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>)}
              {currentTab === "6" && (<div className="tab-pane fade container tab-pane-parent" id="question2" role="tabpanel">
                <div className="card border-0 bg-transparent">
                  <div className="card-header border-0 d-block d-md-none bg-transparent px-0 py-1"
                             id="headingOther-02">
                    <h5 className="mb-0">
                      <button className="btn lh-2 fs-20 py-1 px-6 w-100 collapse-parent bg-gray-01 collapsed"
                                        data-toggle="collapse"
                                        data-target="#other-collapse-02"
                                        aria-expanded="true"
                                        aria-controls="other-collapse-02">
                        Other question
                      </button>
                    </h5>
                  </div>
                  <div id="other-collapse-02" className="collapse collapsible"
                             aria-labelledby="headingOther-02"
                             data-parent="#collapse-tabs-accordion-02">
                    <div className="row">
                      <div className="col-md-6 mb-6 mb-md-0">
                        <div id="accordion-style-02-2" className="accordion accordion-02 my-7 mt-md-0">
                          <div className="card border-top-0 border-right-0 border-left-0 border-bottom rounded-0 pb-5 mb-4 pl-7 pr-5 position-relative">
                            <div className="card-header border-0 bg-white p-0" id="heading_27">
                              <h5 className="mb-0">
                                <button className="btn btn-link fs-18 fs-md-22 font-weight-500 p-0 border-0"
                                                            data-toggle="collapse"
                                                            data-target="#collapse_27" aria-expanded="true"
                                                            aria-controls="collapse_27">
                                  What is cloud backup?
                                </button>
                              </h5>
                            </div>
                            <div id="collapse_27" className="collapse show" aria-labelledby="heading_27"
                                                 data-parent="#accordion-style-02-2">
                              <div className="card-body px-0 pt-2 pb-1 lh-214">
                                Lorem ipsum dolor sit amet, consectetur cing elit. Suspe ndisse
                                suscipit
                                sagittis
                                leo sit met
                                condime ntum esti laiolainx bulum iscipit sagittis leo sit met con
                                ndisse su
                                Lorem ipsum dolor sit amet, consectetur cing elit. Suspe ndisse
                                suscipit
                                sagittis
                                leo sit met
                                condime ntum esti laiolainx bulum iscipit.
                              </div>
                            </div>
                          </div>
                          <div className="card border-top-0 border-right-0 border-left-0 border-bottom rounded-0 pb-5 mb-4 pl-7 pr-5 position-relative">
                            <div className="card-header border-0 bg-white p-0" id="heading_28">
                              <h5 className="mb-0">
                                <button className="btn btn-link fs-18 fs-md-22 font-weight-500 p-0 border-0 collapsed"
                                                            data-toggle="collapse"
                                                            data-target="#collapse_28" aria-expanded="true"
                                                            aria-controls="collapse_28">
                                  How can we help?
                                </button>
                              </h5>
                            </div>
                            <div id="collapse_28" className="collapse" aria-labelledby="heading_28"
                                                 data-parent="#accordion-style-02-2">
                              <div className="card-body px-0 pt-2 pb-1 lh-214">
                                Lorem ipsum dolor sit amet, consectetur cing elit. Suspe ndisse
                                suscipit
                                sagittis
                                leo sit met
                                condime ntum esti laiolainx bulum iscipit sagittis leo sit met con
                                ndisse su
                                Lorem ipsum dolor sit amet, consectetur cing elit. Suspe ndisse
                                suscipit
                                sagittis
                                leo sit met
                                condime ntum esti laiolainx bulum iscipit.
                              </div>
                            </div>
                          </div>
                          <div className="card border-top-0 border-right-0 border-left-0 border-bottom rounded-0 pb-5 mb-4 pl-7 pr-5 position-relative">
                            <div className="card-header border-0 bg-white p-0" id="heading_29">
                              <h5 className="mb-0">
                                <button className="btn btn-link fs-18 fs-md-22 font-weight-500 p-0 border-0 collapsed"
                                                            data-toggle="collapse"
                                                            data-target="#collapse_29" aria-expanded="true"
                                                            aria-controls="collapse_29">
                                  Do you store any of my information?
                                </button>
                              </h5>
                            </div>
                            <div id="collapse_29" className="collapse" aria-labelledby="heading_29"
                                                 data-parent="#accordion-style-02-2">
                              <div className="card-body px-0 pt-2 pb-1 lh-214">
                                Lorem ipsum dolor sit amet, consectetur cing elit. Suspe ndisse
                                suscipit
                                sagittis
                                leo sit met
                                condime ntum esti laiolainx bulum iscipit sagittis leo sit met con
                                ndisse su
                                Lorem ipsum dolor sit amet, consectetur cing elit. Suspe ndisse
                                suscipit
                                sagittis
                                leo sit met
                                condime ntum esti laiolainx bulum iscipit.
                              </div>
                            </div>
                          </div>
                          <div className="card border-top-0 border-right-0 border-left-0 border-bottom rounded-0 pb-5 mb-4 pl-7 pr-5 position-relative">
                            <div className="card-header border-0 bg-white p-0" id="heading_30">
                              <h5 className="mb-0">
                                <button className="btn btn-link fs-18 fs-md-22 font-weight-500 p-0 border-0 collapsed"
                                                            data-toggle="collapse"
                                                            data-target="#collapse_30" aria-expanded="true"
                                                            aria-controls="collapse_30">
                                  How do I delete my account?
                                </button>
                              </h5>
                            </div>
                            <div id="collapse_30" className="collapse" aria-labelledby="heading_30"
                                                 data-parent="#accordion-style-02-2">
                              <div className="card-body px-0 pt-2 pb-1 lh-214">
                                Lorem ipsum dolor sit amet, consectetur cing elit. Suspe ndisse
                                suscipit
                                sagittis
                                leo sit met
                                condime ntum esti laiolainx bulum iscipit sagittis leo sit met con
                                ndisse su
                                Lorem ipsum dolor sit amet, consectetur cing elit. Suspe ndisse
                                suscipit
                                sagittis
                                leo sit met
                                condime ntum esti laiolainx bulum iscipit.
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6 mb-6 mb-md-0">
                        <div className="card border-0 pl-lg-6">
                          <img src={"images/faqs.jpg"} alt="FAQs" className="card-img" />
                          <div className="card-img-overlay d-flex align-items-center justify-content-center">
                            <a href="http://www.youtube.com/watch?v=0O2aH4XLbto"
                                               className="d-inline-block m-auto position-relative play-animation"
                                               data-gtf-mfp="true" data-mfp-options='{"type":"iframe"}'>
                              <span className="text-white bg-primary w-78px h-78 rounded-circle d-flex align-items-center justify-content-center">
                                <i className="fas fa-play"></i>
                              </span>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>)}
            </div>
          </div>
        </div>
      </section>
  )
}

export default Faq_sec_2