import React from 'react'

function Address_info({ data }) {

  return (
    <div data-aos="fade-up">
      <h4 data-aos="fade-up" className="fs-22 text-heading mb-4 fw-bold">ADDRESS INFO</h4>
      <div className="row">

        <dl data-aos="fade-up" className="col-sm-6 border-top  mb-0 d-flex mt-1">
          <dt className=" fs-14  text-heading pr-2">
            Address :
            <span className='fs-14 fw-light pl-1'> {data?.UnparsedAddress ? data?.UnparsedAddress : "N/A"}</span>
          </dt>
        </dl>
        <dl data-aos="fade-up" className="col-sm-6 border-top  mb-0 d-flex mt-1">
          <dt className=" fs-14  text-heading pr-2">
            City :
            <span className='fs-14 fw-light pl-1'> {data?.City ? data?.City : "N/A"}</span>
          </dt>
        </dl>


        <dl data-aos="fade-up" className="col-sm-6 border-top  mb-0 d-flex mt-1">
          <dt className=" fs-14  text-heading pr-2">
            State/County :
            <span className='fs-14 fw-light pl-1'> {data?.CountyOrParish ? data?.CountyOrParish : "N/A"}</span>
          </dt>
        </dl>
        <dl data-aos="fade-up" className="col-sm-6 border-top  mb-0 d-flex mt-1">
          <dt className=" fs-14  text-heading pr-2">
            Zip/Postal Code :
            <span className='fs-14 fw-light pl-1'> {data?.PostalCode ? data?.PostalCode : "N/A"}</span>
          </dt>
        </dl>


        <dl data-aos="fade-up" className="col-sm-6 border-top  border-bottom mb-0 d-flex mt-1">
          <dt className=" fs-14  text-heading pr-2">
            Subdivision :
          </dt>
          <span>{data?.SubdivisionNameL ? data?.SubdivisionNameL : "None"}</span>
        </dl>
        <dl data-aos="fade-up" className="col-sm-6 border-top  border-bottom mb-0 d-flex mt-1">
          <dt className=" fs-14  text-heading pr-2">
            Direction :
            <span className='fs-14 fw-light '>{data?.Directions ? data?.Directions : "N/A"}</span>
          </dt>
        </dl>




      </div>
    </div>
  )
}

export default Address_info