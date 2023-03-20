import React from 'react'
import CarouselCard from '../Property_Page/Section2/CarouselCard'

function Single_property_main() {
  return (
    <main id="content">
      <section className="bg-secondary py-6 py-lg-0">
        <div className="container">
          <form className="search-form d-none d-lg-block">
            <div className="row align-items-center">
              <div className="col-lg-5">
                <div className="row">
                  <div className="col-md-6">
                    <label className="text-uppercase font-weight-500 opacity-7 text-white letter-spacing-093 mb-1">Home
                      Type</label>
                    <select className="form-control selectpicker bg-transparent border-bottom rounded-0 border-input-opacity-02" name="type"
                      title="Select" data-style="p-0 h-24 lh-17 text-white">
                      <option>Condominium</option>
                      <option>Single-Family Home</option>
                      <option>Townhouse</option>
                      <option>Multi-Family Home</option>
                    </select>
                  </div>
                  <div className="col-md-6 pl-md-3 pt-md-0 pt-6">
                    <label className="text-uppercase font-weight-500 opacity-7 text-white letter-spacing-093 mb-1">Location</label>
                    <select className="form-control selectpicker bg-transparent border-bottom rounded-0 border-input-opacity-02" name="location"
                      title="Select" data-style="p-0 h-24 lh-17 text-white">
                      <option>Austin</option>
                      <option>Boston</option>
                      <option>Chicago</option>
                      <option>Denver</option>
                      <option>Los Angeles</option>
                      <option>New York</option>
                      <option>San Francisco</option>
                    </select>
                  </div>
                </div>
              </div>
              <div className="col-12 col-lg-5 pt-lg-0 pt-6">
                <label className="text-uppercase font-weight-500 opacity-7 text-white letter-spacing-093">Search</label>
                <div className="position-relative">
                  <input type="text" name="search"
                    className="form-control bg-transparent shadow-none border-top-0 border-right-0 border-left-0 border-bottom rounded-0 h-24 lh-17 p-0 pr-md-5 text-white placeholder-light font-weight-500 border-input-opacity-02"
                    placeholder="Enter an address, neighbourhood..." />
                  <i className="far fa-search position-absolute pos-fixed-right-center pr-0 fs-18 text-white pb-2 d-none d-md-block"></i>
                </div>
              </div>
              <div className="col-12 col-lg-2 pt-lg-0 pt-7">
                <button type="submit"
                  className="btn bg-white-opacity-01 bg-white-hover-opacity-03 h-lg-100 w-100 shadow-none text-white rounded-0 fs-16 font-weight-600">
                  Search
                </button>
              </div>
            </div>
          </form>
          <form className="property-search property-search-mobile d-lg-none">
            <div className="row align-items-lg-center" id="accordion-mobile">
              <div className="col-12">
                <div className="form-group mb-0 position-relative">
                  <a href="#advanced-search-filters-mobile"
                    className="icon-primary btn advanced-search shadow-none pr-3 pl-0 d-flex align-items-center position-absolute pos-fixed-left-center py-0 h-100 border-right collapsed"
                    data-toggle="collapse" data-target="#advanced-search-filters-mobile"
                    aria-expanded="true"
                    aria-controls="advanced-search-filters-mobile">
                  </a>
                  <input type="text"
                    className="form-control form-control-lg border-0 shadow-none pr-9 pl-11 bg-white placeholder-muted"
                    name="key-word"
                    placeholder="Search..." />
                  <button type="submit"
                    className="btn position-absolute pos-fixed-right-center p-0 text-heading fs-20 px-3 shadow-none h-100 border-left bg-white">
                    <i className="far fa-search"></i>
                  </button>
                </div>
              </div>
              <div id="advanced-search-filters-mobile" className="col-12 pt-2 collapse"
                data-parent="#accordion-mobile">
                <div className="row mx-n2">
                  <div className="col-sm-6 pt-4 px-2">
                    <select className="form-control border-0 shadow-none form-control-lg selectpicker bg-white"
                      title="Home Types" data-style="btn-lg py-2 h-52 bg-white" name="type">
                      <option>Condominium</option>
                      <option>Single-Family Home</option>
                      <option>Townhouse</option>
                      <option>Multi-Family Home</option>
                    </select>
                  </div>
                  <div className="col-sm-6 pt-4 px-2">
                    <select className="form-control border-0 shadow-none form-control-lg selectpicker bg-white"
                      name="bedroom"
                      title="Location" data-style="btn-lg py-2 h-52 bg-white">
                      <option>Austin</option>
                      <option>Boston</option>
                      <option>Chicago</option>
                      <option>Denver</option>
                      <option>Los Angeles</option>
                      <option>New York</option>
                      <option>San Francisco</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </section>
      <section className="bg-gray-01 py-8 py-lg-0">
        <div className="container">
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb py-3">
              <li className="breadcrumb-item letter-spacing-1">
                <a href=".">Home</a>
              </li>
              <li className="breadcrumb-item letter-spacing-1">
                <a href="listing-grid-with-left-filter.html">Listing</a>
              </li>
              <li className="breadcrumb-item letter-spacing-1 active">Villa on Hollywood Boulevard</li>
            </ol>
          </nav>
        </div>
      </section>
      <div className="primary-content bg-gray-01 pb-12">
        <div className="container">
          <div className="row">
            <article className="col-lg-8">
              <section>
                <div className="galleries position-relative">
                  <div className="position-absolute pos-fixed-top-right z-index-3">
                    <ul className="list-inline pt-4 pr-5">
                      <li className="list-inline-item mr-2">
                        <a href="#" data-toggle="tooltip" title="Favourite"
                          className="d-flex align-items-center justify-content-center w-40px h-40 bg-white text-heading bg-hover-primary hover-white rounded-circle">
                          <i className="far fa-heart"></i></a>
                      </li>
                      <li className="list-inline-item mr-2">
                        <button type="button"
                          className="btn btn-white p-0 d-flex align-items-center justify-content-center w-40px h-40 text-heading bg-hover-primary hover-white rounded-circle border-0 shadow-none"
                          data-container="body"
                          data-toggle="popover" data-placement="top" data-html="true" data-content=' <ul className="list-inline mb-0">
                          <li className="list-inline-item">
                            <a href="#" className="text-muted fs-15 hover-dark lh-1 px-2"><i
	                                                        className="fab fa-twitter"></i></a>
                          </li>
                          <li className="list-inline-item ">
                            <a href="#" className="text-muted fs-15 hover-dark lh-1 px-2"><i
	                                                        className="fab fa-facebook-f"></i></a>
                          </li>
                          <li className="list-inline-item">
                            <a href="#" className="text-muted fs-15 hover-dark lh-1 px-2"><i
	                                                        className="fab fa-instagram"></i></a>
                          </li>
                          <li className="list-inline-item">
                            <a href="#" className="text-muted fs-15 hover-dark lh-1 px-2"><i
	                                                        className="fab fa-youtube"></i></a>
                          </li>
                        </ul>
                        '>
                          <i className="far fa-share-alt"></i>
                        </button>
                      </li>
                      <li className="list-inline-item">
                        <a href="#" data-toggle="tooltip" title="Print"
                          className="d-flex align-items-center justify-content-center w-40px h-40 bg-white text-heading bg-hover-primary hover-white rounded-circle">
                          <i className="far fa-print"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                  {/* <CarouselCard /> */}
                  <div className="slick-slider slider-for-01 arrow-haft-inner mx-0"
                    data-slick-options='{"slidesToShow": 1, "autoplay":false,"dots":false,"arrows":false,"asNavFor": ".slider-nav-01"}'>
                    <div className="box px-0">
                      <div className="item item-size-3-2">
                        <div className="card p-0 hover-change-image">
                          <a href="images/single-property-lg-1.jpg" className="card-img"
                            data-gtf-mfp="true"
                            data-gallery-id="04"
                            style={{ backgroundImage: "url('images/single-property-lg-1.jpg')" }}>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="slick-slider slider-nav-01 mt-4 mx-n1 arrow-haft-inner"
                    data-slick-options='{"slidesToShow": 5, "autoplay":false,"dots":false,"arrows":false,"asNavFor": ".slider-for-01","focusOnSelect": true,"responsive":[{"breakpoint": 768,"settings": {"slidesToShow": 4}},{"breakpoint": 576,"settings": {"slidesToShow": 2}}]}'>
                    <div className="box pb-6 px-0">
                      <div className="bg-hover-white p-1 shadow-hover-xs-3 h-100 rounded-lg">
                        <img src="images/single-property-sm-7.jpg" alt="Gallery 01"
                          className="h-100 w-100 rounded-lg" />
                      </div>
                    </div>


                  </div>
                </div>
              </section>
              <section className="pb-8 px-6 pt-5 bg-white rounded-lg">
                <h4 className="fs-22 text-heading mb-3">Description</h4>
                <p className="mb-0 lh-214">Massa tempor nec feugiat nisl pretium. Egestas fringilla phasellus faucibus
                  scelerisque eleifend donec.
                  Porta nibh venenatis cras sed felis eget velit aliquet. Neque volutpat ac tincidunt vitae semper
                  quis lectus. Turpis in eu mi bibendum neque
                  egestas congue quisque. Sed elementum tempus egestas sed sed risus pretium quam. Dignissim sodales
                  ut eu sem. Nibh mauris cursus mattis molestie a
                  iaculis at erat pellentesque. Id interdum velit laoreet id donec ultrices tincidunt.</p>
              </section>
              <section className="mt-2 pb-3 px-6 pt-5 bg-white rounded-lg">
                <h4 className="fs-22 text-heading mb-6">Facts and Features</h4>
                <div className="row">
                  <div className="col-lg-3 col-sm-4 mb-6">
                    <div className="media">
                      <div className="p-2 shadow-xxs-1 rounded-lg mr-2">
                        <svg className="icon icon-family fs-32 text-primary"><use xlinkHref="#icon-family"></use></svg>
                      </div>
                      <div className="media-body">
                        <h5 className="my-1 fs-14 text-uppercase letter-spacing-093 font-weight-normal">Type</h5>
                        <p className="mb-0 fs-13 font-weight-bold text-heading">Single Family</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 col-sm-4 mb-6">
                    <div className="media">
                      <div className="p-2 shadow-xxs-1 rounded-lg mr-2">
                        <svg className="icon icon-year fs-32 text-primary"><use xlinkHref="#icon-year"></use></svg>
                      </div>
                      <div className="media-body">
                        <h5 className="my-1 fs-14 text-uppercase letter-spacing-093 font-weight-normal">year built</h5>
                        <p className="mb-0 fs-13 font-weight-bold text-heading">2020</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 col-sm-4 mb-6">
                    <div className="media">
                      <div className="p-2 shadow-xxs-1 rounded-lg mr-2">
                        <svg className="icon icon-heating fs-32 text-primary"><use xlinkHref="#icon-heating"></use></svg>
                      </div>
                      <div className="media-body">
                        <h5 className="my-1 fs-14 text-uppercase letter-spacing-093 font-weight-normal">heating</h5>
                        <p className="mb-0 fs-13 font-weight-bold text-heading">Radiant</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 col-sm-4 mb-6">
                    <div className="media">
                      <div className="p-2 shadow-xxs-1 rounded-lg mr-2">
                        <svg className="icon icon-price fs-32 text-primary"><use xlinkHref="#icon-price"></use></svg>
                      </div>
                      <div className="media-body">
                        <h5 className="my-1 fs-14 text-uppercase letter-spacing-093 font-weight-normal">SQFT</h5>
                        <p className="mb-0 fs-13 font-weight-bold text-heading">979.0</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 col-sm-4 mb-6">
                    <div className="media">
                      <div className="p-2 shadow-xxs-1 rounded-lg mr-2">
                        <svg className="icon icon-bedroom fs-32 text-primary"><use xlinkHref="#icon-bedroom"></use></svg>
                      </div>
                      <div className="media-body">
                        <h5 className="my-1 fs-14 text-uppercase letter-spacing-093 font-weight-normal">Bedrooms</h5>
                        <p className="mb-0 fs-13 font-weight-bold text-heading">3</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 col-sm-4 mb-6">
                    <div className="media">
                      <div className="p-2 shadow-xxs-1 rounded-lg mr-2">
                        <svg className="icon icon-sofa fs-32 text-primary"><use xlinkHref="#icon-sofa"></use></svg>
                      </div>
                      <div className="media-body">
                        <h5 className="my-1 fs-14 text-uppercase letter-spacing-093 font-weight-normal">bathrooms</h5>
                        <p className="mb-0 fs-13 font-weight-bold text-heading">2</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 col-sm-4 mb-6">
                    <div className="media">
                      <div className="p-2 shadow-xxs-1 rounded-lg mr-2">
                        <svg className="icon icon-Garage fs-32 text-primary"><use xlinkHref="#icon-Garage"></use></svg>
                      </div>
                      <div className="media-body">
                        <h5 className="my-1 fs-14 text-uppercase letter-spacing-093 font-weight-normal">GARAGE</h5>
                        <p className="mb-0 fs-13 font-weight-bold text-heading">1</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 col-sm-4 mb-6">
                    <div className="media">
                      <div className="p-2 shadow-xxs-1 rounded-lg mr-2">
                        <svg className="icon icon-status fs-32 text-primary"><use xlinkHref="#icon-status"></use></svg>
                      </div>
                      <div className="media-body">
                        <h5 className="my-1 fs-14 text-uppercase letter-spacing-093 font-weight-normal">Status</h5>
                        <p className="mb-0 fs-13 font-weight-bold text-heading">Active</p>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
              <section className="mt-2 pb-6 px-6 pt-5 bg-white rounded-lg">
                <h4 className="fs-22 text-heading mb-4">Additional Details</h4>
                <div className="row">
                  <dl className="col-sm-6 mb-0 d-flex">
                    <dt className="w-110px fs-14 font-weight-500 text-heading pr-2">Property ID</dt>
                    <dd>AD-2910</dd>
                  </dl>
                  <dl className="col-sm-6 mb-0 d-flex">
                    <dt className="w-110px fs-14 font-weight-500 text-heading pr-2">Price</dt>
                    <dd>$890.000</dd>
                  </dl>
                  <dl className="col-sm-6 mb-0 d-flex">
                    <dt className="w-110px fs-14 font-weight-500 text-heading pr-2">Property type</dt>
                    <dd>Apartment, bar, cafe, villa</dd>
                  </dl>
                  <dl className="col-sm-6 mb-0 d-flex">
                    <dt className="w-110px fs-14 font-weight-500 text-heading pr-2">Property status</dt>
                    <dd>For Sale</dd>
                  </dl>
                  <dl className="col-sm-6 mb-0 d-flex">
                    <dt className="w-110px fs-14 font-weight-500 text-heading pr-2">Rooms</dt>
                    <dd>4</dd>
                  </dl>
                  <dl className="col-sm-6 mb-0 d-flex">
                    <dt className="w-110px fs-14 font-weight-500 text-heading pr-2">Bedrooms</dt>
                    <dd>3</dd>
                  </dl>
                  <dl className="col-sm-6 mb-0 d-flex">
                    <dt className="w-110px fs-14 font-weight-500 text-heading pr-2">Size</dt>
                    <dd>900SqFt</dd>
                  </dl>
                  <dl className="col-sm-6 mb-0 d-flex">
                    <dt className="w-110px fs-14 font-weight-500 text-heading pr-2">Bathrooms</dt>
                    <dd>2</dd>
                  </dl>
                  <dl className="col-sm-6 mb-0 d-flex">
                    <dt className="w-110px fs-14 font-weight-500 text-heading pr-2">Garage</dt>
                    <dd>1</dd>
                  </dl>
                  <dl className="col-sm-6 mb-0 d-flex">
                    <dt className="w-110px fs-14 font-weight-500 text-heading pr-2">Bathrooms</dt>
                    <dd>2000 SqFt</dd>
                  </dl>
                  <dl className="col-sm-6 mb-0 d-flex">
                    <dt className="w-110px fs-14 font-weight-500 text-heading pr-2">Garage size</dt>
                    <dd>50 SqFt</dd>
                  </dl>
                  <dl className="col-sm-6 mb-0 d-flex">
                    <dt className="w-110px fs-14 font-weight-500 text-heading pr-2">Year build</dt>
                    <dd>2020</dd>
                  </dl>
                  <dl className="offset-sm-6 col-sm-6 mb-0 d-flex">
                    <dt className="w-110px fs-14 font-weight-500 text-heading pr-2">Label</dt>
                    <dd>Bestseller</dd>
                  </dl>
                </div>
              </section>
              <section className="mt-2 pb-7 px-6 pt-5 bg-white rounded-lg">
                <h4 className="fs-22 text-heading mb-4">Offices Amenities</h4>
                <ul className="list-unstyled mb-0 row no-gutters">
                  <li className="col-sm-3 col-6 mb-2"><i className="far fa-check mr-2 text-primary"></i>Balcony</li>
                  <li className="col-sm-3 col-6 mb-2"><i className="far fa-check mr-2 text-primary"></i>Fireplace</li>
                  <li className="col-sm-3 col-6 mb-2"><i className="far fa-check mr-2 text-primary"></i>Balcony</li>
                  <li className="col-sm-3 col-6 mb-2"><i className="far fa-check mr-2 text-primary"></i>Fireplace</li>
                  <li className="col-sm-3 col-6 mb-2"><i className="far fa-check mr-2 text-primary"></i>Basement</li>
                  <li className="col-sm-3 col-6 mb-2"><i className="far fa-check mr-2 text-primary"></i>Cooling</li>
                  <li className="col-sm-3 col-6 mb-2"><i className="far fa-check mr-2 text-primary"></i>Basement</li>
                  <li className="col-sm-3 col-6 mb-2"><i className="far fa-check mr-2 text-primary"></i>Cooling</li>
                  <li className="col-sm-3 col-6 mb-2"><i className="far fa-check mr-2 text-primary"></i>Dining room</li>
                  <li className="col-sm-3 col-6 mb-2"><i className="far fa-check mr-2 text-primary"></i>Dishwasher</li>
                  <li className="col-sm-3 col-6 mb-2"><i className="far fa-check mr-2 text-primary"></i>Dining room</li>
                  <li className="col-sm-3 col-6 mb-2"><i className="far fa-check mr-2 text-primary"></i>Dishwasher</li>
                </ul>
              </section>
              <section className="mt-2 pb-7 px-6 pt-6 bg-white rounded-lg">
                <h4 className="fs-22 text-heading mb-6">Floor Plans</h4>
                <div className="accordion accordion-03 mb-3" id="accordion-01">
                  <div className="card border-0 shadow-xxs-5 bg-gray-01">
                    <div className="card-header bg-gray-01 border-gray border-0 p-0" id="floor-plans-01">
                      <div className="heading bg-gray-01 d-flex justify-content-between align-items-center px-6" data-toggle="collapse" data-target="#collapse-01" aria-expanded="true" aria-controls="collapse-01" role="button">
                        <h2 className="mb-0 fs-16 text-heading font-weight-500 py-4 lh-13">First Floor</h2>
                        <ul className="list-inline mb-0 d-none d-sm-block pr-2">
                          <li className=" list-inline-item text-muted mr-4">Beds : <span className="font-weight-500 text-heading">2</span></li>
                          <li className=" list-inline-item text-muted mr-4">Bath : <span className="font-weight-500 text-heading">2</span></li>
                          <li className=" list-inline-item text-muted mr-4">Sqft : <span className="font-weight-500 text-heading">900</span></li>
                        </ul>
                      </div>
                    </div>
                    <div id="collapse-01" className="collapse show mx-6 mb-6 bg-white" aria-labelledby="floor-plans-01" data-parent="#accordion-01">
                      <div className="card-body card-body col-sm-6 offset-sm-3 mb-3">
                        <img src="images/single-detail-property-01.jpg" className="card-img" alt="Floor Plans" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="accordion accordion-03 mb-3" id="accordion-02">
                  <div className="card border-0 shadow-xxs-5 bg-gray-01">
                    <div className="card-header bg-gray-01 border-gray border-0 p-0" id="floor-plans-02">
                      <div className="heading bg-gray-01 d-flex justify-content-between align-items-center px-6" data-toggle="collapse" data-target="#collapse-02" aria-expanded="true" aria-controls="collapse-02" role="button">
                        <h2 className="mb-0 fs-16 text-heading font-weight-500 py-4 lh-13">Second Floor</h2>
                        <ul className="list-inline mb-0 d-none d-sm-block pr-2">
                          <li className=" list-inline-item text-muted mr-4">Beds : <span className="font-weight-500 text-heading">2</span></li>
                          <li className=" list-inline-item text-muted mr-4">Bath : <span className="font-weight-500 text-heading">2</span></li>
                          <li className=" list-inline-item text-muted mr-4">Sqft : <span className="font-weight-500 text-heading">900</span></li>
                        </ul>
                      </div>
                    </div>
                    <div id="collapse-02" className="collapse  mx-6 mb-6 bg-white" aria-labelledby="floor-plans-02" data-parent="#accordion-02">
                      <div className="card-body card-body col-sm-6 offset-sm-3 mb-3">
                        <img src="images/single-detail-property-01.jpg" className="card-img" alt="Floor Plans" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="accordion accordion-03 mb-3" id="accordion-03">
                  <div className="card border-0 shadow-xxs-5 bg-gray-01">
                    <div className="card-header bg-gray-01 border-gray border-0 p-0" id="floor-plans-03">
                      <div className="heading bg-gray-01 d-flex justify-content-between align-items-center px-6" data-toggle="collapse" data-target="#collapse-03" aria-expanded="true" aria-controls="collapse-03" role="button">
                        <h2 className="mb-0 fs-16 text-heading font-weight-500 py-4 lh-13">Third Floor</h2>
                        <ul className="list-inline mb-0 d-none d-sm-block pr-2">
                          <li className=" list-inline-item text-muted mr-4">Beds : <span className="font-weight-500 text-heading">2</span></li>
                          <li className=" list-inline-item text-muted mr-4">Bath : <span className="font-weight-500 text-heading">2</span></li>
                          <li className=" list-inline-item text-muted mr-4">Sqft : <span className="font-weight-500 text-heading">900</span></li>
                        </ul>
                      </div>
                    </div>
                    <div id="collapse-03" className="collapse  mx-6 mb-6 bg-white" aria-labelledby="floor-plans-03" data-parent="#accordion-03">
                      <div className="card-body card-body col-sm-6 offset-sm-3 mb-3">
                        <img src="images/single-detail-property-01.jpg" className="card-img" alt="Floor Plans" />
                      </div>
                    </div>
                  </div>
                </div>
              </section>
              <section className="mt-2 pb-7 px-6 pt-6 bg-white rounded-lg">
                <h4 className="fs-22 text-heading lh-15 mb-5">Rating & Reviews</h4>
                <div className="card border-0">
                  <div className="card-body p-0">
                    <div className="row">
                      <div className="col-sm-6 mb-6 mb-sm-0">
                        <div className="bg-gray-01 rounded-lg pt-2 px-6 pb-6">
                          <h5 className="fs-16 lh-2 text-heading mb-6">
                            Avarage User Rating
                          </h5>
                          <p className="fs-40 text-heading font-weight-bold mb-6 lh-1">4.6 <span className="fs-18 text-gray-light font-weight-normal">/5</span></p>
                          <ul className="list-inline">
                            <li className="list-inline-item bg-warning text-white w-46px h-46 rounded-lg d-inline-flex align-items-center justify-content-center fs-18 mb-1">
                              <i className="fas fa-star"></i>
                            </li>
                            <li className="list-inline-item bg-warning text-white w-46px h-46 rounded-lg d-inline-flex align-items-center justify-content-center fs-18 mb-1">
                              <i className="fas fa-star"></i>
                            </li>
                            <li className="list-inline-item bg-warning text-white w-46px h-46 rounded-lg d-inline-flex align-items-center justify-content-center fs-18 mb-1">
                              <i className="fas fa-star"></i>
                            </li>
                            <li className="list-inline-item bg-warning text-white w-46px h-46 rounded-lg d-inline-flex align-items-center justify-content-center fs-18 mb-1">
                              <i className="fas fa-star"></i>
                            </li>
                            <li className="list-inline-item bg-gray-04 text-white w-46px h-46 rounded-lg d-inline-flex align-items-center justify-content-center fs-18 mb-1">
                              <i className="fas fa-star"></i>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="col-sm-6 pt-3">
                        <h5 className="fs-16 lh-2 text-heading mb-5">
                          Rating Breakdown
                        </h5>
                        <div className="d-flex align-items-center mx-n1">
                          <ul className="list-inline d-flex px-1 mb-0">
                            <li className="list-inline-item text-warning mr-1">
                              <i className="fas fa-star"></i>
                            </li>
                            <li className="list-inline-item text-warning mr-1">
                              <i className="fas fa-star"></i>
                            </li>
                            <li className="list-inline-item text-warning mr-1">
                              <i className="fas fa-star"></i>
                            </li>
                            <li className="list-inline-item text-warning mr-1">
                              <i className="fas fa-star"></i>
                            </li>
                            <li className="list-inline-item text-warning mr-1">
                              <i className="fas fa-star"></i>
                            </li>
                          </ul>
                          <div className="d-block w-100 px-1">
                            <div className="progress rating-progress">
                              <input type="range" min="1" max="100" value="50" className="progress-bar bg-warning" role="progressbar" style={{ width: "60%" }} />
                            </div>
                          </div>
                          <div className="text-muted px-1">60%</div>
                        </div>
                        <div className="d-flex align-items-center mx-n1">
                          <ul className="list-inline d-flex px-1 mb-0">
                            <li className="list-inline-item text-warning mr-1">
                              <i className="fas fa-star"></i>
                            </li>
                            <li className="list-inline-item text-warning mr-1">
                              <i className="fas fa-star"></i>
                            </li>
                            <li className="list-inline-item text-warning mr-1">
                              <i className="fas fa-star"></i>
                            </li>
                            <li className="list-inline-item text-warning mr-1">
                              <i className="fas fa-star"></i>
                            </li>
                            <li className="list-inline-item text-border mr-1">
                              <i className="fas fa-star"></i>
                            </li>
                          </ul>
                          <div className="d-block w-100 px-1">
                            <div className="progress rating-progress">
                              <input type="range" min="1" max="100" value="50" className="progress-bar bg-warning" role="progressbar" />
                            </div>
                          </div>
                          <div className="text-muted px-1">40%</div>
                        </div>
                        <div className="d-flex align-items-center mx-n1">
                          <ul className="list-inline d-flex px-1 mb-0">
                            <li className="list-inline-item text-warning mr-1">
                              <i className="fas fa-star"></i>
                            </li>
                            <li className="list-inline-item text-warning mr-1">
                              <i className="fas fa-star"></i>
                            </li>
                            <li className="list-inline-item text-warning mr-1">
                              <i className="fas fa-star"></i>
                            </li>
                            <li className="list-inline-item text-border mr-1">
                              <i className="fas fa-star"></i>
                            </li>
                            <li className="list-inline-item text-border mr-1">
                              <i className="fas fa-star"></i>
                            </li>
                          </ul>
                          <div className="d-block w-100 px-1">
                            <div className="progress rating-progress">
                              <input type="range" min="1" max="100" value="50" className="progress-bar bg-warning" role="progressbar" />
                            </div>
                          </div>
                          <div className="text-muted px-1">0%</div>
                        </div>
                        <div className="d-flex align-items-center mx-n1">
                          <ul className="list-inline d-flex px-1 mb-0">
                            <li className="list-inline-item text-warning mr-1">
                              <i className="fas fa-star"></i>
                            </li>
                            <li className="list-inline-item text-warning mr-1">
                              <i className="fas fa-star"></i>
                            </li>
                            <li className="list-inline-item text-border mr-1">
                              <i className="fas fa-star"></i>
                            </li>
                            <li className="list-inline-item text-border mr-1">
                              <i className="fas fa-star"></i>
                            </li>
                            <li className="list-inline-item text-border mr-1">
                              <i className="fas fa-star"></i>
                            </li>
                          </ul>
                          <div className="d-block w-100 px-1">
                            <div className="progress rating-progress">
                              <input type="range" min="1" max="100" value="50" className="progress-bar bg-warning" role="progressbar" />
                            </div>
                          </div>
                          <div className="text-muted px-1">0%</div>
                        </div>
                        <div className="d-flex align-items-center mx-n1">
                          <ul className="list-inline d-flex px-1 mb-0">
                            <li className="list-inline-item text-warning mr-1">
                              <i className="fas fa-star"></i>
                            </li>
                            <li className="list-inline-item text-border mr-1">
                              <i className="fas fa-star"></i>
                            </li>
                            <li className="list-inline-item text-border mr-1">
                              <i className="fas fa-star"></i>
                            </li>
                            <li className="list-inline-item text-border mr-1">
                              <i className="fas fa-star"></i>
                            </li>
                            <li className="list-inline-item text-border mr-1">
                              <i className="fas fa-star"></i>
                            </li>
                          </ul>
                          <div className="d-block w-100 px-1">
                            <div className="progress rating-progress">
                              <input type="range" min="1" max="100" value="50" className="progress-bar bg-warning" role="progressbar" />
                            </div>
                          </div>
                          <div className="text-muted px-1">0%</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
              <section className="mt-2 pb-2 px-6 pt-6 bg-white rounded-lg">
                <div className="card border-0">
                  <div className="card-body p-0">
                    <h3 className="fs-16 lh-2 text-heading mb-0 d-inline-block pr-4 border-bottom border-primary">5 Reviews</h3>
                    <div className="media border-top pt-7 pb-6 d-sm-flex d-block text-sm-left text-center">
                      <img src="images/review-07.jpg" alt="Danny Fox" className="mr-sm-8 mb-4 mb-sm-0" />
                      <div className="media-body">
                        <div className="row mb-1 align-items-center">
                          <div className="col-sm-6 mb-2 mb-sm-0">
                            <h4 className="mb-0 text-heading fs-14">Danny Fox</h4>
                          </div>
                          <div className="col-sm-6">
                            <ul className="list-inline d-flex justify-content-sm-end justify-content-center mb-0">
                              <li className="list-inline-item mr-1">
                                <span className="text-warning fs-12 lh-2"><i className="fas fa-star"></i></span>
                              </li>
                              <li className="list-inline-item mr-1">
                                <span className="text-warning fs-12 lh-2"><i className="fas fa-star"></i></span>
                              </li>
                              <li className="list-inline-item mr-1">
                                <span className="text-warning fs-12 lh-2"><i className="fas fa-star"></i></span>
                              </li>
                              <li className="list-inline-item mr-1">
                                <span className="text-warning fs-12 lh-2"><i className="fas fa-star"></i></span>
                              </li>
                              <li className="list-inline-item mr-1">
                                <span className="text-warning fs-12 lh-2"><i className="fas fa-star"></i></span>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <p className="mb-3 pr-xl-17">Very good and fast support during the week. Thanks for always
                          keeping your WordPress themes up to date. Your level of support and dedication
                          is second to none.</p>
                        <div className="d-flex justify-content-sm-start justify-content-center">
                          <p className="mb-0 text-muted fs-13 lh-1">02 Dec 2020 at 2:40pm</p>
                          <a href="#" className="mb-0 text-heading border-left border-dark hover-primary lh-1 ml-2 pl-2">Reply</a>
                        </div>
                      </div>
                    </div>
                    <div className="media border-top py-6 d-sm-flex d-block text-sm-left text-center">
                      <img src="images/review-08.jpg" alt="Viola Austin" className="mr-sm-8 mb-4 mb-sm-0" />
                      <div className="media-body">
                        <div className="row mb-1 align-items-center">
                          <div className="col-sm-6 mb-2 mb-sm-0">
                            <h4 className="mb-0 text-heading fs-14">Viola Austin</h4>
                          </div>
                          <div className="col-sm-6 ">
                            <ul className="list-inline d-flex justify-content-sm-end justify-content-center mb-0">
                              <li className="list-inline-item mr-1">
                                <span className="text-warning fs-12 lh-2"><i className="fas fa-star"></i></span>
                              </li>
                              <li className="list-inline-item mr-1">
                                <span className="text-warning fs-12 lh-2"><i className="fas fa-star"></i></span>
                              </li>
                              <li className="list-inline-item mr-1">
                                <span className="text-warning fs-12 lh-2"><i className="fas fa-star"></i></span>
                              </li>
                              <li className="list-inline-item mr-1">
                                <span className="text-warning fs-12 lh-2"><i className="fas fa-star"></i></span>
                              </li>
                              <li className="list-inline-item mr-1">
                                <span className="text-warning fs-12 lh-2"><i className="fas fa-star"></i></span>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <p className="mb-3 pr-xl-17">Very good and fast support during the week. Thanks for always
                          keeping your WordPress themes up to date. Your level of support and dedication
                          is second to none.</p>
                        <div className="d-flex justify-content-sm-start justify-content-center">
                          <p className="mb-0 text-muted fs-13 lh-1">02 Dec 2020 at 2:40pm</p>
                          <a href="#" className="mb-0 text-heading border-left border-dark hover-primary lh-1 ml-2 pl-2">Reply</a>
                        </div>
                      </div>
                    </div>
                    <div className="media border-top py-6 d-sm-flex d-block text-sm-left text-center">
                      <img src="images/review-09.jpg" alt="Nettie Singleton" className="mr-sm-8 mb-4 mb-sm-0" />
                      <div className="media-body">
                        <div className="row mb-1 align-items-center">
                          <div className="col-sm-6 mb-2 mb-sm-0">
                            <h4 className="mb-0 text-heading fs-14">Nettie Singleton</h4>
                          </div>
                          <div className="col-sm-6 ">
                            <ul className="list-inline d-flex justify-content-sm-end justify-content-center mb-0">
                              <li className="list-inline-item mr-1">
                                <span className="text-warning fs-12 lh-2"><i className="fas fa-star"></i></span>
                              </li>
                              <li className="list-inline-item mr-1">
                                <span className="text-warning fs-12 lh-2"><i className="fas fa-star"></i></span>
                              </li>
                              <li className="list-inline-item mr-1">
                                <span className="text-warning fs-12 lh-2"><i className="fas fa-star"></i></span>
                              </li>
                              <li className="list-inline-item mr-1">
                                <span className="text-warning fs-12 lh-2"><i className="fas fa-star"></i></span>
                              </li>
                              <li className="list-inline-item mr-1">
                                <span className="text-warning fs-12 lh-2"><i className="fas fa-star"></i></span>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <p className="mb-3 pr-xl-17">Very good and fast support during the week. Thanks for always
                          keeping your WordPress themes up to date. Your level of support and dedication
                          is second to none.</p>
                        <div className="d-flex justify-content-sm-start justify-content-center">
                          <p className="mb-0 text-muted fs-13 lh-1">02 Dec 2020 at 2:40pm</p>
                          <a href="#" className="mb-0 text-heading border-left border-dark hover-primary lh-1 ml-2 pl-2">Reply</a>
                        </div>
                      </div>
                    </div>
                    <div className="media border-top py-6 d-sm-flex d-block text-sm-left text-center">
                      <img src="images/review-07.jpg" alt="Vernon Fisher" className="mr-sm-8 mb-4 mb-sm-0" />
                      <div className="media-body">
                        <div className="row mb-1 align-items-center">
                          <div className="col-sm-6 mb-2 mb-sm-0">
                            <h4 className="mb-0 text-heading fs-14">Vernon Fisher</h4>
                          </div>
                          <div className="col-sm-6">
                            <ul className="list-inline d-flex justify-content-sm-end justify-content-center mb-0">
                              <li className="list-inline-item mr-1">
                                <span className="text-warning fs-12 lh-2"><i className="fas fa-star"></i></span>
                              </li>
                              <li className="list-inline-item mr-1">
                                <span className="text-warning fs-12 lh-2"><i className="fas fa-star"></i></span>
                              </li>
                              <li className="list-inline-item mr-1">
                                <span className="text-warning fs-12 lh-2"><i className="fas fa-star"></i></span>
                              </li>
                              <li className="list-inline-item mr-1">
                                <span className="text-warning fs-12 lh-2"><i className="fas fa-star"></i></span>
                              </li>
                              <li className="list-inline-item mr-1">
                                <span className="text-border fs-12 lh-2"><i className="fas fa-star"></i></span>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <p className="mb-3 pr-xl-17">Very good and fast support during the week. Thanks for always
                          keeping your WordPress themes up to date. Your level of support and dedication
                          is second to none.</p>
                        <div className="d-flex justify-content-sm-start justify-content-center">
                          <p className="mb-0 text-muted fs-13 lh-1">02 Dec 2020 at 2:40pm</p>
                          <a href="#" className="mb-0 text-heading border-left border-dark hover-primary lh-1 ml-2 pl-2">Reply</a>
                        </div>
                      </div>
                    </div>
                    <div className="media border-top py-6 d-sm-flex d-block text-sm-left text-center">
                      <div className="w-82px h-82 mr-2 bg-gray-01 rounded-circle fs-25 font-weight-500 text-muted d-flex align-items-center justify-content-center text-uppercase mr-sm-8 mb-4 mb-sm-0 mx-auto">
                        HI
                      </div>
                      <div className="media-body">
                        <div className="row mb-1 align-items-center">
                          <div className="col-sm-6 mb-2 mb-sm-0">
                            <h4 className="mb-0 text-heading fs-14">Harry Iglesias</h4>
                          </div>
                          <div className="col-sm-6">
                            <ul className="list-inline d-flex justify-content-sm-end justify-content-center mb-0">
                              <li className="list-inline-item mr-1">
                                <span className="text-warning fs-12 lh-2"><i className="fas fa-star"></i></span>
                              </li>
                              <li className="list-inline-item mr-1">
                                <span className="text-warning fs-12 lh-2"><i className="fas fa-star"></i></span>
                              </li>
                              <li className="list-inline-item mr-1">
                                <span className="text-warning fs-12 lh-2"><i className="fas fa-star"></i></span>
                              </li>
                              <li className="list-inline-item mr-1">
                                <span className="text-warning fs-12 lh-2"><i className="fas fa-star"></i></span>
                              </li>
                              <li className="list-inline-item mr-1">
                                <span className="text-border fs-12 lh-2"><i className="fas fa-star"></i></span>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <p className="mb-3 pr-xl-17">Very good and fast support during the week. Thanks for always
                          keeping your WordPress themes up to date. Your level of support and dedication
                          is second to none.</p>
                        <div className="d-flex justify-content-sm-start justify-content-center">
                          <p className="mb-0 text-muted fs-13 lh-1">02 Dec 2020 at 2:40pm</p>
                          <a href="#" className="mb-0 text-heading border-left border-dark hover-primary lh-1 ml-2 pl-2">Reply</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
              <section className="mt-2 pb-7 px-6 pt-6 bg-white rounded-lg">
                <div className="card border-0">
                  <div className="card-body p-0">
                    <h3 className="fs-16 lh-2 text-heading mb-4">Write A Review</h3>
                    <form>
                      <div className="form-group mb-4 d-flex justify-content-start">
                        <div className="rate-input">
                          <input type="radio" id="star5" name="rate" value="5" />
                          <label htmlFor="star5" title="text" className="mb-0 mr-1 lh-1">
                            <i className="fas fa-star"></i>
                          </label>
                          <input type="radio" id="star4" name="rate" value="4" />
                          <label htmlFor="star4" title="text" className="mb-0 mr-1 lh-1">
                            <i className="fas fa-star"></i>
                          </label>
                          <input type="radio" id="star3" name="rate" value="3" />
                          <label htmlFor="star3" title="text" className="mb-0 mr-1 lh-1">
                            <i className="fas fa-star"></i>
                          </label>
                          <input type="radio" id="star2" name="rate" value="2" />
                          <label htmlFor="star2" title="text" className="mb-0 mr-1 lh-1">
                            <i className="fas fa-star"></i>
                          </label>
                          <input type="radio" id="star1" name="rate" value="1" />
                          <label htmlFor="star1" title="text" className="mb-0 mr-1 lh-1">
                            <i className="fas fa-star"></i>
                          </label>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-sm-6">
                          <div className="form-group mb-4">
                            <input placeholder="Your Name" className="form-control form-control-lg border-0" type="text" name="name" />
                          </div>
                        </div>
                        <div className="col-sm-6">
                          <div className="form-group mb-4">
                            <input type="email" placeholder="Email" name="email" className="form-control form-control-lg border-0" />
                          </div>
                        </div>
                      </div>
                      <div className="form-group mb-6">
                        <textarea className="form-control form-control-lg border-0" placeholder="Your Review" name="message" rows={5}></textarea>
                      </div>
                      <button type="submit" className="btn btn-lg btn-primary px-10">Submit</button>
                    </form>
                  </div>
                </div>
              </section>
              <section className="mt-2 pb-5 px-6 pt-6 bg-white rounded-lg">
                <h4 className="fs-22 text-heading mb-5">What is Nearby?</h4>
                <div className="mt-4">
                  <h6 className="mb-0 mt-5"><a href="#" className="fs-16 lh-2 text-heading border-bottom border-primary pb-1">Restaurants</a></h6>
                  <div className="border-top pt-2">
                    <div className="py-3 border-bottom d-sm-flex justify-content-sm-between">
                      <div className="media align-items-sm-center d-sm-flex d-block">
                        <a href="#" className="hover-shine">
                          <img src="images/single-detail-property-02.jpg" className="mr-sm-4 rounded-lg w-sm-90" alt="Bacchanal Buffet-Temporarily Closed" />
                        </a>
                        <div className="mt-sm-0 mt-2">
                          <h4 className="my-0"><a href="#" className="lh-186 fs-15 text-heading hover-primary">Bacchanal Buffet-Temporarily Closed</a></h4>
                          <p className="lh-186 fs-15 font-weight-500 mb-0">3570 S Las Vegas BlvdLas Vegas, NV 89109</p>
                        </div>
                      </div>
                      <div className="text-lg-right mt-lg-0 mt-2">
                        <p className="mb-2 mb-0 lh-13">120 Reviews</p>
                        <i className="fas fa-star w-18px h-18 d-inline-flex justify-content-center align-items-center rate-bg-blue text-white fs-12 rounded-sm"></i>
                        <i className="fas fa-star w-18px h-18 d-inline-flex justify-content-center align-items-center rate-bg-blue text-white fs-12 rounded-sm"></i>
                        <i className="fas fa-star w-18px h-18 d-inline-flex justify-content-center align-items-center rate-bg-blue text-white fs-12 rounded-sm"></i>
                        <i className="fas fa-star w-18px h-18 d-inline-flex justify-content-center align-items-center rate-bg-blue text-white fs-12 rounded-sm"></i>
                        <i className="fas fa-star w-18px h-18 d-inline-flex justify-content-center align-items-center rate-bg-blue text-white fs-12 rounded-sm"></i>
                      </div>
                    </div>
                    <div className="py-3 border-bottom d-sm-flex justify-content-sm-between">
                      <div className="media align-items-sm-center d-sm-flex d-block">
                        <a href="#" className="hover-shine">
                          <img src="images/single-detail-property-03.jpg" className="mr-sm-4 rounded-lg w-sm-90" alt="Bacchanal Buffet-Temporarily Closed" />
                        </a>
                        <div className="mt-sm-0 mt-2">
                          <h4 className="my-0"><a href="#" className="lh-186 fs-15 text-heading hover-primary">Bacchanal Buffet-Temporarily Closed</a></h4>
                          <p className="lh-186 fs-15 font-weight-500 mb-0">3084 S Highland DrSte C</p>
                        </div>
                      </div>
                      <div className="text-lg-right mt-lg-0 mt-2">
                        <p className="mb-2 mb-0 lh-13">120 Reviews</p>
                        <div className="text-lg-right mt-lg-0 mt-2">
                          <i className="fas fa-star w-18px h-18 d-inline-flex justify-content-center align-items-center rate-bg-blue text-white fs-12 rounded-sm opacity-7"></i>
                          <i className="fas fa-star w-18px h-18 d-inline-flex justify-content-center align-items-center rate-bg-blue text-white fs-12 rounded-sm opacity-7"></i>
                          <i className="fas fa-star w-18px h-18 d-inline-flex justify-content-center align-items-center rate-bg-blue text-white fs-12 rounded-sm opacity-7"></i>
                          <i className="fas fa-star w-18px h-18 d-inline-flex justify-content-center align-items-center rate-bg-blue text-white fs-12 rounded-sm opacity-7"></i>
                          <i className="fas fa-star w-18px h-18 d-inline-flex justify-content-center align-items-center rate-bg-blue text-white fs-12 rounded-sm opacity-1"></i>
                        </div>
                      </div>
                    </div>
                    <div className="py-3 border-bottom d-sm-flex justify-content-sm-between">
                      <div className="media align-items-sm-center d-sm-flex d-block">
                        <a href="#" className="hover-shine">
                          <img src="images/single-detail-property-04.jpg" className="mr-sm-4 rounded-lg w-sm-90" alt="Bacchanal Buffet-Temporarily Closed" />
                        </a>
                        <div className="mt-sm-0 mt-2">
                          <h4 className="my-0"><a href="#" className="lh-186 fs-15 text-heading hover-primary">Bacchanal Buffet-Temporarily Closed</a></h4>
                          <p className="lh-186 fs-15 font-weight-500 mb-0">3570 S Las Vegas BlvdLas Vegas, NV 89109</p>
                        </div>
                      </div>
                      <div className="text-lg-right mt-lg-0 mt-2">
                        <p className="mb-2 mb-0 lh-13">120 Reviews</p>
                        <i className="fas fa-star w-18px h-18 d-inline-flex justify-content-center align-items-center rate-bg-blue text-white fs-12 rounded-sm"></i>
                        <i className="fas fa-star w-18px h-18 d-inline-flex justify-content-center align-items-center rate-bg-blue text-white fs-12 rounded-sm"></i>
                        <i className="fas fa-star w-18px h-18 d-inline-flex justify-content-center align-items-center rate-bg-blue text-white fs-12 rounded-sm"></i>
                        <i className="fas fa-star w-18px h-18 d-inline-flex justify-content-center align-items-center rate-bg-blue text-white fs-12 rounded-sm"></i>
                        <i className="fas fa-star w-18px h-18 d-inline-flex justify-content-center align-items-center rate-bg-blue text-white fs-12 rounded-sm"></i>
                      </div>
                    </div>
                  </div>
                  <h6 className="mb-0 mt-5"><a href="#" className="fs-16 lh-2 text-heading border-bottom border-primary pb-1">Education</a></h6>
                  <div className="border-top pt-2">
                    <div className="py-3 border-bottom d-sm-flex justify-content-sm-between">
                      <div className="media align-items-sm-center d-sm-flex d-block">
                        <a href="#" className="hover-shine">
                          <img src="images/single-detail-property-07.jpg" className="mr-sm-4 rounded-lg w-sm-90" alt="Bacchanal Buffet-Temporarily Closed" />
                        </a>
                        <div className="mt-sm-0 mt-2">
                          <h4 className="my-0"><a href="#" className="lh-186 fs-15 text-heading hover-primary">Safe Direction Firearms Training</a></h4>
                          <p className="lh-186 fs-15 font-weight-500 mb-0">3570 S Las Vegas BlvdLas Vegas, NV 89109</p>
                        </div>
                      </div>
                      <div className="text-lg-right mt-lg-0 mt-2">
                        <p className="mb-2 mb-0 lh-13">120 Reviews</p>
                        <i className="fas fa-star w-18px h-18 d-inline-flex justify-content-center align-items-center rate-bg-blue text-white fs-12 rounded-sm"></i>
                        <i className="fas fa-star w-18px h-18 d-inline-flex justify-content-center align-items-center rate-bg-blue text-white fs-12 rounded-sm"></i>
                        <i className="fas fa-star w-18px h-18 d-inline-flex justify-content-center align-items-center rate-bg-blue text-white fs-12 rounded-sm"></i>
                        <i className="fas fa-star w-18px h-18 d-inline-flex justify-content-center align-items-center rate-bg-blue text-white fs-12 rounded-sm"></i>
                        <i className="fas fa-star w-18px h-18 d-inline-flex justify-content-center align-items-center rate-bg-blue text-white fs-12 rounded-sm"></i>
                      </div>
                    </div>
                    <div className="py-3 border-bottom d-sm-flex justify-content-sm-between">
                      <div className="media align-items-sm-center d-sm-flex d-block">
                        <a href="#" className="hover-shine">
                          <img src="images/single-detail-property-08.jpg" className="mr-sm-4 rounded-lg w-sm-90" alt="Bacchanal Buffet-Temporarily Closed" />
                        </a>
                        <div className="mt-sm-0 mt-2">
                          <h4 className="my-0"><a href="#" className="lh-186 fs-15 text-heading hover-primary">Rabbi Shai Specht-Sandler</a></h4>
                          <p className="lh-186 fs-15 font-weight-500 mb-0">3084 S Highland DrSte C</p>
                        </div>
                      </div>
                      <div className="text-lg-right mt-lg-0 mt-2">
                        <p className="mb-2 mb-0 lh-13">120 Reviews</p>
                        <div className="text-lg-right mt-lg-0 mt-2">
                          <i className="fas fa-star w-18px h-18 d-inline-flex justify-content-center align-items-center rate-bg-blue text-white fs-12 rounded-sm opacity-7"></i>
                          <i className="fas fa-star w-18px h-18 d-inline-flex justify-content-center align-items-center rate-bg-blue text-white fs-12 rounded-sm opacity-7"></i>
                          <i className="fas fa-star w-18px h-18 d-inline-flex justify-content-center align-items-center rate-bg-blue text-white fs-12 rounded-sm opacity-7"></i>
                          <i className="fas fa-star w-18px h-18 d-inline-flex justify-content-center align-items-center rate-bg-blue text-white fs-12 rounded-sm opacity-7"></i>
                          <i className="fas fa-star w-18px h-18 d-inline-flex justify-content-center align-items-center rate-bg-blue text-white fs-12 rounded-sm opacity-1"></i>
                        </div>
                      </div>
                    </div>
                    <div className="py-3 border-bottom d-sm-flex justify-content-sm-between">
                      <div className="media align-items-sm-center d-sm-flex d-block">
                        <a href="#" className="hover-shine">
                          <img src="images/single-detail-property-09.jpg" className="mr-sm-4 rounded-lg w-sm-90" alt="Bacchanal Buffet-Temporarily Closed" />
                        </a>
                        <div className="mt-sm-0 mt-2">
                          <h4 className="my-0"><a href="#" className="lh-186 fs-15 text-heading hover-primary">Safe Direction Firearms Training</a></h4>
                          <p className="lh-186 fs-15 font-weight-500 mb-0">3570 S Las Vegas BlvdLas Vegas, NV 89109</p>
                        </div>
                      </div>
                      <div className="text-lg-right mt-lg-0 mt-2">
                        <p className="mb-2 mb-0 lh-13">120 Reviews</p>
                        <i className="fas fa-star w-18px h-18 d-inline-flex justify-content-center align-items-center rate-bg-blue text-white fs-12 rounded-sm"></i>
                        <i className="fas fa-star w-18px h-18 d-inline-flex justify-content-center align-items-center rate-bg-blue text-white fs-12 rounded-sm"></i>
                        <i className="fas fa-star w-18px h-18 d-inline-flex justify-content-center align-items-center rate-bg-blue text-white fs-12 rounded-sm"></i>
                        <i className="fas fa-star w-18px h-18 d-inline-flex justify-content-center align-items-center rate-bg-blue text-white fs-12 rounded-sm"></i>
                        <i className="fas fa-star w-18px h-18 d-inline-flex justify-content-center align-items-center rate-bg-blue text-white fs-12 rounded-sm"></i>
                      </div>
                    </div>
                  </div>
                  <h6 className="mb-0 mt-5"><a href="#" className="fs-16 lh-2 text-heading border-bottom border-primary pb-1">Health & Medical</a></h6>
                  <div className="border-top pt-2">
                    <div className="py-3 border-bottom d-sm-flex justify-content-sm-between">
                      <div className="media align-items-sm-center d-sm-flex d-block">
                        <a href="#" className="hover-shine">
                          <img src="images/single-detail-property-10.jpg" className="mr-sm-4 rounded-lg w-sm-90" alt="Bacchanal Buffet-Temporarily Closed" />
                        </a>
                        <div className="mt-sm-0 mt-2">
                          <h4 className="my-0"><a href="#" className="lh-186 fs-15 text-heading hover-primary">Coppola David F DC & Assoc</a></h4>
                          <p className="lh-186 fs-15 font-weight-500 mb-0">3570 S Las Vegas BlvdLas Vegas, NV 89109</p>
                        </div>
                      </div>
                      <div className="text-lg-right mt-lg-0 mt-2">
                        <p className="mb-2 mb-0 lh-13">120 Reviews</p>
                        <i className="fas fa-star w-18px h-18 d-inline-flex justify-content-center align-items-center rate-bg-blue text-white fs-12 rounded-sm"></i>
                        <i className="fas fa-star w-18px h-18 d-inline-flex justify-content-center align-items-center rate-bg-blue text-white fs-12 rounded-sm"></i>
                        <i className="fas fa-star w-18px h-18 d-inline-flex justify-content-center align-items-center rate-bg-blue text-white fs-12 rounded-sm"></i>
                        <i className="fas fa-star w-18px h-18 d-inline-flex justify-content-center align-items-center rate-bg-blue text-white fs-12 rounded-sm"></i>
                        <i className="fas fa-star w-18px h-18 d-inline-flex justify-content-center align-items-center rate-bg-blue text-white fs-12 rounded-sm"></i>
                      </div>
                    </div>
                    <div className="py-3 border-bottom d-sm-flex justify-content-sm-between">
                      <div className="media align-items-sm-center d-sm-flex d-block">
                        <a href="#" className="hover-shine">
                          <img src="images/single-detail-property-11.jpg" className="mr-sm-4 rounded-lg w-sm-90" alt="Bacchanal Buffet-Temporarily Closed" />
                        </a>
                        <div className="mt-sm-0 mt-2">
                          <h4 className="my-0"><a href="#" className="lh-186 fs-15 text-heading hover-primary">Elite Medical Center</a></h4>
                          <p className="lh-186 fs-15 font-weight-500 mb-0">3084 S Highland DrSte C</p>
                        </div>
                      </div>
                      <div className="text-lg-right mt-lg-0 mt-2">
                        <p className="mb-2 mb-0 lh-13">120 Reviews</p>
                        <div className="text-lg-right mt-lg-0 mt-2">
                          <i className="fas fa-star w-18px h-18 d-inline-flex justify-content-center align-items-center rate-bg-blue text-white fs-12 rounded-sm opacity-7"></i>
                          <i className="fas fa-star w-18px h-18 d-inline-flex justify-content-center align-items-center rate-bg-blue text-white fs-12 rounded-sm opacity-7"></i>
                          <i className="fas fa-star w-18px h-18 d-inline-flex justify-content-center align-items-center rate-bg-blue text-white fs-12 rounded-sm opacity-7"></i>
                          <i className="fas fa-star w-18px h-18 d-inline-flex justify-content-center align-items-center rate-bg-blue text-white fs-12 rounded-sm opacity-7"></i>
                          <i className="fas fa-star w-18px h-18 d-inline-flex justify-content-center align-items-center rate-bg-blue text-white fs-12 rounded-sm opacity-1"></i>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
              <section className="mt-2 pb-7 px-6 pt-6 bg-white rounded-lg">
                <h4 className="fs-22 text-heading mb-6">Property Attachments</h4>
                <div className="d-sm-flex">
                  <div className="w-sm-170 mb-sm-0 mb-6 mr-sm-6">
                    <div className="card text-center pt-4">
                      <img src="images/single-detail-property-05.png" className="card-img card-img w-78px mx-auto" alt="Villa Called Archangel Word Document" />
                      <div className="card-body p-0 mt-4">
                        <p className="fs-13 lh-2  mb-0 py-0 px-2">Villa Called Archangel Word Document</p>
                        <a href="#" className="btn btn-block bg-gray-01 border-0 fs-14 text-heading">Download<i className="far fa-arrow-alt-circle-down ml-1 text-primary"></i></a>
                      </div>
                    </div>
                  </div>
                  <div className="w-sm-170 mb-sm-0 mb-6 mr-sm-6">
                    <div className="card text-center pt-4">
                      <img src="images/single-detail-property-06.png" className="card-img card-img w-78px mx-auto" alt="Villa Called Archangel PDF Document" />
                      <div className="card-body p-0 mt-4">
                        <p className="fs-13 lh-2  mb-0 py-0 px-2">Villa Called Archangel PDF Document</p>
                        <a href="#" className="btn btn-block bg-gray-01 border-0 fs-14 text-heading">Download<i className="far fa-arrow-alt-circle-down ml-1 text-primary"></i></a>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
              <section className="mt-2 pb-6 px-6 pt-6 bg-white rounded-lg">
                <h4 className="fs-22 text-heading mb-6">Virtual Tour</h4>
                <iframe height="430" src="https://my.matterport.com/show/?m=wWcGxjuUuSb&amp;utm_source=hit-content-embed" className="w-100"></iframe>
              </section>
              <section className="mt-2 pb-6 px-6 pt-6 bg-white rounded-lg" >
                <h4 className="fs-22 text-heading mb-6">Location</h4>
                <div className="position-relative">
                  <div className="position-relative">
                    <div id="map" className="mapbox-gl map-point-animate"
                      data-mapbox-access-token="pk.eyJ1IjoiZHVvbmdsaCIsImEiOiJjanJnNHQ4czExMzhyNDVwdWo5bW13ZmtnIn0.f1bmXQsS6o4bzFFJc8RCcQ"
                      data-mapbox-options='{"center":[-73.9927227, 40.6741035],"setLngLat":[-73.9927227, 40.6741035]}'
                      data-mapbox-marker='[{"position":[-73.9927227, 40.6741035],"className":"marker","backgroundImage":"images/googlle-market-01.png","backgroundRepeat":"no-repeat","width":"30px","height":"40px"}]'>
                    </div>
                    <p className="mb-0 p-3 bg-white shadow rounded-lg position-absolute pos-fixed-bottom mb-4 ml-4 lh-17 z-index-2">62 Gresham St, Victoria Park <br />
                      WA 6100, Australia</p>
                  </div>
                </div>
              </section>
              <section className="mt-2 pb-7 px-6 pt-6 bg-white rounded-lg">
                <h4 className="fs-22 text-heading mb-5">Mortgage calculator</h4>
                <form>
                  <div className="row">
                    <div className="col-md-6 mb-4">
                      <label>Total Amount</label>
                      <div className="position-relative">
                        <input type="number" className="form-control border-0 pr-3 h-52 pl-7" value="345" name="total-amount" />
                        <span className="position-absolute pl-3 pos-fixed-left-center fs-13 font-weight-600">$</span>
                      </div>
                    </div>
                    <div className="col-md-6 mb-4">
                      <label>Down Payment</label>
                      <div className="position-relative">
                        <input type="number" className="form-control border-0 pr-3 h-52 pl-7" value="0" name="down-payment" />
                        <span className="position-absolute pl-3 pos-fixed-left-center fs-13 font-weight-600">$</span>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6 mb-4">
                      <label>Interest Rate</label>
                      <div className="position-relative">
                        <input type="number" className="form-control border-0 pr-3 h-52 pl-7" value="2.500" step="0.25" name="interest-rate" />
                        <span className="position-absolute pl-3 pos-fixed-left-center fs-13 font-weight-600">%</span>
                      </div>
                    </div>
                    <div className="col-md-6 mb-4">
                      <label>Number of years</label>
                      <input type="number" className="form-control border-0 px-3 h-52" value="25" name="years" />
                    </div>
                  </div>
                  <div className="form-group mb-6">
                    <label>Payment Period</label>
                    <select className="form-control selectpicker" data-style="btn-lg h-52 px-3" name="payment-period">
                      <option selected>Monthly</option>
                      <option>Yearly</option>
                    </select>
                  </div>
                  <div className="row">
                    <div className="col-lg-6">
                      <button className="btn btn-primary fs-14 h-52 px-8" type="submit">Caculate</button>
                    </div>
                    <div className="col-lg-6">
                      <div className="shadow-xxs-2 pt-1 pb-2 px-6 border-bottom border-primary border-5x rounded-lg">
                        <dl className="d-flex mb-0 justify-content-between py-2">
                          <dt className="font-weight-normal">Monthly Payment</dt>
                          <dd className="font-weight-500 text-heading mb-0">$33</dd>
                        </dl>
                        <dl className="d-flex mb-0 justify-content-between border-top py-2">
                          <dt className="font-weight-normal">Total Cost of Loan</dt>
                          <dd className="font-weight-500 text-heading mb-0">$464</dd>
                        </dl>
                        <dl className="d-flex mb-0 justify-content-between border-top py-2">
                          <dt className="font-weight-normal">Total interest Paid</dt>
                          <dd className="font-weight-500 text-heading mb-0">$119</dd>
                        </dl>
                        <dl className="d-flex mb-0 justify-content-between border-top py-2">
                          <dt className="font-weight-normal">Mortgage Payment</dt>
                          <dd className="font-weight-500 text-heading mb-0">$1.55</dd>
                        </dl>
                      </div>
                    </div>
                  </div>
                </form>
              </section>
              <section className="mt-2 pb-4 px-6 pt-6 bg-white rounded-lg chart">
                <div className="card border-0">
                  <div className="card-body p-0 collapse-tabs" >
                    <div className="d-flex align-items-center mb-5">
                      <h2 className="mb-0 text-heading fs-22 lh-15 mr-auto">Page statistics</h2>
                      <ul className="nav nav-pills nav-pills-01 justify-content-end d-none d-sm-flex"
                        role="tablist">
                        <li className="nav-item px-5 py-1">
                          <a className="nav-link active bg-transparent shadow-none p-0 letter-spacing-1"
                            id="hours-tab" data-toggle="tab"
                            href="#hours"
                            role="tab"
                            aria-controls="hours" aria-selected="true">Hours</a>
                        </li>
                        <li className="nav-item px-5 py-1">
                          <a className="nav-link bg-transparent shadow-none p-0 letter-spacing-1" id="weekly-tab"
                            data-toggle="tab"
                            href="#weekly"
                            role="tab"
                            aria-controls="weekly" aria-selected="false">Weekly</a>
                        </li>
                        <li className="nav-item px-5 py-1">
                          <a className="nav-link bg-transparent shadow-none p-0 letter-spacing-1" id="monthly-tab"
                            data-toggle="tab"
                            href="#monthly"
                            role="tab"
                            aria-controls="monthly" aria-selected="false">Monthly</a>
                        </li>
                      </ul>
                    </div>
                    <div className="tab-content shadow-none p-0">
                      <div id="collapse-tabs-accordion">
                        <div className="tab-pane tab-pane-parent fade show active px-0" id="hours"
                          role="tabpanel"
                          aria-labelledby="hours-tab">
                          <div className="card bg-transparent mb-sm-0 border-0">
                            <div className="card-header d-block d-sm-none bg-transparent px-0 py-1 border-bottom-0"
                              id="headingHours">
                              <h5 className="mb-0">
                                <button className="btn collapse-parent font-size-h5 btn-block border shadow-none"
                                  data-toggle="collapse"
                                  data-target="#hours-collapse"
                                  aria-expanded="true"
                                  aria-controls="hours-collapse">
                                  Hours
                                </button>
                              </h5>
                            </div>
                            <div id="hours-collapse" className="collapse show collapsible"
                              aria-labelledby="headingHours"
                              data-parent="#collapse-tabs-accordion">
                              <div className="card-body p-0 py-4">
                                <canvas className="chartjs" data-chart-options="[]"
                                  data-chart-labels='["05h","08h","11h","14h","17h","20h","23h"]'
                                  data-chart-datasets='[{"label":"Clicked","data":[0,7,10,3,15,30,10],"backgroundColor":"rgba(105, 105, 235, 0.1)","borderColor":"#6969eb","borderWidth":3,"fill":true},{"label":"View","data":[10,9,18,20,28,40,27],"backgroundColor":"rgba(254, 91, 52, 0.1)","borderColor":"#ff6935","borderWidth":3,"fill":true}]'>
                                </canvas>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="tab-pane tab-pane-parent fade px-0" id="weekly"
                          role="tabpanel"
                          aria-labelledby="weekly-tab">
                          <div className="card bg-transparent mb-sm-0 border-0">
                            <div className="card-header d-block d-sm-none bg-transparent px-0 py-1 border-bottom-0"
                              id="headingWeekly">
                              <h5 className="mb-0">
                                <button className="btn collapse-parent font-size-h5 btn-block collapsed border shadow-none"
                                  data-toggle="collapse"
                                  data-target="#weekly-collapse"
                                  aria-expanded="true"
                                  aria-controls="weekly-collapse">
                                  Weekly
                                </button>
                              </h5>
                            </div>
                            <div id="weekly-collapse" className="collapse collapsible"
                              aria-labelledby="headingWeekly"
                              data-parent="#collapse-tabs-accordion">
                              <div className="card-body p-0 py-4">
                                <canvas className="chartjs" data-chart-options="[]"
                                  data-chart-labels='["Mar 12","Mar 13","Mar 14","Mar 15","Mar 16","Mar 17","Mar 18","Mar 19"]'
                                  data-chart-datasets='[{"label":"Clicked","data":[0,13,9,3,15,15,10,0],"backgroundColor":"rgba(105, 105, 235, 0.1)","borderColor":"#6969eb","borderWidth":3,"fill":true},{"label":"View","data":[10,20,18,15,28,33,27,10],"backgroundColor":"rgba(254, 91, 52, 0.1)","borderColor":"#ff6935","borderWidth":3,"fill":true}]'>
                                </canvas>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="tab-pane tab-pane-parent fade px-0" id="monthly" role="tabpanel"
                          aria-labelledby="monthly-tab">
                          <div className="card bg-transparent mb-sm-0 border-0">
                            <div className="card-header d-block d-sm-none bg-transparent px-0 py-1 border-bottom-0"
                              id="headingMonthly">
                              <h5 className="mb-0">
                                <button className="btn btn-block collapse-parent collapsed border shadow-none"
                                  data-toggle="collapse"
                                  data-target="#monthly-collapse"
                                  aria-expanded="true"
                                  aria-controls="monthly-collapse">
                                  Monthly
                                </button>
                              </h5>
                            </div>
                            <div id="monthly-collapse" className="collapse collapsible"
                              aria-labelledby="headingMonthly"
                              data-parent="#collapse-tabs-accordion">
                              <div className="card-body p-0 py-4">
                                <canvas className="chartjs" data-chart-options="[]"
                                  data-chart-labels='["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]'
                                  data-chart-datasets='[{"label":"Clicked","data":[2,15,20,10,15,20,10,0,20,30,10,0],"backgroundColor":"rgba(105, 105, 235, 0.1)","borderColor":"#6969eb","borderWidth":3,"fill":true},{"label":"View","data":[10,20,18,15,28,33,27,10,20,30,10,0],"backgroundColor":"rgba(254, 91, 52, 0.1)","borderColor":"#ff6935","borderWidth":3,"fill":true}]'>
                                </canvas>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
              <section className="mt-2 pb-7 px-6 pt-6 bg-white rounded-lg">
                <h4 className="fs-22 text-heading mb-6">Similar Homes You May Like</h4>
                <div className="slick-slider"
                  data-slick-options='{"slidesToShow": 2, "dots":false,"responsive":[{"breakpoint": 1200,"settings": {"slidesToShow":2,"arrows":false}},{"breakpoint": 992,"settings": {"slidesToShow":2}},{"breakpoint": 768,"settings": {"slidesToShow": 1}},{"breakpoint": 576,"settings": {"slidesToShow": 1}}]}'>
                  <div className="box">
                    <div className="card shadow-hover-2 =">
                      <div className="hover-change-image bg-hover-overlay rounded-lg card-img-top">
                        <img src="images/properties-grid-38.jpg"
                          alt="Home in Metric Way" />
                        <div className="card-img-overlay p-2 d-flex flex-column">
                          <div>
                            <span className="badge mr-2 badge-primary">for Sale</span>
                          </div>
                          <ul className="list-inline mb-0 mt-auto hover-image">
                            <li className="list-inline-item mr-2" data-toggle="tooltip" title="9 Images">
                              <a href="#" className="text-white hover-primary">
                                <i className="far fa-images"></i><span className="pl-1">9</span>
                              </a>
                            </li>
                            <li className="list-inline-item" data-toggle="tooltip" title="2 Video">
                              <a href="#" className="text-white hover-primary">
                                <i className="far fa-play-circle"></i><span className="pl-1">2</span>
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="card-body pt-3">
                        <h2 className="card-title fs-16 lh-2 mb-0"><a href="single-property-1.html" className="text-dark hover-primary">Home in Metric Way</a></h2>
                        <p className="card-text font-weight-500 text-gray-light mb-2">1421 San Pedro St, Los Angeles</p>
                        <ul className="list-inline d-flex mb-0 flex-wrap mr-n4">
                          <li className="list-inline-item text-gray font-weight-500 fs-13 d-flex align-items-center mr-4" data-toggle="tooltip" title="3 Bedroom">
                            <svg className="icon icon-bedroom fs-18 text-primary mr-1"><use xlinkHref="#icon-bedroom"></use></svg>3 Br
                          </li>
                          <li className="list-inline-item text-gray font-weight-500 fs-13 d-flex align-items-center mr-4" data-toggle="tooltip" title="3 Bathrooms">
                            <svg className="icon icon-shower fs-18 text-primary mr-1"><use xlinkHref="#icon-shower"></use></svg>3 Ba
                          </li>
                          <li className="list-inline-item text-gray font-weight-500 fs-13 d-flex align-items-center mr-4" data-toggle="tooltip" title="Size">
                            <svg className="icon icon-square fs-18 text-primary mr-1"><use xlinkHref="#icon-square"></use></svg>2300 Sq.Ft
                          </li>
                          <li className="list-inline-item text-gray font-weight-500 fs-13 d-flex align-items-center mr-4" data-toggle="tooltip" title="1 Garage">
                            <svg className="icon icon-Garage fs-18 text-primary mr-1"><use xlinkHref="#icon-Garage"></use></svg>1 Gr
                          </li>
                        </ul>
                      </div>
                      <div className="card-footer bg-transparent d-flex justify-content-between align-items-center py-3">
                        <p className="fs-17 font-weight-bold text-heading mb-0">$1.250.000</p>
                        <ul className="list-inline mb-0">
                          <li className="list-inline-item">
                            <a href="#"
                              className="w-40px h-40 border rounded-circle d-inline-flex align-items-center justify-content-center text-secondary bg-accent border-accent" data-toggle="tooltip" title="Wishlist"><i
                                className="fas fa-heart"></i></a>
                          </li>
                          <li className="list-inline-item">
                            <a href="#"
                              className="w-40px h-40 border rounded-circle d-inline-flex align-items-center justify-content-center text-body hover-secondary bg-hover-accent border-hover-accent" data-toggle="tooltip" title="Compare"><i
                                className="fas fa-exchange-alt"></i></a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="box">
                    <div className="card shadow-hover-2 =">
                      <div className="hover-change-image bg-hover-overlay rounded-lg card-img-top">
                        <img src="images/properties-grid-01.jpg"
                          alt="Garden Gingerbread House" />
                        <div className="card-img-overlay p-2 d-flex flex-column">
                          <div>
                            <span className="badge mr-2 badge-orange">featured</span>
                            <span className="badge mr-2 badge-indigo">for Sale</span>
                          </div>
                          <ul className="list-inline mb-0 mt-auto hover-image">
                            <li className="list-inline-item mr-2" data-toggle="tooltip" title="9 Images">
                              <a href="#" className="text-white hover-primary">
                                <i className="far fa-images"></i><span className="pl-1">9</span>
                              </a>
                            </li>
                            <li className="list-inline-item" data-toggle="tooltip" title="2 Video">
                              <a href="#" className="text-white hover-primary">
                                <i className="far fa-play-circle"></i><span className="pl-1">2</span>
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="card-body pt-3">
                        <h2 className="card-title fs-16 lh-2 mb-0"><a href="single-property-1.html" className="text-dark hover-primary">Garden Gingerbread House</a></h2>
                        <p className="card-text font-weight-500 text-gray-light mb-2">1421 San Pedro St, Los Angeles</p>
                        <ul className="list-inline d-flex mb-0 flex-wrap mr-n4">
                          <li className="list-inline-item text-gray font-weight-500 fs-13 d-flex align-items-center mr-4" data-toggle="tooltip" title="3 Bedroom">
                            <svg className="icon icon-bedroom fs-18 text-primary mr-1"><use xlinkHref="#icon-bedroom"></use></svg>3 Br
                          </li>
                          <li className="list-inline-item text-gray font-weight-500 fs-13 d-flex align-items-center mr-4" data-toggle="tooltip" title="3 Bathrooms">
                            <svg className="icon icon-shower fs-18 text-primary mr-1"><use xlinkHref="#icon-shower"></use></svg>3 Ba
                          </li>
                          <li className="list-inline-item text-gray font-weight-500 fs-13 d-flex align-items-center mr-4" data-toggle="tooltip" title="Size">
                            <svg className="icon icon-square fs-18 text-primary mr-1"><use xlinkHref="#icon-square"></use></svg>2300 Sq.Ft
                          </li>
                          <li className="list-inline-item text-gray font-weight-500 fs-13 d-flex align-items-center mr-4" data-toggle="tooltip" title="1 Garage">
                            <svg className="icon icon-Garage fs-18 text-primary mr-1"><use xlinkHref="#icon-Garage"></use></svg>1 Gr
                          </li>
                        </ul>
                      </div>
                      <div className="card-footer bg-transparent d-flex justify-content-between align-items-center py-3">
                        <p className="fs-17 font-weight-bold text-heading mb-0">$550<span className="text-gray-light font-weight-500 fs-14"> / month</span></p>
                        <ul className="list-inline mb-0">
                          <li className="list-inline-item">
                            <a href="#"
                              className="w-40px h-40 border rounded-circle d-inline-flex align-items-center justify-content-center text-body hover-secondary bg-hover-accent border-hover-accent" data-toggle="tooltip" title="Wishlist"><i
                                className="far fa-heart"></i></a>
                          </li>
                          <li className="list-inline-item">
                            <a href="#"
                              className="w-40px h-40 border rounded-circle d-inline-flex align-items-center justify-content-center text-body hover-secondary bg-hover-accent border-hover-accent" data-toggle="tooltip" title="Compare"><i
                                className="fas fa-exchange-alt"></i></a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="box">
                    <div className="card shadow-hover-2 =">
                      <div className="hover-change-image bg-hover-overlay rounded-lg card-img-top">
                        <img src="images/properties-grid-02.jpg"
                          alt="Affordable Urban House" />
                        <div className="card-img-overlay p-2 d-flex flex-column">
                          <div>
                            <span className="badge mr-2 badge-primary">for Sale</span>
                          </div>
                          <ul className="list-inline mb-0 mt-auto hover-image">
                            <li className="list-inline-item mr-2" data-toggle="tooltip" title="9 Images">
                              <a href="#" className="text-white hover-primary">
                                <i className="far fa-images"></i><span className="pl-1">9</span>
                              </a>
                            </li>
                            <li className="list-inline-item" data-toggle="tooltip" title="2 Video">
                              <a href="#" className="text-white hover-primary">
                                <i className="far fa-play-circle"></i><span className="pl-1">2</span>
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="card-body pt-3">
                        <h2 className="card-title fs-16 lh-2 mb-0"><a href="single-property-1.html" className="text-dark hover-primary">Affordable Urban House</a></h2>
                        <p className="card-text font-weight-500 text-gray-light mb-2">1421 San Pedro St, Los Angeles</p>
                        <ul className="list-inline d-flex mb-0 flex-wrap mr-n4">
                          <li className="list-inline-item text-gray font-weight-500 fs-13 d-flex align-items-center mr-4" data-toggle="tooltip" title="3 Bedroom">
                            <svg className="icon icon-bedroom fs-18 text-primary mr-1"><use xlinkHref="#icon-bedroom"></use></svg>3 Br
                          </li>
                          <li className="list-inline-item text-gray font-weight-500 fs-13 d-flex align-items-center mr-4" data-toggle="tooltip" title="3 Bathrooms">
                            <svg className="icon icon-shower fs-18 text-primary mr-1"><use xlinkHref="#icon-shower"></use></svg>3 Ba
                          </li>
                          <li className="list-inline-item text-gray font-weight-500 fs-13 d-flex align-items-center mr-4" data-toggle="tooltip" title="Size">
                            <svg className="icon icon-square fs-18 text-primary mr-1"><use xlinkHref="#icon-square"></use></svg>2300 Sq.Ft
                          </li>
                          <li className="list-inline-item text-gray font-weight-500 fs-13 d-flex align-items-center mr-4" data-toggle="tooltip" title="1 Garage">
                            <svg className="icon icon-Garage fs-18 text-primary mr-1"><use xlinkHref="#icon-Garage"></use></svg>1 Gr
                          </li>
                        </ul>
                      </div>
                      <div className="card-footer bg-transparent d-flex justify-content-between align-items-center py-3">
                        <p className="fs-17 font-weight-bold text-heading mb-0">$1.250.000</p>
                        <ul className="list-inline mb-0">
                          <li className="list-inline-item">
                            <a href="#"
                              className="w-40px h-40 border rounded-circle d-inline-flex align-items-center justify-content-center text-body hover-secondary bg-hover-accent border-hover-accent" data-toggle="tooltip" title="Wishlist"><i
                                className="far fa-heart"></i></a>
                          </li>
                          <li className="list-inline-item">
                            <a href="#"
                              className="w-40px h-40 border rounded-circle d-inline-flex align-items-center justify-content-center text-body hover-secondary bg-hover-accent border-hover-accent" data-toggle="tooltip" title="Compare"><i
                                className="fas fa-exchange-alt"></i></a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </article>
            <aside className="col-lg-4 pl-xl-4 primary-sidebar sidebar-sticky" id="sidebar">
              <div className="primary-sidebar-inner">
                <div className="bg-white rounded-lg py-lg-6 pl-lg-6 pr-lg-3 p-4">
                  <ul className="list-inline d-sm-flex align-items-sm-center mb-2">
                    <li className="list-inline-item badge badge-orange mr-2">Featured</li>
                    <li className="list-inline-item badge badge-primary mr-3">For Sale</li>
                  </ul>
                  <h2 className="fs-22 text-heading pt-2">Villa Called Archangel</h2>
                  <p className="mb-2"><i className="fal fa-map-marker-alt mr-1"></i>398 Pete Pascale Pl, New York</p>
                  <div className="d-flex align-items-center">
                    <p className="fs-22 text-heading font-weight-bold mb-0 mr-6">$1.250.000</p>
                    <p className="mb-0">$9350/SqFt</p>
                  </div>
                  <div className="row mt-5">
                    <div className="col-6 mb-3">
                      <div className="media">
                        <div className="p-2 shadow-xxs-1 rounded-lg mr-2 lh-1">
                          <svg className="icon icon-bedroom fs-18 text-primary"><use xlinkHref="#icon-bedroom"></use></svg>
                        </div>
                        <div className="media-body">
                          <h5 className="fs-13 font-weight-normal mb-0">Bedrooms</h5>
                          <p className="mb-0 fs-13 font-weight-bold text-dark">3</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-6 mb-3">
                      <div className="media">
                        <div className="p-2 shadow-xxs-1 rounded-lg mr-2 lh-1">
                          <svg className="icon icon-shower fs-18 text-primary"><use xlinkHref="#icon-shower"></use></svg>
                        </div>
                        <div className="media-body">
                          <h5 className="fs-13 font-weight-normal mb-0">Bathrooms</h5>
                          <p className="mb-0 fs-13 font-weight-bold text-dark">2</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-6 mb-3">
                      <div className="media">
                        <div className="p-2 shadow-xxs-1 rounded-lg mr-2 lh-1">
                          <svg className="icon icon-square fs-18 text-primary"><use xlinkHref="#icon-square"></use></svg>
                        </div>
                        <div className="media-body">
                          <h5 className="fs-13 font-weight-normal mb-0">Area</h5>
                          <p className="mb-0 fs-13 font-weight-bold text-dark">3.6k SqFt</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-6 mb-3">
                      <div className="media">
                        <div className="p-2 shadow-xxs-1 rounded-lg mr-2 lh-1">
                          <svg className="icon icon-Garage fs-18 text-primary"><use xlinkHref="#icon-Garage"></use></svg>
                        </div>
                        <div className="media-body">
                          <h5 className="fs-13 font-weight-normal mb-0">Garage</h5>
                          <p className="mb-0 fs-13 font-weight-bold text-dark">1</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <p className="mb-6 mt-1">Villa Called Archangel is now available to buy off plan in New Islington in Australia.</p>
                  <div className="mr-xl-2">
                    <a href="#" className="btn btn-outline-primary btn-lg btn-block rounded border text-body border-hover-primary hover-white">Schedule a Tour</a>
                    <a href="#" className="btn btn-outline-primary btn-lg btn-block rounded border text-body border-hover-primary hover-white mt-4">Request Info</a>
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </div>
      <section>
        <div className="d-flex bottom-bar-action bottom-bar-action-01 py-2 px-4 bg-gray-01 align-items-center position-fixed fixed-bottom d-sm-none">
          <div className="media align-items-center">
            <img src="images/irene-wallace.png" alt="Irene Wallace" className="mr-4 rounded-circle" />
            <div className="media-body">
              <a href="#" className="d-block text-dark fs-15 font-weight-500 lh-15">Irene Wallace</a>
              <span className="fs-13 lh-2">Sales Excutive</span>
            </div>
          </div>
          <div className="ml-auto">
            <button type="button" className="btn btn-primary fs-18 p-2 lh-1 mr-1 mb-1 shadow-none" data-toggle="modal" data-target="#modal-messenger"><i className="fal fa-comment"></i></button>
            {/* <a href="tel:(+84)2388-969-888" className="btn btn-primary fs-18 p-2 lh-1 mb-1 shadow-none" target="_blank" rel="noreferrer"  ><i className="fal fa-phone"></i></a> */}
          </div>
        </div>
        <div className="modal fade" id="modal-messenger" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header border-0 pb-0">
                <h4 className="modal-title text-heading" id="exampleModalLabel">Contact Form</h4>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body pb-6">
                <div className="form-group mb-2">
                  <input type="text" className="form-control form-control-lg border-0" placeholder="First Name, Last Name" />
                </div>
                <div className="form-group mb-2">
                  <input type="email" className="form-control form-control-lg border-0" placeholder="Your Email" />
                </div>
                <div className="form-group mb-2">
                  <input type="tel" className="form-control form-control-lg border-0" placeholder="Your phone" />
                </div>
                <div className="form-group mb-2">
                  <textarea className="form-control border-0" rows={4}>Hello, I'm interested in Villa Called Archangel</textarea>
                </div>
                <div className="form-group form-check mb-4">
                  <input type="checkbox" className="form-check-input" id="exampleCheck3" />
                  <label className="form-check-label fs-13" htmlFor="exampleCheck3">Egestas fringilla phasellus faucibus scelerisque eleifend donec.</label>
                </div>
                <button type="submit" className="btn btn-primary btn-lg btn-block rounded">Request Info</button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default Single_property_main