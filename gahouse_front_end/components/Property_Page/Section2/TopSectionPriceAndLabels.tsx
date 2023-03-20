import ReportsLabels from "@components/Labels";
import { Icon } from "@iconify/react";
import Link from "next/link";
import Image from 'next/image'
import ShareComponent from "@components/ShareComponent";
import useWishListStore from "store/wishListStore";
function TopSectionPriceAndLabels({ data }) {
  const whishListState = useWishListStore(state => state.wishListState)
  const addWishListState = useWishListStore(state => state.addWishListState)
  const removeWishListState = useWishListStore(state => state.removeWishListState)

  const addToWishList = (e) => {
    e.preventDefault()
    addWishListState(data?._id)
  }

  const removeToWishList = (e) => {
    e.preventDefault()
    removeWishListState(data?._id)
  }

  const printPdf = () => {
    var strWindowFeatures = "location=yes,height=1020,width=740,scrollbars=yes,status=yes";
    var URL = process.env.NEXT_PUBLIC_FRONT_END_URL + "/property-pdf/" + data?._id;
    window.open(URL, "_blank", strWindowFeatures);
  }
  return (
    <>
      <div className='d-flex justify-content-end gap-2 fs-15 d-none d-md-flex d-sm-flex '>
        {!whishListState?.includes(data?._id) && (<>
          <a href="#" onClick={(e: any) => addToWishList(e)} className="list-inline-item h-32" data-toggle="tooltip" title="Wishlist">
            <Icon icon="material-symbols:heart-plus" width={25} />
          </a>
        </>)}

        {whishListState?.includes(data?._id) && (<>
          <a href="#" onClick={(e) => removeToWishList(e)} className="list-inline-item h-32" data-toggle="tooltip" title="Wishlist">
            <Icon icon="material-symbols:heart-minus-sharp" color="#e4ba56" width={25} />
          </a>
        </>)}

        <ShareComponent />
        <div className="ml-2" onClick={() => printPdf()}>
          <a href="#">
            <Icon icon="material-symbols:print-rounded" width={25} />
          </a>
        </div>

      </div>
      <div className=" d-flex flex-wrap justify-content-between align-items-center align-content-center mb-2">
        <div >
          <div className=" fs-18 ">
            <Link href="/" style={{ color: "#e4ba56" }} >
              <span>Home</span>
            </Link>
            <span>{" > "}</span>
            <Link style={{ color: "#e4ba56" }} href={'/property?PropertyType=' + data?.PropertyType}>
              <span>{data?.PropertyType}</span>
            </Link>
            <span>{" > "}</span>
            <span>{data?.UnparsedAddress}</span>
          </div>
          <div>
            <h2 className="fs-35 font-weight-600 lh-15 text-heading">
              {data?.UnparsedAddress ? data?.UnparsedAddress : "N/A"}
            </h2>
            <ul className="list-inline d-sm-flex d-flex flex-wrap align-items-sm-center mb-2">
              {data?.labels?.includes("Featured") && (<>
                <li className="list-inline-item badge badge-greay mr-2 mt-1" style={{ background: "#77c720" }}>
                  Featured
                </li>
              </>)}
              {data?.labels?.includes("Recommanded") && (<>
                <li className="list-inline-item badge badge-greay mr-2 mt-1" style={{ background: "#77c720" }}>
                Recommend
                </li>
              </>)}
              {data?.labels?.map((label) => (<>
                {label != "Featured" && label != "Recommanded" && (<>
                  <Link style={{ color: "#e4ba56" }} href={'/property?report=' + label}>

                    <li className="list-inline-item badge badge-greay mr-2 mt-1">
                      {ReportsLabels[label]}
                    </li>
                  </Link>
                </>)}
              </>))}
            </ul>
            <p className="lh-15 text-heading text-gray-light text-start">
              <Icon icon="material-symbols:location-on" color="#e4ba56" />
              {data?.UnparsedAddress}, {data?.City}, {data?.CountyOrParish}, {data?.PostalCode}
            </p>
          </div>

        </div>
        <div className="">
          <div className='d-flex justify-content-end align-content-between align-items-center gap-2 fs-15 d-md-none d-sm-none '>
            {!whishListState?.includes(data?._id) && (<>
              <a href="#" onClick={(e) => addToWishList(e)} className="list-inline-item " data-toggle="tooltip" title="Wishlist">
                <Icon icon="material-symbols:heart-plus" width={25} />

              </a>
            </>)}

            {whishListState?.includes(data?._id) && (<>
              <a href="#" onClick={(e) => removeToWishList(e)} className="list-inline-item  " data-toggle="tooltip" title="Wishlist">
                <Icon icon="material-symbols:heart-minus-sharp" color="#e4ba56" width={25} />

              </a>
            </>)}
            <ShareComponent />
            <div className="ml-2" onClick={() => printPdf()}>
              <a href="#">
                <Icon icon="material-symbols:print-rounded" width={25} />
              </a>
            </div>
          </div>

        </div>
        <div data-aos="fade-up" className="mt-0 d-sm-flex  d-flex justify-content-end align-content-end  ">
          <div className="text-lg-right">
            <p className="fs-22 text-heading font-weight-bold mb-0">
              {"$" + Number(data?.ListPrice)?.toLocaleString()}
            </p>
            <p>
              ${Math.round(Number(data?.ListPrice) / Number(data?.BuildingAreaTotal))?.toLocaleString()}/Sq Ft

            </p>
            <div className="d-flex justify-content-start ">
              <Image src="/images/greenidx.png" width={'100'} height={"100"} alt={""} />
            </div>
          </div>
        </div>
      </div>

    </>
  );
}

export default TopSectionPriceAndLabels;