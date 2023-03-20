import { useState } from "react";

function Sec1_schoolList({ setcities, setCounty }) {


  const [county, setCounty1] = useState('')
  const [CITIES, setcities1] = useState('')

  const setbtncities = (e) => {
    e.preventDefault()
    setcities(CITIES)
  }

  const submitCounty = () => {

    setCounty(county)
  }
  return (
    <section className="pb-4 page-title shadow">
      <div className="container">
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb pt-6 pt-lg-2 lh-15 pb-5">
            <li className="breadcrumb-item">
              <a href="#">Home</a>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              School Listing
            </li>
          </ol>
          <h1 className="fs-30 lh-1 mb-0 text-heading font-weight-600">
            School List
          </h1>
          <div className="mt-6 form-search-01">
            <form className="form-inline mx-n1" id="accordion-5">
              <div className="form-group p-1">
                <div className=" input-group border input-group-lg">
                  <input
                    type="text"
                    name="Country"
                    required
                    className=" bg-white shadow-none border-0 z-index-1"
                    placeholder=" Your Country"
                    onChange={(e) => {
                      setCounty1(e.target.value)
                    }}

                  />
                  <div className="">
                    <button className="btn btn-primary" type="submit" onClick={submitCounty}>
                      Search
                    </button>
                  </div>
                </div>
              </div>
              <div className="form-group p-1">
                <div className="  input-group border input-group-lg">
                  <input
                    type="text"
                    name="Country"
                    required
                    className=" bg-white shadow-none border-0 z-index-1"
                    placeholder=" Your City"
                    onChange={(e) => {
                      setcities1(e.target.value)
                    }}
                  />
                  <div className="">
                    <button className="btn btn-primary" type="submit" onClick={setbtncities}>
                      Search
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </nav>
      </div>
    </section>
  );
}

export default Sec1_schoolList;
