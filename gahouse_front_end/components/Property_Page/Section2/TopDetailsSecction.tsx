import Image from "next/image";
import { Icon } from '@iconify/react';
import Gellary_sec1 from "../Section1_gallery/Gellary_sec1";
import CarouselCard from "@components/Property_Page/Section2/CarouselCard";
import ReportsLabels from "@components/Labels";
import Link from "next/link";

function TopDetailsSecction({ data }) {
  return (
    <>

      <section className="" data-aos="fade-up">



        {/* <div className="container-fluid"> */}
        {/* <div className="position-relative" data-animate="zoomIn"> */}
        {data?.Media?.length > 0 && (<>
          <div className="row galleries m-n1 " data-aos="fade-up">

            <CarouselCard media={data?.Media} />
          </div>              </>)}
        <div>



          {/* </div> */}
        </div>
        {(!data?.Media || data?.Media?.length == 0) && (<>

          <div className=" m-0 p-0" style={{ marginTop: "-100px" }}>
            <img className=" propertCardImage"
              src={"/images/fmls.png"}
              style={{ maxHeight: "50vh", objectFit: "cover" }} />
          </div>
        </>)}


      </section>
      <section data-aos="fade-up" className="mt-6 ">
        <div className="d-flex justify-content-between border-bottom">

          <h4 className="fs-22 text-heading mb-6 fw-bold">OVERVIEW</h4>
          <h4 className="fs-22 text-heading mb-6"><b>Property ID:</b> {data?.ListingId ? data?.ListingId : "N/A"}</h4>


        </div>
      </section>
      <section>
        <div className=" pt-3 row ">

          {/* Type */}
          <div data-aos="fade-up" className=" col-xl-3 col-lg-3 col-md-4 col-sm-6 col-6  mb-6 ">
            <div className="media">
              <div className="p-2 shadow-xxs-1 rounded-lg mr-2">
                <svg className="icon icon-family fs-32 text-primary">
                  <Icon icon="material-symbols:home" color="#e4ba56" />
                </svg>
              </div>
              <div className="media-body">
                <h5 className="my-1 fs-14 text-uppercase letter-spacing-093 font-weight-bold">
                  {data?.PropertyType ? data?.PropertyType : "N/A"}
                </h5>
                <p className="mb-0 fs-14  text-heading">
                  Property Type
                </p>
              </div>
            </div>
          </div>

          {/* Bedroom */}
          <div data-aos="fade-up" className=" col-xl-3 col-lg-3 col-md-4 col-sm-6 col-6  mb-6 ">
            <div className="media">
              <div className="p-2 shadow-xxs-1 rounded-lg mr-2">
                <svg className="icon icon-bedroom fs-35 text-primary">
                  <Icon icon="mdi:bedroom-outline" color="#e4ba56" />

                </svg>
              </div>
              <div className="media-body">
                <h5 className="my-1  font-weight-bold fs-14 text-uppercase letter-spacing-093 font-weight-normal">
                  {data?.BedroomsTotal ? data?.BedroomsTotal : "N/A"}
                </h5>
                <p className="mb-0 fs-13  text-heading">
                  Bedrooms
                </p>
              </div>
            </div>
          </div>


          {/* Bathroom */}
          <div data-aos="fade-up" className=" col-xl-3 col-lg-3 col-md-4 col-sm-6 col-6  mb-6 ">
            <div className="media">
              <div className="p-2 shadow-xxs-1 rounded-lg mr-2">
                <svg className="icon icon-sofa fs-32 text-primary">
                  <Icon icon="iconoir:bathroom" color="#e4ba56" />
                </svg>
              </div>
              <div className="media-body">
                <h5 className="my-1 fs-14 font-weight-bold text-uppercase letter-spacing-093 font-weight-normal">
                  {data?.BathroomsFull ? data?.BathroomsFull : "0"} {"|"}   {data?.BathroomsHalf ? data?.BathroomsHalf : "0"}
                </h5>
                <p className="mb-0 fs-13  text-heading">
                  Bathrooms
                </p>
              </div>
            </div>
          </div>

          {/* Garage */}
          <div data-aos="fade-up" className=" col-xl-3 col-lg-3 col-md-4 col-sm-6 col-6  mb-6 ">
            <div className="media">
              <div className="p-2 shadow-xxs-1 rounded-lg mr-2">
                <svg className="icon icon-heating fs-32 text-primary">
                  <Icon icon="game-icons:home-garage" color="#e4ba56" />
                </svg>
              </div>
              <div className="media-body">
                <h5 className="my-1 fs-13 text-uppercase  font-weight-bold letter-spacing-093 font-weight-normal">
                  {data?.GarageSpaces ? data?.GarageSpaces : "N/A"}
                </h5>
                <p className="mb-0 fs-14  text-heading">
                  Garage
                </p>
              </div>
            </div>
          </div>


          {/* Sq Ft */}
          <div data-aos="fade-up" className=" col-xl-3 col-lg-3 col-md-4 col-sm-6 col-6  mb-6 ">
            <div className="media">
              <div className="p-2 shadow-xxs-1 rounded-lg mr-2">
                <svg className="icon icon-price fs-30 text-primary">
                  <Icon icon="ic:outline-square-foot" color="#e4ba56" />
                </svg>
              </div>
              <div className="media-body">
                <h5 className="my-1 fs-14 text-uppercase letter-spacing-093 font-weight-normal">
                  <p className="mb-0  font-weight-bold">{data?.BuildingAreaTotal ? data?.BuildingAreaTotal : "N/A"} </p>
                </h5>
                <p className="mb-0 fs-13 text-heading">
                  Sq Ft
                </p>
              </div>
            </div>
          </div>

          {/* Year */}
          <div data-aos="fade-up" className=" col-xl-3 col-lg-3 col-md-4 col-sm-6 col-6  mb-6 ">
            <div className="media">
              <div className="p-2 shadow-xxs-1 rounded-lg mr-2">
                <svg className="icon icon-year fs-25 text-primary">
                  <Icon icon="simple-line-icons:calender" color="#e4ba56" />
                </svg>
              </div>
              <div className="media-body">
                <h5 className="my-1 fs-14 text-uppercase letter-spacing-093 font-weight-bold ">
                  {data?.YearBuilt ? data?.YearBuilt : "N/A"}
                </h5>
                <p className="mb-0 fs-13 text-heading">
                  Year Built
                </p>

              </div>
            </div>
          </div>

          {/* Status */}
          <div data-aos="fade-up" className=" col-xl-3 col-lg-3 col-md-4 col-sm-6 col-6  mb-6 ">
            <div className="media">
              <div className="p-2 shadow-xxs-1 rounded-lg mr-2">
                <svg className="icon icon-year fs-25 text-primary">
                  <Icon icon="dashicons:post-status" color="#e4ba56" />
                </svg>
              </div>
              <div className="media-body">
                <h5 className="my-1 fs-14 text-uppercase letter-spacing-093 font-weight-bold ">
                  {data?.MlsStatus ? data?.MlsStatus : "N/A"}
                </h5>
                <p className="mb-0 fs-13 text-heading">
                  Status
                </p>

              </div>
            </div>
          </div>


        </div>
        <div data-aos="fade-up">
          <h4 className="fs-22 text-heading mt-6 mb-2 fw-bold border-bottom pb-3">Description</h4>
          <p className="mb-0 lh-214">{data?.PublicRemarks ? data?.PublicRemarks : "N/A"} </p>
        </div>
      </section>



    </>
  );
}

export default TopDetailsSecction;