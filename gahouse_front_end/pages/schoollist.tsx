import api from "lib/api";
import { useQuery } from "react-query";
import axios from "axios";
import { useState } from "react";
import School_table from "@components/School_List/School-table/School_table";
import { BounceLoader } from "react-spinners";
// import School_List_sec1 from "@components/School_List/School_List_main";

function schoollist() {
  const [County, setCounty] = useState('')
  const [CITIES, setcities] = useState('')
  const [data1, setData] = useState('')
  const [search, setsearch] = useState('')
  const [page, setpage] = useState(1)
  const [numberOfRow, setnumberOfRow] = useState(0)
  const [sortBy, setsortBy] = useState('')
  const [sortOrder, setsortOrder] = useState("")
  const [rating, setrating] = useState("")
  const [school, setschool] = useState("")
  const [type, settype] = useState("")

  const { isLoading, data: schoolList, refetch, isRefetching, isPreviousData } = useQuery(
    ["schoolListtable", search, school, type, rating, page, numberOfRow, CITIES, County], async () =>
    await api.get(`/schoolList?sortBy=${sortBy}&sortOrder=${sortOrder}&search=${search}
    &numberOfRow=${numberOfRow}&County=${County}&CITIES=${CITIES}&type=${type}&school=${school}&rating=${rating}
    `), {
    refetchOnWindowFocus: false,
    refetchIntervalInBackground: false,
    refetchOnMount: false,
    refetchOnReconnect: false,
    keepPreviousData: true,
    onError: ((err) => {
      console.log(err)
    })
  }
  )

  return (
    <>
      {(isRefetching || isLoading) && (<>
        <div style={{ position: "absolute", "width": "100%", height: "100vh", display: "flex", justifyContent: "center", alignItems: "center", zIndex: "100" }}>
          <BounceLoader size={150}
            color={"#e4ba56"} />
        </div>
      </>)}
      <div className="d-flex justify-content-center" style={{ width: "100vw",minHeight:"60vh" }}>
        {/* <Sec1_schoolList setCounty={setCounty} setcities={setcities} /> */}
        <School_table city={CITIES} setcity={setcities} county={County} setcounty={setCounty} school={school} setschool={setschool} type={type} settype={settype} rating={rating} setrating={setrating}
          schoolList={schoolList?.data} isRefetching={isRefetching} isLoading={isLoading} isPreviousData={isPreviousData} page={page} setpage={setpage} sortBy={sortBy} setsortBy={setsortBy} sortOrder={sortOrder} setsortOrder={undefined} />
      
      </div>
    </>
  );
}

export default schoollist;
