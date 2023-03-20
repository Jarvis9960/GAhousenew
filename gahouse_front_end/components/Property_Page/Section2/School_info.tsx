import api from 'lib/api'
import React from 'react'
import { useQuery } from 'react-query'
import { BeatLoader } from 'react-spinners'

function School_info({ data }) {
  const { isLoading: ElementarySchoolLoading, data: ElementarySchoolRating } = useQuery(
    ["ElementarySchoolRating", data?.ElementarySchool], async () =>
    await api.get(`/schoolRatingForProperty?school=${data?.ElementarySchool}`), {
    refetchOnWindowFocus: false,
    refetchIntervalInBackground: false,
    refetchOnMount: false,
    refetchOnReconnect: false,
    keepPreviousData: false,
    enabled: data?.ElementarySchool ? true : false,
    onError: ((err) => {
      console.log(err)
    })
  })
  const { isLoading: MispanleOrJuniorSchoolLoading, data: MiddleOrJuniorSchool } = useQuery(
    ["MiddleOrJuniorSchool", data?.MiddleOrJuniorSchool], async () =>
    await api.get(`/schoolRatingForProperty?school=${data?.MiddleOrJuniorSchool}`), {
    refetchOnWindowFocus: false,
    refetchIntervalInBackground: false,
    refetchOnMount: false,
    refetchOnReconnect: false,
    keepPreviousData: false,
    enabled: data?.MiddleOrJuniorSchool ? true : false,
    onError: ((err) => {
      console.log(err)
    })
  })

  const { isLoading: HighSchoolLoading, data: HighSchoolRating } = useQuery(
    ["HighSchoolRating", data?.HighSchool], async () =>
    await api.get(`/schoolRatingForProperty?school=${data?.HighSchool}`), {
    refetchOnWindowFocus: false,
    refetchIntervalInBackground: false,
    refetchOnMount: false,
    refetchOnReconnect: false,
    keepPreviousData: false,
    enabled: data?.HighSchool ? true : false,
    onError: ((err) => {
      console.log(err)
    })
  })

console.log("ElementarySchoolRating",ElementarySchoolRating)

  return (

    <div data-aos="fade-up">
      <h4 className="fs-22 text-heading mb-4 fw-bold">SCHOOLS</h4>
      <div className="row">

        <dl data-aos="fade-up" className="col-sm-6 border-top  mb-0 d-flex mt-1">
          <dt className=" fs-14  text-heading pr-2">
            Elementary School :
            <span className="fs-14 fw-light pl-1 ">{data?.ElementarySchool ? data?.ElementarySchool : "N/A"}</span>
          </dt>
        </dl>
        <dl data-aos="fade-up" className="col-sm-6 border-top mb-0 d-flex mt-1">
          <dt className=" fs-14  text-heading pr-2">
            Elem. School Rating :
            <span className="fs-14 fw-light pl-1 ">
              {!ElementarySchoolLoading ? (<>
                {ElementarySchoolRating?.data?.RATING ? ElementarySchoolRating?.data?.RATING + "/10" : "N/A"}
              </>):(<>
                <BeatLoader size={10} />
              </>)}
            </span>
          </dt>
        </dl>
        <hr className='border'></hr>

        <dl data-aos="fade-up" className="col-sm-6 border-top mb-0 d-flex mt-1">
          <dt className=" fs-14  text-heading pr-2">
            Middle School :
            <span className="fs-14 fw-light pl-1 ">{data?.MiddleOrJuniorSchool ? data?.MiddleOrJuniorSchool : "N/A"}</span>
          </dt>
        </dl>
        <dl data-aos="fade-up" className="col-sm-6 border-top mb-0 d-flex mt-1">
          <dt className=" fs-14  text-heading pr-2">
            Middle School Rating :
            <span className="fs-14 fw-light pl-1 ">
              {!MispanleOrJuniorSchoolLoading ? (<>
                {MiddleOrJuniorSchool?.data?.RATING ? MiddleOrJuniorSchool?.data?.RATING + '/10' : "N/A"}
              </>) : (<>
                <BeatLoader size={10}/>
              </>)}
            </span>
          </dt>
        </dl>
        <hr className='border'></hr>


        <dl data-aos="fade-up" className="col-sm-6 border-top border-bottom mb-0 d-flex mt-1">
          <dt className=" fs-14  text-heading pr-2">
            High School :
            <span className="fs-14 fw-light pl-1 ">{data?.HighSchool ? data?.HighSchool : "N/A"}</span>
          </dt>
        </dl>
        <dl data-aos="fade-up" className="col-sm-6 border-top border-bottom mb-0 d-flex mt-1">
          <dt className=" fs-14  text-heading pr-2">
            High School Rating :
            <span className="fs-14 fw-light pl-1 ">
              {!HighSchoolLoading ? (<>
                {HighSchoolRating?.data?.RATING ? HighSchoolRating?.data?.RATING + "/10" : "N/A"}
              </>) : (<>
                <BeatLoader size={10}/>
              </>)}
            </span>
          </dt>
        </dl>





      </div>
    </div>
  )
}

export default School_info