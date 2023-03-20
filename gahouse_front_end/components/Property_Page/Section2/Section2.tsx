import { useState } from "react";
import Additional_info from "./Additional_info";
import Address_info from "./Address_info";
import Exterior_features from "./Exterior_features";
import Interior_features from "./Interior_features";
import ListingDetails from "./ListingDetails";
import School_info from "./School_info";
import { useQuery } from "react-query";
import api from "lib/api";
import Section_contact_info from "./Section_contact_info";
import Section_similar_props from "./Section_similar_props";
import Section_review from "./Section_review";
import { DonutChat } from "./DonutChart";
import TopDetailsSecction from "./TopDetailsSecction";
import RequestInfo from "./RequestInfo";
import Gellary_sec1 from "../Section1_gallery/Gellary_sec1";
import MapLocation from "./MapLocation";
import dynamic from 'next/dynamic'
import Image from "next/image";
import Link from "next/link";
import { Icon } from "@iconify/react";
import ReportsLabels from "@components/Labels";
import AdvanceSearch from "@components/AdvanceSearch";
import TopSectionPriceAndLabels from "./TopSectionPriceAndLabels";





function Section2({ data }) {

  const DynamicMapLocation = dynamic(() => import("./MapLocation"), {
    ssr: false,
  })

  const [report, setreport] = useState('')
  const [CountyOrParish, setCountyOrParish] = useState("")
  const [City, setCity] = useState("")
  const [BathroomsTotalInteger, setBathroomsTotalInteger] = useState("")
  const [BedroomsTotal, setBedroomsTotal] = useState("")
  const [minPrice, setminPrice] = useState("")
  const [maxPrice, setmaxPrice] = useState("")
  const [MlsStatus, setMlsStatus] = useState("")
  const [page, setpage] = useState(1)
  const [numberOfRow, setnumberOfRow] = useState(10)
  const [search, setsearch] = useState('')
  const [PropertySubType, setPropertySubType] = useState("")
  const [showMap, setshowMap] = useState(true)
  const [school, setschool] = useState("")
  const [ListingId, setListingId] = useState("")

  return (
    <div className="primary-content " data-aos="fade-up">
      <AdvanceSearch PropertySubType={PropertySubType} setPropertySubType={setPropertySubType}
        search={search} setsearch={setsearch}
        report={report} setreport={setreport}
        City={City} setCity={setCity}
        CountyOrParish={CountyOrParish} setCountyOrParish={setCountyOrParish}
        BathroomsTotalInteger={BathroomsTotalInteger} setBathroomsTotalInteger={setBathroomsTotalInteger}
        BedroomsTotal={BedroomsTotal} setBedroomsTotal={setBedroomsTotal}
        minPrice={minPrice} setminPrice={setminPrice}
        maxPrice={maxPrice} setmaxPrice={setmaxPrice}
        setListingId={setListingId} ListingId={ListingId}
        MlsStatus={MlsStatus} setMlsStatus={setMlsStatus} refetchProperty={undefined} />

      <div className="container">
        <TopSectionPriceAndLabels data={data} />
        <div className="row">


          <div className="col-lg-8 pr-xl-7 mt-2 ">

            <TopDetailsSecction data={data} />
            <section className="pt-6 pb-4" data-aos="fade-up">

              <DynamicMapLocation Longitude={data?.Longitude} Latitude={data?.Latitude} />
            </section>
            <section className="pt-6 pb-4">

              <Address_info data={data} />

            </section>
            <section className="pt-6 pb-4">

              <School_info data={data} />

            </section>

            <section className="pt-6 pb-4">

              <Interior_features data={data} />

            </section>
            <section className="pt-6 pb-4">

              <Exterior_features data={data} />

            </section>
            <section className="pt-6 pb-4">

              <Additional_info data={data} />

            </section>
            <section className="pt-6 border-bottom pb-4">
              <ListingDetails data={data} />
            </section>

            <DonutChat ListPrice={data?.ListPrice} />



            <section className="pt-6" data-aos="fade-up">
              <h4 className="fs-22 text-heading mb-5">What is Nearby?</h4>
              <div data-aos="fade-up" className="mt-4">
                <h6 className="mb-0 mt-5">
                  <a
                    href="#"
                    className="fs-16 lh-2 text-heading border-bottom border-primary pb-1"
                  >
                    Restaurants
                  </a>
                </h6>
                <div data-aos="fade-up" className="border-top pt-2">
                  <div className="py-3 border-bottom d-sm-flex justify-content-sm-between">
                    <div className="media align-items-sm-center d-sm-flex d-block">
                      <a href="#" className="hover-shine">
                        {/* <img
                          src="images/single-detail-property-02.jpg"
                          className="mr-sm-4 rounded-lg w-sm-90"
                          alt="Bacchanal Buffet-Temporarily Closed"
                        /> */}
                      </a>
                      <div className="mt-sm-0 mt-2">
                        <h4 className="my-0">
                          <a
                            href="#"
                            className="lh-186 fs-15 text-heading hover-primary"
                          >
                            Bacchanal Buffet-Temporarily Closed
                          </a>
                        </h4>
                        <p className="lh-186 fs-15 font-weight-500 mb-0">
                          3570 S Las Vegas BlvdLas Vegas, NV 89109
                        </p>
                      </div>
                    </div>
                    <div data-aos="fade-up" className="text-lg-right mt-lg-0 mt-2">
                      <p className="mb-2 mb-0 lh-13">120 Reviews</p>
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-star-fill ms-1 w-18px h-18 d-inline-flex justify-content-center align-items-center rate-bg-blue text-white fs-12 rounded-sm" viewBox="0 0 16 16">
                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                      </svg>
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-star-fill ms-1 w-18px h-18 d-inline-flex justify-content-center align-items-center rate-bg-blue text-white fs-12 rounded-sm" viewBox="0 0 16 16">
                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                      </svg>
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-star-fill ms-1 w-18px h-18 d-inline-flex justify-content-center align-items-center rate-bg-blue text-white fs-12 rounded-sm" viewBox="0 0 16 16">
                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                      </svg>
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-star-fill ms-1 w-18px h-18 d-inline-flex justify-content-center align-items-center rate-bg-blue text-white fs-12 rounded-sm" viewBox="0 0 16 16">
                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                      </svg>
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-star-fill ms-1 w-18px h-18 d-inline-flex justify-content-center align-items-center rate-bg-blue text-white fs-12 rounded-sm" viewBox="0 0 16 16">
                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                      </svg>
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-star-fill ms-1 w-18px h-18 d-inline-flex justify-content-center align-items-center rate-bg-blue text-white fs-12 rounded-sm" viewBox="0 0 16 16">
                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                      </svg>
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-star-fill ms-1 w-18px h-18 d-inline-flex justify-content-center align-items-center rate-bg-blue text-white fs-12 rounded-sm" viewBox="0 0 16 16">
                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                      </svg>
                    </div>
                  </div>
                  <div data-aos="fade-up" className="py-3 border-bottom d-sm-flex justify-content-sm-between">
                    <div className="media align-items-sm-center d-sm-flex d-block">
                      <a href="#" className="hover-shine">
                        {/* <img
                          src="images/single-detail-property-03.jpg"
                          className="mr-sm-4 rounded-lg w-sm-90"
                          alt="Bacchanal Buffet-Temporarily Closed"
                        /> */}
                      </a>
                      <div className="mt-sm-0 mt-2">
                        <h4 className="my-0">
                          <a
                            href="#"
                            className="lh-186 fs-15 text-heading hover-primary"
                          >
                            Bacchanal Buffet-Temporarily Closed
                          </a>
                        </h4>
                        <p className="lh-186 fs-15 font-weight-500 mb-0">
                          3084 S Highland DrSte C
                        </p>
                      </div>
                    </div>
                    <div data-aos="fade-up" className="text-lg-right mt-lg-0 mt-2">
                      <p className="mb-2 mb-0 lh-13">120 Reviews</p>
                      <div className="text-lg-right mt-lg-0 mt-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-star-fill ms-1 w-18px h-18 d-inline-flex justify-content-center align-items-center rate-bg-blue text-white fs-12 rounded-sm opacity-7" viewBox="0 0 16 16">
                          <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-star-fill ms-1 w-18px h-18 d-inline-flex justify-content-center align-items-center rate-bg-blue text-white fs-12 rounded-sm opacity-7" viewBox="0 0 16 16">
                          <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-star-fill ms-1 w-18px h-18 d-inline-flex justify-content-center align-items-center rate-bg-blue text-white fs-12 rounded-sm opacity-7" viewBox="0 0 16 16">
                          <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-star-fill ms-1 w-18px h-18 d-inline-flex justify-content-center align-items-center rate-bg-blue text-white fs-12 rounded-sm opacity-7" viewBox="0 0 16 16">
                          <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-star-fill ms-1 w-18px h-18 d-inline-flex justify-content-center align-items-center rate-bg-blue text-white fs-12 rounded-sm opacity-1" viewBox="0 0 16 16">
                          <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                        </svg>
                      </div>
                    </div>
                  </div>
                  <div data-aos="fade-up" className="py-3 border-bottom d-sm-flex justify-content-sm-between">
                    <div className="media align-items-sm-center d-sm-flex d-block">
                      <a href="#" className="hover-shine">
                        {/* <img
                          src="images/single-detail-property-04.jpg"
                          className="mr-sm-4 rounded-lg w-sm-90"
                          alt="Bacchanal Buffet-Temporarily Closed"
                        /> */}
                      </a>
                      <div className="mt-sm-0 mt-2">
                        <h4 className="my-0">
                          <a
                            href="#"
                            className="lh-186 fs-15 text-heading hover-primary"
                          >
                            Bacchanal Buffet-Temporarily Closed
                          </a>
                        </h4>
                        <p className="lh-186 fs-15 font-weight-500 mb-0">
                          3570 S Las Vegas BlvdLas Vegas, NV 89109
                        </p>
                      </div>
                    </div>
                    <div data-aos="fade-up" className="text-lg-right mt-lg-0 mt-2">
                      <p className="mb-2 mb-0 lh-13">120 Reviews</p>
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-star-fill ms-1 w-18px h-18 d-inline-flex justify-content-center align-items-center rate-bg-blue text-white fs-12 rounded-sm" viewBox="0 0 16 16">
                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                      </svg>
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-star-fill ms-1 w-18px h-18 d-inline-flex justify-content-center align-items-center rate-bg-blue text-white fs-12 rounded-sm" viewBox="0 0 16 16">
                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                      </svg>
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-star-fill ms-1 w-18px h-18 d-inline-flex justify-content-center align-items-center rate-bg-blue text-white fs-12 rounded-sm" viewBox="0 0 16 16">
                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                      </svg>
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-star-fill ms-1 w-18px h-18 d-inline-flex justify-content-center align-items-center rate-bg-blue text-white fs-12 rounded-sm" viewBox="0 0 16 16">
                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                      </svg>
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-star-fill ms-1 w-18px h-18 d-inline-flex justify-content-center align-items-center rate-bg-blue text-white fs-12 rounded-sm" viewBox="0 0 16 16">
                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                      </svg>
                    </div>
                  </div>
                </div>
                <h6 data-aos="fade-up" className="mb-0 mt-5">
                  <a
                    href="#"
                    className="fs-16 lh-2 text-heading border-bottom border-primary pb-1"
                  >
                    Education
                  </a>
                </h6>
                <div data-aos="fade-up" className="border-top pt-2">
                  <div className="py-3 border-bottom d-sm-flex justify-content-sm-between">
                    <div className="media align-items-sm-center d-sm-flex d-block">
                      <a href="#" className="hover-shine">
                        {/* <img
                          src="images/single-detail-property-07.jpg"
                          className="mr-sm-4 rounded-lg w-sm-90"
                          alt="Bacchanal Buffet-Temporarily Closed"
                        /> */}
                      </a>
                      <div className="mt-sm-0 mt-2">
                        <h4 className="my-0">
                          <a
                            href="#"
                            className="lh-186 fs-15 text-heading hover-primary"
                          >
                            Safe Direction Firearms Training
                          </a>
                        </h4>
                        <p className="lh-186 fs-15 font-weight-500 mb-0">
                          3570 S Las Vegas BlvdLas Vegas, NV 89109
                        </p>
                      </div>
                    </div>
                    <div data-aos="fade-up" className="text-lg-right mt-lg-0 mt-2">
                      <p className="mb-2 mb-0 lh-13">120 Reviews</p>
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-star-fill ms-1 w-18px h-18 d-inline-flex justify-content-center align-items-center rate-bg-blue text-white fs-12 rounded-sm opacity-7" viewBox="0 0 16 16">
                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                      </svg>
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-star-fill ms-1 w-18px h-18 d-inline-flex justify-content-center align-items-center rate-bg-blue text-white fs-12 rounded-sm opacity-7" viewBox="0 0 16 16">
                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                      </svg>
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-star-fill ms-1 w-18px h-18 d-inline-flex justify-content-center align-items-center rate-bg-blue text-white fs-12 rounded-sm opacity-7" viewBox="0 0 16 16">
                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                      </svg>
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-star-fill ms-1 w-18px h-18 d-inline-flex justify-content-center align-items-center rate-bg-blue text-white fs-12 rounded-sm opacity-7" viewBox="0 0 16 16">
                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                      </svg>
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-star-fill ms-1 w-18px h-18 d-inline-flex justify-content-center align-items-center rate-bg-blue text-white fs-12 rounded-sm opacity-1" viewBox="0 0 16 16">
                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                      </svg>
                    </div>
                  </div>
                  <div data-aos="fade-up" className="py-3 border-bottom d-sm-flex justify-content-sm-between">
                    <div className="media align-items-sm-center d-sm-flex d-block">
                      <a href="#" className="hover-shine">
                        {/* <img
                          src="images/single-detail-property-08.jpg"
                          className="mr-sm-4 rounded-lg w-sm-90"
                          alt="Bacchanal Buffet-Temporarily Closed"
                        /> */}
                      </a>
                      <div className="mt-sm-0 mt-2">
                        <h4 className="my-0">
                          <a
                            href="#"
                            className="lh-186 fs-15 text-heading hover-primary"
                          >
                            Rabbi Shai Specht-Sandler
                          </a>
                        </h4>
                        <p className="lh-186 fs-15 font-weight-500 mb-0">
                          3084 S Highland DrSte C
                        </p>
                      </div>
                    </div>
                    <div data-aos="fade-up" className="text-lg-right mt-lg-0 mt-2">
                      <p className="mb-2 mb-0 lh-13">120 Reviews</p>
                      <div className="text-lg-right mt-lg-0 mt-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-star-fill ms-1 w-18px h-18 d-inline-flex justify-content-center align-items-center rate-bg-blue text-white fs-12 rounded-sm opacity-7" viewBox="0 0 16 16">
                          <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-star-fill ms-1 w-18px h-18 d-inline-flex justify-content-center align-items-center rate-bg-blue text-white fs-12 rounded-sm opacity-7" viewBox="0 0 16 16">
                          <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-star-fill ms-1 w-18px h-18 d-inline-flex justify-content-center align-items-center rate-bg-blue text-white fs-12 rounded-sm opacity-7" viewBox="0 0 16 16">
                          <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-star-fill ms-1 w-18px h-18 d-inline-flex justify-content-center align-items-center rate-bg-blue text-white fs-12 rounded-sm opacity-7" viewBox="0 0 16 16">
                          <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-star-fill ms-1 w-18px h-18 d-inline-flex justify-content-center align-items-center rate-bg-blue text-white fs-12 rounded-sm opacity-1" viewBox="0 0 16 16">
                          <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                        </svg>
                      </div>
                    </div>
                  </div>
                  <div data-aos="fade-up" className="py-3 border-bottom d-sm-flex justify-content-sm-between">
                    <div className="media align-items-sm-center d-sm-flex d-block">
                      <a href="#" className="hover-shine">
                        {/* <img
                          src="images/single-detail-property-09.jpg"
                          className="mr-sm-4 rounded-lg w-sm-90"
                          alt="Bacchanal Buffet-Temporarily Closed"
                        /> */}
                      </a>
                      <div className="mt-sm-0 mt-2">
                        <h4 className="my-0">
                          <a
                            href="#"
                            className="lh-186 fs-15 text-heading hover-primary"
                          >
                            Safe Direction Firearms Training
                          </a>
                        </h4>
                        <p className="lh-186 fs-15 font-weight-500 mb-0">
                          3570 S Las Vegas BlvdLas Vegas, NV 89109
                        </p>
                      </div>
                    </div>
                    <div data-aos="fade-up" className="text-lg-right mt-lg-0 mt-2">
                      <p className="mb-2 mb-0 lh-13">120 Reviews</p>
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-star-fill ms-1 w-18px h-18 d-inline-flex justify-content-center align-items-center rate-bg-blue text-white fs-12 rounded-sm" viewBox="0 0 16 16">
                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                      </svg>
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-star-fill ms-1 w-18px h-18 d-inline-flex justify-content-center align-items-center rate-bg-blue text-white fs-12 rounded-sm" viewBox="0 0 16 16">
                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                      </svg>
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-star-fill ms-1 w-18px h-18 d-inline-flex justify-content-center align-items-center rate-bg-blue text-white fs-12 rounded-sm" viewBox="0 0 16 16">
                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                      </svg>
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-star-fill ms-1 w-18px h-18 d-inline-flex justify-content-center align-items-center rate-bg-blue text-white fs-12 rounded-sm" viewBox="0 0 16 16">
                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                      </svg>
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-star-fill ms-1 w-18px h-18 d-inline-flex justify-content-center align-items-center rate-bg-blue text-white fs-12 rounded-sm" viewBox="0 0 16 16">
                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                      </svg>
                    </div>
                  </div>
                </div>
                <h6 data-aos="fade-up" className="mb-0 mt-5">
                  <a
                    href="#"
                    className="fs-16 lh-2 text-heading border-bottom border-primary pb-1"
                  >
                    Health & Medical
                  </a>
                </h6>
                <div data-aos="fade-up" className="border-top pt-2">
                  <div className="py-3 border-bottom d-sm-flex justify-content-sm-between">
                    <div className="media align-items-sm-center d-sm-flex d-block">
                      <a href="#" className="hover-shine">
                        {/* <Image
                          fill
                          src="/images/single-detail-property-10.jpg"
                          className="mr-sm-4 rounded-lg w-sm-90"
                          alt="Bacchanal Buffet-Temporarily Closed"
                        /> */}
                      </a>
                      <div className="mt-sm-0 mt-2">
                        <h4 className="my-0">
                          <a
                            href="#"
                            className="lh-186 fs-15 text-heading hover-primary"
                          >
                            Coppola David F DC & Assoc
                          </a>
                        </h4>
                        <p className="lh-186 fs-15 font-weight-500 mb-0">
                          3570 S Las Vegas BlvdLas Vegas, NV 89109
                        </p>
                      </div>
                    </div>
                    <div data-aos="fade-up" className="text-lg-right mt-lg-0 mt-2">
                      <p className="mb-2 mb-0 lh-13">120 Reviews</p>
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-star-fill ms-1 w-18px h-18 d-inline-flex justify-content-center align-items-center rate-bg-blue text-white fs-12 rounded-sm" viewBox="0 0 16 16">
                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                      </svg>
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-star-fill ms-1 w-18px h-18 d-inline-flex justify-content-center align-items-center rate-bg-blue text-white fs-12 rounded-sm" viewBox="0 0 16 16">
                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                      </svg>
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-star-fill ms-1 w-18px h-18 d-inline-flex justify-content-center align-items-center rate-bg-blue text-white fs-12 rounded-sm" viewBox="0 0 16 16">
                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                      </svg>
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-star-fill ms-1 w-18px h-18 d-inline-flex justify-content-center align-items-center rate-bg-blue text-white fs-12 rounded-sm" viewBox="0 0 16 16">
                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                      </svg>
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-star-fill ms-1 w-18px h-18 d-inline-flex justify-content-center align-items-center rate-bg-blue text-white fs-12 rounded-sm" viewBox="0 0 16 16">
                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                      </svg>                    </div>
                  </div>
                  <div data-aos="fade-up" className="py-3 border-bottom d-sm-flex justify-content-sm-between">
                    <div className="media align-items-sm-center d-sm-flex d-block">
                      <a href="#" className="hover-shine">
                        {/* <img
                          src="images/single-detail-property-11.jpg"
                          className="mr-sm-4 rounded-lg w-sm-90"
                          alt="Bacchanal Buffet-Temporarily Closed"
                        /> */}
                      </a>
                      <div className="mt-sm-0 mt-2">
                        <h4 className="my-0">
                          <a
                            href="#"
                            className="lh-186 fs-15 text-heading hover-primary"
                          >
                            Elite Medical Center
                          </a>
                        </h4>
                        <p className="lh-186 fs-15 font-weight-500 mb-0">
                          3084 S Highland DrSte C
                        </p>
                      </div>
                    </div>
                    <div data-aos="fade-up" className="text-lg-right mt-lg-0 mt-2">
                      <p className="mb-2 mb-0 lh-13">120 Reviews</p>
                      <div className="text-lg-right mt-lg-0 mt-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-star-fill ms-1 w-18px h-18 d-inline-flex justify-content-center align-items-center rate-bg-blue text-white fs-12 rounded-sm opacity-7" viewBox="0 0 16 16">
                          <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-star-fill ms-1 w-18px h-18 d-inline-flex justify-content-center align-items-center rate-bg-blue text-white fs-12 rounded-sm opacity-7" viewBox="0 0 16 16">
                          <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-star-fill ms-1 w-18px h-18 d-inline-flex justify-content-center align-items-center rate-bg-blue text-white fs-12 rounded-sm opacity-7" viewBox="0 0 16 16">
                          <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-star-fill ms-1 w-18px h-18 d-inline-flex justify-content-center align-items-center rate-bg-blue text-white fs-12 rounded-sm opacity-7" viewBox="0 0 16 16">
                          <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-star-fill ms-1 w-18px h-18 d-inline-flex justify-content-center align-items-center rate-bg-blue text-white fs-12 rounded-sm opacity-1" viewBox="0 0 16 16">
                          <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section className="pt-6">
              <Section_contact_info address={data?.UnparsedAddress} />
            </section>

          </div>
          <RequestInfo data={data} address={data?.UnparsedAddress} />
        </div>
        <div className="col-lg-12  mt-2 ">
          <section className="pt-6 ">
            <Section_similar_props />
          </section>
          <section className="pt-6 col-lg-8">
            {/* <Section_review data={data} /> */}
          </section>
        </div>
      </div>
    </div>

  );
}

export default Section2;
