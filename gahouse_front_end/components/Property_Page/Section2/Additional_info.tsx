import React from 'react'

function Additional_info({ data }) {


  return (
    <div data-aos="fade-up">
      <h4 className="fs-22 text-heading mb-4 fw-bold">ADDITIONAL INFORMATION</h4>
      <div className="row">
        <dl data-aos="fade-up" className="col-sm-6 border-top mb-0 d-flex">
          <dt className="fs-14  text-heading pr-2">
            Status Detail :
            <span className='fs-14 fw-light pl-1'>{data?.FMLS_PreviousStatus ? data?.FMLS_PreviousStatus : "N/A"}</span>
          </dt>
        </dl >
        <dl data-aos="fade-up" className="col-sm-6 border-top mb-0 d-flex">
          <dt className="fs-14  text-heading pr-2">
            Construction Status :
            <span className='fs-14 fw-light pl-1'>{data?.PropertyCondition ? data?.PropertyCondition : "N/A"}</span>
          </dt>
        </dl >
        <dl data-aos="fade-up" className="col-sm-6 border-top mb-0 d-flex">
          <dt className="fs-14  text-heading pr-2">
            Property Type :
            <span className='fs-14 fw-light pl-1'>{data?.FMLS_MlsPropertyType ? data?.FMLS_MlsPropertyType : "N/A"}</span>
          </dt>
        </dl >
        <dl data-aos="fade-up" className="col-sm-6 border-top mb-0 d-flex">
          <dt className="fs-14  text-heading pr-2">
            Property Type :
            <span className='fs-14 fw-light pl-1'>{data?.PropertyType ? data?.PropertyType : "N/A"}</span>
          </dt>
        </dl >
        <dl data-aos="fade-up" className="col-sm-6 border-top mb-0 d-flex">
          <dt className="fs-14  text-heading pr-2">
            Property Sub Type :
            <span className='fs-14 fw-light pl-1'>{data?.PropertySubType ? data?.PropertySubType : "N/A"}</span>
          </dt>
        </dl >
        <dl data-aos="fade-up" className="col-sm-6 border-top mb-0 d-flex">
          <dt className="fs-14  text-heading pr-2">
            Rental Restrictions :
            <span className='fs-14 fw-light pl-1'>{data?.FMLS_AssociationRentRestrictionsYN ? data?.FMLS_AssociationRentRestrictionsYN : "N/A"}</span>
          </dt>
        </dl >
        <dl data-aos="fade-up" className="col-sm-6 border-top mb-0 d-flex">
          <dt className="fs-14  text-heading pr-2">
            Association :
            <span className='fs-14 fw-light pl-1'>{data?.AssociationYN ? data?.AssociationYN : "N/A"}</span>
          </dt>
        </dl >
        <dl data-aos="fade-up" className="col-sm-6 border-top mb-0 d-flex">
          <dt className="fs-14  text-heading pr-2">
            Association Fee :
            <span className='fs-14 fw-light pl-1'>{data?.AssociationFee ? data?.AssociationFee : "N/A"}</span>
          </dt>
        </dl >
        <dl data-aos="fade-up" className="col-sm-6 border-top  mb-0 d-flex">
          <dt className="fs-14  text-heading pr-2">
            Tax Year :
            <span className='fs-14 fw-light pl-1'>{data?.TaxYear ? data?.TaxYear : "N/A"}</span>
          </dt>
        </dl >
        <dl data-aos="fade-up" className="col-sm-6 border-top mb-0 d-flex">
          <dt className="fs-14  text-heading pr-2">
            Tax Amount :
          </dt>
          <span className='fs-14 fw-light pl-1'>${data?.TaxAnnualAmount ? data?.TaxAnnualAmount : "N/A"}</span>
        </dl >
        <dl data-aos="fade-up" className="col-sm-6 border-top mb-0 d-flex">
          <dt className="fs-14  text-heading pr-2">
            Year Built :
            <span className='fs-14 fw-light pl-1'>{data?.YearBuilt ? data?.YearBuilt : "N/A"}</span>
          </dt>
        </dl >
        <dl data-aos="fade-up" className="col-sm-6 border-top mb-0 d-flex">
          <dt className="fs-14  text-heading pr-2">
            Property Type :
            <span className='fs-14 fw-light pl-1'>{data?.FMLS_MlsPropertyType ? data?.FMLS_MlsPropertyType : "N/A"}</span>
          </dt>
        </dl >
        <dl data-aos="fade-up" className="col-sm-6 border-top mb-0 d-flex">
          <dt className="fs-14  text-heading pr-2">
            Property Sub Type :
            <span className='fs-14 fw-light pl-1'>{data?.PropertySubType ? data?.PropertySubType : "N/A"}</span>
          </dt>
        </dl >
        <dl data-aos="fade-up" className="col-sm-6 border-top mb-0 d-flex">
          <dt className="fs-14  text-heading pr-2">
            Association :
            <span className='fs-14 fw-light pl-1'>{data?.AssociationYN ? data?.AssociationYN : "N/A"}</span>
          </dt>
        </dl >
        <dl data-aos="fade-up" className="col-sm-6 border-top border-bottom mb-0 d-flex">
          <dt className="fs-14  text-heading pr-2">
            Tax Year :
            <span className='fs-14 fw-light pl-1'>{data?.TaxYear ? data?.TaxYear : "N/A"}</span>
          </dt>
        </dl >
        <dl data-aos="fade-up" className="col-sm-6 border-top border-bottom mb-0 d-flex">
          <dt className="fs-14  text-heading pr-2">
            Community Features :

            <span className='fs-14 fw-light pl-1'>{data?.CommunityFeatures.toString() ? data?.CommunityFeatures.toString()?.replaceAll(",", ", ") : "N/A"}</span>
          </dt>
        </dl >

      </div>
    </div>
  )
}

export default Additional_info