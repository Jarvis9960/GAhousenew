import React, { useState } from "react";
import ReportObjectQueries from "../../components/ReportQueryObject"
import { GetServerSideProps, GetServerSidePropsContext } from "next";
import { useQuery } from "react-query";
import api from "lib/api";
import Section1_gallery from "../../components/Gallery_page/Section_gallert/Section1_gallery";
import Section2_gallery from "../../components/Gallery_page/Section2_gallery/Section2_gallery";
import { BounceLoader } from "react-spinners";
import Section_bestprop from "@components/AdvanceSearch";
import AdvanceSearch from "@components/AdvanceSearch";
function Gallery({ queries }) {
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

  ReportObjectQueries({
    queries, City, setCity,
    CountyOrParish, setCountyOrParish, BathroomsTotalInteger, setBathroomsTotalInteger, BedroomsTotal, setBedroomsTotal,
    minPrice, setminPrice, maxPrice, setmaxPrice
  })


  const { data: allReportsCount, isLoading, isRefetching, refetch: refetchProperty } = useQuery(
    ["singlepageApi", MlsStatus,
      PropertySubType,
      report,
      City,
      CountyOrParish,
      BathroomsTotalInteger,
      BedroomsTotal,
      minPrice,
      maxPrice, PropertySubType], async () =>
    await api.get(`/singleapi?City=${City}&MlsStatus=${MlsStatus}&CountyOrParish=${CountyOrParish}&BathroomsTotalInteger=${BathroomsTotalInteger}&BedroomsTotal=${BedroomsTotal}
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

  const { data: allCounties, isPreviousData, error } = useQuery(
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
  return (<>
    {(isRefetching || isLoading) && (<>
      <div style={{ position: "absolute", "width": "100%", height: "100vh", display: "flex", justifyContent: "center", alignItems: "center", zIndex: "100" }}>
        <BounceLoader size={150}
          color={"#e4ba56"} />
      </div>
    </>)}
    <AdvanceSearch
      search={search} setsearch={setsearch}
      report={report} setreport={setreport}
      City={City} setCity={setCity}
      CountyOrParish={CountyOrParish} setCountyOrParish={setCountyOrParish}
      BathroomsTotalInteger={BathroomsTotalInteger} setBathroomsTotalInteger={setBathroomsTotalInteger}
      BedroomsTotal={BedroomsTotal} setBedroomsTotal={setBedroomsTotal}
      minPrice={minPrice} setminPrice={setminPrice}
      maxPrice={maxPrice} setmaxPrice={setmaxPrice}
      setListingId={setListingId} ListingId={ListingId}
      MlsStatus={MlsStatus} setMlsStatus={setMlsStatus} PropertySubType={PropertySubType} setPropertySubType={setPropertySubType}
      refetchProperty={undefined} />
    <Section2_gallery CountyOrParish={CountyOrParish} BathroomsTotalInteger={BathroomsTotalInteger} BedroomsTotal={BedroomsTotal} minPrice={minPrice} maxPrice={maxPrice} MlsStatus={MlsStatus} allReportsCount={allReportsCount?.data} />

  </>);
}

export default Gallery;
export const getServerSideProps: GetServerSideProps = async (ctx: GetServerSidePropsContext) => {
  const queries = ctx.query
  return {
    props: {
      queries: queries
    }
  }
}