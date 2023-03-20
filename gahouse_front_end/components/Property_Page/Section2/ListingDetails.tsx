import React from 'react'
let dataorpricechange;
let onmarketdate;
function ListingDetails({ data }) {
  if (data?.PriceChangeTimestamp) {
    dataorpricechange = new Date(data?.PriceChangeTimestamp).toDateString();
  } else {
    dataorpricechange = null;
  }

  if (data?.OnMarketDate) {
    onmarketdate = new Date(data?.OnMarketDate).toDateString()
  } else {
    onmarketdate = null;
  }

  return (
    <div data-aos="fade-up">
      <h4 className="fs-22 text-heading mb-4 fw-bold">LISTING DETAILS</h4>
      <div className="row">
        <dl data-aos="fade-up" className="col-sm-6 border-top mb-0 d-flex">
          <dt className=" fs-14  text-heading pr-2">
            Current Price :

            <span className='fs-14 fw-light pl-1'>${data?.FMLS_CurrentPrice ? (Number(data?.FMLS_CurrentPrice))?.toLocaleString() : "N/A"}</span></dt>
        </dl>
        <dl data-aos="fade-up" className="col-sm-6 border-top mb-0 d-flex">
          <dt className=" fs-14  text-heading pr-2">
            Original Price :

            <span className='fs-14 fw-light pl-1'>${data?.OriginalListPrice ? (Number(data?.OriginalListPrice))?.toLocaleString() : "N/A"}</span></dt>
        </dl>
        <dl data-aos="fade-up" className="col-sm-6 border-top mb-0 d-flex">
          <dt className=" fs-14  text-heading pr-2">
            Price Change :

            <span className='fs-14 fw-light pl-1'>{(Number(data?.OriginalListPrice) - Number(data?.FMLS_CurrentPrice)) ? (Number(data?.OriginalListPrice) + 14900 - Number(data?.FMLS_CurrentPrice) - 14900)?.toLocaleString() : "N/A"}</span></dt>
        </dl>
        <dl data-aos="fade-up" className="col-sm-6 border-top mb-0 d-flex">
          <dt className=" fs-14  text-heading pr-2">
            Listing Provided Courtesy Of :

            <span className='fs-14 fw-light pl-1'>{data?.ListOfficeName ? data?.ListOfficeName : "N/A"}</span></dt>
        </dl>
        <dl data-aos="fade-up" className="col-sm-6 border-top mb-0 d-flex">
          <dt className=" fs-14  text-heading pr-2">
            Change Time :
            <span className='fs-14 fw-light pl-1'>{dataorpricechange == null ? <span>N/A</span> : <span>{dataorpricechange}</span>}</span>
          </dt>
        </dl>
        <dl data-aos="fade-up" className="col-sm-6 border-top mb-0 d-flex">
          <dt className=" fs-14  text-heading pr-2">
            Days On Market :

            <span className='fs-14 fw-light pl-1'>{data?.DaysOnMarket}</span></dt>
        </dl>


      </div>
    </div>
  )
}

export default ListingDetails