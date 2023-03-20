import useCompareStore from "store/compareStore";
import ReportsLabels from "./Labels";
import useWishListStore from "store/wishListStore";
import { Icon } from "@iconify/react";
import Image from "next/image";
import CommonCarousel from "./CommonCarousel";

function PropertyCard({ i, property }) {
  const comapreState = useCompareStore(state => state.comapreState)
  const addComapreState = useCompareStore(state => state.addComapreState)
  const removeComapreState = useCompareStore(state => state.removeComapreState)
  const whishListState = useWishListStore(state => state.wishListState)
  const addWishListState = useWishListStore(state => state.addWishListState)
  const removeWishListState = useWishListStore(state => state.removeWishListState)

  return (
    <>
      <div key={i} className="col-lg-4 col-md-6 pb-6 mt-5 " data-aos="fade-up">
        <div className=" card-header bg-transparent shadow-lg  hover-to-top  pt-4 pb-3 px-1" >
          <div className=" hover-zoom-in position-relative d-block rounded-lg hover-change-image  bg-hover-overlay card-img">

            <img className="propertCardImage rounded-1 "
              width={300} onError={(e: any) => e.target.src = "/images/fmls.png"}
              height={40} src={(property?.Media?.length > 0) ? `${property?.Media[1]?.MediaURL}` : "/images/fmls.png"}
              alt="Home in Metric Way" />

            <div className="card-img-overlay d-flex flex-column">
              <ul className=" align-items-sm-center mb-3 d-flex  flex-grow-0 gap-2 flex-wrap " >
                {property?.labels?.map((label, i) => (<>
                  {i < 4 && label != "Featured" && label != "Recommanded" && (<>
                    <li className="badge badge-greay" style={{ fontSize: "0.5rem", backgroundColor: "#494949", }}>
                      {ReportsLabels[label]}
                    </li>
                  </>)}
                </>))}
                {property?.labels?.length > 4 && <li className="badge " style={{ fontSize: "0.4rem" }}>
                  More
                </li>}
              </ul>
              {/* <div><span className="badge badge-orange">Featured</span></div> */}
              <div className={`mt-auto d-flex ${(!comapreState?.includes(property?._id) && !whishListState?.includes(property?._id)) && "hover-image"}`}>
                <ul className="list-inline mb-0 d-flex align-items-end mr-auto">

                </ul>

                <ul className="list-inline mb-0 d-flex align-items-end mr-n3">
                  {!whishListState?.includes(property?._id) && (<>
                    <li onClick={() => addWishListState(property?._id)} className="list-inline-item mr-3 h-32" data-toggle="tooltip" title="Wishlist">
                      <p className="text-white fs-20 hover-primary" role="button">
                        <i className="far fa-heart">
                          <Icon icon="material-symbols:heart-plus" color="#e4ba56" />
                        </i>
                      </p>
                    </li>
                  </>)}

                  {whishListState?.includes(property?._id) && (<>
                    <li onClick={() => { removeWishListState(property?._id), console.log(whishListState) }} className="list-inline-item mr-3 h-32" data-toggle="tooltip" title="Wishlist">
                      <p className="text-white fs-20 hover-primary" role="button">
                        <i className="far fa-heart">
                          <Icon icon="material-symbols:heart-minus-sharp" color="#e4ba56" />
                        </i>
                      </p>
                    </li>
                  </>)}
                  {!comapreState?.includes(property?._id) && (<>
                    <li onClick={() => addComapreState(property?._id)} className="list-inline-item mr-3 h-32" data-toggle="tooltip" title="Compare">
                      <p className="text-white fs-20 hover-primary" role="button">
                        <i className="fas fa-exchange-alt">

                          <Icon icon="material-symbols:add-circle-outline-sharp" color="#e4ba56" />
                        </i>
                      </p>
                    </li>
                  </>)}
                  {comapreState?.includes(property?._id) && (<>
                    <li onClick={() => { removeComapreState(property?._id), console.log(comapreState) }} className="list-inline-item mr-3 h-32" data-toggle="tooltip" title="Compare">
                      <p className="text-white fs-20 hover-primary " role="button">
                        <i className="fas fa-exchange-alt">
                          <Icon icon="ph:minus-circle-bold" color="#e4ba56" />
                        </i>
                      </p>
                    </li>
                  </>)}
                </ul>
              </div>
            </div>

          </div>
          {/* <hr style={{ borderTop: "2px solid rgb(71 71 71 / 98%)", margin: 0 }} /> */}
          <a className="text-black" href={`/property/${property?._id}`}>
            <div className="px-4">
              <div className=" card-header  bg-transparent p-0 d-flex justify-content-between align-items-start flex-column ">
                <h2 className="fs-6  mb-0">
                  <a href={`/property/${property?._id}`}
                    className="fs-20 lh-2 mb-0 hover-primary lh-1  " style={{ minHeight: "60px" }}>
                    {property?.UnparsedAddress}, {property?.City}, {property?.CountyOrParish}, {property?.PostalCode}
                  </a>
                </h2>
                <p className="font-weight-500 text-gray mb-0">{property?.PropertySubType}</p>
              </div>
              <div className=" card-body p-0 ">
                <div className="d-flex justify-content-between align-items-center pt-3">
                  <p className="fs-17  text-heading mb-0 lh-1">
                    ${Math.round(property?.ListPrice)?.toLocaleString()}
                  </p>
                  <span className="badge badge-primary " style={{ fontSize: 'small' }}>{"Details"}</span>
                </div>
              </div>

              <div className=" card-body p-0 py-2 ">
                <ul className="list-inline d-flex mb-0 flex-wrap mr-n5 ">
                  <li className="list-inline-item text-gray font-weight-500 fs-17 d-flex align-items-center mr-5" data-toggle="tooltip" title="3 Bedroom">
                    <svg className="icon icon-bedroom fs-18 text-primary mr-1">
                      <Icon color="#e4ba56" icon="material-symbols:bedroom-parent-outline" width="20" />
                    </svg>
                    {property?.BedroomsTotal ? property?.BedroomsTotal : "N/A"}
                  </li>
                  <li className="list-inline-item text-gray font-weight-500 fs-17 d-flex align-items-center mr-5" data-toggle="tooltip" title="3 Bathrooms">
                    <svg className="icon icon-shower fs-18 text-primary mr-1">

                      <Icon color="#e4ba56" icon="mdi:bathroom" width={18} />
                    </svg>
                    {property?.BathroomsFull ? property?.BathroomsFull : "0"} {"|"}   {property?.BathroomsHalf ? property?.BathroomsHalf : "0"}
                  </li>
                  <li className="list-inline-item text-gray font-weight-500 fs-17 d-flex align-items-center mr-5" data-toggle="tooltip" title="Size">
                    <svg className="icon icon-square fs-18 text-primary mr-1">
                      <Icon color="#e4ba56" icon="bx:area" width="20" />
                    </svg>
                    {Number(property?.BuildingAreaTotal) ? Number(property?.BuildingAreaTotal).toLocaleString() + " sqFt" : "N/A"}
                  </li>
                  <li className="list-inline-item text-gray font-weight-500 fs-17 d-flex align-items-center mr-5" data-toggle="tooltip" title="1 Garage">
                    <svg className="icon icon-Garage fs-18 text-primary mr-1">
                      <Icon icon="fluent-mdl2:parking-solid" width="20" color="#e4ba56" />
                    </svg>
                    {property?.ParkingTotal ? property?.ParkingTotal : "0"}
                  </li>
                </ul>
              </div>
              {/* <hr style={{ borderTop: "2px solid rgb(71 71 71 / 98%)", margin: 0 }} /> */}

              <div className=" card-footer p-0 bg-transparent pt-3 pb-4 pb-3" style={{ fontSize: "small", flexWrap: "nowrap" }}>
                <p className=" mb-0 d-flex justify-content-between  align-item-center">
                  <div>
                    <img src={"/images/greenidx.png"} className="" style={{ width: '80px' }} alt="fmls" />
                  </div>
                  <div> {" | "}</div>
                  <div>
                    {property?.ListingId}
                  </div>
                  <div> {" | "}</div>

                  <div>
                    {property?.PropertySubType}
                  </div>

                </p>
                <p className="mb-0 " style={{ fontSize: "small" }}>   Listing provided courtesy of : First Multiple Listing Service</p>

              </div>

            </div>
          </a>
        </div >

      </div >
    </>
  );
}

export default PropertyCard;