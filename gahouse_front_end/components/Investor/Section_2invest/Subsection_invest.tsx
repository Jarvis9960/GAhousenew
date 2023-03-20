import React from 'react'

function Subsection_invest() {
  return (
    <div >
            <hr className="mb-11" />
          <h2 className="text-heading mb-2 fs-22 fs-md-32 text-center lh-16 mxw-571 px-lg-8">
          Investor Database
          </h2>
          <p className="text-center mxw-670 mb-8">
          As this is often the case, it’s a fluid ever-changing list and we’re continually modifying our list. To assist this process we encourage all real estate agents and individuals to use us as a resource and submit any neighborhood with an associated property address and HOA company within the counties we service that allow rentals. The more details you can provide, the better we will be able to verify the information and add that to our database, giving investors a one-stop-shop to search all rental compliant locations
          </p>
          <form className="mxw-774">
            <div className="row">
              <div className="col-md-4">
                <div className="form-group">
                <select
                  className="form-control border-0 shadow-xxs-1 bg-transparent font-weight-600 selectpicker"
                  title="Location"
                  data-style="bg-white"
                  id="location"
                  name="location"
                  defaultValue={1}
                >
                  <option value={1}>All Countries</option>
                  <option value={2}>Boston</option>
                  <option value={3}>Chicago</option>
                  <option value={4}>Denver</option>
                  <option value={5}>Los Angeles</option>
                  <option value={6}>New York</option>
                  <option value={7}>San Francisco</option>
                </select>
                </div>
              </div>
              <div className="col-md-4">
              <div className="form-group">
              <select
                  className="form-control border-0 shadow-xxs-1 bg-transparent font-weight-600 selectpicker"
                  title="Location"
                  data-style="bg-white"
                  id="location"
                  name="location"
                  defaultValue={1}
                >
                  <option value={1}>All Cities</option>
                  <option value={2}>Boston</option>
                  <option value={3}>Chicago</option>
                  <option value={4}>Denver</option>
                  <option value={5}>Los Angeles</option>
                  <option value={6}>New York</option>
                  <option value={7}>San Francisco</option>
                </select>
              </div>
              </div>

              <div className="col-md-4">
              <div className="form-group">
              <select
                  className="form-control border-0 shadow-xxs-1 bg-transparent font-weight-600 selectpicker"
                  title="Location"
                  data-style="bg-white"
                  id="location"
                  name="location"
                  defaultValue={1}
                >
                  <option value={1}>Subdivision</option>
                  <option value={2}>Boston</option>
                  <option value={3}>Chicago</option>
                  <option value={4}>Denver</option>
                  <option value={5}>Los Angeles</option>
                  <option value={6}>New York</option>
                  <option value={7}>San Francisco</option>
                </select>
              </div>
              </div>

              
            </div>
            <div className="row">
              <div className="col-md-2">
                <div className="form-group">
                <select
                  className="form-control border-0 shadow-xxs-1 bg-transparent font-weight-600 selectpicker"
                  title="Location"
                  data-style="bg-white"
                  id="location"
                  name="location"
                  defaultValue={1}
                >
                  <option value={1}>All Types</option>
                  <option value={2}>Boston</option>
                  <option value={3}>Chicago</option>
                  <option value={4}>Denver</option>
                  <option value={5}>Los Angeles</option>
                  <option value={6}>New York</option>
                  <option value={7}>San Francisco</option>
                </select>
                </div>
              </div>
              <div className="col-md-2">
              <div className="form-group">
              <select
                  className="form-control border-0 shadow-xxs-1 bg-transparent font-weight-600 selectpicker"
                  title="Location"
                  data-style="bg-white"
                  id="location"
                  name="location"
                  defaultValue={1}
                >
                  <option value={1}>Bedroom</option>
                  <option value={2}>Boston</option>
                  <option value={3}>Chicago</option>
                  <option value={4}>Denver</option>
                  <option value={5}>Los Angeles</option>
                  <option value={6}>New York</option>
                  <option value={7}>San Francisco</option>
                </select>
              </div>
              </div>

              <div className="col-md-2">
              <div className="form-group">
              <select
                  className="form-control border-0 shadow-xxs-1 bg-transparent font-weight-600 selectpicker"
                  title="Location"
                  data-style="bg-white"
                  id="location"
                  name="location"
                  defaultValue={1}
                >
                  <option value={1}>Bathroom</option>
                  <option value={2}>Boston</option>
                  <option value={3}>Chicago</option>
                  <option value={4}>Denver</option>
                  <option value={5}>Los Angeles</option>
                  <option value={6}>New York</option>
                  <option value={7}>San Francisco</option>
                </select>
              </div>
              </div>

              <div className="col-md-2">
              <div className="form-group">
              <select
                  className="form-control border-0 shadow-xxs-1 bg-transparent font-weight-600 selectpicker"
                  title="Location"
                  data-style="bg-white"
                  id="location"
                  name="location"
                  defaultValue={1}
                >
                  <option value={1}>Min. Price</option>
                  <option value={2}>Boston</option>
                  <option value={3}>Chicago</option>
                  <option value={4}>Denver</option>
                  <option value={5}>Los Angeles</option>
                  <option value={6}>New York</option>
                  <option value={7}>San Francisco</option>
                </select>
              </div>
              </div>

              <div className="col-md-2">
              <div className="form-group">
              <select
                  className="form-control border-0 shadow-xxs-1 bg-transparent font-weight-600 selectpicker"
                  title="Location"
                  data-style="bg-white"
                  id="location"
                  name="location"
                  defaultValue={1}
                >
                  <option value={1}>Max. Price</option>
                  <option value={2}>Boston</option>
                  <option value={3}>Chicago</option>
                  <option value={4}>Denver</option>
                  <option value={5}>Los Angeles</option>
                  <option value={6}>New York</option>
                  <option value={7}>San Francisco</option>
                </select>
              </div>
              </div>

              
            </div>

            <div className="row">
              <div className="col-md-4">
                <div className="form-group">
                <input type="number" placeholder='0' className='form-control border-0 shadow-xxs-1 bg-transparent font-weight-600 selectpicker' />
                </div>
              </div>
              <div className="col-md-4">
              <div className="form-group">
              <input type="number" placeholder='0' className='form-control border-0 shadow-xxs-1 bg-transparent font-weight-600 selectpicker' />

              </div>
              </div>

              <div className="col-md-4">
              <div className="form-group">
              <input type="text" placeholder='Property ID' className='form-control border-0 shadow-xxs-1 bg-transparent font-weight-600 selectpicker' />

              </div>
              </div>

            </div>
              

              
            
            <div className="text-center">
              <button type="submit" className="btn btn-lg btn-primary px-9">Search</button>
            </div>
          </form>
          </div>
  )
}

export default Subsection_invest