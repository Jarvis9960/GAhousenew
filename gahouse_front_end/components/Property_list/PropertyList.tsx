import Pagination from "@components/Pagination";
import React from "react";
import PropertyCard from "@components/PropertyCard";

function PropertyList({ showMap, setshowMap, propertyList, page, setpage, numberOfRow, isLoading, isFetching, isPreviousData }) {


  return (<>

    <section className="pb-11">
      <div className="container container-xxl">
        <div className="row mx-n2" style={{minHeight:"70vh"}}>
          <Pagination data={propertyList} page={page} setpage={setpage} numberOfRow={numberOfRow} isLoading={isLoading} isFetching={isFetching} isPreviousData={isPreviousData}  >
            {propertyList?.data?.map((property, i) => (<>
              <PropertyCard i={i} property={property} />
            </>))}
            {propertyList?.data?.length == 0 && (<>
              <div className="w-100 d-flex justify-content-center align-content-center align-items-center ">
                  Not Found
              </div>
            </>)}
          </Pagination>

        </div>

      </div>
    </section >
  </>
  );
}

export default PropertyList;
