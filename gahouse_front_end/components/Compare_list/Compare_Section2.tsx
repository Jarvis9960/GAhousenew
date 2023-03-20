import cogoToast from 'cogo-toast';
import api from 'lib/api';
import React from 'react'
import { useQuery } from 'react-query';
import GetSchoolRatingHigh from './GetSchoolRatingHigh';
import GetSchoolRatingMiddle from './GetSchoolRatingMiddle';
import GetSchoolRatingElementry from './GetSchoolRatingElementry';
import Link from 'next/link';
import { Icon } from '@iconify/react';
import useCompareStore from 'store/compareStore';

function Compare_Section2({ comapreState }) {
  const { data, isLoading, isRefetching, refetch: refetchMessage, isPreviousData: isPreviousDataMessage } = useQuery(
    ["getProperty", comapreState], () => api.get("compareFilters?id=" + comapreState), {
    refetchOnWindowFocus: false,
    refetchIntervalInBackground: false,
    refetchOnMount: false,
    refetchOnReconnect: false,
    keepPreviousData: true,
    enabled: comapreState && comapreState?.length > 0 ? true : false,
    onError: ({ response }) => {
      cogoToast.error(response?.data?.message);
    }
  })

  const removeComapreState = useCompareStore(state => state.removeComapreState)
  const removeFromCompare = (id) => {
    removeComapreState(id)
  }

  return (
    <section className="py-10 overflow-scroll">
      <div className="container container-xxl">
        <div className="table-responsive-xl">
          {data?.data?.length > 0 ? (<>
            <table className="table table-bordered table-hover text-dark table-border-gray table-align-middle table-th-min-width-300">
              <thead className="table-p-6">
                <tr className="bg-gray-03 h-90">
                  <th className="w-25 justify-content-center d-flex align-items-center text-center align-content-center " scope="col"></th>
                  {data?.data?.map(property => (<>
                    <th scope="col  relative ">
                      <div className='d-flex justify-content-end align-content-center align-content-lg-center btn'>
                        <Icon icon="material-symbols:delete-outline" width={25} onClick={() => removeFromCompare(property?._id)} />
                      </div>
                      <div>
                        <Link href={'/property/' + property?._id}>
                          <div className="fs-16 font-weight-normal text-dark mb-0">{property?.UnparsedAddress}
                          <Icon icon="material-symbols:open-in-new-sharp" color='#e4ba56' width={20} />
                          </div>

                        </Link>
                      </div>

                    </th>

                  </>))}
                </tr>
                <tr>
                  <th scope="col"></th>
                  {data?.data?.map(property => (<>
                    <th scope="col">
                      <div className="card border-0">
                        <div className="rounded-lg">
                          <img style={{ minWidth: "20vw" }} className="card-img-top propertCardImage" src={property?.Media?.length > 0 ? property?.Media[0]?.MediaURL : "images/fmls.png"}
                            alt="Home in Metric Way" />
                        </div>
                        <div className="card-body pt-2 pb-0 px-0">
                          <Link href={'/property/' + property?._id}>
                            <p className="font-weight-500 text-gray-light mb-0">{property?.PostalCode}, {property?.UnparsedAddress}, {property?.City}, {property?.CountyOrParish} </p>
                          </Link>
                          <p className="fs-17 font-weight-bold text-heading mb-0 lh-16">${property?.ListPrice?.toLocaleString()}</p>
                        </div>
                      </div>
                    </th>
                  </>))}

                </tr>
              </thead>
              <tbody className="text-center table-p-4">
                <tr>
                  <td>Property ID</td>
                  {data?.data?.map(property => (<>
                    <td>{property?.ListingId}</td>
                  </>))}

                </tr>
                <tr>
                  <td>Address</td>
                  {data?.data?.map(property => (<>
                    <td>{property?.UnparsedAddress}</td>
                  </>))}

                </tr>
                <tr>
                  <td>Price</td>
                  {data?.data?.map(property => (<>
                    <td>${property?.ListPrice?.toLocaleString()}</td>
                  </>))}
                </tr>
                <tr>
                  <td>Property Type</td>
                  {data?.data?.map(property => (<>
                    <td>${property?.PropertyType}</td>
                  </>))}
                </tr>
                <tr>
                  <td>City</td>
                  {data?.data?.map(property => (<>
                    <td>{property?.City}</td>
                  </>))}
                </tr>
                <tr>
                  <td>State/County</td>
                  {data?.data?.map(property => (<>
                    <td>{property?.CountyOrParish}</td>
                  </>))}
                </tr>
                <tr>
                  <td>Zip/Postal Code</td>
                  {data?.data?.map(property => (<>
                    <td>{property?.PostalCode}</td>
                  </>))}
                </tr>
                <tr>
                  <td>Square Footage</td>
                  {data?.data?.map(property => (<>
                    <td>{property?.BuildingAreaTotal}</td>
                  </>))}
                </tr>
                <tr>
                  <td>Bedrooms</td>
                  {data?.data?.map(property => (<>
                    <td>{property?.BedroomsTotal}</td>
                  </>))}
                </tr>
                <tr>
                  <td>Bathrooms</td>
                  {data?.data?.map(property => (<>
                    <td>
                      {property?.BathroomsFull ? property?.BathroomsFull : "N/A"} {"|"}   {property?.BathroomsHalf ? property?.BathroomsHalf : "N/A"}</td>
                  </>))}
                </tr>

                <tr>
                  <td>Elementary School Name</td>
                  {data?.data?.map(property => (<>
                    <td>
                      {property?.ElementarySchool ? property?.ElementarySchool : "N/A"}</td>
                  </>))}
                </tr>


                <tr>
                  <td>Elementary School Rating</td>
                  {data?.data?.map(property => (<>
                    <td>
                      <GetSchoolRatingElementry ElementarySchool={property?.ElementarySchool} />
                      {/* {property?.BathroomsFull ? property?.BathroomsFull : "N/A"} */}
                    </td>
                  </>))}
                </tr>

                <tr>
                  <td>Middle School Name</td>
                  {data?.data?.map(property => (<>
                    <td>
                      {property?.MiddleOrJuniorSchool ? property?.MiddleOrJuniorSchool : "N/A"}</td>
                  </>))}
                </tr>



                <tr>
                  <td>Middle School/Rating</td>
                  {data?.data?.map(property => (<>
                    <td>
                      <GetSchoolRatingMiddle MiddleOrJuniorSchool={property?.MiddleOrJuniorSchool} />

                    </td>
                  </>))}
                </tr>


                <tr>
                  <td>High School Name</td>
                  {data?.data?.map(property => (<>
                    <td>
                    {property?.HighSchool ? property?.HighSchool : "N/A"}

                    </td>
                  </>))}
                </tr>



                <tr>
                  <td>High School/Rating</td>
                  {data?.data?.map(property => (<>
                    <td>
                    <GetSchoolRatingHigh HighSchool={property?.HighSchool} />

                    </td>
                  </>))}
                </tr>


                <tr>
                  <td>Master on Main</td>
                  {data?.data?.map(property => (<>
                    <td>
                      {property?.RoomMasterBathroomFeatures ? property?.RoomMasterBathroomFeatures?.toString()?.replaceAll(",", ", ") : "N/A"}</td>
                  </>))}
                </tr>


                <tr>
                  <td>Fireplace</td>
                  {data?.data?.map(property => (<>
                    <td>
                      {property?.FireplaceFeatures ? property?.FireplaceFeatures?.toString()?.replaceAll(",", ", ") : "N/A"}</td>
                  </>))}
                </tr>

                <tr>
                  <td>Basement</td>
                  {data?.data?.map(property => (<>
                    <td>
                      {property?.Basement ? property?.Basement?.toString()?.replaceAll(",", ", ") : "N/A"}</td>
                  </>))}
                </tr>


                <tr>
                  <td>Pool</td>
                  {data?.data?.map(property => (<>
                    <td>
                      {property?.PoolFeatures.toString() ? property?.PoolFeatures.toString()?.replaceAll(",", ", ") : "N/A"}</td>
                  </>))}
                </tr>


                <tr>
                  <td>Construction</td>
                  {data?.data?.map(property => (<>
                    <td>
                      {property?.ConstructionMaterials ? property?.ConstructionMaterials.toString()?.replaceAll(",", ", ") : "N/A"}</td>
                  </>))}
                </tr>


                <tr>
                  <td>Water Body Name	</td>
                  {data?.data?.map(property => (<>
                    <td>
                      {property?.WaterBodyName ? property?.WaterBodyName : "N/A"}</td>
                  </>))}
                </tr>



                <tr>
                  <td>New Construction</td>
                  {data?.data?.map(property => (<>
                    <td>
                      {property?.PropertyCondition?.includes("New Construction") ? "Yes" : "No"}</td>
                  </>))}
                </tr>


                <tr>
                  <td>Year Built</td>
                  {data?.data?.map(property => (<>
                    <td>
                      {property?.YearBuilt ? property?.YearBuilt : "N/A"}</td>
                  </>))}
                </tr>


                <tr>
                  <td>Community Features</td>
                  {data?.data?.map(property => (<>
                    <td>
                      {property?.CommunityFeatures?.length > 0 ? property?.BathroomsFull?.toString()?.replaceAll(",", ", ") : "N/A"}</td>
                  </>))}
                </tr>



                <tr>
                  <td>Association	</td>
                  {data?.data?.map(property => (<>
                    <td>
                      {property?.AssociationYN == "true" ? "Yes" : "No"}</td>
                  </>))}
                </tr>

                <tr>
                  <td>Association Fee</td>
                  {data?.data?.map(property => (<>
                    <td>
                      {property?.AssociationFee ? property?.AssociationFee : "N/A"}</td>
                  </>))}
                </tr>

                <tr>
                  <td>Tax Amount</td>
                  {data?.data?.map(property => (<>
                    <td>
                      {property?.TaxAnnualAmount ? property?.TaxAnnualAmount : "N/A"}</td>
                  </>))}
                </tr>

                <tr>
                  <td>Cost/sq. ft</td>
                  {data?.data?.map(property => (<>
                    <td>
                      {property?.BathroomsFull ? property?.BathroomsFull : "N/A"} {"|"}   {property?.BathroomsHalf ? property?.BathroomsHalf : "N/A"}</td>
                  </>))}
                </tr>


              </tbody>
            </table>
          </>) : (<>
            <div className='w-100 d-flex justify-content-center align-content-center align-items-center'>
              Not Found
            </div>
          </>)}

        </div>
      </div>
    </section>

  )
}

export default Compare_Section2