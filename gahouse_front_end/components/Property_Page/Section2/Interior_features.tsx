import React from 'react'

function Interior_features({ data }) {
  return (
    <div data-aos="fade-up">
      <h4 className="fs-22 text-heading mb-4 fw-bold">INTERIOR FEATURES</h4>
      <div className="row">

        <dl data-aos="fade-up" className="col-sm-6 border-top mb-0 d-flex">
          <dt className=" fs-14  text-heading pr-2">
            Room Type :
            <span className=' fw-light fs-14 pl-1'> <span className='fs-14 fw-light pl-1'>{data?.RoomType?.toString() ? data?.RoomType?.toString()?.replaceAll(",", ", ") : "N/A"}</span></span>
          </dt>

        </dl>
        <dl data-aos="fade-up" className="col-sm-6 border-top mb-0 d-flex">
          <dt className=" fs-14  text-heading pr-2">
            Rooms :
            <span className=' fw-light fs-14 pl-1'> <span className='fs-14 fw-light pl-1'>{data?.RoomBedroomFeatures?.toString() ? data?.RoomBedroomFeatures?.toString()?.replaceAll(",", ", ") : "N/A"}</span></span>
          </dt>

        </dl>

        <dl data-aos="fade-up" className="col-sm-6 border-top mb-0 d-flex">
          <dt className=" fs-14  text-heading pr-2">
            Primary On Main :
            <span className=' fw-light fs-14 pl-1'> <span className='fs-14 fw-light pl-1'>{data?.RoomBedroomFeatures?.includes("Master On Main Level") || data?.RoomBedroomFeatures?.includes("Master on Main") ? "Yes" : "No"}</span></span>
          </dt>

        </dl>
        <dl data-aos="fade-up" className="col-sm-6 border-top mb-0 d-flex">
          <dt className=" fs-14  text-heading pr-2">
            Dining :
            <span className=' fw-light fs-14 pl-1'>{data?.RoomDiningRoomFeatures?.toString() ? data?.RoomDiningRoomFeatures?.toString()?.replaceAll(",", ", ") : "N/A"}</span>
          </dt>
        </dl>
        <dl data-aos="fade-up" className="col-sm-6 border-top mb-0 d-flex">
          <dt className=" fs-14  text-heading pr-2">
            Appliances :
            <span className=' fw-light fs-14 pl-1'>{data?.Appliances?.toString() ? data?.Appliances?.toString()?.replaceAll(",", ", ") : "N/A"}</span>
          </dt>
        </dl>
        <dl data-aos="fade-up" className="col-sm-6 border-top mb-0 d-flex">
          <dt className=" fs-14  text-heading pr-2">
            Interior :
            <span className=' fw-light fs-14 pl-1'>{data?.InteriorFeatures?.toString() ? data?.InteriorFeatures?.toString()?.replaceAll(",", ", ") : "N/A"}</span>
          </dt>

        </dl>
        <dl data-aos="fade-up" className="col-sm-6 border-top mb-0 d-flex">
          <dt className=" fs-14  text-heading pr-2">
            Laundry Features :
            <span className=' fw-light fs-14 pl-1'>
              {data?.LaundryFeatures?.toString() ? data?.LaundryFeatures?.toString()?.replaceAll(",", ", ") : "N/A"}</span>
          </dt>

        </dl>
        <dl data-aos="fade-up" className="col-sm-6 border-top mb-0 d-flex">
          <dt className=" fs-14  text-heading pr-2">
            Fireplace Features :
            <span className=' fw-light fs-14 pl-1'>{data?.FireplaceFeatures?.toString() ? data?.FireplaceFeatures?.toString()?.replaceAll(",", ", ") : "N/A"}</span>
          </dt>

        </dl>
        <dl data-aos="fade-up" className="col-sm-6 border-top mb-0 d-flex">
          <dt className=" fs-14  text-heading pr-2">
            Electric :
            <span className=' fw-light fs-14 pl-1'>{data?.Electric?.toString() ? data?.Electric?.toString()?.replaceAll(",", ", ") : "N/A"}</span>
          </dt>

        </dl>
        <dl data-aos="fade-up" className="col-sm-6 border-top mb-0 d-flex">
          <dt className=" fs-14  text-heading pr-2">
            Window Features :
            <span className=' fw-light fs-14 pl-1'>{data?.WindowFeatures?.toString() ? data?.WindowFeatures?.toString()?.replaceAll(",", ", ") : "N/A"}</span>
          </dt>

        </dl>
        <dl data-aos="fade-up" className="col-sm-6 border-top mb-0 d-flex">
          <dt className=" fs-14  text-heading pr-2">
            Kitchen :
            <span className=' fw-light fs-14 pl-1'>{data?.RoomKitchenFeatures?.toString() ? data?.RoomKitchenFeatures?.toString()?.replaceAll(",", ", ") : "N/A"}</span>
          </dt>
        </dl>

        <dl data-aos="fade-up" className="col-sm-6 border-top mb-0 d-flex">
          <dt className=" fs-14  text-heading pr-2">
            Dining :
            <span className=' fw-light fs-14 pl-1'>{data?.RoomDiningRoomFeatures?.toString() ? data?.RoomDiningRoomFeatures?.toString()?.replaceAll(",", ", ") : "N/A"}</span>
          </dt>
        </dl>
        <dl data-aos="fade-up" className="col-sm-6 border-top mb-0 d-flex">
          <dt className=" fs-14  text-heading pr-2">
            Cooling Source :
            <span className=' fw-light fs-14 pl-1'>{data?.Cooling?.toString()}</span>
          </dt>

        </dl>


        <dl data-aos="fade-up" className="col-sm-6 border-top mb-0 d-flex">
          <dt className=" fs-14  text-heading pr-2">
            Heating Source :
            <span className=' fw-light fs-14 pl-1'>{data?.Heating?.toString() ? data?.Heating?.toString()?.replaceAll(",", ", ") : "N/A"}</span>
          </dt>
        </dl>
        <dl data-aos="fade-up" className="col-sm-6 border-top mb-0 d-flex">
          <dt className=" fs-14  text-heading pr-2">
            Energy Related :
            <span className=' fw-light fs-14 pl-1'>{data?.GreenEnergyEfficient?.toString() ? data?.GreenEnergyEfficient?.toString().replaceAll(",", ", ") : "N/A"}</span>
          </dt>
        </dl>

        <dl data-aos="fade-up" className="col-sm-6 border-top mb-0 d-flex">
          <dt className=" fs-14  text-heading pr-2">
            Appliances :
            <span className=' fw-light fs-14 pl-1'>{data?.Appliances?.toString() ? data?.Appliances?.toString()?.replaceAll(",", ", ") : "N/A"}</span>
          </dt>
        </dl>
        <dl data-aos="fade-up" className="col-sm-6 border-top mb-0 d-flex">
          <dt className=" fs-14  text-heading pr-2">
            Sq Feet/Source :
            <span className='fs-14 fw-light pl-1'>  {data?.BuildingAreaTotal ? data?.BuildingAreaTotal : "N/A"}/ {data?.BuildingAreaSource ? data?.BuildingAreaSource : "N/A"}</span>
          </dt>
        </dl>

        <dl data-aos="fade-up" className="col-sm-6 border-top mb-0 d-flex">
          <dt className=" fs-14  text-heading pr-2">
            Interior :
            <span className=' fw-light fs-14 pl-1'>{data?.InteriorFeatures?.toString() ? data?.InteriorFeatures?.toString()?.replaceAll(",", ", ") : "N/A"}</span>
          </dt>

        </dl>
        <dl data-aos="fade-up" className="col-sm-6 border-top mb-0 d-flex">
          <dt className=" fs-14  text-heading pr-2">
            Master Bath :
            <span className=' fw-light fs-14 pl-1'>{data?.RoomMasterBathroomFeatures?.toString() ? data?.RoomMasterBathroomFeatures?.toString()?.replaceAll(",", ", ") : "N/A"}</span>
          </dt>

        </dl>
        {/* 

        <dl data-aos="fade-up" className="col-sm-6 border-top mb-0 d-flex">
          <dt className=" fs-14  text-heading pr-2">
            Laundry Features
          <span className=' fw-light fs-14 pl-1'>sssssssssssss{data?.LaundryFeatures?.toString() ? data?.LaundryFeatures[0] : "N/A"}</span>
            </dt>

        </dl> */}

        <dl data-aos="fade-up" className="col-sm-6 border-top mb-0 d-flex">
          <dt className=" fs-14  text-heading pr-2">
            Fireplace Total :
            <span className='fs-14 fw-light pl-1'>{data?.FireplacesTotal ? data?.FireplacesTotal : "N/A"}</span>
          </dt>
        </dl>

        <dl data-aos="fade-up" className="col-sm-6 border-top mb-0 d-flex">
          <dt className=" fs-14  text-heading pr-2">
            Fireplace Features :
            <span className=' fw-light fs-14 pl-1'>{data?.FireplaceFeatures?.toString() ? data?.FireplaceFeatures?.toString()?.replaceAll(",", ", ") : "N/A"}</span>
          </dt>

        </dl>

        <dl data-aos="fade-up" className="col-sm-6 border-top mb-0 d-flex">
          <dt className=" fs-14  text-heading pr-2">
            Accessibility :
            <span className=' fw-light fs-14 pl-1'>{data?.AccessibilityFeatures?.toString() ? data?.AccessibilityFeatures?.toString()?.replaceAll(",", ", ") : "N/A"}</span>
          </dt>
        </dl>

        <dl data-aos="fade-up" className="col-sm-6 border-top mb-0 d-flex">
          <dt className=" fs-14  text-heading pr-2">
            Electric :
            <span className=' fw-light fs-14 pl-1'>{data?.Basement?.toString() ? data?.Basement?.toString()?.replaceAll(",", ", ") : "N/A"} </span>
          </dt>
        </dl>
        <dl data-aos="fade-up" className="col-sm-6 border-top mb-0 d-flex">
          <dt className=" fs-14  text-heading pr-2">
            Basement :
            <span className=' fw-light fs-14 pl-1'>{data?.Basement?.toString() ? data?.Basement?.toString()?.replaceAll(",", ", ") : "N/A"} </span>
          </dt>
        </dl>

        <dl data-aos="fade-up" className="col-sm-6 border-top mb-0 d-flex">
          <dt className=" fs-14  text-heading pr-2">
            Window Features :
            <span className=' fw-light fs-14 pl-1'>{data?.WindowFeatures?.toString() ? data?.WindowFeatures?.toString()?.replaceAll(",", ", ") : "N/A"}</span>
          </dt>

        </dl>


        <dl data-aos="fade-up" className="col-sm-6 border-top border-bottom mb-0 d-flex">
          <dt className=" fs-14  text-heading pr-2">
            Other Equipment :
            <span className=' fw-light fs-14 pl-1'>{data?.OtherEquipment.toString()}</span>
          </dt>

        </dl>



        <dl data-aos="fade-up" className="col-sm-6 border-top border-bottom mb-0 d-flex ">
          <dt className=" fs-14  text-heading pr-2">
            Flooring :
            <span className=' fw-light fs-14 pl-1'>{data?.Flooring.toString()}</span>
          </dt>
        </dl>






      </div>
    </div >
  )
}

export default Interior_features