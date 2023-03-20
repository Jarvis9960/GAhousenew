import api from 'lib/api'
import React from 'react'
import { useQuery } from 'react-query'
import { Icon } from '@iconify/react';
import Image from "next/image";
import Slider from "react-slick";
import dynamic from 'next/dynamic';

const PropertyCard = dynamic(() => import("@components/PropertyCard"), {
  ssr: false,
})
function Section_similar_props() {
  const { data: propertyList, isLoading, isRefetching, isPreviousData } = useQuery(
    ["singlepageApi"], async () =>
    await api.get(`/primaryfilter
    `), {
    refetchOnWindowFocus: false,
    refetchIntervalInBackground: false,
    refetchOnMount: false,
    refetchOnReconnect: false,
    keepPreviousData: true,
    onSuccess: (res) => {
      console.log("single", res.data)
    },
    onError: ((err) => {
      console.log(err)
    })
  })
  let settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    // autoplay: true,
    autoplaySpeed: 4000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 770,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1
        }
      },
    ]
  };
  return (
    <section className="pb-12" data-aos="fade-up">

      <div className="container">
        <h2 className=" text-heading mb-6 ">Similar Listings</h2>
        <div className="row d-flex flex-grow-0">
          {propertyList?.data?.data?.map((property, i) => (<>
            {i < 6 && (<>
              <PropertyCard i={i} property={property} />
            </>)}
          </>))}

        </div>
      </div>
    </section>
  )
}

export default Section_similar_props