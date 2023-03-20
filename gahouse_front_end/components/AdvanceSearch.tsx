import { Icon } from '@iconify/react';
import api from 'lib/api';
import Link from 'next/link';
import { useRouter } from 'next/router'
import React from 'react'
import { useQuery } from 'react-query';

function AdvanceSearch({
  MlsStatus, setMlsStatus,
  PropertySubType, setPropertySubType,
  search, setsearch,
  report, setreport,
  City, setCity,
  CountyOrParish, setCountyOrParish,
  BathroomsTotalInteger, setBathroomsTotalInteger,
  BedroomsTotal, setBedroomsTotal,
  minPrice, setminPrice,
  setListingId, ListingId,
  maxPrice, setmaxPrice, refetchProperty }) {

  const reportsDetails = [
    {
      key: "primaryOnMain",
      image: "images/master_main.jpg",
      name: "Primary on Main",
    },
    {
      key: "bedroomMain",
      image: "images/bedroom_main.jpg",
      name: "Bedroom On Main"
    },
    {
      key: "gatedCommunities",
      image: "images/gated.jpg",
      name: "Gated Communities"
    },
    {
      key: "highRise",
      image: "images/high_rise.jpg",
      name: "High Rise"
    },
    {
      key: "investorProperties",
      image: "images/investor1.jpg",
      name: "Investor Properties"
    },
    {
      key: "waterfront",
      image: "images/lake.jpg",
      name: "Lake / Waterfront"
    },
    {
      key: "luxury",
      image: "images/luxury.jpg",
      name: "Luxury Home"
    },
    {
      key: "NewBuilds",
      image: "images/new_build.jpg",
      name: "New Constructions"
    },
    {
      key: "newProperty",
      image: "images/new_properties.jpg",
      name: "New In Market"
    },
    {
      key: "olderProperty",
      image: "images/older_properties.jpg",
      name: "Older Properties"
    },
    {
      key: "recenltySoldProperty",
      image: "images/housebg1.jpg",
      name: "Recenlty Sold Properties"
    },
    {
      key: "pools",
      image: "images/pool_private.jpg",
      name: "Swimming Pool"
    },
    {
      key: "RanchHouse",
      image: "images/ranch.jpg",
      name: "Ranch Houses"
    },

  ]
  const router = useRouter()
  const { data: allCounties, error } = useQuery(
    ["Counties"], () => api.get("/totalCountyOrparis"), {
    refetchOnWindowFocus: false,
    refetchIntervalInBackground: false,
    refetchOnMount: false,
    refetchOnReconnect: false,
    keepPreviousData: true,
    onError: ({ response }) => {
      console.log("user", response)
    }
  })
  const { data: allCities } = useQuery(
    ["cities", CountyOrParish], () => api.get("/totalCities?CountyOrParish=" + CountyOrParish), {
    refetchOnWindowFocus: false,
    refetchIntervalInBackground: false,
    refetchOnMount: false,
    refetchOnReconnect: false,
    keepPreviousData: true,
    onError: ({ response }) => {
      console.log("user", response)
    }
  })

  const { data: allPropertySubTypes } = useQuery(
    ["allPropertySubTypes", CountyOrParish], () => api.get("/propertySubType"), {
    refetchOnWindowFocus: false,
    refetchIntervalInBackground: false,
    refetchOnMount: false,
    refetchOnReconnect: false,
    keepPreviousData: true,
    onError: ({ response }) => {
      console.log("user", response)
    }
  })
  return (
    <div className=''>
      <div>
        <div data-aos="fade-up" className=" container shadow-sm-2 rounded bg-white py-6"
          data-animate="fadeInUp">

          <form className=" py-lg-0 px-2 d-block">
            <div className="row d-flex justify-content-center flex-wrap align-items-center ml-lg-0" id="accordion-3">
              <div className="col-md-6 col-lg-3 order-1">
                <label className="text-uppercase font-weight-500 letter-spacing-093 mb-1 d-flex justify-content-between">Select County  </label>
                <select
                  className="form-control border-0 shadow-xxs-1 bg-transparent  selectpicker fw-light"
                  title="Any Price"
                  data-style="bg-white"
                  id="setCountyOrParish"
                  name="any-price"
                  placeholder={'Select County'}
                  onChange={(e: any) => { setCountyOrParish(e?.target?.value) }}
                  value={CountyOrParish}>
                  <option value={""} >{"Select County"}</option>
                  {allCounties?.data?.counties?.map((county, i) => {
                    return (<option key={i} className='m-2 p-1' value={county} >{county}</option>)
                  })}
                </select>
              </div>

              <div className="col-md-6 col-lg-3 order-1">
                <label className="text-uppercase font-weight-500 letter-spacing-093 mb-1">Select City</label>
                <select
                  className="form-control border-0 shadow-xxs-1 bg-transparent  selectpicker fw-light"

                  data-style="bg-white"
                  id="any-price"
                  name="any-price"
                  placeholder='Select County'
                  onChange={(e: any) => { setCity(e?.target?.value) }}
                  value={City}
                  title="All Cities" >
                  <option value={""} >{"Select City"}</option>
                  {allCities?.data?.cities?.map((city, i) => {
                    return (<option key={i} value={city} >{city}</option>)
                  })}
                </select>
              </div>
              <div className="col-md-6 col-lg-2 order-1">
                <label className="text-uppercase font-weight-500 letter-spacing-093">Mls Number</label>
                <div className="position-relative">
                  <input type="text" name="search"
                    value={ListingId}
                    onChange={(e: any) => setListingId(e.target.value)}
                    className="form-control bg-transparent shadow-none border-top-0 border-right-0 fw-light border-left-0 border-bottom rounded-0 h-24 lh-17 pl-0 pr-4  border-color-input placeholder-muted"
                    placeholder="Search Mls Number..." />
                  <i className="far fa-search position-absolute pos-fixed-right-center pr-0 fs-18 mt-n3"></i>
                </div>
              </div>

              {/* {(router.pathname == "/reports" || router.pathname == "/property") && (<> */}
              {/* <div className="col-md-6 col-lg-2 order-1">
                <label className="text-uppercase font-weight-500 letter-spacing-093">Search</label>
                <div className="position-relative">
                  <input type="text" name="search" value={search} onChange={(e) => setsearch(e.target.value)}
                    className="form-control bg-transparent shadow-none border-top-0 border-right-0 border-left-0 border-bottom rounded-0 h-24 lh-17 pl-0 pr-4  border-color-input placeholder-muted"
                    placeholder="search property..." />
                  <i className="far fa-search position-absolute pos-fixed-right-center pr-0 fs-18 mt-n3"></i>
                </div>
              </div> */}
              {/* </>)} */}

              <div className="col-md-6 col-lg-2 order-1">
                <div
                  className="btn  btn-accent  text-uppercase font-weight-500 letter-spacing-093 fs-15 shadow-none text-center  rounded-0  text-left d-flex align-items-center collapsed"
                  data-toggle="collapse" data-target="#advanced-search-filters-3" aria-expanded="true"
                  aria-controls="advanced-search-filters-3 ">
                  <p className='text-uppercase text-start text-black'>Advanced
                    <br />
                    Search</p>
                  <p><Icon icon="uiw:setting" color="#e4ba56" width={25} /></p>
                </div>
              </div>
              {/* {router.pathname !== "/reports" && router.pathname !== "/property" && (<> */}
              <div className="col-md-6 col-lg-2 order-1">
                {router.pathname !== "/reports" && router.pathname !== "/property" && (<>
                  <Link href={`/property?PropertySubType=${PropertySubType}&search=${search}&report=${report}&City=${City}&CountyOrParish=${CountyOrParish}&BathroomsTotalInteger=${BathroomsTotalInteger}&BedroomsTotal=${BedroomsTotal}&minPrice=${minPrice}&maxPrice=${maxPrice}&ListingId=${ListingId}`} >
                    <div
                      className="btn btn-primary shadow-none fs-16  w-100 py-lg-3 text-uppercase ">
                      Search
                    </div>
                  </Link>
                </>)}

                {(router.pathname == "/reports" || router.pathname == "/property") && (<>
                  {/* <Link href={`/property?PropertySubType=${PropertySubType}&search=${search}&report=${report}&City=${City}&CountyOrParish=${CountyOrParish}&BathroomsTotalInteger=${BathroomsTotalInteger}&BedroomsTotal=${BedroomsTotal}&minPrice=${minPrice}&maxPrice=${maxPrice}&ListingId=${ListingId}`} > */}
                  <div onClick={refetchProperty}
                    className="btn btn-primary shadow-none fs-16  w-100 py-lg-3">
                    Search
                  </div>
                  {/* </Link> */}
                </>)}

              </div>
              {/* </>)} */}

              <div id="advanced-search-filters-3" className="col-12 py-sm-4 order-4 order-sm-5 collapse"
                data-parent="#accordion-3">
                <div className="row">

                  <div className="col-sm-6 col-lg-3 pt-6">
                    <label className="text-uppercase font-weight-500 letter-spacing-093 mb-1">Min Price </label>
                    <select
                      className="form-control border-0 shadow-xxs-1 bg-transparent  selectpicker fw-light"
                      title="All status"
                      data-style="bg-white"
                      id="status"
                      name="status"
                      onChange={(e: any) => { setminPrice(e?.target?.value) }}
                      value={minPrice}
                    >
                      <option value={""} >Min Price </option>
                      {[50000, 100000, 200000, 300000, 400000, 500000,600000 , 700000, 800000,
                        900000, 1000000, 1500000, 2000000, 25000000, 30000000, 35000000, 40000000, 50000000]?.map((n, i) => (<>
                          <option key={i} value={n} > {n} {"$"}</option>
                        </>))}
                    </select>

                  </div>
                  <div className="col-sm-6 col-lg-3 pt-6">
                    <label className="text-uppercase font-weight-500 letter-spacing-093 mb-1">Max Price</label>
                    <select className="form-control selectpicker bg-transparent border-bottom rounded-0 border-color-input fw-light"
                      title="All Bathrooms" data-style="p-0 h-24 lh-17 text-dark" name="bathroom"
                      onChange={(e: any) => { setmaxPrice(e?.target?.value) }} value={maxPrice}>
                      <option value={""} >Max Price </option>
                      {[ 50000, 100000, 200000, 300000, 400000, 500000,600000, 700000, 800000,
                        900000, 1000000, 1500000, 2000000, 25000000, 30000000, 35000000, 40000000, 50000000]?.map((n) => (<>
                          <option value={n} >{n} {"$"}</option>
                        </>))}
                    </select>
                  </div>
                  {router.pathname !== "reports" && (<>
                    <div className="col-sm-6 col-lg-3 pt-6">
                      <label className="text-uppercase font-weight-500 letter-spacing-093 mb-1">Tags</label>
                      <select className="form-control selectpicker bg-transparent border-bottom rounded-0 border-color-input fw-light"
                        title="Label" data-style="p-0 h-24 lh-17 text-dark" name="bathroom"
                        onChange={(e: any) => { setreport(e?.target?.value) }}
                        value={report} >
                        <option value={""} >{"Select Tag"}</option>
                        {reportsDetails?.map((rep, i) => {
                          return (<option key={i} value={rep?.key} >{rep?.name}</option>)
                        })}
                      </select>
                    </div>
                  </>)}
                  <div className="col-sm-6 col-lg-3 pt-6">
                    <label className="text-uppercase font-weight-500 letter-spacing-093 mb-1">Property Type</label>
                    <select className="form-control selectpicker bg-transparent border-bottom rounded-0 border-color-input fw-light"
                      name="areas"
                      value={PropertySubType} onChange={(e) => setPropertySubType(e.target.value)}
                      title="All Areas" data-style="p-0 h-24 lh-17 text-dark">
                      <option value={""} selected>Select Property Type</option>
                      {allPropertySubTypes?.data?.PropertySubType?.map((value, i) => {
                        return (<option className='' key={i} value={value} >{value}</option>)
                      })}
                    </select>
                  </div>
                </div>
                <div className="row">
                  <div className="col-sm-6 col-lg-3 pt-6">
                    <label className="text-uppercase font-weight-500 letter-spacing-093 mb-1">Bathrooms</label>
                    <select className="form-control selectpicker bg-transparent border-bottom rounded-0 border-color-input fw-light"
                      name="bedroom"
                      title="All Bathrooms" data-style="p-0 h-24 lh-17 text-dark"
                      onChange={(e: any) => { setBathroomsTotalInteger(e?.target?.value) }}
                      value={BathroomsTotalInteger}>
                      <option value={""} >1+ </option>
                      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]?.map((n, i) => (<>
                        <option key={i} value={n} > {n} +</option>
                      </>))}
                    </select>
                  </div>
                  <div className="col-sm-6 col-lg-3 pt-6">
                    <label className="text-uppercase font-weight-500 letter-spacing-093 mb-1">BedRooms</label>
                    <select className="form-control selectpicker bg-transparent border-bottom rounded-0 border-color-input fw-light"
                      title="All BedRooms" data-style="p-0 h-24 lh-17 text-dark" name="bathroom"
                      onChange={(e: any) => { setBedroomsTotal(e?.target?.value) }}
                      value={BedroomsTotal}>
                      <option value={""} >1+</option>
                      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]?.map((n, i) => (<>
                        <option key={i} value={n} >{n} +</option>
                      </>))}
                    </select>
                  </div>

                  <div className="col-sm-6 col-lg-3 pt-6">
                    <label className="text-uppercase font-weight-500 letter-spacing-093 mb-1">Status</label>
                    <select className="form-control selectpicker bg-transparent border-bottom rounded-0 border-color-input fw-light"
                      title="Status" data-style="p-0 h-24 lh-17 text-dark" name="bathroom"
                      onChange={(e: any) => { setMlsStatus(e?.target?.value) }}
                      value={MlsStatus}>
                      <option value={""} >Select Status </option>
                      {["Active", "Active Under Contract", "Pending", "Hold", "Closed"]?.map((n, i) => (<>
                        <option key={i} value={n} >{n} </option>
                      </>))}
                    </select>
                  </div>




                </div>
              </div>

            </div>
          </form>
        </div>
      </div >
    </div >
  )
}

export default AdvanceSearch