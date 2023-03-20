import React from 'react'


const cards = [
  { id: 1, title: 'Card 1' },
  { id: 2, title: 'Card 2' },
  { id: 3, title: 'Card 3' },
  { id: 4, title: 'Card 4' },
  { id: 5, title: 'Card 5' },
  { id: 6, title: 'Card 6' },
  { id: 7, title: 'Card 7' },
  { id: 8, title: 'Card 8' },
  { id: 9, title: 'Card 9' },
  { id: 10, title: 'Card 10' },
  { id: 11, title: 'Card 11' },
  { id: 12, title: 'Card 12' }
];

function Gallery() {
  return (
    <>
      <div >
        <div className="d-flex flex-column">
          <div className="bg-cover d-flex align-items-center custom-vh-100" style={{ backgroundImage: "url(images/bg-home-6.jpg)" }}>
          </div>
        </div>
        <div>
          <div className="container shadow-sm-2 rounded bg-white position-relative top-lg-n50px py-lg-0 py-6"
            data-animate="fadeInUp">
            <form className="property-search py-lg-0 d-none d-lg-block">
              <div className="row align-items-center ml-lg-0" id="accordion-3">
                <div className="col-md-6 col-lg-3 order-1">
                  <label className="text-uppercase font-weight-500 letter-spacing-093 mb-1">Home Type</label>
                  <select className="form-control selectpicker bg-transparent border-bottom rounded-0 border-color-input"
                    title="Select" data-style="p-0 h-24 lh-17 text-dark" name="type">
                    <option>Condominium</option>
                    <option>Single-Family Home</option>
                    <option>Townhouse</option>
                    <option>Multi-Family Home</option>
                  </select>
                </div>
                <div className="col-md-6 col-lg-4 col-xl-5 pt-6 pt-md-0 order-2">
                  <label className="text-uppercase font-weight-500 letter-spacing-093">Search</label>
                  <div className="position-relative">
                    <input type="text" name="search"
                      className="form-control bg-transparent shadow-none border-top-0 border-right-0 border-left-0 border-bottom rounded-0 h-24 lh-17 pl-0 pr-4 font-weight-600 border-color-input placeholder-muted"
                      placeholder="Find something..." />
                    <i className="far fa-search position-absolute pos-fixed-right-center pr-0 fs-18 mt-n3"></i>
                  </div>
                </div>
                <div className="col-sm pr-lg-0 pt-6 pt-lg-0 order-3">
                  <a href="#advanced-search-filters-3"
                    className="btn advanced-search btn-accent h-lg-100 w-100 shadow-none text-secondary rounded-0 fs-14 fs-sm-16 font-weight-600 text-left d-flex align-items-center collapsed"
                    data-toggle="collapse" data-target="#advanced-search-filters-3" aria-expanded="true"
                    aria-controls="advanced-search-filters-3">
                    Advanced Search
                  </a>
                </div>
                <div className="col-sm pt-6 pt-lg-0 order-sm-4 order-5">
                  <button type="submit"
                    className="btn btn-primary shadow-none fs-16 font-weight-600 w-100 py-lg-3">
                    Search
                  </button>
                </div>
                <div id="advanced-search-filters-3" className="col-12 py-sm-4 order-4 order-sm-5 collapse"
                  data-parent="#accordion-3">
                  <div className="row">
                    <div className="col-sm-6 col-lg-3 pt-6">
                      <label className="text-uppercase font-weight-500 letter-spacing-093 mb-1">Bedrooms</label>
                      <select className="form-control selectpicker bg-transparent border-bottom rounded-0 border-color-input"
                        name="bedroom"
                        title="All Bedrooms" data-style="p-0 h-24 lh-17 text-dark">
                        <option>All Bedrooms</option>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                        <option>6</option>
                        <option>7</option>
                        <option>8</option>
                        <option>9</option>
                        <option>10</option>
                      </select>
                    </div>
                    <div className="col-sm-6 col-lg-3 pt-6">
                      <label className="text-uppercase font-weight-500 letter-spacing-093 mb-1">Bathrooms</label>
                      <select className="form-control selectpicker bg-transparent border-bottom rounded-0 border-color-input"
                        title="All Bathrooms" data-style="p-0 h-24 lh-17 text-dark" name="bathroom">
                        <option>All Bathrooms</option>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                        <option>6</option>
                        <option>7</option>
                        <option>8</option>
                        <option>9</option>
                        <option>10</option>
                      </select>
                    </div>
                    <div className="col-sm-6 col-lg-3 pt-6">
                      <label className="text-uppercase font-weight-500 letter-spacing-093 mb-1">Cities</label>
                      <select className="form-control selectpicker bg-transparent border-bottom rounded-0 border-color-input"
                        name="city"
                        title="All Cities" data-style="p-0 h-24 lh-17 text-dark">
                        <option>All Cities</option>
                        <option>New York</option>
                        <option>Los Angeles</option>
                        <option>Chicago</option>
                        <option>Houston</option>
                        <option>San Diego</option>
                        <option>Las Vegas</option>
                        <option>Las Vegas</option>
                        <option>Atlanta</option>
                      </select>
                    </div>
                    <div className="col-sm-6 col-lg-3 pt-6">
                      <label className="text-uppercase font-weight-500 letter-spacing-093 mb-1">All Areas</label>
                      <select className="form-control selectpicker bg-transparent border-bottom rounded-0 border-color-input"
                        name="areas"
                        title="All Areas" data-style="p-0 h-24 lh-17 text-dark">
                        <option>All Areas</option>
                        <option>Albany Park</option>
                        <option>Altgeld Gardens</option>
                        <option>Andersonville</option>
                        <option>Beverly</option>
                        <option>Brickel</option>
                        <option>Central City</option>
                        <option>Coconut Grove</option>
                      </select>
                    </div>
                  </div>
                  <div className="row pt-2">
                    <div className="col-md-6 col-lg-4 pt-6 slider-range slider-range-secondary">
                      <label htmlFor="price-1-3" className="mb-4 text-gray-light">Price Range</label>
                      <div data-slider="true"
                        data-slider-options='{"min":0,"max":1000000,"values":[100000,700000],"type":"currency"}'></div>
                      <div className="text-center mt-2">
                        <input id="price-1-3" type="text" name="price"
                          className="border-0 amount text-center text-body font-weight-500" />
                      </div>
                    </div>
                    <div className="col-md-6 col-lg-4 pt-6 slider-range slider-range-secondary">
                      <label htmlFor="area-size-3" className="mb-4 text-gray-light">Area Size</label>
                      <div data-slider="true"
                        data-slider-options='{"min":0,"max":15000,"values":[0,13000],"type":"sqrt"}'></div>
                      <div className="text-center mt-2">
                        <input id="area-size-3" type="text" name="price"
                          className="border-0 amount text-center text-body font-weight-500" />
                      </div>
                    </div>
                    <div className="col-sm-6 col-lg-4 pt-6">
                      <label className="text-uppercase font-weight-500 letter-spacing-093 mb-1">Property
                        ID</label>
                      <input type="text" name="search"
                        className="form-control bg-transparent shadow-none border-top-0 border-right-0 border-left-0 border-bottom rounded-0 h-24 lh-17 p-0 font-weight-600 border-color-input"
                        placeholder="Enter ID..." />
                    </div>
                    <div className="col-12 pt-6 pb-2">
                      <a className="lh-17 d-inline-block other-feature collapsed" data-toggle="collapse"
                        href="#other-feature-3"
                        role="button"
                        aria-expanded="false" aria-controls="other-feature-3">
                        <span className="fs-15 text-heading font-weight-500 hover-primary">Other Features</span>
                      </a>
                    </div>
                    <div className="collapse row mx-0 w-100" id="other-feature-3">
                      <div className="col-sm-6 col-md-4 col-lg-3 py-2">
                        <div className="custom-control custom-checkbox">
                          <input type="checkbox" className="custom-control-input" id="check1-3" name="features[]" />
                          <label className="custom-control-label" htmlFor="check1-3">Air Conditioning</label>
                        </div>
                      </div>
                      <div className="col-sm-6 col-md-4 col-lg-3 py-2">
                        <div className="custom-control custom-checkbox">
                          <input type="checkbox" className="custom-control-input" id="check2-3" name="features[]" />
                          <label className="custom-control-label" htmlFor="check2-3">Laundry</label>
                        </div>
                      </div>
                      <div className="col-sm-6 col-md-4 col-lg-3 py-2">
                        <div className="custom-control custom-checkbox">
                          <input type="checkbox" className="custom-control-input" id="check4-3" name="features[]" />
                          <label className="custom-control-label" htmlFor="check4-3">Washer</label>
                        </div>
                      </div>
                      <div className="col-sm-6 col-md-4 col-lg-3 py-2">
                        <div className="custom-control custom-checkbox">
                          <input type="checkbox" className="custom-control-input" id="check5-3" name="features[]" />
                          <label className="custom-control-label" htmlFor="check5-3">Barbeque</label>
                        </div>
                      </div>
                      <div className="col-sm-6 col-md-4 col-lg-3 py-2">
                        <div className="custom-control custom-checkbox">
                          <input type="checkbox" className="custom-control-input" id="check6-3" name="features[]" />
                          <label className="custom-control-label" htmlFor="check6-3">Lawn</label>
                        </div>
                      </div>
                      <div className="col-sm-6 col-md-4 col-lg-3 py-2">
                        <div className="custom-control custom-checkbox">
                          <input type="checkbox" className="custom-control-input" id="check7-3" name="features[]" />
                          <label className="custom-control-label" htmlFor="check7-3">Sauna</label>
                        </div>
                      </div>
                      <div className="col-sm-6 col-md-4 col-lg-3 py-2">
                        <div className="custom-control custom-checkbox">
                          <input type="checkbox" className="custom-control-input" id="check8-3" name="features[]" />
                          <label className="custom-control-label" htmlFor="check8-3">WiFi</label>
                        </div>
                      </div>
                      <div className="col-sm-6 col-md-4 col-lg-3 py-2">
                        <div className="custom-control custom-checkbox">
                          <input type="checkbox" className="custom-control-input" id="check9-3" name="features[]" />
                          <label className="custom-control-label" htmlFor="check9-3">Dryer</label>
                        </div>
                      </div>
                      <div className="col-sm-6 col-md-4 col-lg-3 py-2">
                        <div className="custom-control custom-checkbox">
                          <input type="checkbox" className="custom-control-input" id="check10-3"
                            name="features[]" />
                          <label className="custom-control-label" htmlFor="check10-3">Microwave</label>
                        </div>
                      </div>
                      <div className="col-sm-6 col-md-4 col-lg-3 py-2">
                        <div className="custom-control custom-checkbox">
                          <input type="checkbox" className="custom-control-input" id="check11-3"
                            name="features[]" />
                          <label className="custom-control-label" htmlFor="check11-3">Swimming Pool</label>
                        </div>
                      </div>
                      <div className="col-sm-6 col-md-4 col-lg-3 py-2">
                        <div className="custom-control custom-checkbox">
                          <input type="checkbox" className="custom-control-input" id="check12-3"
                            name="features[]" />
                          <label className="custom-control-label" htmlFor="check12-3">Window Coverings</label>
                        </div>
                      </div>
                      <div className="col-sm-6 col-md-4 col-lg-3 py-2">
                        <div className="custom-control custom-checkbox">
                          <input type="checkbox" className="custom-control-input" id="check13-3"
                            name="features[]" />
                          <label className="custom-control-label" htmlFor="check13-3">Gym</label>
                        </div>
                      </div>
                      <div className="col-sm-6 col-md-4 col-lg-3 py-2">
                        <div className="custom-control custom-checkbox">
                          <input type="checkbox" className="custom-control-input" id="check14-3"
                            name="features[]" />
                          <label className="custom-control-label" htmlFor="check14-3">Outdoor Shower</label>
                        </div>
                      </div>
                      <div className="col-sm-6 col-md-4 col-lg-3 py-2">
                        <div className="custom-control custom-checkbox">
                          <input type="checkbox" className="custom-control-input" id="check15-3"
                            name="features[]" />
                          <label className="custom-control-label" htmlFor="check15-3">TV Cable</label>
                        </div>
                      </div>
                      <div className="col-sm-6 col-md-4 col-lg-3 py-2">
                        <div className="custom-control custom-checkbox">
                          <input type="checkbox" className="custom-control-input" id="check16-3"
                            name="features[]" />
                          <label className="custom-control-label" htmlFor="check16-3">Refrigerator</label>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </form>
            <form className="property-search property-search-mobile d-lg-none">
              <div className="row align-items-lg-center" id="accordion-3-mobile">
                <div className="col-12">
                  <div className="form-group mb-0 position-relative">
                    <a href="#advanced-search-filters-3-mobile"
                      className="text-secondary btn advanced-search shadow-none pr-3 pl-0 d-flex align-items-center position-absolute pos-fixed-left-center py-0 h-100 border-right collapsed"
                      data-toggle="collapse" data-target="#advanced-search-filters-3-mobile"
                      aria-expanded="true"
                      aria-controls="advanced-search-filters-3-mobile">
                    </a>
                    <input type="text"
                      className="form-control form-control-lg border shadow-none pr-9 pl-11 bg-white placeholder-muted"
                      name="key-word"
                      placeholder="Search..." />
                    <button type="submit"
                      className="btn position-absolute pos-fixed-right-center p-0 text-heading fs-20 px-3 shadow-none h-100 border-left">
                      <i className="far fa-search"></i>
                    </button>
                  </div>
                </div>
                <div id="advanced-search-filters-3-mobile" className="col-12 pt-2 collapse"
                  data-parent="#accordion-3-mobile">
                  <div className="row mx-n2">
                    <div className="col-sm-6 pt-4 px-2">
                      <select className="form-control border shadow-none form-control-lg selectpicker bg-transparent"
                        title="Select" data-style="btn-lg py-2 h-52 bg-transparent" name="type">
                        <option>All status</option>
                        <option>For Rent</option>
                        <option>For Sale</option>
                      </select>
                    </div>
                    <div className="col-sm-6 pt-4 px-2">
                      <select className="form-control border shadow-none form-control-lg selectpicker bg-transparent"
                        title="All Types" data-style="btn-lg py-2 h-52 bg-transparent" name="type">
                        <option>Condominium</option>
                        <option>Single-Family Home</option>
                        <option>Townhouse</option>
                        <option>Multi-Family Home</option>
                      </select>
                    </div>
                    <div className="col-sm-6 pt-4 px-2">
                      <select className="form-control border shadow-none form-control-lg selectpicker bg-transparent"
                        name="bedroom"
                        title="Bedrooms" data-style="btn-lg py-2 h-52 bg-transparent">
                        <option>All Bedrooms</option>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                        <option>6</option>
                        <option>7</option>
                        <option>8</option>
                        <option>9</option>
                        <option>10</option>
                      </select>
                    </div>
                    <div className="col-sm-6 pt-4 px-2">
                      <select className="form-control border shadow-none form-control-lg selectpicker bg-transparent"
                        name="bathrooms"
                        title="Bathrooms" data-style="btn-lg py-2 h-52 bg-transparent">
                        <option>All Bathrooms</option>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                        <option>6</option>
                        <option>7</option>
                        <option>8</option>
                        <option>9</option>
                        <option>10</option>
                      </select>
                    </div>
                    <div className="col-sm-6 pt-4 px-2">
                      <select className="form-control border shadow-none form-control-lg selectpicker bg-transparent"
                        title="All Cities" data-style="btn-lg py-2 h-52 bg-transparent" name="city">
                        <option>All Cities</option>
                        <option>New York</option>
                        <option>Los Angeles</option>
                        <option>Chicago</option>
                        <option>Houston</option>
                        <option>San Diego</option>
                        <option>Las Vegas</option>
                        <option>Las Vegas</option>
                        <option>Atlanta</option>
                      </select>
                    </div>
                    <div className="col-sm-6 pt-4 px-2">
                      <select className="form-control border shadow-none form-control-lg selectpicker bg-transparent"
                        name="areas"
                        title="All Areas" data-style="btn-lg py-2 h-52 bg-transparent">
                        <option>All Areas</option>
                        <option>Albany Park</option>
                        <option>Altgeld Gardens</option>
                        <option>Andersonville</option>
                        <option>Beverly</option>
                        <option>Brickel</option>
                        <option>Central City</option>
                        <option>Coconut Grove</option>
                      </select>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6 pt-6 slider-range slider-range-secondary">
                      <label htmlFor="price-3-mobile" className="mb-4 text-white">Price Range</label>
                      <div data-slider="true"
                        data-slider-options='{"min":0,"max":1000000,"values":[100000,700000],"type":"currency"}'></div>
                      <div className="text-center mt-2">
                        <input id="price-3-mobile" type="text"
                          className="border-0 amount text-center bg-transparent font-weight-500"
                          name="price" />
                      </div>
                    </div>
                    <div className="col-md-6 pt-6 slider-range slider-range-secondary">
                      <label htmlFor="area-size-3-mobile" className="mb-4">Area Size</label>
                      <div data-slider="true"
                        data-slider-options='{"min":0,"max":15000,"values":[0,12000],"type":"sqrt"}'></div>
                      <div className="text-center mt-2">
                        <input id="area-size-3-mobile" type="text"
                          className="border-0 amount text-center bg-transparent font-weight-500"
                          name="area" />
                      </div>
                    </div>
                    <div className="col-12 pt-4 pb-2">
                      <a className="lh-17 d-inline-block other-feature collapsed" data-toggle="collapse"
                        href="#other-feature-3-mobile"
                        role="button"
                        aria-expanded="false" aria-controls="other-feature-3-mobile">
                        <span className="fs-15 font-weight-500 hover-primary">Other Features</span>
                      </a>
                    </div>
                    <div className="collapse row mx-0 w-100" id="other-feature-3-mobile">
                      <div className="col-sm-6 py-2">
                        <div className="custom-control custom-checkbox">
                          <input type="checkbox" className="custom-control-input"
                            id="check1-3-mobile" name="feature[]" />
                          <label className="custom-control-label" htmlFor="check1-3-mobile">Air
                            Conditioning</label>
                        </div>
                      </div>
                      <div className="col-sm-6 py-2">
                        <div className="custom-control custom-checkbox">
                          <input type="checkbox" className="custom-control-input"
                            id="check2-3-mobile" name="feature[]" />
                          <label className="custom-control-label" htmlFor="check2-3-mobile">Laundry</label>
                        </div>
                      </div>
                      <div className="col-sm-6 py-2">
                        <div className="custom-control custom-checkbox">
                          <input type="checkbox" className="custom-control-input"
                            id="check4-3-mobile" name="feature[]" />
                          <label className="custom-control-label" htmlFor="check4-3-mobile">Washer</label>
                        </div>
                      </div>
                      <div className="col-sm-6 py-2">
                        <div className="custom-control custom-checkbox">
                          <input type="checkbox" className="custom-control-input"
                            id="check5-3-mobile" name="feature[]" />
                          <label className="custom-control-label" htmlFor="check5-3-mobile">Barbeque</label>
                        </div>
                      </div>
                      <div className="col-sm-6 py-2">
                        <div className="custom-control custom-checkbox">
                          <input type="checkbox" className="custom-control-input"
                            id="check6-3-mobile" name="feature[]" />
                          <label className="custom-control-label" htmlFor="check6-3-mobile">Lawn</label>
                        </div>
                      </div>
                      <div className="col-sm-6 py-2">
                        <div className="custom-control custom-checkbox">
                          <input type="checkbox" className="custom-control-input"
                            id="check7-3-mobile" name="feature[]" />
                          <label className="custom-control-label" htmlFor="check7-3-mobile">Sauna</label>
                        </div>
                      </div>
                      <div className="col-sm-6 py-2">
                        <div className="custom-control custom-checkbox">
                          <input type="checkbox" className="custom-control-input"
                            id="check8-3-mobile" name="feature[]" />
                          <label className="custom-control-label" htmlFor="check8-3-mobile">WiFi</label>
                        </div>
                      </div>
                      <div className="col-sm-6 py-2">
                        <div className="custom-control custom-checkbox">
                          <input type="checkbox" className="custom-control-input"
                            id="check9-3-mobile" name="feature[]" />
                          <label className="custom-control-label" htmlFor="check9-3-mobile">Dryer</label>
                        </div>
                      </div>
                      <div className="col-sm-6 py-2">
                        <div className="custom-control custom-checkbox">
                          <input type="checkbox" className="custom-control-input"
                            id="check10-3-mobile" name="feature[]" />
                          <label className="custom-control-label" htmlFor="check10-3-mobile">Microwave</label>
                        </div>
                      </div>
                      <div className="col-sm-6 py-2">
                        <div className="custom-control custom-checkbox">
                          <input type="checkbox" className="custom-control-input"
                            id="check11-3-mobile" name="feature[]" />
                          <label className="custom-control-label" htmlFor="check11-3-mobile">Swimming
                            Pool</label>
                        </div>
                      </div>
                      <div className="col-sm-6 py-2">
                        <div className="custom-control custom-checkbox">
                          <input type="checkbox" className="custom-control-input"
                            id="check12-3-mobile" name="feature[]" />
                          <label className="custom-control-label" htmlFor="check12-3-mobile">Window
                            Coverings</label>
                        </div>
                      </div>
                      <div className="col-sm-6 py-2">
                        <div className="custom-control custom-checkbox">
                          <input type="checkbox" className="custom-control-input"
                            id="check13-3-mobile" name="feature[]" />
                          <label className="custom-control-label" htmlFor="check13-3-mobile">Gym</label>
                        </div>
                      </div>
                      <div className="col-sm-6 py-2">
                        <div className="custom-control custom-checkbox">
                          <input type="checkbox" className="custom-control-input"
                            id="check14-3-mobile" name="feature[]" />
                          <label className="custom-control-label" htmlFor="check14-3-mobile">Outdoor
                            Shower</label>
                        </div>
                      </div>
                      <div className="col-sm-6 py-2">
                        <div className="custom-control custom-checkbox">
                          <input type="checkbox" className="custom-control-input"
                            id="check15-3-mobile" name="feature[]" />
                          <label className="custom-control-label" htmlFor="check15-3-mobile">TV Cable</label>
                        </div>
                      </div>
                      <div className="col-sm-6 py-2">
                        <div className="custom-control custom-checkbox">
                          <input type="checkbox" className="custom-control-input"
                            id="check16-3-mobile" name="feature[]" />
                          <label className="custom-control-label"
                            htmlFor="check16-3-mobile">Refrigerator</label>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
        <div className="d-flex flex-wrap ml-13 mb-10">
          {cards.map((card, index) => (
            <div key={index} className="card mb-3 mx-3 d-flex flex-wrap d-md-flex d-sm-block " style={{ width: "20%", height: "200px" }} >
              <div className="card-body">
                <h5 className="card-title">{card.title}</h5>
                <p className="card-text">{"card.description"}</p>
              </div>
            </div>
          ))}
        </div>

        <div id="compare" className="compare">
          <button className="btn shadow btn-open bg-white bg-hover-accent text-secondary rounded-right-0 d-flex justify-content-center align-items-center w-30px h-140 p-0">
          </button>
          <div className="list-group list-group-no-border bg-dark py-3">
            <a href="#" className="list-group-item bg-transparent text-white fs-22 text-center py-0">
              <i className="far fa-bars"></i>
            </a>
            <div className="list-group-item card bg-transparent">
              <div className="position-relative hover-change-image bg-hover-overlay">
                <img src="images/compare-01.jpg" className="card-img" alt="properties" />
                <div className="card-img-overlay">
                  <a href="#" className="text-white hover-image fs-16 lh-1 pos-fixed-top-right position-absolute m-2"><i className="fal fa-minus-circle"></i></a>
                </div>
              </div>
            </div>
            <div className="list-group-item card bg-transparent">
              <div className="position-relative hover-change-image bg-hover-overlay">
                <img src="images/compare-02.jpg" className="card-img" alt="properties" />
                <div className="card-img-overlay">
                  <a href="#" className="text-white hover-image fs-16 lh-1 pos-fixed-top-right position-absolute m-2"><i className="fal fa-minus-circle"></i></a>
                </div>
              </div>
            </div>
            <div className="list-group-item card card bg-transparent">
              <div className="position-relative hover-change-image bg-hover-overlay ">
                <img src="images/compare-03.jpg" className="card-img" alt="properties" />
                <div className="card-img-overlay">
                  <a href="#" className="text-white hover-image fs-16 lh-1 pos-fixed-top-right position-absolute m-2"><i className="fal fa-minus-circle"></i></a>
                </div>
              </div>
            </div>
            <div className="list-group-item bg-transparent">
              <a href="compare-details.html" className="btn btn-lg btn-primary w-100 px-0 d-flex justify-content-center">
                Compare
              </a>
            </div>
          </div>
        </div>
      </div>





    </>
  )
}

export default Gallery