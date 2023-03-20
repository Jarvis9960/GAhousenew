import { useEffect, useState } from "react";
import Slider from "react-slick";
import { Icon } from '@iconify/react';
import useCompareStore from "store/compareStore";
import useWishListStore from "store/wishListStore";
import { useRouter } from "next/router";

function FeaturedPropertyCarousel({ data }) {
  let settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 770,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  const comapreState = useCompareStore(state => state.comapreState)
  const addComapreState = useCompareStore(state => state.addComapreState)
  const removeComapreState = useCompareStore(state => state.removeComapreState)
  const whishListState = useWishListStore(state => state.wishListState)
  const addWishListState = useWishListStore(state => state.addWishListState)
  const removeWishListState = useWishListStore(state => state.removeWishListState)

  const router = useRouter()
  return (

    <Slider {...settings} className=" p-4">
      {data?.data?.map((property) => (<>
        <div className=" shadow-sm hover-shine hover-to-top">
          <div className="w-100 box py-1">
            <div className="card" data-animate="fadeInUp">
              <div className="hover-change-image bg-hover-overlay rounded-lg card-img-top">

                <img className="propertCardImage rounded-1 " src={(property?.Media?.length > 0) ? property?.Media[0]?.MediaURL : "images/fmls.png"}
                  alt="Home in Metric Way" onError={(e: any) => e.target.src = "images/fmls.png"} />

                <div className="card-img-overlay p-2 d-flex flex-column">
                  <div>
                    <span className="badge badge-success p-0 py-1 px-1  " style={{ backgroundColor: "#77c720", fontWeight: '300' }}>Featured</span>
                  </div>

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
                        <li onClick={() => removeWishListState(property?._id)} className="list-inline-item mr-3 h-32" data-toggle="tooltip" title="Wishlist">
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
                        <li onClick={() => removeComapreState(property?._id)} className="list-inline-item mr-3 h-32" data-toggle="tooltip" title="Compare">
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
              <a href={"/property/" + property?._id}>
                <div className="card-header bg-transparent d-flex justify-content-between align-items-center py-3">
                  <p className="fs-17 font-weight-bold text-heading mb-0 lh-1">${property?.ListPrice}</p>
                  <span className="badge badge-primary">{"Details"}</span>
                </div>
                <div className="card-body py-2">
                  <h2 className="fs-20 lh-2 mb-0 hover-primary lh-1  " style={{ minHeight: "60px" }}>
                    {property?.UnparsedAddress}, {property?.City}, {property?.CountyOrParish}, {property?.PostalCode}
                  </h2>
                  <p className="font-weight-500 text-gray-light mb-0">{property?.PropertySubType}</p>
                </div>
                <div className="card-footer bg-transparent pt-3 pb-4">
                  <ul className="list-inline d-flex justify-content-between mb-0 flex-wrap mr-n2">
                    <li className="list-inline-item text-gray font-weight-500 fs-13 d-flex align-items-center mr-2"
                      data-toggle="tooltip" title="3 Bedroom">
                      <svg className="icon icon-bedroom fs-18 text-primary mr-1">
                        <Icon color="#e4ba56" icon="material-symbols:bedroom-parent-outline" width="20" />
                      </svg>
                      {property?.BedroomsTotal ? property?.BedroomsTotal : "N/A"}
                    </li>
                    <li className="list-inline-item text-gray font-weight-500 fs-13 d-flex align-items-center mr-2"
                      data-toggle="tooltip" title="3 Bathrooms">
                      <svg className="icon icon-shower fs-18 text-primary mr-1">

                        <Icon color="#e4ba56" icon="mdi:bathroom" width={18} />
                      </svg>
                      {property?.BathroomsFull ? property?.BathroomsFull : "0"} {"|"}   {property?.BathroomsHalf ? property?.BathroomsHalf : "0"}
                    </li>
                    <li className="list-inline-item text-gray font-weight-500 fs-13 d-flex align-items-center mr-2"
                      data-toggle="tooltip" title="Size">
                      <svg className="icon icon-square fs-18 text-primary mr-1">
                        <Icon color="#e4ba56" icon="bx:area" width="20" />
                      </svg>
                      {Number(property?.BuildingAreaTotal) ? Number(property?.BuildingAreaTotal).toLocaleString() + " sqFt" : "N/A"}
                    </li>
                    <li className="list-inline-item text-gray font-weight-500 fs-13 d-flex align-items-center mr-2"
                      data-toggle="tooltip" title="1 Garage">
                      <svg className="icon icon-Garage fs-18 text-primary mr-1">
                        <Icon icon="fluent-mdl2:parking-solid" width="20" color="#e4ba56" />
                      </svg>
                      {property?.ParkingTotal ? property?.ParkingTotal : "N/A"}
                    </li>
                  </ul>
                </div>
              </a>

            </div>
          </div>
        </div>
      </>))}

    </Slider>
  )
}

export default FeaturedPropertyCarousel