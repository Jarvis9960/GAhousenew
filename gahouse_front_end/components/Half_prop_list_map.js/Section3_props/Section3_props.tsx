import { useRouter } from 'next/router'
import Pagination from '../../Pagination'
import React from 'react'

function Section3_props({ showMap, setshowMap, propertyList, page, setpage, numberOfRow, isLoading, isFetching, isPreviousData }) {

  const rounter = useRouter()
  return (
    <div>
      <section className="position-relative">
        <div className="container-fluid px-0">
          <div className="row no-gutters">
            {showMap && (<>
              <div className="col-xl-6 col-xxl-7 primary-map map-sticky border"
                id="map-sticky">
                <div className="primary-map-inner">
                  <div className="mapbox-gl map-grid-property-01 xl-vh-100" id="map" data-marker-target="#template-properties"
                    data-mapbox-access-token="pk.eyJ1IjoiZHVvbmdsaCIsImEiOiJjanJnNHQ4czExMzhyNDVwdWo5bW13ZmtnIn0.f1bmXQsS6o4bzFFJc8RCcQ">
                  </div>
                </div>
              </div>
            </>)}

            <div data-aos="fade-up" className={` ${showMap && "col-xl-6 col-xxl-5"}  px-3 px-xxl-8 pt-7 pb-11`}>
              <div className="row align-items-sm-center mb-6">
                <div className="col-md-6 col-xl-5 col-xxl-6">
                  <h2 className="fs-15 text-dark mb-0">We found <span className="text-primary">{propertyList?.total}</span> properties
                    available for
                    you
                  </h2>
                </div>
                <div className="col-md-6 mt-6 mt-md-0 col-xl-7 col-xxl-6">
                  <div className="d-flex justify-content-md-end align-items-center">
                    <div className="input-group border rounded input-group-lg w-auto bg-white mr-3">
                      <label className="input-group-text bg-transparent border-0 text-uppercase letter-spacing-093 pr-1 pl-3"
                        htmlFor="inputGroupSelect01"><i
                          className="fas fa-align-left fs-16 pr-2"></i>Sortby:</label>
                      <select className="form-control border-0 bg-transparent shadow-none p-0 selectpicker sortby"
                        data-style="bg-transparent border-0 font-weight-600 btn-lg pl-0 pr-3"
                        id="inputGroupSelect01" name="sortby">
                        <option selected>Top Selling</option>
                        <option value="1">Most Viewed</option>
                        <option value="2">Price(low to high)</option>
                        <option value="3">Price(high to low)</option>
                      </select>
                    </div>
                    <div className="d-none d-md-block">
                      <a className="fs-sm-18 text-dark opacity-2"
                        href="listing-half-map-list-layout-1.html">
                        <i className="fas fa-list"></i>
                      </a>
                      <a className="fs-sm-18 text-dark ml-5" href="#">
                        <i className="fa fa-th-large"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <Pagination data={propertyList} page={page} setpage={setpage} numberOfRow={numberOfRow} isLoading={isLoading} isFetching={isFetching} isPreviousData={isPreviousData}  >
                <div data-aos="fade-up" className="row">
                  {propertyList?.data?.map((property, i) => (<>
                    <div key={i} data-aos="fade-up" onClick={() => rounter.push("/property/" + property?._id)} className="col-md-6 mb-6">
                      <div className="card border-0" data-animate="fadeInUp">
                        <div className="position-relative hover-change-image bg-hover-overlay rounded-lg card-img">
                          <img style={{ background: `url(images/fmls.png)` }} src={(property?.Media.pop()?.MediaURL) ? property?.Media?.pop()?.MediaURL : "images/fmls.png"} alt="Home in Metric Way" />
                          <div className="card-img-overlay d-flex flex-column">
                            <div>
                              {/* Label */}
                              <span className="badge badge-primary">For Sale</span>
                            </div>
                            <div className="mt-auto d-flex hover-image">
                              <ul className="list-inline mb-0 d-flex align-items-end mr-auto">
                                <li className="list-inline-item mr-2" data-toggle="tooltip" title={property?.Media?.length + " Images"}>
                                  <a href="#" className="text-white hover-primary">
                                    <i className="far fa-images"></i><span className="pl-1">{property?.Media?.length}</span>
                                  </a>
                                </li>

                              </ul>
                              <ul className="list-inline mb-0 d-flex align-items-end mr-n3">
                                <li className="list-inline-item mr-3 h-32" data-toggle="tooltip"
                                  title="Wishlist">
                                  <a href="#" className="text-white fs-20 hover-primary">
                                    <i className="far fa-heart"></i>
                                  </a>
                                </li>
                                <li className="list-inline-item mr-3 h-32" data-toggle="tooltip"
                                  title="Compare">
                                  <a href="#" className="text-white fs-20 hover-primary">
                                    <i className="fas fa-exchange-alt"></i>
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                        <div className="card-body pt-3 px-0 pb-1">
                          <h2 className="fs-16 mb-1"><a href="single-property-1.html"
                            className="text-dark hover-primary">{property?.UnparsedAddress}</a>
                          </h2>
                          <p className="font-weight-500 text-gray-light mb-0">{property?.PropertySubType}</p>
                          {/* <p className="font-weight-500 text-gray-light mb-0">{property?.PropertySubType}</p> */}
                          <p className="fs-17 font-weight-bold text-heading mb-0 lh-16">
                            ${property?.ListPrice}
                          </p>
                          <p className="fs-17 font-weight-bold text-heading mb-0 lh-16">
                            {/* {Number(property?.BuildingAreaTotal) > 0 ? Math.round(Number(property?.ListPrice) / Number(property?.BuildingAreaTotal)) : ""} */}
                          </p>
                        </div>
                        <div className="card-footer bg-transparent px-0 pb-0 pt-2">
                          <ul className="list-inline mb-0">
                            <li className="list-inline-item text-gray font-weight-500 fs-13 mr-sm-7"
                              data-toggle="tooltip" title="3 Bedroom">
                              <svg className="icon icon-bedroom fs-18 text-primary mr-1">
                                <use xlinkHref="#icon-bedroom"></use>
                              </svg>
                              {property?.BedroomsTotal} Bed
                            </li>
                            <li className="list-inline-item text-gray font-weight-500 fs-13 mr-sm-7"
                              data-toggle="tooltip" title="3 Bathrooms">
                              <svg className="icon icon-shower fs-18 text-primary mr-1">
                                <use xlinkHref="#icon-shower"></use>
                              </svg>
                              {property?.BathroomsTotalInteger} Bath
                            </li>
                            <li className="list-inline-item text-gray font-weight-500 fs-13" data-toggle="tooltip"
                              title="Size">
                              <svg className="icon icon-square fs-18 text-primary mr-1">
                                <use xlinkHref="#icon-square"></use>
                              </svg>
                              {Number(property?.BuildingAreaTotal) > 0 ? Math.round(Number(property?.ListPrice) / Number(property?.BuildingAreaTotal)) + " Sq.Ft" : ""}
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </>))}

                </div>
              </Pagination>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Section3_props