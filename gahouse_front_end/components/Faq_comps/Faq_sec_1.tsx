import React, { useState } from 'react'

function Faq_sec_1() {

  const [curentTab, setCurrentTab] = useState("1")

  const tabHandler = (value) => {
    console.log(value)
    setCurrentTab(value)
  }

  return (
    <div>
      <section className="pt-4 pt-lg-12">
        <div className="page-title mb-2">
          <div className="container">
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb pt-6 pt-lg-0 pb-0 justify-content-center">
                <li className="breadcrumb-item"><a href="#">Home</a></li>
                <li className="breadcrumb-item active" aria-current="page">Pages</li>
              </ol>
            </nav>
          </div>
        </div>
        <h2 className="fs-32 lh-16 mb-8 text-dark text-center">Frequently Asked Questions</h2>
        <div className="collapse-tabs">
          <ul className="tabs-01 nav  justify-content-center text-uppercase d-none d-md-flex" role="tablist">
            <li className="nav-item">
              <a className="nav-link active rounded-0 lh-2 fs-13 bg-white py-1 px-6 shadow-none"
                onClick={() => { tabHandler("1") }}>
                Question about selling
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link rounded-0 lh-2 fs-13 bg-white py-1 px-6 shadow-none"
                onClick={() => { tabHandler("2") }}>
                Question about renting
              </a>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link rounded-0 lh-2 fs-13 bg-white py-1 px-6 shadow-none"
                onClick={() => { tabHandler("3") }}>
                Other question
              </a>
            </li>
          </ul>
          <div className="tab-content shadow-none rounded-0 pt-8 pt-md-10 pb-10 pb-md-12 px-0 bg-gray-01">
            <div >
              {curentTab == "1" && (<div className=" fade show active container " >
                <div className="card border-0 bg-transparent">
                  <div className="card-header border-0  bg-transparent px-0 py-1"
                  >
                    <h5 className="mb-0">
                      <button className="btn lh-2 fs-18  py-1 px-6 shadow-none w-100  border"
                        data-toggle="collapse"
                        data-target="#selling-collapse-01"
                        aria-expanded="true"
                        aria-controls="selling-collapse-01">
                        Question about selling
                      </button>
                    </h5>
                  </div>
                  <div id="selling-collapse-01" className="collapse show collapsible"
                    aria-labelledby="headingSelling-01"
                    data-parent="#collapse-tabs-accordion-01">
                    <div id="accordion-style-01" className="accordion accordion-01 row my-7 my-md-0 mx-3 mx-md-0">
                      <div className="col-md-6">
                        <div className="card border-0 shadow-xxs-2 mb-6 rounded-top overflow-hidden">
                          <div className="card-header border-0 p-0 rounded-top" id="heading_1">
                            <h5 className="mb-0">
                              <button className="btn btn-link font-weight-500 pl-6 pr-7 py-3 fs-16 position-relative w-100 text-left rounded-0"
                                data-toggle="collapse" data-target="#collapse_1"
                                aria-expanded="true"
                                aria-controls="collapse_1">
                                How can we help?
                              </button>
                            </h5>
                          </div>
                          <div id="collapse_1" className="collapse show" aria-labelledby="heading_1"
                            data-parent="#accordion-style-01">
                            <div className="card-body fs-13 lh-2 pl-6 pr-7 pb-6">
                              GrandHome is intended to be highly responsive and customizable for site
                              building
                              process. Thanks to its devoted, fastidious, and compact design, Mitech
                              can
                              be
                              considered among plenty of unique themes that serve to create highly
                              responsive
                              websites.
                            </div>
                          </div>
                        </div>
                        <div className="card border-0 shadow-xxs-2 mb-6 rounded-top overflow-hidden">
                          <div className="card-header border-0 p-0" id="heading_2">
                            <h5 className="mb-0">
                              <button className="btn btn-link font-weight-500 pl-6 pr-7 py-3 fs-16 position-relative w-100 text-left rounded-0 collapsed"
                                data-toggle="collapse" data-target="#collapse_2"
                                aria-expanded="true"
                                aria-controls="collapse_2">
                                How do I delete my account?
                              </button>
                            </h5>
                          </div>
                          <div id="collapse_2" className="collapse" aria-labelledby="heading_2"
                            data-parent="#accordion-style-01">
                            <div className="card-body fs-13 lh-2 pl-6 pr-7 pb-6">
                              GrandHome is intended to be highly responsive and customizable for site
                              building
                              process. Thanks to its devoted, fastidious, and compact design, Mitech
                              can
                              be
                              considered among plenty of unique themes that serve to create highly
                              responsive
                              websites.
                            </div>
                          </div>
                        </div>
                        <div className="card border-0 shadow-xxs-2 rounded-top overflow-hidden">
                          <div className="card-header border-0 p-0" id="heading_3">
                            <h5 className="mb-0">
                              <button className="btn btn-link font-weight-500 pl-6 pr-7 py-3 fs-16 position-relative w-100 text-left rounded-0 collapsed"
                                data-toggle="collapse" data-target="#collapse_3"
                                aria-expanded="true"
                                aria-controls="collapse_3">
                                Do you store any of my information?
                              </button>
                            </h5>
                          </div>
                          <div id="collapse_3" className="collapse" aria-labelledby="heading_3"
                            data-parent="#accordion-style-01">
                            <div className="card-body fs-13 lh-2 pl-6 pr-7 pb-6">
                              GrandHome is intended to be highly responsive and customizable for site
                              building
                              process. Thanks to its devoted, fastidious, and compact design, Mitech
                              can
                              be
                              considered among plenty of unique themes that serve to create highly
                              responsive
                              websites.
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6 pt-md-0 pt-6">
                        <div className="card border-0 shadow-xxs-2 mb-6 rounded-top overflow-hidden">
                          <div className="card-header border-0 p-0 rounded-top" id="heading_4">
                            <h5 className="mb-0">
                              <button className="btn btn-link font-weight-500 pl-6 pr-7 py-3 fs-16 position-relative w-100 text-left rounded-0 collapsed"
                                data-toggle="collapse" data-target="#collapse_4"
                                aria-expanded="true"
                                aria-controls="collapse_4">
                                I’ve got a problem, how do I contact support?
                              </button>
                            </h5>
                          </div>
                          <div id="collapse_4" className="collapse" aria-labelledby="heading_4"
                            data-parent="#accordion-style-01">
                            <div className="card-body fs-13 lh-2 pl-6 pr-7 pb-6">
                              GrandHome is intended to be highly responsive and customizable for site
                              building
                              process. Thanks to its devoted, fastidious, and compact design, Mitech
                              can
                              be
                              considered among plenty of unique themes that serve to create highly
                              responsive
                              websites.
                            </div>
                          </div>
                        </div>
                        <div className="card border-0 shadow-xxs-2 mb-6 rounded-top overflow-hidden">
                          <div className="card-header border-0 p-0" id="heading_5">
                            <h5 className="mb-0">
                              <button className="btn btn-link font-weight-500 pl-6 pr-7 py-3 fs-16 position-relative w-100 text-left rounded-0 collapsed"
                                data-toggle="collapse" data-target="#collapse_5"
                                aria-expanded="true"
                                aria-controls="collapse_5">
                                How do I delete my account?
                              </button>
                            </h5>
                          </div>
                          <div id="collapse_5" className="collapse" aria-labelledby="heading_5"
                            data-parent="#accordion-style-01">
                            <div className="card-body fs-13 lh-2 pl-6 pr-7 pb-6">
                              GrandHome is intended to be highly responsive and customizable for site
                              building
                              process. Thanks to its devoted, fastidious, and compact design, Mitech
                              can
                              be
                              considered among plenty of unique themes that serve to create highly
                              responsive
                              websites.
                            </div>
                          </div>
                        </div>
                        <div className="card border-0 shadow-xxs-2 rounded-top overflow-hidden">
                          <div className="card-header border-0 p-0" id="heading_6">
                            <h5 className="mb-0">
                              <button className="btn btn-link font-weight-500 pl-6 pr-7 py-3 fs-16 position-relative w-100 text-left rounded-0 collapsed"
                                data-toggle="collapse" data-target="#collapse_6"
                                aria-expanded="true"
                                aria-controls="collapse_6">
                                What is cloud backup?
                              </button>
                            </h5>
                          </div>
                          <div id="collapse_6" className="collapse" aria-labelledby="heading_6"
                            data-parent="#accordion-style-01">
                            <div className="card-body fs-13 lh-2 pl-6 pr-7 pb-6">
                              GrandHome is intended to be highly responsive and customizable for site
                              building
                              process. Thanks to its devoted, fastidious, and compact design, Mitech
                              can
                              be
                              considered among plenty of unique themes that serve to create highly
                              responsive
                              websites.
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>)}
              {curentTab == "2" && (<div className=" fade container show active" >
                <div className="card border-0 bg-transparent">
                  <div className="card-header border-0 bg-transparent px-0 py-1"
                  >
                    <h5 className="mb-0">
                      <button className="btn lh-2 fs-18  py-1 px-6 shadow-none w-100 "
                        data-toggle="collapse"
                        data-target="#renting-collapse-01"
                        aria-expanded="true"
                        aria-controls="renting-collapse-01">
                        Question about renting
                      </button>
                    </h5>
                  </div>
                  <div id="renting-collapse-01" className=""
                    aria-labelledby="headingRenting-01"
                    data-parent="#collapse-tabs-accordion-01">
                    <div id="accordion-style-01-2" className="accordion accordion-01 row my-7 my-md-0 mx-3 mx-md-0">
                      <div className="col-md-6">
                        <div className="card border-0 shadow-xxs-2 mb-6 rounded-top overflow-hidden">
                          <div className="card-header border-0 p-0 rounded-top" id="heading_10">
                            <h5 className="mb-0">
                              <button className="btn btn-link font-weight-500 pl-6 pr-7 py-3 fs-16 position-relative w-100 text-left rounded-0"
                                data-toggle="collapse" data-target="#collapse_10"
                                aria-expanded="true"
                                aria-controls="collapse_10">
                                I’ve got a problem, how do I contact support?
                              </button>
                            </h5>
                          </div>
                          <div id="collapse_10" className="collapse show" aria-labelledby="heading_10"
                            data-parent="#accordion-style-01-2">
                            <div className="card-body fs-13 lh-2 pl-6 pr-7 pb-6">
                              GrandHome is intended to be highly responsive and customizable for site
                              building
                              process. Thanks to its devoted, fastidious, and compact design, Mitech
                              can be
                              considered among plenty of unique themes that serve to create highly
                              responsive
                              websites.
                            </div>
                          </div>
                        </div>
                        <div className="card border-0 shadow-xxs-2 mb-6 rounded-top overflow-hidden">
                          <div className="card-header border-0 p-0" id="heading_11">
                            <h5 className="mb-0">
                              <button className="btn btn-link font-weight-500 pl-6 pr-7 py-3 fs-16 position-relative w-100 text-left rounded-0 collapsed"
                                data-toggle="collapse" data-target="#collapse_11"
                                aria-expanded="true"
                                aria-controls="collapse_11">
                                How do I delete my account?
                              </button>
                            </h5>
                          </div>
                          <div id="collapse_11" className="collapse" aria-labelledby="heading_11"
                            data-parent="#accordion-style-01-2">
                            <div className="card-body fs-13 lh-2 pl-6 pr-7 pb-6">
                              GrandHome is intended to be highly responsive and customizable for site
                              building
                              process. Thanks to its devoted, fastidious, and compact design, Mitech
                              can be
                              considered among plenty of unique themes that serve to create highly
                              responsive
                              websites.
                            </div>
                          </div>
                        </div>
                        <div className="card border-0 shadow-xxs-2 rounded-top overflow-hidden">
                          <div className="card-header border-0 p-0" id="heading_12">
                            <h5 className="mb-0">
                              <button className="btn btn-link font-weight-500 pl-6 pr-7 py-3 fs-16 position-relative w-100 text-left rounded-0 collapsed"
                                data-toggle="collapse" data-target="#collapse_12"
                                aria-expanded="true"
                                aria-controls="collapse_12">
                                What is cloud backup?
                              </button>
                            </h5>
                          </div>
                          <div id="collapse_12" className="collapse" aria-labelledby="heading_12"
                            data-parent="#accordion-style-01-2">
                            <div className="card-body fs-13 lh-2 pl-6 pr-7 pb-6">
                              GrandHome is intended to be highly responsive and customizable for site
                              building
                              process. Thanks to its devoted, fastidious, and compact design, Mitech
                              can be
                              considered among plenty of unique themes that serve to create highly
                              responsive
                              websites.
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6 pt-md-0 pt-6">
                        <div className="card border-0 shadow-xxs-2 mb-6 rounded-top overflow-hidden">
                          <div className="card-header border-0 p-0 rounded-top" id="heading_7">
                            <h5 className="mb-0">
                              <button className="btn btn-link font-weight-500 pl-6 pr-7 py-3 fs-16 position-relative w-100 text-left rounded-0 collapsed"
                                data-toggle="collapse" data-target="#collapse_7"
                                aria-expanded="true"
                                aria-controls="collapse_7">
                                How can we help?
                              </button>
                            </h5>
                          </div>
                          <div id="collapse_7" className="collapse" aria-labelledby="heading_7"
                            data-parent="#accordion-style-01-2">
                            <div className="card-body fs-13 lh-2 pl-6 pr-7 pb-6">
                              GrandHome is intended to be highly responsive and customizable for site
                              building
                              process. Thanks to its devoted, fastidious, and compact design, Mitech
                              can be
                              considered among plenty of unique themes that serve to create highly
                              responsive
                              websites.
                            </div>
                          </div>
                        </div>
                        <div className="card border-0 shadow-xxs-2 mb-6 rounded-top overflow-hidden">
                          <div className="card-header border-0 p-0" id="heading_8">
                            <h5 className="mb-0">
                              <button className="btn btn-link font-weight-500 pl-6 pr-7 py-3 fs-16 position-relative w-100 text-left rounded-0 collapsed"
                                data-toggle="collapse" data-target="#collapse_8"
                                aria-expanded="true"
                                aria-controls="collapse_8">
                                How do I delete my account?
                              </button>
                            </h5>
                          </div>
                          <div id="collapse_8" className="collapse" aria-labelledby="heading_8"
                            data-parent="#accordion-style-01-2">
                            <div className="card-body fs-13 lh-2 pl-6 pr-7 pb-6">
                              GrandHome is intended to be highly responsive and customizable for site
                              building
                              process. Thanks to its devoted, fastidious, and compact design, Mitech
                              can be
                              considered among plenty of unique themes that serve to create highly
                              responsive
                              websites.
                            </div>
                          </div>
                        </div>
                        <div className="card border-0 shadow-xxs-2 rounded-top overflow-hidden">
                          <div className="card-header border-0 p-0" id="heading_9">
                            <h5 className="mb-0">
                              <button className="btn btn-link font-weight-500 pl-6 pr-7 py-3 fs-16 position-relative w-100 text-left rounded-0 collapsed"
                                data-toggle="collapse" data-target="#collapse_9"
                                aria-expanded="true"
                                aria-controls="collapse_9">
                                Do you store any of my information?
                              </button>
                            </h5>
                          </div>
                          <div id="collapse_9" className="collapse" aria-labelledby="heading_9"
                            data-parent="#accordion-style-01-2">
                            <div className="card-body fs-13 lh-2 pl-6 pr-7 pb-6">
                              GrandHome is intended to be highly responsive and customizable for site
                              building
                              process. Thanks to its devoted, fastidious, and compact design, Mitech
                              can be
                              considered among plenty of unique themes that serve to create highly
                              responsive
                              websites.
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>)}
              {curentTab == "3" && (<div className=" fade container show active" >
                <div className="card border-0 bg-transparent">
                  <div className="card-header border-0 bg-transparent px-0 py-1"
                    id="headingOther-01">
                    <h5 className="mb-0">
                      <button className="btn lh-2 fs-18 py-1 px-6 shadow-none w-100 collapse-parent border collapsed"
                        data-toggle="collapse"
                        data-target="#other-collapse-01"
                        aria-expanded="true"
                        aria-controls="other-collapse-01">
                        Other question
                      </button>
                    </h5>
                  </div>
                  <div id="other-collapse-01" className=""
                    aria-labelledby="headingOther-01"
                    data-parent="#collapse-tabs-accordion-01">
                    <div id="accordion-style-01-3" className="accordion accordion-01 row my-7 my-md-0 mx-3 mx-md-0">
                      <div className="col-md-6">
                        <div className="card border-0 shadow-xxs-2 mb-6 rounded-top overflow-hidden">
                          <div className="card-header border-0 p-0" id="heading_14">
                            <h5 className="mb-0">
                              <button className="btn btn-link font-weight-500 pl-6 pr-7 py-3 fs-16 position-relative w-100 text-left rounded-0"
                                data-toggle="collapse" data-target="#collapse_14"
                                aria-expanded="true"
                                aria-controls="collapse_14">
                                How do I delete my account?
                              </button>
                            </h5>
                          </div>
                          <div id="collapse_14" className="collapse show" aria-labelledby="heading_14"
                            data-parent="#accordion-style-01-3">
                            <div className="card-body fs-13 lh-2 pl-6 pr-7 pb-6">
                              GrandHome is intended to be highly responsive and customizable for site
                              building
                              process. Thanks to its devoted, fastidious, and compact design, Mitech
                              can be
                              considered among plenty of unique themes that serve to create highly
                              responsive
                              websites.
                            </div>
                          </div>
                        </div>
                        <div className="card border-0 shadow-xxs-2 mb-6 rounded-top overflow-hidden">
                          <div className="card-header border-0 p-0 rounded-top" id="heading_13">
                            <h5 className="mb-0">
                              <button className="btn btn-link font-weight-500 pl-6 pr-7 py-3 fs-16 position-relative w-100 text-left rounded-0 collapsed"
                                data-toggle="collapse" data-target="#collapse_13"
                                aria-expanded="true"
                                aria-controls="collapse_13">
                                How can we help?
                              </button>
                            </h5>
                          </div>
                          <div id="collapse_13" className="collapse" aria-labelledby="heading_13"
                            data-parent="#accordion-style-01-3">
                            <div className="card-body fs-13 lh-2 pl-6 pr-7 pb-6">
                              GrandHome is intended to be highly responsive and customizable for site
                              building
                              process. Thanks to its devoted, fastidious, and compact design, Mitech
                              can be
                              considered among plenty of unique themes that serve to create highly
                              responsive
                              websites.
                            </div>
                          </div>
                        </div>
                        <div className="card border-0 shadow-xxs-2 rounded-top overflow-hidden">
                          <div className="card-header border-0 p-0" id="heading_15">
                            <h5 className="mb-0">
                              <button className="btn btn-link font-weight-500 pl-6 pr-7 py-3 fs-16 position-relative w-100 text-left rounded-0 collapsed"
                                data-toggle="collapse" data-target="#collapse_15"
                                aria-expanded="true"
                                aria-controls="collapse_15">
                                Do you store any of my information?
                              </button>
                            </h5>
                          </div>
                          <div id="collapse_15" className="collapse" aria-labelledby="heading_15"
                            data-parent="#accordion-style-01-3">
                            <div className="card-body fs-13 lh-2 pl-6 pr-7 pb-6">
                              GrandHome is intended to be highly responsive and customizable for site
                              building
                              process. Thanks to its devoted, fastidious, and compact design, Mitech
                              can be
                              considered among plenty of unique themes that serve to create highly
                              responsive
                              websites.
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6 pt-md-0 pt-6">
                        <div className="card border-0 shadow-xxs-2 mb-6 rounded-top overflow-hidden">
                          <div className="card-header border-0 p-0 rounded-top" id="heading_16">
                            <h5 className="mb-0">
                              <button className="btn btn-link font-weight-500 pl-6 pr-7 py-3 fs-16 position-relative w-100 text-left rounded-0 collapsed"
                                data-toggle="collapse" data-target="#collapse_16"
                                aria-expanded="true"
                                aria-controls="collapse_16">
                                I’ve got a problem, how do I contact support?
                              </button>
                            </h5>
                          </div>
                          <div id="collapse_16" className="collapse" aria-labelledby="heading_16"
                            data-parent="#accordion-style-01-3">
                            <div className="card-body fs-13 lh-2 pl-6 pr-7 pb-6">
                              GrandHome is intended to be highly responsive and customizable for site
                              building
                              process. Thanks to its devoted, fastidious, and compact design, Mitech
                              can be
                              considered among plenty of unique themes that serve to create highly
                              responsive
                              websites.
                            </div>
                          </div>
                        </div>
                        <div className="card border-0 shadow-xxs-2 mb-6 rounded-top overflow-hidden">
                          <div className="card-header border-0 p-0" id="heading_17">
                            <h5 className="mb-0">
                              <button className="btn btn-link font-weight-500 pl-6 pr-7 py-3 fs-16 position-relative w-100 text-left rounded-0 collapsed"
                                data-toggle="collapse" data-target="#collapse_17"
                                aria-expanded="true"
                                aria-controls="collapse_17">
                                How do I delete my account?
                              </button>
                            </h5>
                          </div>
                          <div id="collapse_17" className="collapse" aria-labelledby="heading_17"
                            data-parent="#accordion-style-01-3">
                            <div className="card-body fs-13 lh-2 pl-6 pr-7 pb-6">
                              GrandHome is intended to be highly responsive and customizable for site
                              building
                              process. Thanks to its devoted, fastidious, and compact design, Mitech
                              can be
                              considered among plenty of unique themes that serve to create highly
                              responsive
                              websites.
                            </div>
                          </div>
                        </div>
                        <div className="card border-0 shadow-xxs-2 rounded-top overflow-hidden">
                          <div className="card-header border-0 p-0" id="heading_18">
                            <h5 className="mb-0">
                              <button className="btn btn-link font-weight-500 pl-6 pr-7 py-3 fs-16 position-relative w-100 text-left rounded-0 collapsed"
                                data-toggle="collapse" data-target="#collapse_18"
                                aria-expanded="true"
                                aria-controls="collapse_18">
                                What is cloud backup?
                              </button>
                            </h5>
                          </div>
                          <div id="collapse_18" className="collapse" aria-labelledby="heading_18"
                            data-parent="#accordion-style-01-3">
                            <div className="card-body fs-13 lh-2 pl-6 pr-7 pb-6">
                              GrandHome is intended to be highly responsive and customizable for site
                              building
                              process. Thanks to its devoted, fastidious, and compact design, Mitech
                              can be
                              considered among plenty of unique themes that serve to create highly
                              responsive
                              websites.
                            </div>
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
    </div>
  )
}

export default Faq_sec_1