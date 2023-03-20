import Pagination from "@components/Pagination";
import api from "lib/api";
import React, { useState } from "react";
import { useQuery } from "react-query";
import { Icon } from '@iconify/react';

function School_table({ type, settype, city, setcity, county, setcounty, school, setschool, rating, setrating, schoolList, page, setpage, isLoading, isRefetching, isPreviousData, sortBy, setsortBy, sortOrder, setsortOrder }) {
  const { data: allCounties, error } = useQuery(
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
    ["cities", county], () => api.get("/totalCities?CountyOrParish=" + county), {
    refetchOnWindowFocus: false,
    refetchIntervalInBackground: false,
    refetchOnMount: false,
    refetchOnReconnect: false,
    keepPreviousData: true,
    onError: ({ response }) => {
      console.log("user", response)
    }
  })

  return (
    <>
      <div className=" pb-4 page-title shadow pt-4">
        <div className=" container" >
          <Pagination data={schoolList} page={page} setpage={setpage} numberOfRow={10} isLoading={isLoading} isFetching={isRefetching} isPreviousData={isPreviousData}  >

            <table className="table border ">
              <thead>

                <tr>
                  <th scope="col">S.No
                  </th>
                  <th scope="col">County
                    <br />
                    <select
                      className="form-control border-0 shadow-xxs-1 bg-transparent font-weight-600 selectpicker"
                      title="Any Price"
                      data-style="bg-white"
                      id="setCountyOrParish"
                      name="any-price"
                      placeholder={'Select County'}
                      onChange={(e: any) => { setcounty(e.target?.value) }}
                      value={county}>
                      <option value={""} >{""} <Icon icon="ri:arrow-drop-down-line" /></option>
                      {allCounties?.data?.counties?.map((county, i) => {
                        return (<option key={i} className='m-2' value={county} >{county}</option>)
                      })}
                    </select>
                  </th>
                  <th scope="col">City
                    <br />
                    <select
                      className="form-control border-0 shadow-xxs-1 bg-transparent font-weight-600 selectpicker"
                      data-style="bg-white"
                      id="any-price"
                      name="any-price"
                      placeholder='Select County'
                      onChange={(e: any) => { setcity(e?.target?.value) }}
                      value={city}
                      title="All Cities" >
                      <option value={""} >{""} <Icon icon="ri:arrow-drop-down-line" /></option>
                      {allCities?.data?.cities?.map((city, i) => {
                        return (<option key={i} value={city} >{city}</option>)
                      })}
                    </select>
                  </th>
                  <th scope="col">Type
                    <br />
                    <select
                      className="form-control border-0 shadow-xxs-1 bg-transparent font-weight-600 selectpicker"
                      data-style="bg-white"
                      id="any-price"
                      name="any-price"
                      placeholder='Select County'
                      onChange={(e: any) => { settype(e?.target?.value) }}
                      value={type}
                      title="All Cities" >
                      <option value={""} >{""} <Icon icon="ri:arrow-drop-down-line" width={20} /></option>
                      {['Elementary', "High", "Middle"].map((city, i) => {
                        return (<option key={i} value={city} >{city}</option>)
                      })}
                    </select>
                  </th>

                  <th scope="col">School Name
                    <br />
                    <input type="text" value={school} onChange={(e) => setschool(e.target.value)}
                      className="form-control border-0 shadow-xxs-1 bg-transparent font-weight-600 selectpicker"
                      data-style="bg-white"
                      id="any-price"
                      name="any-price" />

                  </th>


                  {/* <th scope="col">ZIP</th> */}
                  <th scope="col">Rating
                    <br />

                    <select value={rating} onChange={(e) => setrating(e.target.value)}
                      className="form-control border-0 shadow-xxs-1 bg-transparent font-weight-600 selectpicker"
                      data-style="bg-white"
                      id="any-price"
                      name="any-price"
                      placeholder='Select Rating'
                      title="Rating" >
                      <option value={""} >{""} <Icon icon="ri:arrow-drop-down-line" width={20} /></option>
                      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((rate, i) => {
                        return (<option key={i} value={rate} >{rate}+</option>)
                      })}
                    </select>
                  </th>
                  <th scope="col">Properties</th>
                </tr>
              </thead>
              <tbody>
                {
                  schoolList?.data?.map((value, i) => {

                    return (<>
                      <tr key={i}>
                        <th scope="row">{i * page + 1}</th>
                        <td>{value.County}</td>
                        <td>{value.CITIES}</td>
                        <td>{value?.TYPE} </td>
                        <td>{value?.SCHOOL_NAME} </td>



                        {/* <td>{value.ZIP}</td> */}
                        <td>{value.RATING}</td>
                        <td>
                          <a href={`/property?school=${value?.FMLS_VALUE}`}>
                            View Listings({value.properties})
                          </a></td>
                      </tr>
                    </>)
                  })
                }
                 
                
              </tbody>
            </table>
            {schoolList?.data?.length == 0 && (<>
                  <div style={{"width":"100%"}} className="text-center d-flex justify-content-center align-content-center align-item-">
                    Not found
                </div>
                </>)}
          </Pagination>


        </div >
      </div >
    </>
  );
}

export default School_table;
