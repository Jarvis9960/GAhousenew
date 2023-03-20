import React, { useState } from 'react'
import Image from 'next/image'
import { Icon } from '@iconify/react';
import cogoToast from 'cogo-toast';
import { useMutation } from 'react-query';
import api from 'lib/api';
import Link from 'next/link';
function Section_contact_info({ address }) {
  const [firstName, setfirstname] = useState('')
  const [email, setemail] = useState('')
  const [phone, setphone] = useState('')
  // const [lastName, setlastName] = useState('')
  const [quary, setquary] = useState('')
  console.log("I am interested in renting a place" + quary)
  const settagforloindesk = "I am interested in renting a place" + quary
  // const [quaryType, setquarytype] = useState('')
  const { mutate: submitContactus, isLoading: isLoadingcontactus, } = useMutation((data: any) => api.post("/createContactUs", data), {
    onSuccess: (res: any) => {
      console.log(res.data?.message, 'this is the data')
      cogoToast.success("Thanks you submitting your quary we connect with you very soon");

    },
    onError: (err: any) => {
      cogoToast.error(err.response?.data.message);
    }
  });

  return (
    <div data-aos="fade-up" className='border-bottom pb-5 pt-5'>
      <div className='d-flex justify-content-between'>
        <span><h3>Contact Information</h3></span>
        <span>
          <div className=''><button type="submit" className="btn btn-primary btn-md btn-block shadow-none">View Listings</button></div>
        </span>
      </div>
      <div  className="mt-10 px-sm-6 shadow-xxs-2 pb-5 pt-0 d-flex justify-content-start" style={{alignItems: "center"}}>
        <div className='' style={{ width: "100px", height: '100px' }}>
          <Image
            width={'100'} height={'80'}
            src={'/images/profile-avatar.png'}
            className="rounded-1"
            alt='image'
          />
        </div>
        <div data-aos="fade-up" className=' mt-4 ml-5 d-block  '>
          <p className='fs-15 d-flex- justify-content-center align-item-center '>
            <Icon icon="mdi:user" color="#e4ba56" width={20} />
            Aman Grover
            <br />
            <Icon icon="material-symbols:phone-android" color="#e4ba56" width={20} />
            877-749-SALE
           
           <div className='d-flex flex-column ms-1'>
           <span className='fs-17 barkOrangeText mb-0'>View Listings</span>
              
              <span className='mt-0'>
                <Link legacyBehavior href='https://www.facebook.com/profile.php?id=100063691395257'>
                  <a className='ms-0' target="_blank" rel="noreferrer" >
                    <Icon icon="typcn:social-facebook" width={20} height={20} color="#e4ba56" />
                  </a>
                </Link>
                <Link legacyBehavior href='https://www.instagram.com/gahousefinders/'>
                  <a className='ms-2' target="_blank" rel="noreferrer" >
                    <Icon icon="uim:instagram-alt" width={20} height={20} color="#e4ba56" />
                  </a>
                </Link>

                <Link legacyBehavior href='https://twitter.com/gahousefinder'>
                  <a className='ms-2' target="_blank" rel="noreferrer">
                    <Icon icon="jam:twitter" width={20} height={20} color="#e4ba56" />
                  </a>
                </Link>

              </span>
           </div>
            

          </p>

        </div>
      </div>
      <div data-aos="fade-up">
        <div>
          <p>Enquire About This Property</p>
        </div>
        <div className='border-top' onSubmit={(e) => { e.preventDefault() }}>
          <div className="form-row mt-3">
            <div className="col-md-6 mb-2">
              <input type="text" className="form-control form-control-lg border-0 shadow-none" name="name"
                placeholder="Name" value={firstName} onChange={(e) => setfirstname(e.target.value)} />
            </div>
            <div className="col-md-6 mb-2">
              <div className="input-group">
                <div className="input-group-prepend">

                </div>
                <input type="tel" className="form-control form-control-lg border-0 shadow-none" name="phone"
                  aria-label="Text input with dropdown button" placeholder="Phone"
                  value={phone} onChange={(e) => {
                    setphone(e.target.value)
                  }} />
              </div>
            </div>
            <div className="col-md-12 mb-2">
              <input type="email" className="form-control form-control-lg border-0 shadow-none"
                placeholder="Email" name="email"
                value={email} onChange={(e) => setemail(e.target.value)} />
            </div>
            <div className="col-md-12 mb-4">
              <textarea className="form-control form-control-lg border-0 shadow-none h-140"
                defaultValue={`Hello, I am interested in ${address}`}
                value={quary} onChange={(e) => setquary(e.target.value)}></textarea>
            </div>
            <div className="col-md-12 ml-6 custom-checkbox">
              <input type="checkbox" className="custom-control-input" id="check10-1" name="features" />
              <label className="custom-control-label" htmlFor="check10-1">
                By submitting this form I agree to Terms of Use.</label>
            </div>
            <div className="col-md-4 mb-4">
              <button onClick={(e) => submitContactus({
                firstName: firstName,

                phone: phone,
                email: email,
                quary: settagforloindesk,

              })} className="btn btn-primary btn-lg btn-block shadow-none">Request Information</button>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}

export default Section_contact_info