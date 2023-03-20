
import api from 'lib/api'
import React, { useEffect, useState } from 'react'
import { useMutation } from 'react-query'
import cogoToast from 'cogo-toast'
import { BeatLoader } from "react-spinners";
import jwtDecode from "jwt-decode";
import { useRouter } from 'next/router';
function Login() {
  const clientId = process.env.NEXT_PUBLIC_GOOGLE_CLIENTID
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState({
    email: "",
    password: ""
  })
  const errors: any = {}
  console.log(email)
  console.log(password)
  const submithere = () => {
    if (email.length === 0) {
      errors.email = "please enter the email"
    }

    if (password.length == 0) {
      errors.password = 'please enter the password'

    }
    setError(errors)
  }



  const { mutate: Login, isLoading: isLoadingLogin, } = useMutation((data: any) => api.post("/login", data), {
    onSuccess: (res: any) => {
      // console.log(res,'this isthe')
      cogoToast.success(res.data?.message);
    },
    onError: (err: any) => {
      // console.log(err.response.data.message, 'this iss the error')
      cogoToast.error(err.response.data.message);
    }
  });

  useEffect(() => {
    console.log(isLoadingLogin)

  }, [isLoadingLogin])

  const router = useRouter()

  const { mutate: gLogin } = useMutation((data: any) => api.post("google-login", data), {
    onSuccess: (res) => {
      console.log(res.data)
      router.push('/')

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
    
    console.log(data)
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
      { theme: 'outline', size: "large", width: "350" }
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
              <div className="col-lg-5">
                <div className="card border-0 shadow-xxs-2 mb-6">
                  <div className="card-body px-8 py-6">
                    <h2 className="card-title fs-30 font-weight-600 text-dark lh-16 mb-2">Log In</h2>
                    <p className="mb-4">Don’t have an account yet?  <a href="/signup" className="text-heading hover-primary"><u>Sign
                      in</u></a></p>
                    <form className="form" onSubmit={(e) => {
                      e.preventDefault(),
                        Login({
                          email: email,
                          password: password
                        }),
                        submithere()
                    }}>
                      <div className="form-group mb-4">
                        <label htmlFor="username-1">Email</label>
                        <input type="text" className="form-control form-control-lg border-0"
                          id="username-1" name="username"
                          placeholder="Your email" onChange={((e) => {
                            setEmail(e.target.value)
                          })} />
                        {error.email ? <span style={{ color: "red" }} >{error.email}</span> : null}

                      </div>
                      <div className="form-group mb-4">
                        <label htmlFor="password-2">Password</label>

                        <input type="text" className="form-control border-0 shadow-none fs-13"
                          id="password-2" name="password"
                          placeholder="Password" onChange={(e) => {
                            setPassword(e.target.value)
                          }} />

                        {error.password ? <span style={{ color: "red" }}>{error.password}</span> : null}
                        <div className="input-group-append">
                          <span className="input-group-text bg-gray-01 border-0 text-body fs-18">
                            <i className="far fa-eye-slash"></i>
                          </span>
                        </div>

                      </div>
                      <div className="d-flex mb-4">
                        <div className="form-check">
                          <input className="form-check-input" type="checkbox" value="" id="remember-me-1" name="remember" />
                          <label className="form-check-label" htmlFor="remember-me-1"       >
                            Stay signed in
                          </label>
                        </div>
                        <a href="password-recovery.html" className="d-inline-block ml-auto fs-13 lh-2 text-body">
                          <u>Forgot your password?</u>
                        </a>
                      </div>
                      <button type="submit" className="btn btn-primary btn-lg btn-block rounded" disabled={isLoadingLogin}  >
                        {
                          (isLoadingLogin) ? (<><BeatLoader
                            size={10}
                            aria-label="Loading Spinner"
                            data-testid="loader"
                          /></>) : ("Login")
                        }</button>
                    </form>
                    <div className="divider text-center my-2">
                      <span className="px-4 bg-white lh-17 text text-heading">
                        or Log-in with
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

export default Login