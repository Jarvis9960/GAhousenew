import React from 'react'
import api from 'lib/api'
import { useQuery } from 'react-query'
import FeaturedPropertyCarousel from './FeaturedPropertyCarousel'

function FeaturedProperties() {

  const { data: propertyList, isLoading, isRefetching, isPreviousData } = useQuery(
    ["singlepageApi"], async () =>
    await api.get(`/primaryfilter?report=Featured`), {
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

  return (
    <div className="pt-9 pt-lg-1 pb-9 pb-lg-11" data-aos="fade-up" >
      <div className="container">
        <h2 className="text-center text-dark line-height-base">
          Featured Properties

        </h2>
        <p className='text-center'>Check out the latest properties to hit the market!</p>

        <FeaturedPropertyCarousel data={propertyList?.data} />

      </div>
    </div>
  )
}

export default FeaturedProperties