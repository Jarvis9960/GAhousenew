import Link from "next/link"
import Map from "./Map"


function GHFAtYourDisposal() {
  return (
    <div className="pt-9 bg-black " data-aos="fade-up" >
      <div className="container text-white " data-aos="fade-up">
        <h1 className="text-white lh-1625 text-center">GHF At Your Disposal
        </h1>
        <p className="text-center">
          GA House Finders has a comprehensive set of tools designed to make the search for your dream as easy as stepping inside the front door. From a customized events calendar to detailed search reports to accurately estimating your home’s value, we make buying and selling homes easy.</p>


        <div className="row mt-10  justify-content-between" data-aos="fade-up">


          <div className="col-md-4 d-flex align-items-stretch  mt-3 mt-md-0" data-aos="fade-up" style={{ width: "100%" }} >
            <Link className="hover-to-top" href={'/reports'}>

              <div className="card border-0 barkOrangeBg p-2  pt-5 ghfBox" style={{  background: "#BA935C" }} data-aos="fade-up" data-animate="fadeInUp">
                <img className=" " src="images/report.jpg"
                  alt="Wider range of properties" style={{ objectFit: "cover", height: "auto", width: "100%" }} />
                <div className=" col-12  rounded-1  flex-row justify-content-center align-content-center  align-items-center  ">
                  <div className="  font-weight-500 text-center rounded-1 barkOrangeBg">
                    <h2 className=" text-white py-1 mt-5">Extensive Reports</h2>
                    <p>
                      Hot neighborhoods, school rankings, commute times, and sales trends, we’ve got it all</p>
                  </div>
                </div>
              </div>
            </Link></div>
          <div className="col-md-4 d-flex align-items-stretch mt-3 mt-md-0" data-aos="fade-up" style={{ width: "100%" }}>
            <Link className="hover-to-top" href='/'>
              <div className="card border-0 barkOrangeBg p-2 pt-5 ghfBox" style={{  background: "#BA935C" }} data-aos="fade-up" data-animate="fadeInUp">
                <img className=" " src="images/calendar.jpg"
                  alt="Wider range of properties" style={{ objectFit: "cover", height: "auto", width: "100%" }} />
                <div className="  col-12  rounded-1  flex-row justify-content-center align-content-center  align-items-center  ">
                  <div className="  font-weight-500 text-center rounded-1 barkOrangeBg">
                    <h2 className=" text-white py-1  mt-5">Calendar Of Events</h2>
                    <p>
                      Check out what’s happening around town and online in real estate.</p>
                  </div>
                </div>
              </div>
            </Link>
          </div>
          <div className=" col-md-4 d-flex align-items-stretch mt-3 mt-md-0" data-aos="fade-up" style={{ width: "100%" }}>
            <Link className="hover-to-top" href='/'>
              <div className="card border-0 barkOrangeBg p-2  pt-5 ghfBox" style={{  background: "#BA935C" }} data-aos="fade-up" data-animate="fadeInUp">
                <img className=" " src="images/worth.jpg"
                  alt="Wider range of properties" style={{ objectFit: "cover", height: "auto", width: "100%" }} />
                <div className="  col-12 mb-5 rounded-1  flex-row justify-content-center align-content-center  align-items-center  ">
                  <div className="  font-weight-500 text-center rounded-1 barkOrangeBg">
                    <h2 className=" text-white py-1  mt-5">Thinking About Selling Your Home?</h2>
                    <p className="mb-1">
                      Want to know if now is the right time to sell? See how much your home is worth and prepare to list!</p>
                  </div>
                </div>
              </div>
            </Link>
          </div>

        </div>
      </div>

      <div className="mt-10 pt-10 text-white " data-aos="fade-up" style={{ backgroundImage: "url(images/main-bg.jpg)" }}>
        <Map />
      </div>
    </div>
  )
}

export default GHFAtYourDisposal