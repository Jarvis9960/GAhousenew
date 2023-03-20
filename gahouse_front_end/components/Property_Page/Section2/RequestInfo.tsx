import { Icon } from '@iconify/react';
import cogoToast from 'cogo-toast';
import api from 'lib/api';
import Image from 'next/image'
import { use, useState } from 'react';
import { useMutation } from 'react-query';
function RequestInfo({ data, address }) {

  const [email, setemail] = useState('');
  const [query, setquary] = useState('')
  const [phone, setphone] = useState('')
  const [firstName, setfirstname] = useState('')

  const settagforloindesk = "I am interested in renting a place" + query

  const { mutate: submitContactus } = useMutation((data: any) => api.post("/createContactUs", data), {
    onSuccess: (res: any) => {
      console.log(res, 'this is the error of contactus')
      cogoToast.success("Thanks you submitting your quary we connect with you very soon");

    },
    onError: (err: any) => {
      console.log(err.response, 'this is the error')
      cogoToast.error(err.response?.data.message);
    }
  });


  return (
    <>
      <div data-aos="fade-up"
        className="col-lg-4  pl-xl-4 primary-sidebar sidebar-sticky fixedBox"
        id="sidebar"
      >

        <div data-aos="fade-up" className="primary-sidebar-inner bg-white" >

          <div className="card border-0 bg-white widget-request-tour">
            <div className=" px-sm-6 shadow-xxs-2 pb-5 pt-0 d-flex justify-content-arround align-items-cente">
              <div className='mt-2 '>
                <Image src={'/images/profile-avatar.png'} className='rounded-1' width={100} height={100} alt={''} />
              </div>

              <div className=' mt-4 ml-5 d-block  '>
                <p className='fs-15 d-flex- justify-content-center align-item-center '>
                  <Icon icon="mdi:user" color="#e4ba56" width={20} />
                  Aman Grover
                  <br />
                  <Icon icon="material-symbols:phone-android" color="#e4ba56" width={20} />
                  877-749-SALE
                </p>

                {/* <p className='fs-17 barkOrangeText  '>View Listings</p> */}
              </div>

            </div>
            <div data-aos="fade-up" className="card-body px-sm-6 shadow-xxs-2 pb-5 pt-0">
              <div>
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
                        // value={ }
                        onChange={(e) => {
                          setfirstname(e.target.value)
                        }}
                      />
                    </div>
                    <div className="form-group mb-2">
                      <input
                        type="email"
                        className="form-control form-control-lg border-0"
                        placeholder="Your Email"
                        value={email}
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
                        value={phone}
                        onChange={(e) => {
                          setphone(e.target.value)
                        }}
                      />
                    </div>
                    <div className="form-group mb-4">

                      <textarea className="form-control border-0" rows={4} defaultValue={address && ` Hello, I am interested in ${address}`}
                        value={query}
                        onChange={(e) => {
                          setquary(e.target.value)
                        }}
                      >

                      </textarea>
                    </div>
                    <button
                      onClick={() => submitContactus({
                        firstName: firstName,
                        email: email,
                        quary: settagforloindesk,
                        phone: phone
                      })}
                      className="btn btn-primary btn-lg btn-block rounded"
                    >
                      Request Info
                    </button>
                    <div className="form-group form-check mt-2 mb-0">

                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div >

    </>
  );
}

export default RequestInfo;