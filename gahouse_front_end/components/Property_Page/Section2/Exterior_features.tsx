
function Exterior_features({ data }) {

  return (
    <div data-aos="fade-up">
      <h4 className="fs-22 text-heading mb-4 fw-bold">EXTERIOR FEATURES</h4>
      <div className="row">
        <dl data-aos="fade-up" className="col-sm-6 border-top  mb-0 d-flex">
          <dt className=" fs-14  text-heading pr-2">
            Architectural Style :

            <span className="fs-14 fw-light pl-1">{data?.ArchitecturalStyle?.toString() ? data?.ArchitecturalStyle?.toString()?.replaceAll(",", ", ") : "N/A"}</span>          </dt>
        </dl>
        <dl data-aos="fade-up" className="col-sm-6 mb-0 d-flex border-top text-wrap ">
          <dt className=" fs-14  text-heading pr-2">
            Is New Construction :

            <span className="fs-14 fw-light pl-1">{(data?.PropertyCondition?.includes("To Be Built") || data?.PropertyCondition?.includes("New Construction")) ? "Yes" : "No"}</span>          </dt>
        </dl>
        <dl data-aos="fade-up" className="col-sm-6 mb-0 d-flex border-top text-wrap ">
          <dt className=" fs-14  text-heading pr-2">
            Construction Status :

            <span className="fs-14 fw-light pl-1">{data?.ConstructionMaterials.toString() ? data?.ConstructionMaterials.toString()?.replaceAll(",", ", ") : "N/A"}</span>          </dt>
        </dl>
        <dl data-aos="fade-up" className="col-sm-6 mb-0 d-flex border-top text-wrap ">
          <dt className=" fs-14  text-heading pr-2">
            Exterior :
            <span className="fs-14 fw-light pl-1">{data?.ExteriorFeatures?.toString() ? data?.ExteriorFeatures?.toString()?.replaceAll(",", ", ") : "N/A"}</span>

          </dt>
        </dl>
        <dl data-aos="fade-up" className="col-sm-6 mb-0 d-flex border-top text-wrap ">
          <dt className=" fs-14  text-heading pr-2">
            Water Sewer :

            <span className="fs-14 fw-light pl-1">{data?.Sewer.toString() ? data?.Sewer.toString()?.replaceAll(",", ", ") : "N/A"}</span>          </dt>
        </dl>
        <dl data-aos="fade-up" className="col-sm-6 mb-0 d-flex border-top text-wrap ">
          <dt className=" fs-14  text-heading pr-2">
            Utilities :
            <span className="fs-14 fw-light pl-1">{data?.Utilities?.toString() ? data?.Utilities?.toString()?.replaceAll(",", ", ") : "N/A"}</span>

          </dt>
        </dl>
        <dl data-aos="fade-up" className="col-sm-6 mb-0 d-flex border-top text-wrap ">
          <dt className=" fs-14  text-heading pr-2">
            Levels :

            <span className="fs-14 fw-light pl-1">{data?.Levels.toString() ? data?.Levels.toString()?.replaceAll(",", ", ") : "N/A"}</span>          </dt>
        </dl>
        <dl data-aos="fade-up" className="col-sm-6 mb-0 d-flex border-top text-wrap ">
          <dt className=" fs-14  text-heading pr-2">
            Construction :

            <span className="fs-14 fw-light pl-1">{data?.ConstructionMaterials.toString() ? data?.ConstructionMaterials.toString()?.replaceAll(",", ", ") : "N/A"}</span>          </dt>
        </dl>
        <dl data-aos="fade-up" className="col-sm-6 mb-0 d-flex border-top text-wrap ">
          <dt className=" fs-14  text-heading pr-2">
            Water Body Name :

            <span className="fs-14 fw-light pl-1">{data?.WaterBodyName}</span>          </dt>
        </dl>
        <dl data-aos="fade-up" className="col-sm-6 mb-0 d-flex border-top text-wrap ">
          <dt className=" fs-14  text-heading pr-2">
            Water Front Features :

            <span className="fs-14 fw-light pl-1">{data?.WaterfrontFeatures.toString() ? data?.WaterfrontFeatures.toString()?.replaceAll(",", ", ") : "N/A"}</span>          </dt>
        </dl>
        <dl data-aos="fade-up" className="col-sm-6 mb-0 d-flex border-top text-wrap ">
          <dt className=" fs-14  text-heading pr-2">
            Fencing :

            <span className="fs-14 fw-light pl-1">{data?.Fencing.toString() ? data?.Fencing.toString()?.replaceAll(",", ", ") : "N/A"}</span>          </dt>
        </dl>
        <dl data-aos="fade-up" className="col-sm-6 mb-0 d-flex border-top text-wrap ">
          <dt className=" fs-14  text-heading pr-2">
            Spa Features :

            <span className="fs-14 fw-light pl-1">{data?.SpaFeatures.toString() ? data?.SpaFeatures.toString()?.replaceAll(",", ", ") : "N/A"}</span>          </dt>
        </dl>
        <dl data-aos="fade-up" className="col-sm-6 mb-0 d-flex border-top text-wrap ">
          <dt className=" fs-14  text-heading pr-2">
            Parking Total :
            <span className=" fs-14 fw-light pl-1">{data?.ParkingTotal ? data?.ParkingTotal : "N/A"}</span>

          </dt>
        </dl>
        <dl data-aos="fade-up" className="col-sm-6 mb-0 d-flex border-top text-wrap ">
          <dt className=" fs-14  text-heading pr-2">
            Parking Features :
            <span className="fs-14 fw-light pl-1">{data?.ParkingFeatures.toString() ? data?.ParkingFeatures.toString()?.replaceAll(",", ", ") : "N/A"}</span>
          </dt>
        </dl>
        <dl data-aos="fade-up" className="col-sm-6 mb-0 d-flex border-top text-wrap ">
          <dt className=" fs-14  text-heading pr-2">
            Roof :

            <span className="fs-14 fw-light pl-1">{data?.Roof.toString() ? data?.Roof.toString()?.replaceAll(",", ", ") : "N/A"}</span>          </dt>
        </dl>
        <dl data-aos="fade-up" className="col-sm-6 mb-0 d-flex border-top text-wrap ">
          <dt className=" fs-14  text-heading pr-2">
            Water Source :

            <span className="fs-14 fw-light pl-1">{data?.WaterSource.toString() ? data?.WaterSource.toString()?.replaceAll(",", ", ") : "N/A"}</span>          </dt>
        </dl>
        <dl data-aos="fade-up" className="col-sm-6 mb-0 d-flex border-top text-wrap ">
          <dt className=" fs-14  text-heading pr-2">
            Security Features :
            <span className="fs-14 fw-light pl-1">{data?.SecurityFeatures.toString() ? data?.SecurityFeatures.toString()?.replaceAll(",", ", ") : "N/A"}</span>
          </dt>
        </dl>
        <dl data-aos="fade-up" className="col-sm-6 mb-0 d-flex border-top text-wrap ">
          <dt className=" fs-14  text-heading pr-2">
            Private Pool :

            <span className="fs-14 fw-light pl-1">{data?.PoolPrivateYN ? data?.PoolPrivateYN : "N/A"}</span>          </dt>
        </dl>
        <dl data-aos="fade-up" className="col-sm-6 mb-0 d-flex border-top text-wrap ">
          <dt className=" fs-14  text-heading pr-2">
            Pool :

            <span className="fs-14 fw-light pl-1">{data?.PoolFeatures.toString() ? data?.PoolFeatures.toString()?.replaceAll(",", ", ") : "N/A"}</span>          </dt>
        </dl>
        <dl data-aos="fade-up" className="col-sm-6 mb-0 d-flex border-top text-wrap ">
          <dt className=" fs-14  text-heading pr-2">
            Lot Size Acres :

            <span className="fs-14 fw-light pl-1">{data?.LotSizeAcres ? data?.LotSizeAcres : "N/A"}/{data?.LotSizeSource ? data?.LotSizeSource : "N/A"} </span>          </dt>
        </dl>
        <dl data-aos="fade-up" className="col-sm-6 mb-0 d-flex border-top  ">
          <dt className=" fs-14  text-heading pr-2">
            Lot Features :
            <span className="fs-14 fw-light pl-1">{data?.LotFeatures.toString() ? data?.LotFeatures.toString()?.replaceAll(",", ", ") : "N/A"}</span>
          </dt>
        </dl>
        <dl data-aos="fade-up" className="col-sm-6 mb-0 d-flex border-top text-wrap ">
          <dt className=" fs-14  text-heading pr-2">
            Patio And Porch :
          </dt>
          <span className="fs-14 fw-light pl-1">{data?.PatioAndPorchFeatures.toString() ? data?.PatioAndPorchFeatures.toString()?.replaceAll(",", ", ") : "N/A"}</span>          {/* <span className="fs-14 fw-light pl-1">{data?.PatioAndPorchFeatures?.toString()}</dd> */}
        </dl>
        <dl data-aos="fade-up" className="col-sm-6 mb-0 d-flex border-top border-bottom ">
          <dt className=" fs-14  text-heading pr-2">
            View :

            <span className="fs-14 fw-light pl-1">{data?.View.toString() ? data?.View.toString()?.replaceAll(",", ", ") : "N/A"}</span>          </dt>
        </dl>
        <dl data-aos="fade-up" className="col-sm-6 mb-0 d-flex border-top text-wrap ">
        </dl>

      </div>
    </div>
  )
}

export default Exterior_features