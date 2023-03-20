import Link from 'next/link';

function MakeYourSelection() {
  return (
    <div className="py-9 bg-black " data-aos="fade-up" >
      <div className="container text-white shadow-sm mb-8">
        <h1 className="text-white lh-1625 text-center" data-aos="fade-up" >Make Your Selection
        </h1>
        <p className="text-center" data-aos="fade-up" >GA House Finders offers a wide range of services through which you can select your dream home</p>

        <div data-aos="fade-up" className="row mt-10  justify-content-between ">



          <div className=" col-lg-4 mb-6 mb-lg-0  position-relative" data-aos="fade-up" >
            <Link href='/buyer' data-aos="fade-up" >
              <div className="card border-0  hover-to-top ">
                <img className=" " src="images/real-estate-purchase-1.jpg"
                  alt="Wider range of properties" style={{ minHeight: "50vh", objectFit: "cover" }} />
                <div className="  col-12 position-absolute rounded-1 pos-fixed-bottom-right flex-row justify-content-center align-content-center  align-items-center  ">
                  <div className="  font-weight-500 text-center rounded-1 barkOrangeBg mx-3 mb-6">
                    <h2 className=" text-white py-2 h5">Buyers</h2>
                  </div>
                </div>
              </div>
            </Link>
          </div>
          <div className=" col-lg-4 mb-6 mb-lg-0 position-relative" data-aos="fade-up" >
            <Link href="/seller" data-aos="fade-up" >
              <div className="card border-0  hover-to-top ">
                <img className=" " src="images/real-estate-bg-1.jpg"
                  alt="Wider range of properties" style={{ minHeight: "50vh", objectFit: "cover" }} />
                <div className="  col-12 position-absolute rounded-1 pos-fixed-bottom-right flex-row justify-content-center align-content-center  align-items-center  ">
                  <div className="  font-weight-500 text-center rounded-1 barkOrangeBg  mx-3 mb-6">
                    <h2 className=" text-white py-2 h5">Seller</h2>
                  </div>
                </div>
              </div>
            </Link>
          </div>
          <div className=" col-lg-4 mb-6 mb-lg-0 position-relative" data-aos="fade-up" >
            <Link href='financial101' data-aos="fade-up" >
              <div className="card border-0  hover-to-top ">
                <img className=" " src="images/7e421ce8-d0df-48d3-abde-8580dcda1310.jpg"
                  alt="Wider range of properties" style={{ minHeight: "50vh", objectFit: "cover" }} />
                <div className="  col-12 position-absolute rounded-1 pos-fixed-bottom-right flex-row justify-content-center align-content-center  align-items-center  ">
                  <div className="  font-weight-500 text-center rounded-1 barkOrangeBg  mx-3 mb-6">
                    <h2 className=" text-white py-2 h5">Financing 101</h2>
                  </div>
                </div>
              </div>
            </Link>
          </div>

        </div>
      </div>
    </div>
  )
}

export default MakeYourSelection