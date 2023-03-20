import Image from "next/image"
import img1 from "../../public/images/logo-1.png"
import img2 from "../../public/images/logo-1.png"
import Link from "next/link"
import PopUp from "@components/Candely/popUp";
import { useEffect, useState } from "react";
import useCompareStore from "store/compareStore";
import useWishListStore from "store/wishListStore";
import useAuthStore from "store/authStore";
import { Icon } from '@iconify/react';
import { useMutation } from "react-query";
import api from "lib/api";
import cogoToast from "cogo-toast";


function Navbar() {
  const { popUpFunction } = PopUp();

  const comapreState = useCompareStore(state => state.comapreState)
  const whishListState = useWishListStore(state => state.wishListState)

  const user = useAuthStore(state => state.user)
  const signOut = useAuthStore((state) => state.signOut)
  const { mutate: SingOut } = useMutation(() => api.get("/logout"), {
    onSuccess: (res) => {
      console.log(res.data)
      // router.push('/')
      signOut()
      cogoToast.error("Logged out");

    },
    onError: ({ response }) => {
      console.log(response.data)
      cogoToast.error(response?.data?.message);
    }
  });


  return (
    <>
      <div className="main-header navbar-light header-sticky header-sticky-smart header-mobile-lg" style={{ backgroundColor: "black" }}>
        <div className="sticky-area " style={{ backgroundColor: "black" }}>
          <div className="container  text-uppercase  text-nowrap">
            <nav className="navbar navbar-expand-lg px-0">
              <a className="navbar-brand" href="/">
                <Image src={img2} alt="HomeID" width={400}
                  className="d-none d-lg-inline-block" />

                <Image src={img1} alt="HomeID" width={300}
                  className="d-inline-block d-lg-none" />
              </a>
              <div className="d-flex d-lg-none ml-auto">
                <a className="mr-4 position-relative text-white p-2" href="#">
                  <i className="fal fa-heart fs-large-4"></i>

                </a>
                <button className="navbar-toggler border-0 px-0 text-white" type="button" data-toggle="collapse"
                  data-target="#primaryMenu01"
                  aria-controls="primaryMenu01" aria-expanded="false" aria-label="Toggle navigation">
                  <Icon icon="ic:baseline-menu" color="#e4ba56" width={25} />
                  Menu
                </button>
              </div>
              <div className="collapse navbar-collapse pt-5 mt-lg-0 mx-auto" id="primaryMenu01" style={{ justifyContent: "end" }}>
                <ul className="navbar-nav hover-menu main-menu px-0  mx-lg-n4">
                  <li id="navbar-item-home" aria-haspopup="true" aria-expanded="false"
                    className="nav-item dropdown py-2 py-lg-5 px-0 px-lg-4">
                    <Link className="nav-link p-0 text-light"
                      href="/"  >
                      Home

                    </Link>
                  </li>

                  <li id="navbar-item-property d-flex justify-content-center align-item-center " aria-haspopup="true" aria-expanded="false"
                    className="nav-item dropdown py-2 py-lg-5 px-0 px-lg-4">
                    <Link className="nav-link p-0 text-light"
                      href="/contact-us"  >
                      Contact

                    </Link>

                  </li>

                  <li id="navbar-item-property d-flex justify-content-center align-item-center " aria-haspopup="true" aria-expanded="false"
                    className="nav-item dropdown py-2 py-lg-5 px-0 px-lg-4">
                    <Link className="nav-link p-0 text-light"
                      href="/about-us"  >
                      About Us

                    </Link>

                  </li>

                  <li id="navbar-item-property d-flex justify-content-center align-item-center " aria-haspopup="true" aria-expanded="false"
                    className="nav-item dropdown py-2 py-lg-5 px-0 px-lg-4">
                    <Link className="nav-link p-0 text-light"
                      href="/Blogs"  >
                      Blogs

                    </Link>
                  </li>

                  <li id="navbar-item-property d-flex justify-content-center align-item-center " aria-haspopup="true" aria-expanded="false"
                    className="nav-item dropdown py-2 py-lg-5 px-0 px-lg-4 ">
                    <a className="nav-link p-0 text-light nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown">
                      {/* href="/wishlist"  > */}
                      More
                      <i className="arrow down ms-1"></i>
                    </a>
                    <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                      <Link className="dropdown-item" href="/Gorgia_film_biz">Georgia Film Biz</Link>

                      <Link className="dropdown-item" href="/InvestorHotspot">Investor Hotspot</Link>
                      <Link className="dropdown-item" href="/Outoftown">Out of Town Buyer</Link>
                      <Link className="dropdown-item" href="/schoollist">School Ratings</Link>
                    </div>
                  </li>


                  {!user && (<>

                    <li id="navbar-item-property d-flex justify-content-center align-item-center " aria-haspopup="true" aria-expanded="false"
                      className="nav-item dropdown py-2 py-lg-5 px-0 px-lg-4">
                      <Link className="nav-link p-0 text-light"
                        href="/login"  >
                        <Icon icon="mdi:user-circle" className="" color="#e4ba56" width={22} />
                        Login

                      </Link>

                    </li>
                  </>)}



                  {user && (<>
                    <li id="navbar-item-property d-flex justify-content-center align-item-center " aria-haspopup="true" aria-expanded="false"
                      className="nav-item dropdown py-2 py-lg-5 px-0 px-lg-4 mt-1 fs-15 d-flex">
                      <a className="d-flex justify-content-center align-content-center nav-link p-0 text-light nav-link dropdown-toggle  dropdown-toggle" id="navbarDropdownUser" role="button" data-toggle="dropdown">
                        <Icon icon="mdi:user-circle" className="mt-1" color="#e4ba56" width={22} />
                        <p className="text-white ">  {user?.first_name}</p>
                      </a>

                      <div className="dropdown-menu" aria-labelledby="navbarDropdownUser">
                        <a className="dropdown-item" href="#" onClick={() => { SingOut() }}>Logout</a>
                      </div>
                    </li>
                  </>)}

                  <li id="navbar-item-property d-flex justify-content-center align-item-center " aria-haspopup="true" aria-expanded="false"
                    className="nav-item dropdown py-2 py-lg-5 px-0 px-lg-4 ">
                    <a onClick={() => popUpFunction()} className="nav-link p-0 text-light">
                      {/* href="/wishlist"  > */}
                      {/* <Icon icon="material-symbols:add-call" className="mt-1" color="#e4ba56" width={25} /> */}
                      Call Us

                      <i className="arrow down ms-1"></i>
                    </a>

                  </li>




                </ul>

              </div>

            </nav>
          </div>
        </div>
      </div>
    </>
  )
}

export default Navbar