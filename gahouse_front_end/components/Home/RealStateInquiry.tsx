import cogoToast from "cogo-toast";
import api from "lib/api";
import { useState } from "react";
import { InfiniteQueryObserver, useMutation } from "react-query";
import { Lora } from '@next/font/google'

const lora = Lora({
  weight: '400',
  subsets: ['latin'],
})

function RealStateInquiry() {

  const [err, seterr] = useState('')
  const error: any = {}
  const [InquiryType, setInquiryType] = useState('')
  const [firstname, setfirstname] = useState('')
  const [lastname, setlastname] = useState('')
  const [email, setemail] = useState('')
  const [phone, setphone] = useState('')
  const [inquiry, setinquiry] = useState('')

  if (InquiryType.length == 0) {
    error['inquiryType'] = "enter the inquiryType"
  }
  if (firstname.length == 0) {
    error['firstname'] = 'enter the firstname'
  }


  const { mutate: createInquiry } = useMutation((data: any) => api.post("/createInquiry", data), {
    onSuccess: (res: any) => {
      console.log(res.data?.message, 'this is the data')
      cogoToast.success("Thanks you submitting your quary we connect with you very soon");

    },
    onError: (err: any) => {
      // console.log(err.response.data.message, 'this is the error ')
      cogoToast.error(err.response?.data.message);
    }
  });






  return (
    <div className=" parallaxBg " style={{ backgroundImage: "url(images/1519797362687.jpg)", backgroundColor: "#1c1b1b7a" }} >
      <div className="fadeBackground py-1" style={{ backgroundColor: "rgb(64 62 62 / 50%)" }}>
        <div className={` ${lora.className} text-white w-100 `}>

          <div data-aos="fade-up" className=" font-weight-light  mt-10 d-flex flex-lg-row flex-xl-row flex-column justify-content-center align-items-center w-80">
            <div data-aos="fade-up" className="col-md-7 col-xl-6  gap-4 d-flex flex-lg-row flex-xl-row  flex-column  justify-content-center align-items-center ml-5">
              <div className="d-flex flex-column  gap-2 ">
                <div className="mt-10 " data-aos="fade-up">
                  <h2 className="text-white font-weight-200" style={{ fontFamily: "serif" }}>
                    Why GA House Finders Is The Perfect Choice?
                  </h2>
                  <p className=" lh-1 fw-lighter mt-1">Whether you're buying or selling , GA House Finder has the experience, tools and information to make your transaction seamless.</p>
                </div>

                <div className="mt-10 " data-aos="fade-up">
                  <h2 className="text-white font-weight-200" style={{ fontFamily: "serif" }}>
                    <span>01.</span>
                    We Specialize Working With Home Buyers
                  </h2>
                  <p className=" lh-1 fw-lighter mt-1">
                    From spaciour suburban speads to sleek urban condos, we specialize in finding your perfect home.
                  </p>
                </div>
              </div>

              <div data-aos="fade-up" className="d-flex flex-column gap-2  ">
                <div className="mt-10 pr-4" data-aos="fade-up">
                  <h2 className="text-white font-weight-200" style={{ fontFamily: "serif" }}>
                    <span>02.</span>
                    We'll Sell Your Home For The Best Price Possible
                  </h2>
                  <p className=" lh-1 fw-lighter mt-1">
                    We'll advise your on staging and market your home to the widest possible audience to get your the best price in the shortest time.
                  </p>
                </div>

                <div className="mt-10  pr-4" data-aos="fade-up">
                  <h2 className="text-white font-weight-200" style={{ fontFamily: "serif" }}>
                    <span>03.</span>
                    Investors Hotspot
                  </h2>
                  <p className=" lh-1 fw-lighter mt-1">
                    Whether you fix and flip, buy single-family or multi-unit residences, we'll find you cash-producing, wealth-generating investment properties
                  </p>
                </div>

              </div>

            </div>
            <div className="col-md-5 col-xl-4 hover-to-top ">
              <div data-aos="fade-up" className=" d-flex  align-items-center custom-vh-100" >
                <div className="container py-8 py-lg-12">
                  <div className="card border-0 mxw-470   my-lg-3" data-animate="fadeInDown">
                    <div className="card-body pt-7 pb-6 px-7 shadow-lg-4">
                      <h2 className="card-title text-heading fs-30 text-center font-weight-600 lh-173 m-0">Real Estate Inquiry Form</h2>
                      <p className="card-text text-center text-gray h6 mt-3">Fill in the following form to start the process of finding your dream house</p>
                      <form >
                        <div className="form-row " >

                          <div className=" mb-2">
                            <div className=" mb-2">
                              <label htmlFor="Inqury" className="text-black font-weight-bold">Inquiry Type </label>
                              <select id="Inqury" className="form-control form-control-lg border-0 shadow-none" name="name" onChange={(e) => {
                                setInquiryType(e.target.value)
                              }} >
                                <option   >Select</option>
                                {["Purchase", "Sell", "Rent", "Investment"].map((p, i) => (<>
                                  <option key={i} value={p} >{p}</option>
                                </>))}
                              </select>
                            </div>
                            <div className=" mb-2">
                              <label htmlFor="Inqury" className="text-black font-weight-bold">Information </label>
                              <div id="Information" className=" d-flex flex-column  gap-3 justify-content-between align-items-center">
                                <div className=" d-flex  justify-content-between gap-3 align-items-center">
                                  <input id="first" placeholder="First Name" className="form-control form-control-lg border-0 shadow-none" name="first-name" onChange={(e) => {
                                    setfirstname(e.target.value)
                                  }} />
                                  <input id="last" placeholder="Last Name" className="form-control form-control-lg border-0 shadow-none" name="last-name" onChange={(e) => {
                                    setlastname(e.target.value)
                                  }} />
                                </div>
                                <div className=" d-flex justify-content-between gap-3 align-items-center">
                                  <input id="email" placeholder="Email Address" className="form-control form-control-lg border-0 shadow-none" name="email" onChange={(e) => {
                                    setemail(e.target.value)
                                  }} />
                                  <input id="phone" placeholder="Telephone Number" className="form-control form-control-lg border-0 shadow-none" name="phone"
                                    onChange={(e) => {
                                      setphone(e.target.value)
                                    }} />
                                </div>

                              </div>


                            </div>
                            <div className=" mb-2">
                              <label htmlFor="Inqury" className="text-black font-weight-bold">I would like to: </label>
                              <select id="Inqury" className="form-control form-control-lg border-0 shadow-none" name="name" onChange={(e) => {
                                setinquiry(e.target.value)
                              }}>
                                <option value={""}>Select</option>
                                {["Make an appointent to see this property",
                                  "Get pre-approved for financing",
                                  "Get help i selling my current property",
                                  "Find out what my property is worth"].map((p, i) => (<>
                                    <option key={i} value={p} >{p}</option>
                                  </>))}
                              </select>
                            </div>

                          </div>

                          <div className="col-md-12 mb-4">
                            <button type="submit" className="col-12 rounded border-0 h4 text-white py-2 mt-2 barkOrangeBg" onClick={(e) => {
                              e.preventDefault(),
                                createInquiry({
                                  firstname: firstname,
                                  lastname: lastname,
                                  email: email,
                                  phone: phone,
                                  inquiry: inquiry,
                                  InquiryType: InquiryType

                                })
                            }}>Submit</button>
                          </div>

                        </div>
                      </form>
                    </div>


                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default RealStateInquiry