import BlogsHomePage from '@components/Home/BlogsHomePage'
import { GetServerSideProps, GetServerSidePropsContext } from 'next'
import React, { useState } from 'react'
import FeaturedProperties from '@components/Home/FeaturedProperties'
import MakeYourSelection from '@components/Home/MakeYourSelection'
import RealStateInquiry from '@components/Home/RealStateInquiry'
import GHFAtYourDisposal from '@components/Home/GHFAtYourDisposal'
import AdvanceSearch from '@components/AdvanceSearch'
import HomePageBanner from '@components/Home/HomePageBanner'

function Home() {
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
    <div>
      <HomePageBanner />
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

      <FeaturedProperties />
      <MakeYourSelection />
      <RealStateInquiry />
      <GHFAtYourDisposal />
      <BlogsHomePage />

    </div>
  )
}

export default Home

export const getServerSideProps: GetServerSideProps = async (ctx: GetServerSidePropsContext) => {
  const queries = ctx.query
  return {
    props: {
      queries: queries
    }
  }
}