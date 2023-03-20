import cogoToast from "cogo-toast";
import api from "lib/api";
import React, { useState } from "react";
import { useMutation, useQuery } from "react-query";
// import { useParams } from "react-router-dom"
function Section_review({ data }) {

  const [email, setemail] = useState('')
  const [name, setname] = useState('')
  const [title, settitle] = useState('')
  const [Rating, setrating] = useState("")
  const [review, Setreview] = useState('')


  const { mutate: submitreview, isLoading: isLoadingsubmitreview, } = useMutation((data: any) => api.post("/createReview", data), {
    onSuccess: (res: any) => {
      console.log(res, 'this isthe')
      console.log(isLoadingsubmitreview, '/createReview/createReview/createReview/createReview')
      cogoToast.success(res.data?.message);
    },
    onError: (err: any) => {
      console.log(err.response.data.message, 'this iss the error')
      cogoToast.error(err.response.data.message);
    }
  });





  return (
    <section data-aos="fade-up ">
      <div data-aos="fade-up" className="card border-0">
        <div className="card-body p-0 border-bottom">
          <h3 className="fs-16 lh-2 text-heading mb-4 border-bottom">Leave A  Review</h3>
          <form onSubmit={(e) => {
            e.preventDefault()
          }}>
            <div className="form-group mb-4 d-flex justify-content-start">
              <div data-aos="fade-up" className="rate-input">
                <input type="radio" id="star5" name="rate" value="5" />
                <label htmlFor="star5" title="text" className="mb-0 mr-1 lh-1" >
                  <i className="fas fa-star"></i>
                </label>
                <input type="radio" id="star4" name="rate" value="4" />
                <label htmlFor="star4" title="text" className="mb-0 mr-1 lh-1">
                  <i className="fas fa-star"></i>
                </label>
                <input type="radio" id="star3" name="rate" value="3" />
                <label htmlFor="star3" title="text" className="mb-0 mr-1 lh-1">
                  <i className="fas fa-star"></i>
                </label>
                <input type="radio" id="star2" name="rate" value="2" />
                <label htmlFor="star2" title="text" className="mb-0 mr-1 lh-1">
                  <i className="fas fa-star"></i>
                </label>
                <input type="radio" id="star1" name="rate" value="1" />
                <label htmlFor="star1" title="text" className="mb-0 mr-1 lh-1">
                  <i className="fas fa-star"></i>
                </label>
              </div>
            </div>
            <div className="row">
              <div className="col-sm-6">
                <div className="form-group mb-4">
                  <input placeholder="Your Name" className="form-control form-control-lg border-0"
                    type="text" name="name" onChange={(e) => {
                      setname(e.target.value)
                    }} />
                </div>
              </div>
              <div className="col-sm-6">
                <div className="form-group mb-4">
                  <input placeholder="Title" className="form-control form-control-lg border-0"
                    type="text" name="name"
                    onChange={(e) => {
                      settitle(e.target.value)
                    }}


                  />
                </div>
              </div>
              <div className="col-sm-6">
                <div className="form-group mb-4">
                  <input placeholder="Rating" className="form-control form-control-lg border-0"
                    type="text" name="name"
                    onChange={(e) => {
                      setrating(e.target.value)
                    }}
                  />
                </div>
              </div>
              <div className="col-sm-6">
                <div className="form-group mb-4">
                  <input type="email" placeholder="Email" name="email"
                    className="form-control form-control-lg border-0"
                    onChange={(e) => {
                      setemail(e.target.value)
                    }}
                  />
                </div>
              </div>
            </div>
            <div className="form-group mb-6">
              <textarea className="form-control form-control-lg border-0" placeholder="Your Review"
                name="message" rows={5} onChange={(e) => {
                  Setreview(e.target.value)
                }}></textarea>
            </div>
            <button type="submit" className="btn btn-lg btn-primary px-10 mb-2" onClick={(e) => {
              e.preventDefault(), submitreview({
                rating: Rating,
                review: review,
                name: name,
                email: email,
                title: title,
                id: data?._id
              })

            }}>Submit</button>
          </form>
        </div>
      </div>
    </section >
  )
}

export default Section_review