import React from 'react'

function Subsection2_invest() {
  return (
    <div>
            <hr className="mb-11" />
          <h2 className="text-heading mb-2 fs-22 fs-md-32 text-center lh-16 mxw-571 px-lg-8">
          Rental Restrictions
          </h2>
          <p className="text-center mxw-670 mb-8">
          Submit Your Neighborhood
          </p>
          <form className="mxw-774">
            <div className="row">
              <div className="col-md-6">
                <div className="form-group">
                  <input type="text" placeholder="Submitter Name (Required)"
                                       className="form-control form-control-lg border-0" name="first-name" />
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group">
                  <input type="text" placeholder="Submitter Email (Required)" name="last-name"
                                       className="form-control form-control-lg border-0" />
                </div>
              </div>

              <div className="col-md-6">
                <div className="form-group">
                  <input type="text" placeholder="Submitter Telephone" name="last-name"
                                       className="form-control form-control-lg border-0" />
                </div>
              </div>
            </div>
            <div className="row border-top pt-4">
                <div>
                    <p className='text-center'>Cross Roads</p>
                </div>
              <div className="col-md-6">
                <div className="form-group">
                  <input placeholder="Cross Road 1"
                                       className="form-control form-control-lg border-0"
                                       type="email" name="email" />
                </div>
              </div>
              <div className="col-md-6 px-2">
                <div className="form-group">
                  <input type="text" placeholder="Cross Road 2" name="phone"
                                       className="form-control form-control-lg border-0" />
                </div>
              </div>

              <div className="col-md-6 px-2">
                <div className="form-group">
                  <input type="text" placeholder="Address" name="phone"
                                       className="form-control form-control-lg border-0" />
                </div>
              </div>
            </div>

            <div className="row border-top pt-4">
                
              <div className="col-md-6">
                <div className="form-group">
                <select
                  className="form-control border-0 shadow-xxs-1 bg-transparent font-weight-600 selectpicker"
                  title="Location"
                  data-style="bg-white"
                  id="location"
                  name="location"
                  defaultValue={1}
                >
                  <option value={1}>-Select Country-</option>
                  <option value={2}>Boston</option>
                  <option value={3}>Chicago</option>
                  <option value={4}>Denver</option>
                  <option value={5}>Los Angeles</option>
                  <option value={6}>New York</option>
                  <option value={7}>San Francisco</option>
                </select>
                </div>
              </div>
              <div className="col-md-6 px-2">
                <div className="form-group">
                <select
                  className="form-control border-0 shadow-xxs-1 bg-transparent font-weight-600 selectpicker"
                  title="Location"
                  data-style="bg-white"
                  id="location"
                  name="location"
                  defaultValue={1}
                >
                  <option value={1}>-City-</option>
                  <option value={2}>Boston</option>
                  <option value={3}>Chicago</option>
                  <option value={4}>Denver</option>
                  <option value={5}>Los Angeles</option>
                  <option value={6}>New York</option>
                  <option value={7}>San Francisco</option>
                </select>
                </div>
              </div>

              <div className="col-md-6 px-2">
                <div className="form-group">
                <select
                  className="form-control border-0 shadow-xxs-1 bg-transparent font-weight-600 selectpicker"
                  title="Location"
                  data-style="bg-white"
                  id="location"
                  name="location"
                  defaultValue={1}
                >
                  <option value={1}>-Neighborhood Name-</option>
                  <option value={2}>Boston</option>
                  <option value={3}>Chicago</option>
                  <option value={4}>Denver</option>
                  <option value={5}>Los Angeles</option>
                  <option value={6}>New York</option>
                  <option value={7}>San Francisco</option>
                </select>
                </div>
              </div>

              <div className="col-md-6 px-2">
                <div className="form-group">
                  <input type="text" placeholder="Zip Code" name="phone"
                                       className="form-control form-control-lg border-0" />
                </div>
              </div>

              <div className="col-md-6 px-2">
                <div className="form-group">
                <select
                  className="form-control border-0 shadow-xxs-1 bg-transparent font-weight-600 selectpicker"
                  title="Location"
                  data-style="bg-white"
                  id="location"
                  name="location"
                  defaultValue={1}
                >
                  <option value={1}>-Rental Restrictions-</option>
                  <option value={2}>Boston</option>
                  <option value={3}>Chicago</option>
                  <option value={4}>Denver</option>
                  <option value={5}>Los Angeles</option>
                  <option value={6}>New York</option>
                  <option value={7}>San Francisco</option>
                </select>
                </div>
              </div>

              <div className="col-md-6 px-2">
                <div className="form-group">
                  <input type="text" placeholder="What are the Rental Restrictions (If Any)" name="phone"
                                       className="form-control form-control-lg border-0" />
                </div>
              </div>
            </div>

            <div className="row border-top pt-4">
            <div className="col-md-4">
                <div className="form-group">
                  <input type="text" placeholder="HOA Contact Name"
                                       className="form-control form-control-lg border-0" name="first-name" />
                </div>
              </div><div className="col-md-4">
                <div className="form-group">
                  <input type="text" placeholder="HOA Contact Email"
                                       className="form-control form-control-lg border-0" name="first-name" />
                </div>
              </div><div className="col-md-4">
                <div className="form-group">
                  <input type="text" placeholder="HOA Contact Number"
                                       className="form-control form-control-lg border-0" name="first-name" />
                </div>
              </div>
             
            </div>
            
            <div className="text-center">
              <button type="submit" className="btn btn-lg btn-primary px-9">Send</button>
            </div>
          </form>
          </div>
  )
}

export default Subsection2_invest