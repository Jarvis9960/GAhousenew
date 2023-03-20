import { GetServerSideProps, GetServerSidePropsContext } from 'next'
import React, { useState } from 'react'
import PropertyObjectQueries from "../../components/PropertyQueryObject"
import api from 'lib/api'
import { useQuery } from 'react-query'
import { BounceLoader } from 'react-spinners'
import Link from 'next/link'
import AdvanceSearch from '@components/AdvanceSearch'
import PropertyList from '@components/Property_list/PropertyList'
import { reportsDetails } from '@components/reportsDetails'

function Property({ queries }) {
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
  const [sorting, setsorting] = useState("")
  const [sortBy, setsortBy] = useState("-1")


  PropertyObjectQueries({
    queries, school, setschool, showMap, setshowMap, PropertySubType, setPropertySubType, City, setCity, search, setsearch, page, setpage, numberOfRow, setnumberOfRow, report, setreport,
    CountyOrParish, setCountyOrParish, BathroomsTotalInteger, setBathroomsTotalInteger, BedroomsTotal, setBedroomsTotal,
    minPrice, setminPrice, maxPrice, setmaxPrice, ListingId, setListingId
  })


  const { data: propertyList, isLoading, isRefetching, isPreviousData, refetch: refetchProperty } = useQuery(
    ["singlepageApi", MlsStatus,
      PropertySubType,
      report,
      City,
      CountyOrParish,
      BathroomsTotalInteger,
      BedroomsTotal,
      minPrice,
      maxPrice, PropertySubType, page, sorting, sortBy, school], async () =>
    await api.get(`/primaryfilter?school=${school}&sorting=${sorting}&sortBy=${sortBy}&ListingId=${ListingId}&PropertySubType=${PropertySubType}&page=${page}&numberOfRow=${numberOfRow}&report=${report}&search=${search}&City=${City}&MlsStatus=${MlsStatus}&CountyOrParish=${CountyOrParish}&BathroomsTotalInteger=${BathroomsTotalInteger}&BedroomsTotal=${BedroomsTotal}
    &minPrice=${minPrice}&maxPrice=${maxPrice}
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


  return (
    <div>
      {(isRefetching || isLoading) && (<>
        <div style={{ position: "absolute", "width": "100%", height: "100vh", display: "flex", justifyContent: "center", alignItems: "center", zIndex: "100" }}>
          <BounceLoader size={150}
            color={"#e4ba56"} />
        </div>
      </>)}
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
        MlsStatus={MlsStatus} setMlsStatus={setMlsStatus}
        refetchProperty={refetchProperty}
      />
      <div className="container container-xxl">
        <span><Link className='fs-18 text-uppercase' href={'/'}>Home</Link></span> /
        <span><Link className='fs-18 text-uppercase' href={'/'}> Property</Link></span>
        {CountyOrParish && CountyOrParish.trim().length > 0 && (<>
          <span><Link className='fs-18 text-uppercase' href={'/property?CountyOrParish=' + CountyOrParish}> / {CountyOrParish}</Link></span>
        </>)}
        {City && City.trim().length > 0 && (<>
          <span><Link className='fs-18 text-uppercase' href={'/property?City=' + City}> / {City}</Link></span>
        </>)}
        <br />
        {report && report.trim().length > 0 && (<>

          <h3>{reportsDetails?.find(c => c.key == report)?.name}</h3>
          <br />
        </>)}
        <p className='mt-2'>Underneath “Reports” but above “Exclusive Life Style” – there should be a couple of sentences that show that a person can click on these reports and get detailed listings and additionally sign up for any new listings that can come underneath this type of report.</p>
        <br />
        <div className='d-flex justify-content-between text-black '>
          <p>{propertyList?.data?.total}  Properties</p>
          {/* <p className='pr-10'>Sort By : 
            <select className='fs-16' onChange={(e:any) => {
          
            if(e.target.value==1) setsortBy("1"),setsorting("ListPrice")
            if(e.target.value==2) setsortBy("-1"),setsorting("ListPrice")
            if(e.target.value==3) setsortBy("1"),setsorting("DaysOnMarket") 
            if(e.target.value==4) setsortBy("-1"),setsorting("DaysOnMarket")}}>
          <option className=''>Default Order</option>
          <option value={1} selected={sortBy == '1' && sorting == "ListPrice"}>Price- Low to High</option>
            <option value={2}  selected={sortBy == '-1' && sorting == "ListPrice"} >Price- High to Low</option>
            <option value={3}  selected={sortBy == '1' && sorting == "DaysOnMarket"} >Date- Old to New</option>
          <option value={4}  selected={sortBy=='-1' && sorting=="DaysOnMarket"} >Date- New to Old</option>
          </select></p> */}
        </div>

      </div>
      <PropertyList showMap={showMap} setshowMap={setshowMap} propertyList={propertyList?.data} page={page} setpage={setpage} numberOfRow={numberOfRow} isLoading={isLoading} isFetching={isRefetching} isPreviousData={isPreviousData} />
    </div>
  )
}

export default Property
export const getServerSideProps: GetServerSideProps = async (ctx: GetServerSidePropsContext) => {
  const queries = ctx.query
  return {
    props: {
      queries: queries
    }
  }
}