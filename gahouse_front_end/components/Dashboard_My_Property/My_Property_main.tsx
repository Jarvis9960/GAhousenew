import React from 'react'

function My_Property_main() {
  return (
    <div className="wrapper dashboard-wrapper">
      <div className="d-flex flex-wrap flex-xl-nowrap">
        <div className="db-sidebar bg-white">
          <nav className="navbar navbar-expand-xl navbar-light d-block px-0 header-sticky dashboard-nav py-0">
            <div className="sticky-area shadow-xs-1 py-3">
              <div className="d-flex px-3 px-xl-6 w-100">
                <a className="navbar-brand" href="index.html">
                  <img src="images/logo.png" alt="HomeID" />
                </a>
                <div className="ml-auto d-flex align-items-center ">
                  <div className="d-flex align-items-center d-xl-none">
                    <div className="dropdown px-3">
                      <a href="#" className="dropdown-toggle d-flex align-items-center text-heading"
                           data-toggle="dropdown">
                        <div className="w-48px">
                          <img src="images/testimonial-5.jpg"
                                     alt="Ronald Hunter" className="rounded-circle" />
                        </div>
                        <span className="fs-13 font-weight-500 d-none d-sm-inline ml-2">
                          Ronald Hunter
                        </span>
                      </a>
                      <div className="dropdown-menu dropdown-menu-right">
                        <a className="dropdown-item" href="#">My Profile</a>
                        <a className="dropdown-item" href="#">My Profile</a>
                        <a className="dropdown-item" href="#">Logout</a>
                      </div>
                    </div>
                    <div className="dropdown no-caret py-4 px-3 d-flex align-items-center notice mr-3">
                      <a href="#" className="dropdown-toggle text-heading fs-20 font-weight-500 lh-1"
                           data-toggle="dropdown">
                        <i className="far fa-bell"></i>
                        <span className="badge badge-primary badge-circle badge-absolute font-weight-bold fs-13">1</span>
                      </a>
                      <div className="dropdown-menu dropdown-menu-right">
                        <a className="dropdown-item" href="#">Action</a>
                        <a className="dropdown-item" href="#">Another action</a>
                        <a className="dropdown-item" href="#">Something else here</a>
                      </div>
                    </div>
                  </div>
                  <button className="navbar-toggler border-0 px-0" type="button" data-toggle="collapse"
                        data-target="#primaryMenuSidebar"
                        aria-controls="primaryMenuSidebar" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                  </button>
                </div>
              </div>
              <div className="collapse navbar-collapse bg-white" id="primaryMenuSidebar">
                <form className="d-block d-xl-none pt-5 px-3">
                  <div className="input-group">
                    <div className="input-group-prepend mr-0 bg-input">
                      <button className="btn border-0 shadow-none fs-20 text-muted pr-0" type="submit"><i
                                className="far fa-search"></i></button>
                    </div>
                    <input type="text" className="form-control border-0 form-control-lg shadow-none"
                           placeholder="Search for..." name="search" />
                  </div>
                </form>
                <ul className="list-group list-group-flush w-100">
                  <li className="list-group-item pt-6 pb-4">
                    <h5 className="fs-13 letter-spacing-087 text-muted mb-3 text-uppercase px-3">Main</h5>
                    <ul className="list-group list-group-no-border rounded-lg">
                      <li className="list-group-item px-3 px-xl-4 py-2 sidebar-item">
                        <a href="dashboard.html" className="text-heading lh-1 sidebar-link">
                          <span className="sidebar-item-icon d-inline-block mr-3 fs-20"><i
                                        className="fal fa-cog"></i></span>
                          <span className="sidebar-item-text">Dashboard</span>
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="list-group-item pt-6 pb-4">
                    <h5 className="fs-13 letter-spacing-087 text-muted mb-3 text-uppercase px-3">Manage Listings</h5>
                    <ul className="list-group list-group-no-border rounded-lg">
                      <li className="list-group-item px-3 px-xl-4 py-2 sidebar-item">
                        <a href="dashboard-add-new-property.html"
                               className="text-heading lh-1 sidebar-link">
                          <span className="sidebar-item-icon d-inline-block mr-3 text-muted fs-20 fs-20">
                            <svg className="icon icon-add-new"><use
                                            xlinkHref="#icon-add-new"></use></svg></span>
                          <span className="sidebar-item-text">Add new</span>
                        </a>
                      </li>
                      <li className="list-group-item px-3 px-xl-4 py-2 sidebar-item">
                        <a href="dashboard-my-properties.html"
                               className="text-heading lh-1 sidebar-link d-flex align-items-center">
                          <span className="sidebar-item-icon d-inline-block mr-3 text-muted fs-20">
                            <svg className="icon icon-my-properties"><use
                                            xlinkHref="#icon-my-properties"></use></svg>
                          </span>
                          <span className="sidebar-item-text">My Properties</span>
                          <span className="sidebar-item-number ml-auto text-primary fs-15 font-weight-bold">29</span>
                        </a>
                      </li>
                      <li className="list-group-item px-3 px-xl-4 py-2 sidebar-item">
                        <a href="dashboard-my-favorites.html"
                               className="text-heading lh-1 sidebar-link d-flex align-items-center">
                          <span className="sidebar-item-icon d-inline-block mr-3 text-muted fs-20">
                            <svg className="icon icon-heart"><use xlinkHref="#icon-heart"></use></svg>
                          </span>
                          <span className="sidebar-item-text">My Favorites</span>
                          <span className="sidebar-item-number ml-auto text-primary fs-15 font-weight-bold">5</span>
                        </a>
                      </li>
                      <li className="list-group-item px-3 px-xl-4 py-2 sidebar-item">
                        <a href="dashboard-save-search.html"
                               className="text-heading lh-1 sidebar-link d-flex align-items-center">
                          <span className="sidebar-item-icon d-inline-block mr-3 text-muted fs-20">
                            <svg className="icon icon-save-search"><use xlinkHref="#icon-save-search"></use></svg>
                          </span>
                          <span className="sidebar-item-text">Save Search</span>
                          <span className="sidebar-item-number ml-auto text-primary fs-15 font-weight-bold">5</span>
                        </a>
                      </li>
                      <li className="list-group-item px-3 px-xl-4 py-2 sidebar-item">
                        <a href="dashboard-reviews.html"
                               className="text-heading lh-1 sidebar-link d-flex align-items-center">
                          <span className="sidebar-item-icon d-inline-block mr-3 text-muted fs-20">
                            <svg className="icon icon-review"><use xlinkHref="#icon-review"></use></svg>
                          </span>
                          <span className="sidebar-item-text">Reviews</span>
                          <span className="sidebar-item-number ml-auto text-primary fs-15 font-weight-bold">29</span>
                        </a>
                      </li>
                      <li className="list-group-item px-3 px-xl-4 py-2 sidebar-item">
                        <a href="#invoice_collapse"
                                   className="text-heading lh-1 sidebar-link d-flex align-items-center"
                                   data-toggle="collapse" aria-haspopup="true" aria-expanded="false">
                          <span className="sidebar-item-icon d-inline-block mr-3 text-muted fs-20">
                            <i className="fal fa-file-invoice"></i>
                          </span>
                          <span className="sidebar-item-text">Invoice</span>
                          <span className="d-inline-block ml-auto"><i className="fal fa-angle-down"></i></span>
                        </a>
                      </li>
                    </ul>
                    <div className="collapse" id="invoice_collapse">
                      <div className="card card-body border-0 bg-transparent py-0 pl-6">
                        <ul className="list-group list-group-flush list-group-no-border">
                          <li className="list-group-item px-3 px-xl-4 py-2 sidebar-item">
                            <a className="text-heading lh-1 sidebar-link"
                                       href="dashboard-invoice-listing.html">Listing Invoice</a>
                          </li>
                          <li className="list-group-item px-3 px-xl-4 py-2 sidebar-item">
                            <a className="text-heading lh-1 sidebar-link"
                                       href="dashboard-add-new-invoice.html">Add New Invoice</a>
                          </li>
                          <li className="list-group-item px-3 px-xl-4 py-2 sidebar-item">
                            <a className="text-heading lh-1 sidebar-link" href="dashboard-edit-invoice.html">Edit
                              Invoice</a>
                          </li>
                          <li className="list-group-item px-3 px-xl-4 py-2 sidebar-item">
                            <a className="text-heading lh-1 sidebar-link"
                                       href="dashboard-preview-invoice.html">Preview Invoice</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </li>
                  <li className="list-group-item pt-6 pb-4">
                    <h5 className="fs-13 letter-spacing-087 text-muted mb-3 text-uppercase px-3">Manage Acount</h5>
                    <ul className="list-group list-group-no-border rounded-lg">
                      <li className="list-group-item px-3 px-xl-4 py-2 sidebar-item">
                        <a href="dashboard-my-packages.html"
                               className="text-heading lh-1 sidebar-link d-flex align-items-center">
                          <span className="sidebar-item-icon d-inline-block mr-3 text-muted fs-20">
                            <svg className="icon icon-my-package"><use xlinkHref="#icon-my-package"></use></svg>
                          </span>
                          <span className="sidebar-item-text">My Package</span>
                          <span className="sidebar-item-number ml-auto text-primary fs-15 font-weight-bold">5</span>
                        </a>
                      </li>
                      <li className="list-group-item px-3 px-xl-4 py-2 sidebar-item">
                        <a href="dashboard-my-profiles.html"
                               className="text-heading lh-1 sidebar-link">
                          <span className="sidebar-item-icon d-inline-block mr-3 text-muted fs-20">
                            <svg className="icon icon-my-profile"><use xlinkHref="#icon-my-profile"></use></svg>
                          </span>
                          <span className="sidebar-item-text">My Profile</span>
                        </a>
                      </li>
                      <li className="list-group-item px-3 px-xl-4 py-2 sidebar-item">
                        <a href="#" className="text-heading lh-1 sidebar-link">
                          <span className="sidebar-item-icon d-inline-block mr-3 text-muted fs-20">
                            <svg className="icon icon-log-out"><use xlinkHref="#icon-log-out"></use></svg>
                          </span>
                          <span className="sidebar-item-text">Log Out</span>
                        </a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
        <div className="page-content">
          <header className="main-header shadow-none shadow-lg-xs-1 bg-white position-relative d-none d-xl-block">
            <div className="container-fluid">
              <nav className="navbar navbar-light py-0 row no-gutters px-3 px-lg-0">
                <div className="col-md-4 px-0 px-md-6 order-1 order-md-0">
                  <form>
                    <div className="input-group">
                      <div className="input-group-prepend mr-0">
                        <button className="btn border-0 shadow-none fs-20 text-muted p-0" type="submit"><i
                                    className="far fa-search"></i></button>
                      </div>
                      <input type="text" className="form-control border-0 bg-transparent shadow-none"
                               placeholder="Search for..." name="search" />
                    </div>
                  </form>
                </div>
                <div className="col-md-6 d-flex flex-wrap justify-content-md-end order-0 order-md-1">
                  <div className="dropdown border-md-right border-0 py-3 text-right">
                    <a href="#"
                       className="dropdown-toggle text-heading pr-3 pr-sm-6 d-flex align-items-center justify-content-end"
                       data-toggle="dropdown">
                      <div className="mr-4 w-48px">
                        <img src="images/testimonial-5.jpg"
                                 alt="Ronald Hunter" className="rounded-circle" />
                      </div>
                      <div className="fs-13 font-weight-500 lh-1">
                        Ronald Hunter
                      </div>
                    </a>
                    <div className="dropdown-menu dropdown-menu-right w-100">
                      <a className="dropdown-item" href="dashboard-my-profiles.html">My Profile</a>
                      <a className="dropdown-item" href="#">Logout</a>
                    </div>
                  </div>
                  <div className="dropdown no-caret py-3 px-3 px-sm-6 d-flex align-items-center justify-content-end notice">
                    <a href="#" className="dropdown-toggle text-heading fs-20 font-weight-500 lh-1"
                       data-toggle="dropdown">
                      <i className="far fa-bell"></i>
                      <span className="badge badge-primary badge-circle badge-absolute font-weight-bold fs-13">1</span>
                    </a>
                    <div className="dropdown-menu dropdown-menu-right">
                      <a className="dropdown-item" href="#">Action</a>
                      <a className="dropdown-item" href="#">Another action</a>
                      <a className="dropdown-item" href="#">Something else here</a>
                    </div>
                  </div>
                </div>
              </nav>
            </div>
          </header>
          <main id="content" className="bg-gray-01">
            <div className="px-3 px-lg-6 px-xxl-13 py-5 py-lg-10">
              <div className="d-flex flex-wrap flex-md-nowrap mb-6">
                <div className="mr-0 mr-md-auto">
                  <h2 className="mb-0 text-heading fs-22 lh-15">My Properties<span
                    className="badge badge-white badge-pill text-primary fs-18 font-weight-bold ml-2">29</span>
                  </h2>
                  <p>Lorem ipsum dolor sit amet, consec tetur cing elit. Suspe ndisse suscipit</p>
                </div>
                <div className="form-inline justify-content-md-end mx-n2">
                  <div className="p-2">
                    <div className="input-group input-group-lg bg-white border">
                      <div className="input-group-prepend">
                        <button className="btn pr-0 shadow-none" type="button"><i className="far fa-search"></i></button>
                      </div>
                      <input type="text" className="form-control bg-transparent border-0 shadow-none text-body"
                           placeholder="Search listing" name="search" />
                    </div>
                  </div>
                  <div className="p-2">
                    <div className="input-group input-group-lg bg-white border">
                      <div className="input-group-prepend">
                        <span className="input-group-text bg-transparent letter-spacing-093 border-0 pr-0"><i
                            className="far fa-align-left mr-2"></i>Sort by:</span>
                      </div>
                      <select className="form-control bg-transparent pl-0 selectpicker d-flex align-items-center sortby" name="sort-by"
                            data-style="bg-transparent px-1 py-0 lh-1 font-weight-600 text-body"
                            id="status">
                        <option>Alphabet</option>
                        <option>Price - Low to High</option>
                        <option>Price - High to Low</option>
                        <option>Date - Old to New</option>
                        <option>Date - New to Old</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
              <div className="table-responsive">
                <table className="table table-hover bg-white border rounded-lg">
                  <thead className="thead-sm thead-black">
                    <tr>
                      <th scope="col" className="border-top-0 px-6 pt-5 pb-4">Listing title</th>
                      <th scope="col" className="border-top-0 pt-5 pb-4">Date Published</th>
                      <th scope="col" className="border-top-0 pt-5 pb-4">Status</th>
                      <th scope="col" className="border-top-0 pt-5 pb-4">View</th>
                      <th scope="col" className="border-top-0 pt-5 pb-4">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="shadow-hover-xs-2 bg-hover-white">
                      <td className="align-middle pt-6 pb-4 px-6">
                        <div className="media">
                          <div className="w-120px mr-4 position-relative">
                            <a href="single-property-1.html">
                              <img src="images/my-properties-01.jpg"
                                         alt="Home in Metric Way" />
                            </a>
                            <span className="badge badge-indigo position-absolute pos-fixed-top">for rent</span>
                          </div>
                          <div className="media-body">
                            <a href="single-property-1.html" className="text-dark hover-primary">
                              <h5 className="fs-16 mb-0 lh-18">Home in Metric Way</h5>
                            </a>
                            <p className="mb-1 font-weight-500">1421 San Pedro St, Los Angeles</p>
                            <span className="text-heading lh-15 font-weight-bold fs-17">$2500</span>
                            <span className="text-gray-light">/month</span>
                          </div>
                        </div>
                      </td>
                      <td className="align-middle">30 December, 2019</td>
                      <td className="align-middle">
                        <span
                                className="badge text-capitalize font-weight-normal fs-12 badge-yellow">pending</span>
                      </td>
                      <td className="align-middle">2049</td>
                      <td className="align-middle">
                        <a href="#" data-toggle="tooltip" title="Edit" className="d-inline-block fs-18 text-muted hover-primary mr-5"><i
                                className="fal fa-pencil-alt"></i></a>
                        <a href="#" data-toggle="tooltip" title="Delete" className="d-inline-block fs-18 text-muted hover-primary"><i
                                className="fal fa-trash-alt"></i></a>
                      </td>
                    </tr>
                    <tr className="shadow-hover-xs-2 bg-hover-white">
                      <td className="align-middle pt-6 pb-4 px-6">
                        <div className="media">
                          <div className="w-120px mr-4 position-relative">
                            <a href="single-property-1.html">
                              <img src="images/my-properties-02.jpg"
                                         alt="Garden Gingerbread House" />
                            </a>
                            <span className="badge badge-primary position-absolute pos-fixed-top">for sale</span>
                          </div>
                          <div className="media-body">
                            <a href="single-property-1.html" className="text-dark hover-primary">
                              <h5 className="fs-16 mb-0 lh-18">Garden Gingerbread House</h5>
                            </a>
                            <p className="mb-1 font-weight-500">1421 San Pedro St, Los Angeles</p>
                            <span className="text-heading lh-15 font-weight-bold fs-17">$.1250.000</span>
                          </div>
                        </div>
                      </td>
                      <td className="align-middle">30 December, 2019</td>
                      <td className="align-middle">
                        <span
                                className="badge text-capitalize font-weight-normal fs-12 badge-pink">published</span>
                      </td>
                      <td className="align-middle">2049</td>
                      <td className="align-middle">
                        <a href="#" data-toggle="tooltip" title="Edit" className="d-inline-block fs-18 text-muted hover-primary mr-5"><i
                                className="fal fa-pencil-alt"></i></a>
                        <a href="#" data-toggle="tooltip" title="Delete" className="d-inline-block fs-18 text-muted hover-primary"><i
                                className="fal fa-trash-alt"></i></a>
                      </td>
                    </tr>
                    <tr className="shadow-hover-xs-2 bg-hover-white">
                      <td className="align-middle pt-6 pb-4 px-6">
                        <div className="media">
                          <div className="w-120px mr-4 position-relative">
                            <a href="single-property-1.html">
                              <img src="images/my-properties-03.jpg"
                                         alt="Affordable Urban House" />
                            </a>
                            <span className="badge badge-indigo position-absolute pos-fixed-top">for rent</span>
                          </div>
                          <div className="media-body">
                            <a href="single-property-1.html" className="text-dark hover-primary">
                              <h5 className="fs-16 mb-0 lh-18">Affordable Urban House</h5>
                            </a>
                            <p className="mb-1 font-weight-500">1421 San Pedro St, Los Angeles</p>
                            <span className="text-heading lh-15 font-weight-bold fs-17">$2500</span>
                            <span className="text-gray-light">/month</span>
                          </div>
                        </div>
                      </td>
                      <td className="align-middle">30 December, 2019</td>
                      <td className="align-middle">
                        <span
                                className="badge text-capitalize font-weight-normal fs-12 badge-pink">processing</span>
                      </td>
                      <td className="align-middle">2049</td>
                      <td className="align-middle">
                        <a href="#" data-toggle="tooltip" title="Edit" className="d-inline-block fs-18 text-muted hover-primary mr-5"><i
                                className="fal fa-pencil-alt"></i></a>
                        <a href="#" data-toggle="tooltip" title="Delete" className="d-inline-block fs-18 text-muted hover-primary"><i
                                className="fal fa-trash-alt"></i></a>
                      </td>
                    </tr>
                    <tr className="shadow-hover-xs-2 bg-hover-white">
                      <td className="align-middle pt-6 pb-4 px-6">
                        <div className="media">
                          <div className="w-120px mr-4 position-relative">
                            <a href="single-property-1.html">
                              <img src="images/my-properties-04.jpg"
                                         alt="Villa on Hollywood Boulevard" />
                            </a>
                            <span className="badge badge-primary position-absolute pos-fixed-top">for sale</span>
                          </div>
                          <div className="media-body">
                            <a href="single-property-1.html" className="text-dark hover-primary">
                              <h5 className="fs-16 mb-0 lh-18">Villa on Hollywood Boulevard</h5>
                            </a>
                            <p className="mb-1 font-weight-500">1421 San Pedro St, Los Angeles</p>
                            <span className="text-heading lh-15 font-weight-bold fs-17">$.1250.000</span>
                          </div>
                        </div>
                      </td>
                      <td className="align-middle">30 December, 2019</td>
                      <td className="align-middle">
                        <span
                                className="badge text-capitalize font-weight-normal fs-12 badge-pink">published</span>
                      </td>
                      <td className="align-middle">2049</td>
                      <td className="align-middle">
                        <a href="#" data-toggle="tooltip" title="Edit" className="d-inline-block fs-18 text-muted hover-primary mr-5"><i
                                className="fal fa-pencil-alt"></i></a>
                        <a href="#" data-toggle="tooltip" title="Delete" className="d-inline-block fs-18 text-muted hover-primary"><i
                                className="fal fa-trash-alt"></i></a>
                      </td>
                    </tr>
                    <tr className="shadow-hover-xs-2 bg-hover-white">
                      <td className="align-middle pt-6 pb-4 px-6">
                        <div className="media">
                          <div className="w-120px mr-4 position-relative">
                            <a href="single-property-1.html">
                              <img src="images/my-properties-03.jpg"
                                         alt="Explore Old Barcelon" />
                            </a>
                            <span className="badge badge-indigo position-absolute pos-fixed-top">for rent</span>
                          </div>
                          <div className="media-body">
                            <a href="single-property-1.html" className="text-dark hover-primary">
                              <h5 className="fs-16 mb-0 lh-18">Explore Old Barcelon</h5>
                            </a>
                            <p className="mb-1 font-weight-500">1421 San Pedro St, Los Angeles</p>
                            <span className="text-heading lh-15 font-weight-bold fs-17">$2500</span>
                            <span className="text-gray-light">/month</span>
                          </div>
                        </div>
                      </td>
                      <td className="align-middle">30 December, 2019</td>
                      <td className="align-middle">
                        <span
                                className="badge text-capitalize font-weight-normal fs-12 badge-yellow">pending</span>
                      </td>
                      <td className="align-middle">2049</td>
                      <td className="align-middle">
                        <a href="#" data-toggle="tooltip" title="Edit" className="d-inline-block fs-18 text-muted hover-primary mr-5"><i
                                className="fal fa-pencil-alt"></i></a>
                        <a href="#" data-toggle="tooltip" title="Delete" className="d-inline-block fs-18 text-muted hover-primary"><i
                                className="fal fa-trash-alt"></i></a>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <nav className="mt-6">
                <ul className="pagination rounded-active justify-content-center">
                  <li className="page-item"><a className="page-link" href="#"><i className="far fa-angle-double-left"></i></a></li>
                  <li className="page-item"><a className="page-link" href="#">1</a></li>
                  <li className="page-item active"><a className="page-link" href="#">2</a></li>
                  <li className="page-item d-none d-sm-block"><a className="page-link" href="#">3</a></li>
                  <li className="page-item">...</li>
                  <li className="page-item"><a className="page-link" href="#">6</a></li>
                  <li className="page-item"><a className="page-link" href="#"><i className="far fa-angle-double-right"></i></a></li>
                </ul>
              </nav>
              <div className="text-center mt-2">6-10 of 29 Results</div>
            </div>
          </main>
        </div>
      </div>
    </div>
  )
}

export default My_Property_main