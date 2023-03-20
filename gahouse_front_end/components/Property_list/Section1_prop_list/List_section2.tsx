import React from "react";

function List_section2() {
  return (
    <section className="pt-6 pb-7">
      <div className="container">
        <div className="row align-items-sm-center">
          <div className="col-md-6">
            <h2 className="fs-15 text-dark mb-0">
              We found <span className="text-primary">45</span> properties
              available for you
            </h2>
          </div>
          <div className="col-md-6 mt-6 mt-md-0">
            <div className="d-flex justify-content-md-end align-items-center">
              <div className="input-group border rounded input-group-lg w-auto bg-white mr-3">
                <label
                  className="input-group-text bg-transparent border-0 text-uppercase letter-spacing-093 pr-1 pl-3"
                  htmlFor="inputGroupSelect01"
                >
                  <i className="fas fa-align-left fs-16 pr-2"></i>Sortby:
                </label>
                <select
                  className="form-control border-0 bg-transparent shadow-none p-0 selectpicker sortby"
                  data-style="bg-transparent border-0 font-weight-600 btn-lg pl-0 pr-3"
                  id="inputGroupSelect01"
                  name="sortby"
                >
                  <option selected>Top Selling</option>
                  <option value="1">Most Viewed</option>
                  <option value="2">Price(low to high)</option>
                  <option value="3">Price(high to low)</option>
                </select>
              </div>
              <div className="d-none d-md-block">
                <a className="fs-sm-18 text-dark" href="#">
                  <i className="fas fa-list"></i>
                </a>
                <a
                  className="fs-sm-18 text-dark opacity-2 ml-5"
                  href="listing-full-width-grid-1.html"
                >
                  <i className="fa fa-th-large"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default List_section2;
