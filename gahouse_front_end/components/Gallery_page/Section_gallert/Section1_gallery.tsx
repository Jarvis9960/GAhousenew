import React, { useState } from "react";
import { useQueryClient, useMutation, useQuery } from 'react-query';

import api from "../../../lib/api";

function Section1_gallery({ allCounties, allCities, City, setCity, CountyOrParish, setCountyOrParish, BathroomsTotalInteger, setBathroomsTotalInteger,
  BedroomsTotal, setBedroomsTotal, minPrice, setminPrice, maxPrice, setmaxPrice, MlsStatus, setMlsStatus }) {


  return (
    <section data-aos="fade-up" className="pb-4 page-title shadow">
      <div className="container">
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb pt-6 pt-lg-2 lh-15 pb-5">
            <li className="breadcrumb-item">
              <a href="#">Home</a>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              Listing
            </li>
          </ol>
          <div className="container container-xxl">
            <p>Underneath “Reports” but above “Exclusive Life Style” – there should be a couple of sentences that show that a person can click on these reports and get detailed listings and additionally sign up for any new listings that can come underneath this type of report.</p>
            <br />
            <br />
          </div>
          <h1 className="fs-30 lh-1 mb-0 text-heading font-weight-600">
            Explore Lifestyles
          </h1>
          <div className="mt-6 form-search-01">
            <form className="form-inline mx-n1" id="accordion-5">
              <div className="form-group p-1">
                <label htmlFor="location" className="sr-only">
                  Location
                </label>


              </div>
              <div className="form-group p-1">
                <label htmlFor="any-price" className="sr-only">
                  County
                </label>
                <select
                  className="form-control border-0 shadow-xxs-1 bg-transparent font-weight-600 selectpicker"
                  title="Any Price"
                  data-style="bg-white"
                  id="any-price"
                  name="any-price"
                  onChange={(e: any) => {
                    setCountyOrParish(e?.target?.value)
                  }}
                  value={CountyOrParish}
                >
                  <option value={""} >{"Select County"}</option>
                  {
                    allCounties?.data?.counties?.map((county, i) => {
                      return (<option key={i} value={county} >{county}</option>)

                    })
                  }
                </select>
              </div>
              <div className="form-group p-1">
                <label htmlFor="any-price" className="sr-only">
                  City
                </label>
                <select
                  className="form-control border-0 shadow-xxs-1 bg-transparent font-weight-600 selectpicker"
                  title="Any Price"
                  data-style="bg-white"
                  id="any-price"
                  name="any-price"
                  onChange={(e: any) => {
                    setCity(e?.target?.value)
                  }}
                  value={City}
                >
                  <option value={""} >{"Select City"}</option>
                  {
                    allCities?.data?.cities?.map((city, i) => {
                      return (<option key={i} value={city} >{city}</option>)

                    })
                  }
                </select>
              </div>
              <div className="form-group p-1">
                <label htmlFor="type" className="sr-only">
                  Bathroom
                </label>
                <select
                  className="form-control border-0 shadow-xxs-1 bg-transparent font-weight-600 selectpicker"
                  title="Type"
                  data-style="bg-white"
                  id="type"
                  name="type"
                  onChange={(e: any) => {
                    setBathroomsTotalInteger(e?.target?.value)
                  }}
                  value={BathroomsTotalInteger}
                >
                  <option value={""} >Select Bathroom </option>
                  {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]?.map((n, i) => (<>
                    <option key={i} value={n} > Bathroom {n}</option>
                  </>))}
                  <option value={""} >Any Bathroom</option>
                </select>
              </div>
              <div className="form-group p-1">
                <label htmlFor="status" className="sr-only">
                  BedRoom
                </label>
                <select
                  className="form-control border-0 shadow-xxs-1 bg-transparent font-weight-600 selectpicker"
                  title="All status"
                  data-style="bg-white"
                  id="status"
                  name="status"
                  onChange={(e: any) => {
                    setBedroomsTotal(e?.target?.value)
                  }}
                  value={BedroomsTotal}
                >
                  <option value={""} >Select BedRoom </option>
                  {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]?.map((n, i) => (<>
                    <option key={i} value={n} > BedRoom {n}</option>
                  </>))}
                  <option value={""} >Any BedRoom</option>
                </select>
              </div>

              <div className="form-group p-1">
                <label htmlFor="status" className="sr-only">
                  Status
                </label>
                <select
                  className="form-control border-0 shadow-xxs-1 bg-transparent font-weight-600 selectpicker"
                  title="All status"
                  data-style="bg-white"
                  id="status"
                  name="status"
                  onChange={(e: any) => {
                    setMlsStatus(e?.target?.value)
                  }}
                  value={MlsStatus}
                >
                  <option value={""} >Select Status </option>
                  {["Active", "Active Under Contract", "Pending", "Hold", "Closed"]?.map((n, i) => (<>
                    <option key={i} value={n} >{n} </option>
                  </>))}
                  <option value={""} >Any Status</option>
                </select>
              </div>

              <div className="form-group p-1">
                <label htmlFor="status" className="sr-only">
                  Min Price
                </label>
                <select
                  className="form-control border-0 shadow-xxs-1 bg-transparent font-weight-600 selectpicker"
                  title="All status"
                  data-style="bg-white"
                  id="status"
                  name="status"
                  onChange={(e: any) => {
                    setminPrice(e?.target?.value)
                  }}
                  value={minPrice}
                >
                  <option value={""} >Min Price </option>
                  {[5000, 10000, 50000, 100000, 200000, 300000, 400000, 500000, 700000, 800000,
                    900000, 1000000, 1500000, 2000000, 25000000, 30000000, 35000000, 40000000, 50000000]?.map((n, i) => (<>
                      <option key={i} value={n} > {n} {"$"}</option>
                    </>))}
                  <option value={""} >Any Price</option>
                </select>
              </div>

              <div className="form-group p-1">
                <label htmlFor="status" className="sr-only">
                  Max Price
                </label>
                <select
                  className="form-control border-0 shadow-xxs-1 bg-transparent font-weight-600 selectpicker"
                  title="All status"
                  data-style="bg-white"
                  id="status"
                  name="status"
                  onChange={(e: any) => {
                    setmaxPrice(e?.target?.value)
                  }}
                  value={maxPrice}
                >
                  <option value={""} >Max Price </option>
                  {[5000, 10000, 50000, 100000, 200000, 300000, 400000, 500000, 700000, 800000,
                    900000, 1000000, 1500000, 2000000, 25000000, 30000000, 35000000, 40000000, 50000000]?.map((n, i) => (<>
                      <option key={i} value={n} >{n} {"$"}</option>
                    </>))}
                  <option value={""} >Any Price</option>
                </select>
              </div>



              <div className="form-group p-1">
                <a
                  href="#advanced-search-filters-5"
                  className="btn bg-transparent border-0 shadow-xxs-1 text-gray-light"
                  data-toggle="collapse"
                  data-target="#advanced-search-filters-5"
                  aria-expanded="true"
                  aria-controls="advanced-search-filters-5"
                >
                  <span>More</span>
                  <span className="ml-auto">...</span>
                </a>
              </div>
              <div
                id="advanced-search-filters-5"
                className="row pt-2 collapse p-1 w-100"
                data-parent="#accordion-5"
              >
                <div className="col-sm-6 col-md-4 col-lg-3 py-2">
                  <div className="custom-control custom-checkbox">
                    <input
                      type="checkbox"
                      className="custom-control-input"
                      name="features[]"
                      id="check1-5"
                    />
                    <label
                      className="custom-control-label justify-content-start"
                      htmlFor="check1-5"
                    >
                      Air Conditioning
                    </label>
                  </div>
                </div>
                <div className="col-sm-6 col-md-4 col-lg-3 py-2">
                  <div className="custom-control custom-checkbox">
                    <input
                      type="checkbox"
                      className="custom-control-input"
                      name="features[]"
                      id="check2-5"
                    />
                    <label
                      className="custom-control-label justify-content-start"
                      htmlFor="check2-5"
                    >
                      Laundry
                    </label>
                  </div>
                </div>
                <div className="col-sm-6 col-md-4 col-lg-3 py-2">
                  <div className="custom-control custom-checkbox">
                    <input
                      type="checkbox"
                      className="custom-control-input"
                      name="features[]"
                      id="check4-5"
                    />
                    <label
                      className="custom-control-label justify-content-start"
                      htmlFor="check4-5"
                    >
                      Washer
                    </label>
                  </div>
                </div>
                <div className="col-sm-6 col-md-4 col-lg-3 py-2">
                  <div className="custom-control custom-checkbox">
                    <input
                      type="checkbox"
                      className="custom-control-input"
                      name="features[]"
                      id="check5-5"
                    />
                    <label
                      className="custom-control-label justify-content-start"
                      htmlFor="check5-5"
                    >
                      Barbeque
                    </label>
                  </div>
                </div>
                <div className="col-sm-6 col-md-4 col-lg-3 py-2">
                  <div className="custom-control custom-checkbox">
                    <input
                      type="checkbox"
                      className="custom-control-input"
                      name="features[]"
                      id="check6-5"
                    />
                    <label
                      className="custom-control-label justify-content-start"
                      htmlFor="check6-5"
                    >
                      Lawn
                    </label>
                  </div>
                </div>
                <div className="col-sm-6 col-md-4 col-lg-3 py-2">
                  <div className="custom-control custom-checkbox">
                    <input
                      type="checkbox"
                      className="custom-control-input"
                      name="features[]"
                      id="check7-5"
                    />
                    <label
                      className="custom-control-label justify-content-start"
                      htmlFor="check7-5"
                    >
                      Sauna
                    </label>
                  </div>
                </div>
                <div className="col-sm-6 col-md-4 col-lg-3 py-2">
                  <div className="custom-control custom-checkbox">
                    <input
                      type="checkbox"
                      className="custom-control-input"
                      name="features[]"
                      id="check8-5"
                    />
                    <label
                      className="custom-control-label justify-content-start"
                      htmlFor="check8-5"
                    >
                      WiFi
                    </label>
                  </div>
                </div>
                <div className="col-sm-6 col-md-4 col-lg-3 py-2">
                  <div className="custom-control custom-checkbox">
                    <input
                      type="checkbox"
                      className="custom-control-input"
                      name="features[]"
                      id="check9-5"
                    />
                    <label
                      className="custom-control-label justify-content-start"
                      htmlFor="check9-5"
                    >
                      Dryer
                    </label>
                  </div>
                </div>
                <div className="col-sm-6 col-md-4 col-lg-3 py-2">
                  <div className="custom-control custom-checkbox">
                    <input
                      type="checkbox"
                      className="custom-control-input"
                      name="features[]"
                      id="check10-5"
                    />
                    <label
                      className="custom-control-label justify-content-start"
                      htmlFor="check10-5"
                    >
                      Microwave
                    </label>
                  </div>
                </div>
                <div className="col-sm-6 col-md-4 col-lg-3 py-2">
                  <div className="custom-control custom-checkbox">
                    <input
                      type="checkbox"
                      className="custom-control-input"
                      name="features[]"
                      id="check11-5"
                    />
                    <label
                      className="custom-control-label justify-content-start"
                      htmlFor="check11-5"
                    >
                      Swimming Pool
                    </label>
                  </div>
                </div>
                <div className="col-sm-6 col-md-4 col-lg-3 py-2">
                  <div className="custom-control custom-checkbox">
                    <input
                      type="checkbox"
                      className="custom-control-input"
                      name="features[]"
                      id="check12-5"
                    />
                    <label
                      className="custom-control-label justify-content-start"
                      htmlFor="check12-5"
                    >
                      Window Coverings
                    </label>
                  </div>
                </div>
                <div className="col-sm-6 col-md-4 col-lg-3 py-2">
                  <div className="custom-control custom-checkbox">
                    <input
                      type="checkbox"
                      className="custom-control-input"
                      name="features[]"
                      id="check13-5"
                    />
                    <label
                      className="custom-control-label justify-content-start"
                      htmlFor="check13-5"
                    >
                      Gym
                    </label>
                  </div>
                </div>
                <div className="col-sm-6 col-md-4 col-lg-3 py-2">
                  <div className="custom-control custom-checkbox">
                    <input
                      type="checkbox"
                      className="custom-control-input"
                      name="features[]"
                      id="check14-5"
                    />
                    <label
                      className="custom-control-label justify-content-start"
                      htmlFor="check14-5"
                    >
                      Outdoor Shower
                    </label>
                  </div>
                </div>
                <div className="col-sm-6 col-md-4 col-lg-3 py-2">
                  <div className="custom-control custom-checkbox">
                    <input
                      type="checkbox"
                      className="custom-control-input"
                      name="features[]"
                      id="check15-5"
                    />
                    <label
                      className="custom-control-label justify-content-start"
                      htmlFor="check15-5"
                    >
                      TV Cable
                    </label>
                  </div>
                </div>
                <div className="col-sm-6 col-md-4 col-lg-3 py-2">
                  <div className="custom-control custom-checkbox">
                    <input
                      type="checkbox"
                      className="custom-control-input"
                      name="features[]"
                      id="check16-5"
                    />
                    <label
                      className="custom-control-label justify-content-start"
                      htmlFor="check16-5"
                    >
                      Refrigerator
                    </label>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </nav>
      </div>
    </section>
  );
}

export default Section1_gallery;
