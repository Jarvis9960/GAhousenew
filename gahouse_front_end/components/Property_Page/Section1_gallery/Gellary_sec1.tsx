// import { useEffect } from "react";
// import data from "../../../text.json";
import CarouselCard from '../Section2/CarouselCard'
import SinglePageNavFilter from './SinglePageNavFilter';
function Gellary_sec1({ data }) {

  return (
    <div>
      <div className="container">
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb pt-lg-0 pb-3">
            <li className="breadcrumb-item fs-12 letter-spacing-087">
              <a href=".">Home</a>
            </li>
            <li className="breadcrumb-item fs-12 letter-spacing-087">
              <a href="listing-grid-with-left-filter.html">Listing</a>
            </li>
            <li className="breadcrumb-item fs-12 letter-spacing-087 active">
              Villa on Hollywood Boulevard
            </li>
          </ol>
        </nav>
      </div>
      <div>
        <SinglePageNavFilter />
      </div>
      <div className="container-fluid">
        <div className="position-relative" data-animate="zoomIn">
          <div className="position-absolute pos-fixed-top-right z-index-3">
            <ul className="list-inline pt-4 pr-5">
              <li className="list-inline-item mr-2">
                <a
                  href="#"
                  data-toggle="tooltip"
                  title="Favourite"
                  className="d-flex align-items-center justify-content-center w-40px h-40 bg-white text-heading bg-hover-primary hover-white rounded-circle"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-suit-heart"
                    viewBox="0 0 16 16"
                  >
                    <path d="m8 6.236-.894-1.789c-.222-.443-.607-1.08-1.152-1.595C5.418 2.345 4.776 2 4 2 2.324 2 1 3.326 1 4.92c0 1.211.554 2.066 1.868 3.37.337.334.721.695 1.146 1.093C5.122 10.423 6.5 11.717 8 13.447c1.5-1.73 2.878-3.024 3.986-4.064.425-.398.81-.76 1.146-1.093C14.446 6.986 15 6.131 15 4.92 15 3.326 13.676 2 12 2c-.777 0-1.418.345-1.954.852-.545.515-.93 1.152-1.152 1.595L8 6.236zm.392 8.292a.513.513 0 0 1-.784 0c-1.601-1.902-3.05-3.262-4.243-4.381C1.3 8.208 0 6.989 0 4.92 0 2.755 1.79 1 4 1c1.6 0 2.719 1.05 3.404 2.008.26.365.458.716.596.992a7.55 7.55 0 0 1 .596-.992C9.281 2.049 10.4 1 12 1c2.21 0 4 1.755 4 3.92 0 2.069-1.3 3.288-3.365 5.227-1.193 1.12-2.642 2.48-4.243 4.38z" />
                  </svg>
                </a>
              </li>
              <li className="list-inline-item mr-2">
                <button
                  type="button"
                  className="btn btn-white p-0 d-flex align-items-center justify-content-center w-40px h-40 text-heading bg-hover-primary hover-white rounded-circle border-0 shadow-none"
                  data-container="body"
                  data-toggle="popover"
                  data-placement="top"
                  data-html="true"
                  data-content=' <ul className="list-inline mb-0">
                    <li className="list-inline-item">
                      <a href="#" className="text-muted fs-15 hover-dark lh-1 px-2"><i
                                                        className="fab fa-twitter"></i></a>
                    </li>
                    <li className="list-inline-item ">
                      <a href="#" className="text-muted fs-15 hover-dark lh-1 px-2"><i
                                                        className="fab fa-facebook-f"></i></a>
                    </li>
                    <li className="list-inline-item">
                      <a href="#" className="text-muted fs-15 hover-dark lh-1 px-2"><i
                                                        className="fab fa-instagram"></i></a>
                    </li>
                    <li className="list-inline-item">
                      <a href="#" className="text-muted fs-15 hover-dark lh-1 px-2"><i
                                                        className="fab fa-youtube"></i></a>
                    </li>
                  </ul>
                  '
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-share"
                    viewBox="0 0 16 16"
                  >
                    <path d="M13.5 1a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zM11 2.5a2.5 2.5 0 1 1 .603 1.628l-6.718 3.12a2.499 2.499 0 0 1 0 1.504l6.718 3.12a2.5 2.5 0 1 1-.488.876l-6.718-3.12a2.5 2.5 0 1 1 0-3.256l6.718-3.12A2.5 2.5 0 0 1 11 2.5zm-8.5 4a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zm11 5.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3z" />
                  </svg>
                </button>
              </li>
              <li className="list-inline-item">
                <a
                  href="#"
                  data-toggle="tooltip"
                  title="Print"
                  className="d-flex align-items-center justify-content-center w-40px h-40 bg-white text-heading bg-hover-primary hover-white rounded-circle"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-printer"
                    viewBox="0 0 16 16"
                  >
                    <path d="M2.5 8a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1z" />
                    <path d="M5 1a2 2 0 0 0-2 2v2H2a2 2 0 0 0-2 2v3a2 2 0 0 0 2 2h1v1a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2v-1h1a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-1V3a2 2 0 0 0-2-2H5zM4 3a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v2H4V3zm1 5a2 2 0 0 0-2 2v1H2a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-1v-1a2 2 0 0 0-2-2H5zm7 2v3a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-3a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1z" />
                  </svg>
                </a>
              </li>
            </ul>
          </div>



          <div className="row galleries m-n1">

            <CarouselCard media={data?.Media} />
          </div>


        </div>
      </div>
    </div>
  );
}

export default Gellary_sec1;
