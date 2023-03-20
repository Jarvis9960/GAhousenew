import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import fb_img from "../../public/images/facebook.png"
import google_img from "../../public/images/google.png"
import api from "../../lib/api"
import { useQueryClient, useMutation } from 'react-query';
import cogoToast from 'cogo-toast'
import { BeatLoader } from "react-spinners";
import { useRouter } from 'next/router'
import jwtDecode from 'jwt-decode'

function Signup() {
  const clientId = process.env.NEXT_PUBLIC_GOOGLE_CLIENTID
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [cpassword, setCpassWord] = useState('')
  const [error, setError] = useState({
    lastName: "",
    firstName: "",
    email: "",
    password: "",
    cpassword: ""
  })

  const { mutate: Signup, isLoading: isLoadingSignUp, } = useMutation((data: any) => api.post("/register", data), {
    onSuccess: (res: any) => {
      console.log(res.data?.message, 'this is the data')

      cogoToast.success(res.data?.message);


    },
    onError: (err: any) => {
      console.log(err.response.data.message, 'this si the error part')
      cogoToast.error(err.response.data.message);

    }
  });

  const errors: any = {}

  const signUpHandler = () => {

    if (lastName.length == 0) {
      errors.lastName = 'please enter the last name'
    }
    if (firstName.length == 0) {
      errors.firstName = 'please enter the last name'
    }
    if (email.length == 0) {
      errors.email = 'enter the email'
    }
    if (password.length == 0) {
      errors.password = 'enter the password'
    }
    if (cpassword.length == 0) {
      errors.cpassword = 'enter the confirm password'
    }
    setError(errors)
  }

  console.log(error)

  useEffect(() => {
    console.log(isLoadingSignUp)
  }, [isLoadingSignUp])


  const router = useRouter()

  const { mutate: gLogin } = useMutation((data: any) => api.post("/google-login", data), {
    onSuccess: (res) => {
      console.log(res.data)
      // signIn(res.data)
      // const { email } = getValues();
      // router.push('/')

    },
    onError: ({ response }) => {
      console.log(response.data)
      cogoToast.error(response?.data?.message);
    }
  });

  const handleCallbackResponse = (response) => {

    const userDetails: any = jwtDecode(response.credential)
    console.log(userDetails)
    const data = {
      ...userDetails, email: userDetails?.email,
      firstName: userDetails?.given_name,
      lastName: userDetails?.family_name,
      profilePicture: userDetails?.picture,
    }
    console.log("data", data)
    gLogin(data)
  }
  useEffect(() => {
    // let google;
    /* global google */
    // @ts-ignore
    google.accounts.id.initialize({
      client_id: clientId,
      callback: handleCallbackResponse
    })
    // @ts-ignore
    google.accounts.id.renderButton(
      document.getElementById('signIndiv'),
      { theme: 'outline', size: "large", width: "350", text: "signup_with" }
    )
    return () => {

    }
  }, [])

  return (
    <>

      <main id="content">
        <section className="py-13">
          <div className="container">
            <div className="row login-register d-flex justify-content-center">

              <div className="col-lg-7">
                <div className="card border-0">
                  <div className="card-body px-6 pr-lg-0 pl-xl-13 py-6">
                    <h2 className="card-title fs-30 font-weight-600 text-dark lh-16 mb-2">Sign Up</h2>
                    <p className="mb-4">Already have an account?<a href="#" className="text-heading hover-primary"><u>{"  "}Login</u></a></p>
                    <form className="form"
                      onSubmit={(e) => {
                        e.preventDefault(), Signup({
                          first_name: firstName,
                          last_name: lastName,
                          email: email,
                          password: password,
                          cpassword: cpassword
                        }),
                          signUpHandler()
                      }} >
                      <div className="form-row mx-n2">
                        <div className="col-sm-6 px-2">
                          <div className="form-group">
                            <label htmlFor="firstName" className="text-heading">First Name</label>
                            <input type="text" name="firs-name"
                              className="form-control form-control-lg border-0"
                              id="firstName" placeholder="First Name" onChange={(e) => {
                                setFirstName(e.target.value)
                              }} />
                            {error?.firstName ? <span style={{ color: "red" }}>{error?.firstName}</span> : null}
                          </div>
                        </div>
                        <div className="col-sm-6 px-2">
                          <div className="form-group">
                            <label htmlFor="lastName"
                              className="text-heading">Last Name</label>
                            <input type="text" name="last-name"
                              className="form-control form-control-lg border-0"
                              id="lastName" placeholder="Last Name"
                              onChange={(e) => {
                                setLastName(e.target.value)
                              }} />
                            {error?.lastName ? <span style={{ color: "red" }}>{error?.lastName}</span> : null}
                          </div>
                        </div>
                      </div>
                      <div className="form-row mx-n2">
                        <div className="col-sm-6 px-2">
                          <div className="form-group">
                            <label htmlFor="email" className="text-heading">Email</label>
                            <input type="text"
                              className="form-control form-control-lg border-0"
                              id="email" placeholder="Your Email" name="email"
                              onChange={(e) => {
                                setEmail(e.target.value)
                              }} />
                            {error?.email ? <span style={{ color: "red" }}>{error?.email}</span> : null}
                          </div>
                        </div>

                      </div>
                      <div className="form-row mx-n2">
                        <div className="col-sm-6 px-2">
                          <div className="form-group">
                            <label htmlFor="password-1" className="text-heading">Password</label>


                            <input type="text" className="form-control border-0 shadow-none"
                              id="password-1" name="password"
                              placeholder="Password" onChange={(e) => {
                                setPassword(e.target.value)
                              }} />
                            {error?.password ? <span style={{ color: "red" }}>{error?.password}</span> : null}

                          </div>
                          <div className="input-group-append">
                            <span className="input-group-text bg-gray-01 border-0 text-body fs-18">
                              <i className="far fa-eye-slash"></i>
                            </span>
                          </div>

                        </div>
                        <div className="col-sm-6 px-2">
                          <div className="form-group">
                            <label htmlFor="re-password">Re-Enter Password</label>

                            <input type="text" className="form-control border-0 shadow-none"
                              id="re-password" name="re-password"
                              placeholder="Password" onChange={(e) => {
                                setCpassWord(e.target.value)
                              }} />
                            {error?.cpassword ? <span style={{ color: "red" }}> {error?.cpassword}</span> : null}
                          </div>
                          <div className="input-group-append">
                            <span className="input-group-text bg-gray-01 border-0 text-body fs-18">
                              <i className="far fa-eye-slash"></i>
                            </span>
                          </div>


                        </div>
                      </div>
                      <button className="btn btn-primary btn-lg btn-block rounded" disabled={isLoadingSignUp}>

                        {
                          (isLoadingSignUp) ? (<><BeatLoader
                            size={10}
                            aria-label="Loading Spinner"
                            data-testid="loader"
                          /></>) : ("Register")
                        }

                      </button>
                    </form>
                    <div className="divider text-center my-2">
                      <span className="px-4 bg-white lh-17 text text-heading">
                        or Sign Up with
                      </span>
                    </div>
                    <div className=" d-flex justify-content-center align-content-center">
                      <div id="signIndiv">
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

    </>
  )
}

export default Signup