import Section_bestprop from '@components/AdvanceSearch'
import React from 'react'

function Section2_props({
  showMap, setshowMap,
  allCounties, allCities, MlsStatus,
  setMlsStatus,
  allPropertySubTypes,
  PropertySubType, setPropertySubType,
  search, setsearch,
  report, setreport,
  City, setCity,
  CountyOrParish, setCountyOrParish,
  BathroomsTotalInteger, setBathroomsTotalInteger,
  BedroomsTotal, setBedroomsTotal,
  minPrice, setminPrice,
  maxPrice, setmaxPrice
}) {

  const reportsDetails = [
    {
      key: "bedroomMain",
      image: "images/bedroom_main.jpg",
      name: "Bedroom Main"
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
      key: "primaryOnMain",
      image: "images/master_main.jpg",
      name: "Primary on Main",
    },
    {
      key: "NewBuilds",
      image: "images/new_build.jpg",
      name: "New Builds"
    },
    {
      key: "newProperty",
      image: "images/new_properties.jpg",
      name: "New Properties"
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
      name: "Pool"
    },
    {
      key: "RanchHouse",
      image: "images/ranch.jpg",
      name: "Ranch Houses"
    },

  ]

  return (

    <>

      <section className="pt-6 pb-5 shadow-xs-1">
        <div className="container px-xxl-8">
          <div className="col-xl-8 col-lg-7 d-md-flex">
            <select value={PropertySubType} onChange={(e) => setPropertySubType(e.target.value)} className="form-control shadow-none form-control-lg selectpicker rounded-right-md-0 rounded-md-top-left-0 rounded-lg-top-left flex-md-1 mt-3 mt-md-0"
              title="All Types" data-style="btn-lg py-2 h-52 border-right bg-white form-select form-select-lg mb-3 " id="type-1"
              name="type" aria-label=" select example" >
              <option value={""} selected>Select Property Type</option>
              {allPropertySubTypes?.PropertySubType?.map((value, i) => {
                return (<option className='' key={i} value={value} >{value}</option>)
              })}
            </select>

            <div className="form-group mb-0 position-relative flex-md-3 mt-3 mt-md-0 barkOrangeBg">
              <input type="text"
                value={search} onChange={(e) => setsearch(e.target.value)}
                className="form-control form-control-lg border-0 shadow-none rounded-left-md-0 pr-8 bg-white placeholder-muted"
                id="key-word-1" name="key-word"
                placeholder="Search..." />
              <button type="submit"
                className="btn position-absolute pos-fixed-right-center p-0 text-heading fs-20 mr-4 shadow-none barkOrangeBg">
                <i className="far fa-search"></i>
              </button>
            </div>
          </div>
        </div>
        <div className="container px-xxl-8">
          <form className="form-inline" id="accordion-5">
            <div className="form-group p-1">
              <label htmlFor="location-2" className="sr-only">County</label>
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
                    return (<option key={i} className='m-2' value={county} >{county}</option>)
                  })
                }
              </select>
            </div>
            <div className="form-group p-1">
              <label htmlFor="location-2" className="sr-only">County</label>
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
                {allCities?.data?.cities?.map((city, i) => {
                  return (<option key={i} value={city} >{city}</option>)
                })}
              </select>
            </div>
            <div className="form-group p-1">
              <label htmlFor="location-2" className="sr-only">Label</label>
              <select
                className="form-control border-0 shadow-xxs-1 bg-transparent font-weight-600 selectpicker"
                title="Any Price"
                data-style="bg-white"
                id="any-price"
                name="any-price"
                onChange={(e: any) => { setreport(e?.target?.value) }}
                value={report}
              >
                <option value={""} >{"Select Label"}</option>
                {reportsDetails?.map((rep, i) => {
                  return (<option key={i} value={rep?.key} >{rep?.name}</option>)
                })}
              </select>
            </div>
            <div className="form-group p-1">
              <label htmlFor="any-price" className="sr-only">Min Price</label>
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
              <label htmlFor="any-price" className="sr-only">Max Price</label>
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
                  900000, 1000000, 1500000, 2000000, 25000000, 30000000, 35000000, 40000000, 50000000]?.map((n) => (<>
                    <option value={n} >{n} {"$"}</option>
                  </>))}
                <option value={""} >Any Price</option>
              </select>
            </div>

            <div className="form-group p-1">
              <label htmlFor="status" className="sr-only">All status</label>
              <select
                className="form-control border-0 shadow-xxs-1 bg-transparent font-weight-600 selectpicker"
                title="All status"
                data-style="bg-white"
                id="status"
                name="status"
                onChange={(e: any) => { setMlsStatus(e?.target?.value) }}
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
              <label htmlFor="status" className="sr-only">BathRoom</label>
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
                  <option key={i} value={n} > {n} +</option>
                </>))}
                <option value={""} >Any Bathroom</option>
              </select>
            </div>
            <div className="form-group p-1">
              <label htmlFor="room" className="sr-only">Room</label>
              <select
                className="form-control border-0 shadow-xxs-1 bg-transparent font-weight-600 selectpicker"
                title="All status"
                data-style="bg-white"
                id="status"
                name="status"
                onChange={(e: any) => { setBedroomsTotal(e?.target?.value) }}
                value={BedroomsTotal}
              >
                <option value={""} >Select BedRoom </option>
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]?.map((n, i) => (<>
                  <option key={i} value={n} >{n} +</option>
                </>))}
                <option value={""} >Any BedRoom</option>
              </select>
            </div>


          </form>
          {/* <form className="property-search property-search-mobile d-lg-none barkOrangeBg">
            <div className="row align-items-lg-center" id="accordion-3-mobile">
              <div className="col-12">
                <div className="form-group mb-0 position-relative">
                  <a href="#advanced-search-filters-3-mobile"
                    className="text-secondary barkOrangeBg btn advanced-search shadow-none pr-3 pl-0 d-flex align-items-center position-absolute pos-fixed-left-center py-0 h-100 border-right collapsed"
                    data-toggle="collapse" data-target="#advanced-search-filters-3-mobile"
                    aria-expanded="true"
                    aria-controls="advanced-search-filters-3-mobile">
                  </a>
                  <input type="text"
                    className="form-control barkOrangeBg form-control-lg border shadow-none pr-9 pl-11 bg-white placeholder-muted"
                    name="key-word"
                    placeholder="Search..." />
                  <button type="submit"
                    className="btn position-absolute barkOrangeBg pos-fixed-right-center p-0 text-heading fs-20 px-3 shadow-none h-100 border-left">
                    <i className="far fa-search"></i>
                  </button>
                </div>
              </div>
            </div>
          </form> */}
        </div>
      </section>
    </>

  )
}

export default Section2_props