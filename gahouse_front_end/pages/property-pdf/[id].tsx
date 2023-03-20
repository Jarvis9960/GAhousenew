import cogoToast from "cogo-toast";
import api from "lib/api";
import { GetServerSideProps, GetServerSidePropsContext } from "next";
import React, { useEffect, useState } from "react";
import { useMutation, useQuery } from "react-query";
import Image from "next/image";
import dynamic from "next/dynamic";
import { BounceLoader } from "react-spinners";
import Head from "next/head";
import { useRouter } from "next/router";
import Section_contact_info from "@components/Property_Page/Section2/Section_contact_info";
import TopDetailsSecction from "@components/Property_Page/Section2/TopDetailsSecction";
import Address_info from "@components/Property_Page/Section2/Address_info";
import School_info from "@components/Property_Page/Section2/School_info";
import Interior_features from "@components/Property_Page/Section2/Interior_features";
import Exterior_features from "@components/Property_Page/Section2/Exterior_features";
import Additional_info from "@components/Property_Page/Section2/Additional_info";
import ListingDetails from "@components/Property_Page/Section2/ListingDetails";
import TopSectionPriceAndLabels from "@components/Property_Page/Section2/TopSectionPriceAndLabels";
import { Icon } from "@iconify/react";
import RequestInfo from "@components/Property_Page/Section2/RequestInfo";

