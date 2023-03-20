import React, { useEffect, useState } from "react";
import { useQuery } from 'react-query';
import api from "../../../lib/api";
import { useRouter } from "next/router";
import { reportsDetails } from "@components/reportsDetails";


function Section2_gallery({ CountyOrParish, BathroomsTotalInteger,
  BedroomsTotal, minPrice, maxPrice, allReportsCount, MlsStatus }) {

  const router = useRouter()


  return (<>


    <section className="pt-11 pt-md-14 pb-11 bg-gray-01">
      <div data-aos="fade-up" className="container">
        <div data-aos="fade-up" className="row">
          {
            reportsDetails?.map((report, index) => {
              return (
                <>
                  <div key={index} data-aos="fade-up" className="mt-2 hover-shine col-lg-3 col-md-4 pb-6" >
                    <a href={`/property?CountyOrParish=${CountyOrParish}&MlsStatus=${MlsStatus}&report=${report?.key}&BathroomsTotalInteger=${BathroomsTotalInteger}&BedroomsTotal=${BedroomsTotal}&minPrice=${minPrice}&maxPrice=${maxPrice}`}>
                      <div className="card hover-to-top " data-animate="fadeInUp " style={{ backgroundColor: "#100e0e" }}>
                        <div className=" rounded-lg card-img-top" >
                          <img
                            className=" card-img cardBackgroundImage"
                            src={`${report?.image}`}
                            alt="Home in Metric Way"
                            style={{ height: "35vh", width: "100%" }}
                          />
                        </div>
                        <div className="shadow-1 text-white card-img-overlay d-flex bold justify-content-center align-items-center flex-column" style={{ fontFamily: "sans", backgroundColor: "rgb(11 11 11 / 48%)" }}>
                          <h4 className="card-title fs-25" style={{ textAlign: "center" }}>{report?.name?.toString()}</h4>
                          <h5 className="card-text text-white fs-20"> Properties {allReportsCount?.find(r => r?.key == report?.key)?.count}</h5>

                        </div>

                      </div>
                    </a>
                  </div>

                </>
              )
            })
          }


        </div>
      </div>
    </section>
  </>

  );
}

export default Section2_gallery
