import { GetServerSideProps, GetServerSidePropsContext } from 'next'
import React, { useState } from 'react'
import PropertyObjectQueries from "../components/PropertyQueryObject"
import api from 'lib/api'
import { useQuery } from 'react-query'
import { BounceLoader } from 'react-spinners'
import Section3_props from '@components/Half_prop_list_map.js/Section3_props/Section3_props'
import Section2_props from '@components/Half_prop_list_map.js/Section2_props/Section2_props'
import Section_prop from '@components/Half_prop_list_map.js/Section1_prop/Section_prop'
import List_section3 from '@components/Property_list/PropertyList'
import Section_bestprop from '@components/AdvanceSearch'
import useWishListStore from 'store/wishListStore'
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


  PropertyObjectQueries({
    queries, school, setschool, showMap, setshowMap, PropertySubType, setPropertySubType, City, setCity, search, setsearch, page, setpage, numberOfRow, setnumberOfRow, report, setreport,
    CountyOrParish, setCountyOrParish, BathroomsTotalInteger, setBathroomsTotalInteger, BedroomsTotal, setBedroomsTotal,
    minPrice, setminPrice, maxPrice, setmaxPrice, ListingId, setListingId
  })

  const wishListState = useWishListStore(state => state.wishListState)

  const { data: propertyList, isLoading, isRefetching, isPreviousData } = useQuery(
    ["singlepageApi", report, page, school, PropertySubType, CountyOrParish, MlsStatus, City, BathroomsTotalInteger, BedroomsTotal, minPrice, maxPrice], async () =>
    await api.get(`/wishlistFilters?id=` + wishListState), {
    refetchOnWindowFocus: false,
    refetchIntervalInBackground: false,
    refetchOnMount: false,
    refetchOnReconnect: false,
    keepPreviousData: true,
    enabled: wishListState && wishListState?.length > 0 ? true : false,
    onSuccess: (res) => {
      // console.log("single", res.data)
    },
    onError: ((err) => {
      console.log(err)
    })
  })


  return (
    <div style={{minHeight:"60vh"}}>
      {(isRefetching || isLoading) && (<>
        <div style={{ position: "absolute", "width": "100%", minHeight: "50vh", height: "100vh", display: "flex", justifyContent: "center", alignItems: "center", zIndex: "100" }}>
          <BounceLoader size={150}
            color={"#e4ba56"} />
        </div>
      </>)}
      {wishListState?.length > 0?(<>
        <List_section3 showMap={showMap} setshowMap={setshowMap} propertyList={propertyList} page={page} setpage={setpage} numberOfRow={numberOfRow} isLoading={isLoading} isFetching={isRefetching} isPreviousData={isPreviousData} />

        </>) : (<>
          <div className='w-100 h-100 d-flex justify-content-center align-content-center align-items-center'>
                Add Proprty to Wishlist
          </div>
        </>)}
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