function Property_main_page({ id, data }) {

  const [review, setreview] = useState('')

  const Section2 = dynamic(() => import("@components/Property_Page/Section2/Section2"), {
    ssr: false,
  })
  const { isLoading: ElementarySchoolLoading, data: ElementarySchoolRating } = useQuery(
    ["ElementarySchoolRating", data], async () =>
    await api.get(`/schoolRatingForProperty?school=${data?.ElementarySchool}`), {
    refetchOnWindowFocus: false,
    refetchIntervalInBackground: false,
    refetchOnMount: false,
    refetchOnReconnect: false,
    keepPreviousData: false,
    enabled: data?.MispanleOrJuniorSchool ? true : false,
    onError: ((err) => {
      console.log(err)
    })
  })
  const { isLoading: MispanleOrJuniorSchoolLoading, data: MispanleOrJuniorSchoolRating } = useQuery(
    ["MispanleOrJuniorSchoolRating", data], async () =>
    await api.get(`/schoolRatingForProperty?school=${data?.MispanleOrJuniorSchool}`), {
    refetchOnWindowFocus: false,
    refetchIntervalInBackground: false,
    refetchOnMount: false,
    refetchOnReconnect: false,
    keepPreviousData: false,
    enabled: data?.MispanleOrJuniorSchool ? true : false,
    onError: ((err) => {
      console.log(err)
    })
  })

  const { isLoading: HighSchoolLoading, data: HighSchoolRating } = useQuery(
    ["HighSchoolRating", data], async () =>
    await api.get(`/schoolRatingForProperty?school=${data?.HighSchool}`), {
    refetchOnWindowFocus: false,
    refetchIntervalInBackground: false,
    refetchOnMount: false,
    refetchOnReconnect: false,
    keepPreviousData: false,
    enabled: data?.HighSchool ? true : false,
    onError: ((err) => {
      console.log(err)
    })
  })


  const router = useRouter()
  let url = process.env.NEXT_PUBLIC_FRONT_END_URL + router.asPath
  const BGIMAGE = "/images/fmls.png"

  useEffect(() => {
    window.print()
    return () => {
    }
  }, [])

  return (
    <div>
      <Head>
        <link rel="canonical" href={url} />
        <title>{data?.UnparsedAddress}</title>
        <meta name="description" content={data?.PublicRemarks} />
        <meta property="og:url" content={url} key="ogurl" />
        <meta property="og:image" content={BGIMAGE} key="ogimage" />
        <meta property="og:site_name" content={"Gahousefinders.com"} key="ogsitename" />
        <meta property="og:title" content={data?.UnparsedAddress} key="ogtitle" />
        <meta property="og:description" content={data?.PublicRemarks} key="ogdesc" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="article" />
        <meta property="og:site_name" content={"Gahousefinders.com"} />
        <meta property="og:image:width" content="600" />
        <meta property="og:image:height" content="315" />
        <meta property="og:image:alt" content={data?.UnparsedAddress} />
        <meta property="og:image:type" content="image/png" />
        <meta name="twitter:card" content="summary_small_image" />
        <meta name="twitter:title" content={data?.UnparsedAddress} />
        <meta name="twitter:description" content={data?.PublicRemarks} />
        <meta name="twitter:image" content={BGIMAGE} />
      </Head>

      {data && (<>
        <div className="container mt-10">
          <div className=" w-100 d-flex flex-wrap justify-content-between align-items-center align-content-center mb-2">
            <div className="w-50">
              <img src="/images/logo-1.png" style={{ height: "10vh" }} />
            </div>
            <div className="w-50 d-flex justify-content-center align-items-center">
              <p>
                <Icon icon="material-symbols:person-outline-rounded" color="#e4ba56" />   Aman Grover
                <br />
                <Icon icon="material-symbols:phone-android-outline" color="#e4ba56" />    877-749-SALE
                <br />
                <Icon icon="ic:outline-email" color="#e4ba56" />   info@gahousefinders.com
              </p>
            </div>
          </div>

          <div className=" d-flex flex-wrap justify-content-between align-items-center align-content-center mb-2">
            <div >

              <div>
                <h2 className="fs-35 font-weight-600 lh-15 text-heading">
                  {data?.UnparsedAddress ? data?.UnparsedAddress : "N/A"}
                </h2>

                <p className="lh-15 text-heading text-gray-light text-start">
                  <Icon icon="material-symbols:location-on" color="#e4ba56" />
                  {data?.UnparsedAddress}, {data?.City}, {data?.CountyOrParish}, {data?.PostalCode}
                </p>
              </div>

            </div>

            <div className="mt-0 d-sm-flex  d-flex justify-content-end align-content-end  ">
              <div className="text-lg-right">
                <p className="fs-22 text-heading font-weight-bold mb-0">
                  {"$" + Number(data?.ListPrice)?.toLocaleString()}
                </p>
                <p>
                  ${Math.round(Number(data?.ListPrice) / Number(data?.BuildingAreaTotal))?.toLocaleString()}/Sq Ft

                </p>
                <div className="d-flex justify-content-start ">
                  <Image src="/images/greenidx.png" width={'100'} height={"100"} alt={""} />
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className=" d-flex flex wrap">
              <div className="item-size-3-2 ">
                <div className="card p-0 ">
                  <img className=" rounded-1 "
                    src={data?.Media?.length > 0 ? data?.Media[0]?.MediaURL : "/images/fmls.png"}
                    onError={(e: any) => e.target.src = "/images/fmls.png"} />
                </div>
              </div>
              <div
                className="col-lg-4  pl-xl-4 primary-sidebar sidebar-sticky fixedBox"
                id="sidebar"
              >

                <div className="primary-sidebar-inner bg-white" >

                  <div className="card border-0 bg-white widget-request-tour">

                    <div className="card-body px-sm-6 shadow-xxs-2 pb-5 pt-0">
                      <div>
                        <div className="pt-1 pb-0 px-0 shadow-none">
                          <div
                            className=""
                            id="schedule"
                          >


                            <div className="form-group mb-2 mt-1">
                              <dl className="w-100 border-top  mb-0 d-flex">
                                <dt className="w-50 fs-14  text-heading pr-2">
                                  Property ID :
                                </dt>
                                <dd className="w-50 fs-14 fw-light pl-1">{data?.ListingId ? data?.ListingId : "N/A"}</dd>
                              </dl>
                            </div>



                            <div className="form-group mb-2 mt-1">
                              <dl className="w-100 border-top  mb-0 d-flex">
                                <dt className="w-50 fs-14  text-heading pr-2">
                                  Price :
                                </dt>
                                <dd className="w-50 fs-14 fw-light pl-1">{data?.ListPrice ? data?.ListPrice : "N/A"}</dd>
                              </dl>
                            </div>



                            <div className="form-group mb-2 mt-1">
                              <dl className="w-100 border-top  mb-0 d-flex">
                                <dt className="w-50 fs-14  text-heading pr-2">
                                  Square Footage :
                                </dt>
                                <dd className="w-50 fs-14 fw-light pl-1">{data?.BuildingAreaTotal ? data?.BuildingAreaTotal : "N/A"}</dd>
                              </dl>
                            </div>



                            <div className="form-group mb-2 mt-1">
                              <dl className="w-100 border-top  mb-0 d-flex">
                                <dt className="w-50 fs-14  text-heading pr-2">
                                  Bedrooms :
                                </dt>
                                <dd className="w-50 fs-14 fw-light pl-1">
                                  {data?.BedroomsTotal ? data?.BedroomsTotal : "N/A"}
                                </dd>
                              </dl>
                            </div>


                            <div className="form-group mb-2 mt-1">
                              <dl className="w-100 border-top  mb-0 d-flex">
                                <dt className="w-50 fs-14  text-heading pr-2">
                                  Bathrooms :
                                </dt>
                                <dd className="w-50 fs-14 fw-light pl-1">
                                  {data?.BathroomsFull ? data?.BathroomsFull : "0"} {"|"}   {data?.BathroomsHalf ? data?.BathroomsHalf : "0"}
                                </dd>
                              </dl>
                            </div>

                            <div className="form-group mb-2 mt-1">
                              <dl className="w-100 border-top  mb-0 d-flex">
                                <dt className="w-50 fs-14  text-heading pr-2">
                                  Garages :
                                </dt>
                                <dd className="w-50 fs-14 fw-light pl-1">
                                  {data?.GarageSpaces ? data?.GarageSpaces : "N/A"}
                                </dd>
                              </dl>
                            </div>

                            <div className="form-group mb-2 mt-1">
                              <dl className="w-100 border-top  mb-0 d-flex">
                                <dt className="w-50 fs-14  text-heading pr-2">
                                  Year Built :
                                </dt>
                                <dd className="w-50 fs-14 fw-light pl-1">
                                  {data?.YearBuilt ? data?.YearBuilt : "N/A"}
                                </dd>
                              </dl>
                            </div>

                            <div className="form-group mb-2 mt-1">
                              <dl className="w-100 border-top  mb-0 d-flex">
                                <dt className="w-50 fs-14  text-heading pr-2">
                                  Property Type :
                                </dt>
                                <dd className="w-50 fs-14 fw-light pl-1">
                                  {data?.PropertyType ? data?.PropertyType : "N/A"}
                                </dd>
                              </dl>
                            </div>

                            <div className="form-group mb-2 mt-1">
                              <dl className="w-100 border-top  mb-0 d-flex">
                                <dt className="w-50 fs-14  text-heading pr-2">
                                  Subdivision :
                                </dt>
                                <dd className="w-50 fs-14 fw-light pl-1">
                                  {data?.SubdivisionNameL ? data?.SubdivisionNameL : "N/A"}
                                </dd>
                              </dl>
                            </div>

                            <div className="form-group mb-2 mt-1">
                              <dl className="w-100 border-top  mb-0 d-flex">
                                <dt className="w-50 fs-14  text-heading pr-2">
                                  City :
                                </dt>
                                <dd className="w-50 fs-14 fw-light pl-1">
                                  {data?.City ? data?.City : "N/A"}
                                </dd>
                              </dl>
                            </div>

                            <div className="form-group mb-2 mt-1">
                              <dl className="w-100 border-top  mb-0 d-flex">
                                <dt className="w-50 fs-14  text-heading pr-2">
                                  Ele Schooltype:
                                </dt>
                                <dd className="w-50 fs-14 fw-light pl-1">
                                  {"Elementary"}
                                </dd>
                              </dl>
                            </div>
                            <div className="form-group mb-2 mt-1">
                              <dl className="w-100 border-top  mb-0 d-flex">
                                <dt className="w-50 fs-14  text-heading pr-2">
                                  Ele Schoolrating:
                                </dt>
                                <dd className="w-50 fs-14 fw-light pl-1">
                                  {ElementarySchoolRating?.data?.RATING ? ElementarySchoolRating?.data?.RATING : "N/A"}
                                </dd>
                              </dl>
                            </div>

                            <div className="form-group mb-2 mt-1">
                              <dl className="w-100 border-top  mb-0 d-flex">
                                <dt className="w-50 fs-14  text-heading pr-2">
                                  Ele Schoolname:
                                </dt>
                                <dd className="w-50 fs-14 fw-light pl-1">
                                  {data?.ElementarySchool ? data?.ElementarySchool : "N/A"}
                                </dd>
                              </dl>
                            </div>







                            <div className="form-group form-check mt-2 mb-0">

                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div >
            </div>

            <div className="col-lg-8 pr-xl-7 mt-2 ">

              <div >
                <h4 className="fs-22 text-heading mt-6 mb-2 fw-bold border-bottom pb-3">Description</h4>
                <p className="mb-0 lh-214">{data?.PublicRemarks ? data?.PublicRemarks : "N/A"} </p>
              </div>

              <section className="pt-6 pb-4">

                {/* <Address_info data={data} /> */}
                <div >
                  <h4 className="fs-22 text-heading mb-4 fw-bold">ADDRESS INFO</h4>
                  <div className="row">

                    <dl className="col-sm-6 border-top  mb-0 d-flex mt-1">
                      <dt className=" fs-14  text-heading pr-2">
                        Address :
                        <span className='fs-14 fw-light pl-1'> {data?.UnparsedAddress ? data?.UnparsedAddress : "N/A"}</span>
                      </dt>
                    </dl>
                    <dl className="col-sm-6 border-top  mb-0 d-flex mt-1">
                      <dt className=" fs-14  text-heading pr-2">
                        City :
                        <span className='fs-14 fw-light pl-1'> {data?.City ? data?.City : "N/A"}</span>
                      </dt>
                    </dl>


                    <dl className="col-sm-6 border-top  mb-0 d-flex mt-1">
                      <dt className=" fs-14  text-heading pr-2">
                        State/County :
                        <span className='fs-14 fw-light pl-1'> {data?.CountyOrParish ? data?.CountyOrParish : "N/A"}</span>
                      </dt>
                    </dl>
                    <dl className="col-sm-6 border-top  mb-0 d-flex mt-1">
                      <dt className=" fs-14  text-heading pr-2">
                        Zip/Postal Code :
                        <span className='fs-14 fw-light pl-1'> {data?.PostalCode ? data?.PostalCode : "N/A"}</span>
                      </dt>
                    </dl>


                    <dl className="col-sm-6 border-top  border-bottom mb-0 d-flex mt-1">
                      <dt className=" fs-14  text-heading pr-2">
                        Subdivision :
                      </dt>
                      <span>{data?.SubdivisionNameL ? data?.SubdivisionNameL : "None"}</span>
                    </dl>
                    <dl className="col-sm-6 border-top  border-bottom mb-0 d-flex mt-1">
                      <dt className=" fs-14  text-heading pr-2">
                        Direction :
                        <span className='fs-14 fw-light '>{data?.Directions ? data?.Directions : "N/A"}</span>
                      </dt>
                    </dl>




                  </div>
                </div>

              </section>
              <section className="pt-6 pb-4">

                {/* <School_info data={data} /> */}
                <div >
                  <h4 className="fs-22 text-heading mb-4 fw-bold">SCHOOLS</h4>
                  <div className="row">

                    <dl className="col-sm-6 border-top  mb-0 d-flex mt-1">
                      <dt className=" fs-14  text-heading pr-2">
                        Elementary School :
                        <span className="fs-14 fw-light pl-1 ">{data?.ElementarySchool ? data?.ElementarySchool : "N/A"}</span>
                      </dt>
                    </dl>
                    <dl className="col-sm-6 border-top mb-0 d-flex mt-1">
                      <dt className=" fs-14  text-heading pr-2">
                        Elem. School Rating :
                        <span className="fs-14 fw-light pl-1 ">{ElementarySchoolRating?.data?.RATING ? ElementarySchoolRating?.data?.RATING + "/10" : "N/A"} </span>
                      </dt>
                    </dl>
                    <hr className='border'></hr>

                    <dl className="col-sm-6 border-top mb-0 d-flex mt-1">
                      <dt className=" fs-14  text-heading pr-2">
                        Mispanle School :
                        <span className="fs-14 fw-light pl-1 ">{data?.MispanleOrJuniorSchool ? data?.MispanleOrJuniorSchool : "N/A"}</span>
                      </dt>
                    </dl>
                    <dl className="col-sm-6 border-top mb-0 d-flex mt-1">
                      <dt className=" fs-14  text-heading pr-2">
                        Mispanle School Rating :
                        <span className="fs-14 fw-light pl-1 ">{MispanleOrJuniorSchoolRating?.data?.RATING ? MispanleOrJuniorSchoolRating?.data?.RATING + '/10' : "N/A"}</span>
                      </dt>
                    </dl>
                    <hr className='border'></hr>


                    <dl className="col-sm-6 border-top border-bottom mb-0 d-flex mt-1">
                      <dt className=" fs-14  text-heading pr-2">
                        High School :
                        <span className="fs-14 fw-light pl-1 ">{data?.HighSchool ? data?.HighSchool : "N/A"}</span>
                      </dt>
                    </dl>
                    <dl className="col-sm-6 border-top border-bottom mb-0 d-flex mt-1">
                      <dt className=" fs-14  text-heading pr-2">
                        High School Rating :
                        <span className="fs-14 fw-light pl-1 ">{HighSchoolRating?.data?.RATING ? HighSchoolRating?.data?.RATING + "/10" : "N/A"}</span>
                      </dt>
                    </dl>
                  </div>
                </div>
              </section>

              <section className="pt-6 pb-4">

                {/* <Interior_features data={data} /> */}
                <div >
                  <h4 className="fs-22 text-heading mb-4 fw-bold">INTERIOR FEATURES</h4>
                  <div className="row">

                    <dl className="col-sm-6 border-top mb-0 d-flex">
                      <dt className=" fs-14  text-heading pr-2">
                        Room Type :
                        <span className=' fw-light fs-14 pl-1'> <span className='fs-14 fw-light pl-1'>{data?.RoomType?.toString() ? data?.RoomType?.toString()?.replaceAll(",", ", ") : "N/A"}</span></span>
                      </dt>

                    </dl>
                    <dl className="col-sm-6 border-top mb-0 d-flex">
                      <dt className=" fs-14  text-heading pr-2">
                        Rooms :
                        <span className=' fw-light fs-14 pl-1'> <span className='fs-14 fw-light pl-1'>{data?.RoomBedroomFeatures?.toString() ? data?.RoomBedroomFeatures?.toString()?.replaceAll(",", ", ") : "N/A"}</span></span>
                      </dt>

                    </dl>

                    <dl className="col-sm-6 border-top mb-0 d-flex">
                      <dt className=" fs-14  text-heading pr-2">
                        Primary On Main :
                        <span className=' fw-light fs-14 pl-1'> <span className='fs-14 fw-light pl-1'>{data?.RoomBedroomFeatures?.includes("Master On Main Level") || data?.RoomBedroomFeatures?.includes("Master on Main") ? "Yes" : "No"}</span></span>
                      </dt>

                    </dl>
                    <dl className="col-sm-6 border-top mb-0 d-flex">
                      <dt className=" fs-14  text-heading pr-2">
                        Dining :
                        <span className=' fw-light fs-14 pl-1'>{data?.RoomDiningRoomFeatures?.toString() ? data?.RoomDiningRoomFeatures?.toString()?.replaceAll(",", ", ") : "N/A"}</span>
                      </dt>
                    </dl>
                    <dl className="col-sm-6 border-top mb-0 d-flex">
                      <dt className=" fs-14  text-heading pr-2">
                        Appliances :
                        <span className=' fw-light fs-14 pl-1'>{data?.Appliances?.toString() ? data?.Appliances?.toString()?.replaceAll(",", ", ") : "N/A"}</span>
                      </dt>
                    </dl>
                    <dl className="col-sm-6 border-top mb-0 d-flex">
                      <dt className=" fs-14  text-heading pr-2">
                        Interior :
                        <span className=' fw-light fs-14 pl-1'>{data?.InteriorFeatures?.toString() ? data?.InteriorFeatures?.toString()?.replaceAll(",", ", ") : "N/A"}</span>
                      </dt>

                    </dl>
                    <dl className="col-sm-6 border-top mb-0 d-flex">
                      <dt className=" fs-14  text-heading pr-2">
                        Laundry Features :
                        <span className=' fw-light fs-14 pl-1'>
                          {data?.LaundryFeatures?.toString() ? data?.LaundryFeatures?.toString()?.replaceAll(",", ", ") : "N/A"}</span>
                      </dt>

                    </dl>
                    <dl className="col-sm-6 border-top mb-0 d-flex">
                      <dt className=" fs-14  text-heading pr-2">
                        Fireplace Features :
                        <span className=' fw-light fs-14 pl-1'>{data?.FireplaceFeatures?.toString() ? data?.FireplaceFeatures?.toString()?.replaceAll(",", ", ") : "N/A"}</span>
                      </dt>

                    </dl>
                    <dl className="col-sm-6 border-top mb-0 d-flex">
                      <dt className=" fs-14  text-heading pr-2">
                        Electric :
                        <span className=' fw-light fs-14 pl-1'>{data?.Electric?.toString() ? data?.Electric?.toString()?.replaceAll(",", ", ") : "N/A"}</span>
                      </dt>

                    </dl>
                    <dl className="col-sm-6 border-top mb-0 d-flex">
                      <dt className=" fs-14  text-heading pr-2">
                        Window Features :
                        <span className=' fw-light fs-14 pl-1'>{data?.WindowFeatures?.toString() ? data?.WindowFeatures?.toString()?.replaceAll(",", ", ") : "N/A"}</span>
                      </dt>

                    </dl>
                    <dl className="col-sm-6 border-top mb-0 d-flex">
                      <dt className=" fs-14  text-heading pr-2">
                        Kitchen :
                        <span className=' fw-light fs-14 pl-1'>{data?.RoomKitchenFeatures?.toString() ? data?.RoomKitchenFeatures?.toString()?.replaceAll(",", ", ") : "N/A"}</span>
                      </dt>
                    </dl>

                    <dl className="col-sm-6 border-top mb-0 d-flex">
                      <dt className=" fs-14  text-heading pr-2">
                        Dining :
                        <span className=' fw-light fs-14 pl-1'>{data?.RoomDiningRoomFeatures?.toString() ? data?.RoomDiningRoomFeatures?.toString()?.replaceAll(",", ", ") : "N/A"}</span>
                      </dt>
                    </dl>
                    <dl className="col-sm-6 border-top mb-0 d-flex">
                      <dt className=" fs-14  text-heading pr-2">
                        Cooling Source :
                        <span className=' fw-light fs-14 pl-1'>{data?.Cooling?.toString()}</span>
                      </dt>

                    </dl>


                    <dl className="col-sm-6 border-top mb-0 d-flex">
                      <dt className=" fs-14  text-heading pr-2">
                        Heating Source :
                        <span className=' fw-light fs-14 pl-1'>{data?.Heating?.toString() ? data?.Heating?.toString()?.replaceAll(",", ", ") : "N/A"}</span>
                      </dt>
                    </dl>
                    <dl className="col-sm-6 border-top mb-0 d-flex">
                      <dt className=" fs-14  text-heading pr-2">
                        Energy Related :
                        <span className=' fw-light fs-14 pl-1'>{data?.GreenEnergyEfficient?.toString() ? data?.GreenEnergyEfficient?.toString().replaceAll(",", ", ") : "N/A"}</span>
                      </dt>
                    </dl>

                    <dl className="col-sm-6 border-top mb-0 d-flex">
                      <dt className=" fs-14  text-heading pr-2">
                        Appliances :
                        <span className=' fw-light fs-14 pl-1'>{data?.Appliances?.toString() ? data?.Appliances?.toString()?.replaceAll(",", ", ") : "N/A"}</span>
                      </dt>
                    </dl>
                    <dl className="col-sm-6 border-top mb-0 d-flex">
                      <dt className=" fs-14  text-heading pr-2">
                        Sq Feet/Source :
                        <span className='fs-14 fw-light pl-1'>  {data?.BuildingAreaTotal ? data?.BuildingAreaTotal : "N/A"}/ {data?.BuildingAreaSource ? data?.BuildingAreaSource : "N/A"}</span>
                      </dt>
                    </dl>

                    <dl className="col-sm-6 border-top mb-0 d-flex">
                      <dt className=" fs-14  text-heading pr-2">
                        Interior :
                        <span className=' fw-light fs-14 pl-1'>{data?.InteriorFeatures?.toString() ? data?.InteriorFeatures?.toString()?.replaceAll(",", ", ") : "N/A"}</span>
                      </dt>

                    </dl>
                    <dl className="col-sm-6 border-top mb-0 d-flex">
                      <dt className=" fs-14  text-heading pr-2">
                        Master Bath :
                        <span className=' fw-light fs-14 pl-1'>{data?.RoomMasterBathroomFeatures?.toString() ? data?.RoomMasterBathroomFeatures?.toString()?.replaceAll(",", ", ") : "N/A"}</span>
                      </dt>

                    </dl>
                    {/* 

        <dl  className="col-sm-6 border-top mb-0 d-flex">
          <dt className=" fs-14  text-heading pr-2">
            Laundry Features
          <span className=' fw-light fs-14 pl-1'>sssssssssssss{data?.LaundryFeatures?.toString() ? data?.LaundryFeatures[0] : "N/A"}</span>
            </dt>

        </dl> */}

                    <dl className="col-sm-6 border-top mb-0 d-flex">
                      <dt className=" fs-14  text-heading pr-2">
                        Fireplace Total :
                        <span className='fs-14 fw-light pl-1'>{data?.FireplacesTotal ? data?.FireplacesTotal : "N/A"}</span>
                      </dt>
                    </dl>

                    <dl className="col-sm-6 border-top mb-0 d-flex">
                      <dt className=" fs-14  text-heading pr-2">
                        Fireplace Features :
                        <span className=' fw-light fs-14 pl-1'>{data?.FireplaceFeatures?.toString() ? data?.FireplaceFeatures?.toString()?.replaceAll(",", ", ") : "N/A"}</span>
                      </dt>

                    </dl>

                    <dl className="col-sm-6 border-top mb-0 d-flex">
                      <dt className=" fs-14  text-heading pr-2">
                        Accessibility :
                        <span className=' fw-light fs-14 pl-1'>{data?.AccessibilityFeatures?.toString() ? data?.AccessibilityFeatures?.toString()?.replaceAll(",", ", ") : "N/A"}</span>
                      </dt>
                    </dl>

                    <dl className="col-sm-6 border-top mb-0 d-flex">
                      <dt className=" fs-14  text-heading pr-2">
                        Electric :
                        <span className=' fw-light fs-14 pl-1'>{data?.Basement?.toString() ? data?.Basement?.toString()?.replaceAll(",", ", ") : "N/A"} </span>
                      </dt>
                    </dl>
                    <dl className="col-sm-6 border-top mb-0 d-flex">
                      <dt className=" fs-14  text-heading pr-2">
                        Basement :
                        <span className=' fw-light fs-14 pl-1'>{data?.Basement?.toString() ? data?.Basement?.toString()?.replaceAll(",", ", ") : "N/A"} </span>
                      </dt>
                    </dl>

                    <dl className="col-sm-6 border-top mb-0 d-flex">
                      <dt className=" fs-14  text-heading pr-2">
                        Window Features :
                        <span className=' fw-light fs-14 pl-1'>{data?.WindowFeatures?.toString() ? data?.WindowFeatures?.toString()?.replaceAll(",", ", ") : "N/A"}</span>
                      </dt>

                    </dl>


                    <dl className="col-sm-6 border-top border-bottom mb-0 d-flex">
                      <dt className=" fs-14  text-heading pr-2">
                        Other Equipment :
                        <span className=' fw-light fs-14 pl-1'>{data?.OtherEquipment.toString()}</span>
                      </dt>

                    </dl>



                    <dl className="col-sm-6 border-top border-bottom mb-0 d-flex ">
                      <dt className=" fs-14  text-heading pr-2">
                        Flooring :
                        <span className=' fw-light fs-14 pl-1'>{data?.Flooring.toString()}</span>
                      </dt>
                    </dl>






                  </div>
                </div >
              </section>
              <section className="pt-6 pb-4">

                {/* <Exterior_features data={data} /> */}
                <div >
                  <h4 className="fs-22 text-heading mb-4 fw-bold">EXTERIOR FEATURES</h4>
                  <div className="row">
                    <dl className="col-sm-6 border-top  mb-0 d-flex">
                      <dt className=" fs-14  text-heading pr-2">
                        Architectural Style :

                        <span className="fs-14 fw-light pl-1">{data?.ArchitecturalStyle?.toString() ? data?.ArchitecturalStyle?.toString()?.replaceAll(",", ", ") : "N/A"}</span>          </dt>
                    </dl>
                    <dl className="col-sm-6 mb-0 d-flex border-top text-wrap ">
                      <dt className=" fs-14  text-heading pr-2">
                        Is New Construction :

                        <span className="fs-14 fw-light pl-1">{(data?.PropertyCondition?.includes("To Be Built") || data?.PropertyCondition?.includes("New Construction")) ? "Yes" : "No"}</span>          </dt>
                    </dl>
                    <dl className="col-sm-6 mb-0 d-flex border-top text-wrap ">
                      <dt className=" fs-14  text-heading pr-2">
                        Construction Status :

                        <span className="fs-14 fw-light pl-1">{data?.ConstructionMaterials.toString() ? data?.ConstructionMaterials.toString()?.replaceAll(",", ", ") : "N/A"}</span>          </dt>
                    </dl>
                    <dl className="col-sm-6 mb-0 d-flex border-top text-wrap ">
                      <dt className=" fs-14  text-heading pr-2">
                        Exterior :
                        <span className="fs-14 fw-light pl-1">{data?.ExteriorFeatures?.toString() ? data?.ExteriorFeatures?.toString()?.replaceAll(",", ", ") : "N/A"}</span>

                      </dt>
                    </dl>
                    <dl className="col-sm-6 mb-0 d-flex border-top text-wrap ">
                      <dt className=" fs-14  text-heading pr-2">
                        Water Sewer :

                        <span className="fs-14 fw-light pl-1">{data?.Sewer.toString() ? data?.Sewer.toString()?.replaceAll(",", ", ") : "N/A"}</span>          </dt>
                    </dl>
                    <dl className="col-sm-6 mb-0 d-flex border-top text-wrap ">
                      <dt className=" fs-14  text-heading pr-2">
                        Utilities :
                        <span className="fs-14 fw-light pl-1">{data?.Utilities?.toString() ? data?.Utilities?.toString()?.replaceAll(",", ", ") : "N/A"}</span>

                      </dt>
                    </dl>
                    <dl className="col-sm-6 mb-0 d-flex border-top text-wrap ">
                      <dt className=" fs-14  text-heading pr-2">
                        Levels :

                        <span className="fs-14 fw-light pl-1">{data?.Levels.toString() ? data?.Levels.toString()?.replaceAll(",", ", ") : "N/A"}</span>          </dt>
                    </dl>
                    <dl className="col-sm-6 mb-0 d-flex border-top text-wrap ">
                      <dt className=" fs-14  text-heading pr-2">
                        Construction :

                        <span className="fs-14 fw-light pl-1">{data?.ConstructionMaterials.toString() ? data?.ConstructionMaterials.toString()?.replaceAll(",", ", ") : "N/A"}</span>          </dt>
                    </dl>
                    <dl className="col-sm-6 mb-0 d-flex border-top text-wrap ">
                      <dt className=" fs-14  text-heading pr-2">
                        Water Body Name :

                        <span className="fs-14 fw-light pl-1">{data?.WaterBodyName}</span>          </dt>
                    </dl>
                    <dl className="col-sm-6 mb-0 d-flex border-top text-wrap ">
                      <dt className=" fs-14  text-heading pr-2">
                        Water Front Features :

                        <span className="fs-14 fw-light pl-1">{data?.WaterfrontFeatures.toString() ? data?.WaterfrontFeatures.toString()?.replaceAll(",", ", ") : "N/A"}</span>          </dt>
                    </dl>
                    <dl className="col-sm-6 mb-0 d-flex border-top text-wrap ">
                      <dt className=" fs-14  text-heading pr-2">
                        Fencing :

                        <span className="fs-14 fw-light pl-1">{data?.Fencing.toString() ? data?.Fencing.toString()?.replaceAll(",", ", ") : "N/A"}</span>          </dt>
                    </dl>
                    <dl className="col-sm-6 mb-0 d-flex border-top text-wrap ">
                      <dt className=" fs-14  text-heading pr-2">
                        Spa Features :

                        <span className="fs-14 fw-light pl-1">{data?.SpaFeatures.toString() ? data?.SpaFeatures.toString()?.replaceAll(",", ", ") : "N/A"}</span>          </dt>
                    </dl>
                    <dl className="col-sm-6 mb-0 d-flex border-top text-wrap ">
                      <dt className=" fs-14  text-heading pr-2">
                        Parking Total :
                        <span className=" fs-14 fw-light pl-1">{data?.ParkingTotal ? data?.ParkingTotal : "N/A"}</span>

                      </dt>
                    </dl>
                    <dl className="col-sm-6 mb-0 d-flex border-top text-wrap ">
                      <dt className=" fs-14  text-heading pr-2">
                        Parking Features :
                        <span className="fs-14 fw-light pl-1">{data?.ParkingFeatures.toString() ? data?.ParkingFeatures.toString()?.replaceAll(",", ", ") : "N/A"}</span>
                      </dt>
                    </dl>
                    <dl className="col-sm-6 mb-0 d-flex border-top text-wrap ">
                      <dt className=" fs-14  text-heading pr-2">
                        Roof :

                        <span className="fs-14 fw-light pl-1">{data?.Roof.toString() ? data?.Roof.toString()?.replaceAll(",", ", ") : "N/A"}</span>          </dt>
                    </dl>
                    <dl className="col-sm-6 mb-0 d-flex border-top text-wrap ">
                      <dt className=" fs-14  text-heading pr-2">
                        Water Source :

                        <span className="fs-14 fw-light pl-1">{data?.WaterSource.toString() ? data?.WaterSource.toString()?.replaceAll(",", ", ") : "N/A"}</span>          </dt>
                    </dl>
                    <dl className="col-sm-6 mb-0 d-flex border-top text-wrap ">
                      <dt className=" fs-14  text-heading pr-2">
                        Security Features :
                        <span className="fs-14 fw-light pl-1">{data?.SecurityFeatures.toString() ? data?.SecurityFeatures.toString()?.replaceAll(",", ", ") : "N/A"}</span>
                      </dt>
                    </dl>
                    <dl className="col-sm-6 mb-0 d-flex border-top text-wrap ">
                      <dt className=" fs-14  text-heading pr-2">
                        Private Pool :

                        <span className="fs-14 fw-light pl-1">{data?.PoolPrivateYN ? data?.PoolPrivateYN : "N/A"}</span>          </dt>
                    </dl>
                    <dl className="col-sm-6 mb-0 d-flex border-top text-wrap ">
                      <dt className=" fs-14  text-heading pr-2">
                        Pool :

                        <span className="fs-14 fw-light pl-1">{data?.PoolFeatures.toString() ? data?.PoolFeatures.toString()?.replaceAll(",", ", ") : "N/A"}</span>          </dt>
                    </dl>
                    <dl className="col-sm-6 mb-0 d-flex border-top text-wrap ">
                      <dt className=" fs-14  text-heading pr-2">
                        Lot Size Acres :

                        <span className="fs-14 fw-light pl-1">{data?.LotSizeAcres ? data?.LotSizeAcres : "N/A"}/{data?.LotSizeSource ? data?.LotSizeSource : "N/A"} </span>          </dt>
                    </dl>
                    <dl className="col-sm-6 mb-0 d-flex border-top  ">
                      <dt className=" fs-14  text-heading pr-2">
                        Lot Features :
                        <span className="fs-14 fw-light pl-1">{data?.LotFeatures.toString() ? data?.LotFeatures.toString()?.replaceAll(",", ", ") : "N/A"}</span>
                      </dt>
                    </dl>
                    <dl className="col-sm-6 mb-0 d-flex border-top text-wrap ">
                      <dt className=" fs-14  text-heading pr-2">
                        Patio And Porch :
                      </dt>
                      <span className="fs-14 fw-light pl-1">{data?.PatioAndPorchFeatures.toString() ? data?.PatioAndPorchFeatures.toString()?.replaceAll(",", ", ") : "N/A"}</span>          {/* <span className="fs-14 fw-light pl-1">{data?.PatioAndPorchFeatures?.toString()}</dd> */}
                    </dl>
                    <dl className="col-sm-6 mb-0 d-flex border-top border-bottom ">
                      <dt className=" fs-14  text-heading pr-2">
                        View :

                        <span className="fs-14 fw-light pl-1">{data?.View.toString() ? data?.View.toString()?.replaceAll(",", ", ") : "N/A"}</span>          </dt>
                    </dl>
                    <dl className="col-sm-6 mb-0 d-flex border-top text-wrap ">
                    </dl>

                  </div>
                </div>
              </section>
              <section className="pt-6 pb-4">

                {/* <Additional_info data={data} /> */}
                <div >
                  <h4 className="fs-22 text-heading mb-4 fw-bold">ADDITIONAL INFORMATION</h4>
                  <div className="row">
                    <dl className="col-sm-6 border-top mb-0 d-flex">
                      <dt className="fs-14  text-heading pr-2">
                        Status Detail :
                        <span className='fs-14 fw-light pl-1'>{data?.FMLS_PreviousStatus ? data?.FMLS_PreviousStatus : "N/A"}</span>
                      </dt>
                    </dl >
                    <dl className="col-sm-6 border-top mb-0 d-flex">
                      <dt className="fs-14  text-heading pr-2">
                        Construction Status :
                        <span className='fs-14 fw-light pl-1'>{data?.PropertyCondition ? data?.PropertyCondition : "N/A"}</span>
                      </dt>
                    </dl >
                    <dl className="col-sm-6 border-top mb-0 d-flex">
                      <dt className="fs-14  text-heading pr-2">
                        Property Type :
                        <span className='fs-14 fw-light pl-1'>{data?.FMLS_MlsPropertyType ? data?.FMLS_MlsPropertyType : "N/A"}</span>
                      </dt>
                    </dl >
                    <dl className="col-sm-6 border-top mb-0 d-flex">
                      <dt className="fs-14  text-heading pr-2">
                        Property Type :
                        <span className='fs-14 fw-light pl-1'>{data?.PropertyType ? data?.PropertyType : "N/A"}</span>
                      </dt>
                    </dl >
                    <dl className="col-sm-6 border-top mb-0 d-flex">
                      <dt className="fs-14  text-heading pr-2">
                        Property Sub Type :
                        <span className='fs-14 fw-light pl-1'>{data?.PropertySubType ? data?.PropertySubType : "N/A"}</span>
                      </dt>
                    </dl >
                    <dl className="col-sm-6 border-top mb-0 d-flex">
                      <dt className="fs-14  text-heading pr-2">
                        Rental Restrictions :
                        <span className='fs-14 fw-light pl-1'>{data?.FMLS_AssociationRentRestrictionsYN ? data?.FMLS_AssociationRentRestrictionsYN : "N/A"}</span>
                      </dt>
                    </dl >
                    <dl className="col-sm-6 border-top mb-0 d-flex">
                      <dt className="fs-14  text-heading pr-2">
                        Association :
                        <span className='fs-14 fw-light pl-1'>{data?.AssociationYN ? data?.AssociationYN : "N/A"}</span>
                      </dt>
                    </dl >
                    <dl className="col-sm-6 border-top mb-0 d-flex">
                      <dt className="fs-14  text-heading pr-2">
                        Association Fee :
                        <span className='fs-14 fw-light pl-1'>{data?.AssociationFee ? data?.AssociationFee : "N/A"}</span>
                      </dt>
                    </dl >
                    <dl className="col-sm-6 border-top  mb-0 d-flex">
                      <dt className="fs-14  text-heading pr-2">
                        Tax Year :
                        <span className='fs-14 fw-light pl-1'>{data?.TaxYear ? data?.TaxYear : "N/A"}</span>
                      </dt>
                    </dl >
                    <dl className="col-sm-6 border-top mb-0 d-flex">
                      <dt className="fs-14  text-heading pr-2">
                        Tax Amount :
                      </dt>
                      <span className='fs-14 fw-light pl-1'>${data?.TaxAnnualAmount ? data?.TaxAnnualAmount : "N/A"}</span>
                    </dl >
                    <dl className="col-sm-6 border-top mb-0 d-flex">
                      <dt className="fs-14  text-heading pr-2">
                        Year Built :
                        <span className='fs-14 fw-light pl-1'>{data?.YearBuilt ? data?.YearBuilt : "N/A"}</span>
                      </dt>
                    </dl >
                    <dl className="col-sm-6 border-top mb-0 d-flex">
                      <dt className="fs-14  text-heading pr-2">
                        Property Type :
                        <span className='fs-14 fw-light pl-1'>{data?.FMLS_MlsPropertyType ? data?.FMLS_MlsPropertyType : "N/A"}</span>
                      </dt>
                    </dl >
                    <dl className="col-sm-6 border-top mb-0 d-flex">
                      <dt className="fs-14  text-heading pr-2">
                        Property Sub Type :
                        <span className='fs-14 fw-light pl-1'>{data?.PropertySubType ? data?.PropertySubType : "N/A"}</span>
                      </dt>
                    </dl >
                    <dl className="col-sm-6 border-top mb-0 d-flex">
                      <dt className="fs-14  text-heading pr-2">
                        Association :
                        <span className='fs-14 fw-light pl-1'>{data?.AssociationYN ? data?.AssociationYN : "N/A"}</span>
                      </dt>
                    </dl >
                    <dl className="col-sm-6 border-top border-bottom mb-0 d-flex">
                      <dt className="fs-14  text-heading pr-2">
                        Tax Year :
                        <span className='fs-14 fw-light pl-1'>{data?.TaxYear ? data?.TaxYear : "N/A"}</span>
                      </dt>
                    </dl >
                    <dl className="col-sm-6 border-top border-bottom mb-0 d-flex">
                      <dt className="fs-14  text-heading pr-2">
                        Community Features :

                        <span className='fs-14 fw-light pl-1'>{data?.CommunityFeatures.toString() ? data?.CommunityFeatures.toString()?.replaceAll(",", ", ") : "N/A"}</span>
                      </dt>
                    </dl >

                  </div>
                </div>
              </section>
              <section className="pt-6 border-bottom pb-4">
                {/* <ListingDetails data={data} /> */}
                <div >
                  <h4 className="fs-22 text-heading mb-4 fw-bold">LISTING DETAILS</h4>
                  <div className="row">
                    <dl className="col-sm-6 border-top mb-0 d-flex">
                      <dt className=" fs-14  text-heading pr-2">
                        Current Price :

                        <span className='fs-14 fw-light pl-1'>${data?.FMLS_CurrentPrice ? (Number(data?.FMLS_CurrentPrice))?.toLocaleString() : "N/A"}</span></dt>
                    </dl>
                    <dl className="col-sm-6 border-top mb-0 d-flex">
                      <dt className=" fs-14  text-heading pr-2">
                        Original Price :

                        <span className='fs-14 fw-light pl-1'>${data?.OriginalListPrice ? (Number(data?.OriginalListPrice))?.toLocaleString() : "N/A"}</span></dt>
                    </dl>
                    <dl className="col-sm-6 border-top mb-0 d-flex">
                      <dt className=" fs-14  text-heading pr-2">
                        Price Change :

                        <span className='fs-14 fw-light pl-1'>{(Number(data?.OriginalListPrice) - Number(data?.FMLS_CurrentPrice)) ? (Number(data?.OriginalListPrice) + 14900 - Number(data?.FMLS_CurrentPrice) - 14900)?.toLocaleString() : "N/A"}</span></dt>
                    </dl>
                    <dl className="col-sm-6 border-top mb-0 d-flex">
                      <dt className=" fs-14  text-heading pr-2">
                        Listing Provided Courtesy Of :

                        <span className='fs-14 fw-light pl-1'>{data?.ListOfficeName ? data?.ListOfficeName : "N/A"}</span></dt>
                    </dl>
                    <dl className="col-sm-6 border-top mb-0 d-flex">
                      <dt className=" fs-14  text-heading pr-2">
                        Change Time :
                        <span className='fs-14 fw-light pl-1'>{new Date(data?.PriceChangeTimestamp).toDateString() == null ? <span>N/A</span> : <span>{new Date(data?.PriceChangeTimestamp).toDateString()}</span>}</span>
                      </dt>
                    </dl>
                    <dl className="col-sm-6 border-top mb-0 d-flex">
                      <dt className=" fs-14  text-heading pr-2">
                        Days On Market :

                        <span className='fs-14 fw-light pl-1'>{data?.DaysOnMarket}</span></dt>
                    </dl>


                  </div>
                </div>
              </section>

            </div>


          </div>
        </div>
      </>)}



    </div>
  );
}

export default Property_main_page;

export const getServerSideProps: GetServerSideProps = async (ctx: GetServerSidePropsContext) => {
  const { id } = ctx.params
  let data = null
  if (id) {
    let res = await api.get("getSingleProperty/" + id)
    data = res?.data
  }
  return {
    props: {
      data: data,
      id: id,
    }
  }
}