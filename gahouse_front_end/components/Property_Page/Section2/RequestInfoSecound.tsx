import cogoToast from "cogo-toast";
import api from "lib/api";
import { useState } from "react";
import { useMutation } from "react-query";

function RequestInfoSecound({ address }) {

  const [email, setemail] = useState('')
  const [firstName, setfirstname] = useState('')
  const [lastName, setlastName] = useState("")
  const [phone, setphone] = useState('')
  const [quary, setquary] = useState('')
  const [quaryType, setquarytype] = useState('')

  console.log(email, firstName, lastName, phone, quary, quaryType)

  const { mutate: submitContactus } = useMutation((data: any) => api.post("/createContactUs", data), {
    onSuccess: (res: any) => {

      cogoToast.success("Thanks you submitting your quary we connect with you very soon");

    },
    onError: (err: any) => {
      console.log(err, 'this is the  rrr')
      cogoToast.error(err.response?.data.message);
    }
  });
  return (
    <>
      <div data-aos="fade-up"
        className="col-lg-4 pl-xl-4 primary-sidebar sidebar-sticky"
        id="sidebar"
      >
        <div className="primary-sidebar-inner">
          <div className="card border-0 widget-request-tour">
            <ul className="nav nav-tabs d-flex" role="tablist">
              <li className="nav-item">
                <a
                  className="nav-link active px-3"
                  href="#schedule"
                  role="tab"
                  aria-selected="true"
                >
                  Request Info
                </a>
              </li>
            </ul>
            <div className="card-body px-sm-6 shadow-xxs-2 pb-5 pt-0">
              <form>
                <div className="pt-1 pb-0 px-0 shadow-none">
                  <div
                    className=""
                    id="schedule"
                  >


                    <div className="form-group mb-2 mt-5">
                      <input
                        type="text"
                        className="form-control form-control-lg border-0"
                        placeholder="First Name, Last Name"
                        onChange={(e) => {
                          setfirstname(e.target.value), setlastName(e.target.value)
                        }}
                      />
                    </div>
                    <div className="form-group mb-2">
                      <input
                        type="email"
                        className="form-control form-control-lg border-0"
                        placeholder="Your Email"
                        onChange={(e) => {
                          setemail(e.target.value)
                        }}
                      />
                    </div>
                    <div className="form-group mb-2">
                      <input
                        type="tel"
                        className="form-control form-control-lg border-0"
                        placeholder="Your phone"
                        onChange={(e) => {
                          setphone(e.target.value)
                        }}
                      />
                    </div>
                    <div className="form-group mb-4">

                      <textarea className="form-control border-0" rows={4} defaultValue={address && ` Hello, I am interested in ${address}`}
                        onChange={(e) => {
                          setquary(e.target.value)
                        }}

                      >

                      </textarea>
                    </div>
                    <button
                      type="submit"
                      className="btn btn-primary btn-lg btn-block rounded"
                      onClick={(e) => {

                        // Name, email, phone, quary
                        e.preventDefault(), submitContactus({
                          firstName: firstName, phone: phone, email: email, quary: quary,
                        })
                      }}

                    >
                      Request Info
                    </button>
                    <div className="form-group form-check mt-2 mb-0">
                      <input
                        type="checkbox"
                        className="form-check-input"
                        id="exampleCheck2"
                      />
                      <label
                        className="form-check-label fs-13"
                        htmlFor="exampleCheck2"
                      >
                        Egestas fringilla phasellus faucibus scelerisque
                        eleifend donec.
                      </label>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

    </>
  );
}

export default RequestInfoSecound;