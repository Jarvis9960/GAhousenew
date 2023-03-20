import React, { useState } from "react";
import ObjectQueries from "../../components/QueryObject"
import { GetServerSideProps, GetServerSidePropsContext } from "next";
import { useQuery } from "react-query";
import api from "lib/api";
import { useRouter } from "next/router";
function County({ queries }) {

  const [CountyOrParish, setCountyOrParish] = useState("")
  const [bathroom, setbathroom] = useState()
  const [BedroomsTotal, setBedroomsTotal] = useState()
  const [sortbathroom, setsortbathroom] = useState()
  const [sortBedroomsTotal, setsortBedroomsTotal] = useState()
  const [minPrice, setminPrice] = useState() 
  const [maxPrice, setmaxPrice] = useState()
  const [sortListPrice, setsortListPrice] = useState()
  const [sortBy, setsortBy] = useState("")
  const [sortOrder, setsortOrder] = useState("")
  const [search, setsearch] = useState("")
  const [page, setpage] = useState(1)
  const [numberOfRow, setnumberOfRow] = useState(10)
  ObjectQueries({
    queries, sortBy, setsortBy, sortOrder, setsortOrder,
    search, setsearch, page, setpage, numberOfRow, setnumberOfRow,
    CountyOrParish,setCountyOrParish, bathroom, setbathroom, BedroomsTotal, setBedroomsTotal,
    sortbathroom,setsortbathroom, sortBedroomsTotal, setsortBedroomsTotal, minPrice, setminPrice,
    maxPrice,setmaxPrice,sortListPrice,setsortListPrice
  })

  const { isLoading, data, refetch, isFetching, isPreviousData } = useQuery(
    ["getProjects", sortBy, sortOrder, search, page, numberOfRow], async () =>
    await api.get(`gallery-api?sortBy=${sortBy}&sortOrder=${sortOrder}&search=${search}&page=${page}
    &numberOfRow=${numberOfRow}&CountyOrParish=${CountyOrParish}&bathroom=${bathroom}&BedroomsTotal=${BedroomsTotal}&sortbathroom=${sortbathroom}
    &sortBedroomsTotal=${sortBedroomsTotal}&minPrice=${minPrice}&maxPrice=${maxPrice}&sortListPrice=${sortListPrice}
    `), { keepPreviousData: true })
  
  const router=useRouter()
  
  return (<>
    <section className="pt-11 pt-md-14 pb-11 bg-gray-01">
      <div className="container">
        <div className="row">
          {["Cobb", "Douglas", "Falton", "Dekalb", "Clayton", "Henry", "Gwinnett", "Rockdale", "Walton"].map((county,i) => (<>
            <div key={i} onClick={() => router.push("county/" + county)} className="col-lg-4 col-md-6 pb-6">
            {county}
          </div>
          </>))}
          

        </div>
      </div>
      </section>

  </>);
}

export default County;
export const getServerSideProps: GetServerSideProps = async (ctx: GetServerSidePropsContext) => {
  const queries = ctx.query
  return {
    props: {
      queries: queries
    }
  }
}