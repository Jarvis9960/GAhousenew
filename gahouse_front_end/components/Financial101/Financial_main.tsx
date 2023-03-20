import Link from "next/link"


function Financial_main() {
  return (
    <>
    <section style={{backgroundImage: "url('images/savings-plans.jpg')", backgroundPosition: "center", backgroundSize : "cover", backgroundRepeat: "no-repeat"}}
         className=" py-10 pt-md-16 pb-md-17 bg-overlay" data-aos="fade-up">
        <div className="container position-relative z-index-2 text-center">
         
          <div className="mxw-751 p-5">
            <h1 className="text-white fs-30 fs-md-42 lh-15 font-weight-normal mt-4 mb-10" data-animate="fadeInRight"></h1>
          </div>
        </div>
      </section>
      <div style={{backgroundColor: "#BA935C"}}>
        <div className="container">
            <div className="row pt-3 pb-3">
                    <div>
                        <h1 className="text-light">Financing 101</h1>
                    </div>
                    <div>
                    <h1 className="text-light">Don't Wait Call Us</h1>
                </div>
            </div>
        </div>
      </div>
      <div className="container mt-5 mb-5 pb-5 pt-5">
      <div className="row mt-6 mt-lg-0 " data-animate="fadeInRight">

<div className='col-md-4'>
<div className="ml-5 card border-0 col-sm-11 mb-sm-0 mb-7 " data-aos="fade-up">
    <div className="position-relative d-flex align-items-end card-img" style={{backgroundColor:"#BA935C"}}>
      <Link href="/BlogReport" className="hover-shine">
        <img src="images/investor.jpg"
          alt="Retail banks wake up to digital lending this year" style={{opacity: "0.6" }} />
      </Link>

      <div className="position-absolute p-0 pr-xl-8" >
      
      <h3 className="fs-18 text-heading ">
        <p  className="text-light ms-4">First Time Home Buyers</p>
      </h3>
      
    </div>
      
    </div>
   
  </div>
</div>
  
  <div className='col-md-4'>
  <div className="card border-0 col-sm-11 mb-sm-0 mb-7" data-aos="fade-up">
    <div className="position-relative d-flex align-items-end card-img" style={{backgroundColor:"#BA935C"}}>
      <Link href="/DifferentLoanOption" className="hover-shine">
        <img src="images/housebg1.jpg"
          alt="Retail banks wake up to digital lending this year" style={{opacity: "0.6" }} />
      </Link>

      <div className="position-absolute  p-0 pr-xl-8" >
      
      <h3 className="fs-18 text-heading lh-194">
        <p  className="text-light ms-4 ">Different Loan Options</p>
      </h3>
      
    </div>
      
    </div>
    
  </div>
  </div>
  <div className='col-md-4'>
  <div className="card border-0 col-sm-11 mb-sm-0 mb-7" data-aos="fade-up">
    <div className="position-relative d-flex align-items-end card-img" style={{backgroundColor:"#BA935C"}}>
      <Link href="/HowtofixCredit" className="hover-shine">
        <img src="images/18060611_05.jpg"
          alt="Within the construction industry as their overdraft" style={{opacity: "0.6" }} />
      </Link>

      <div className="position-absolute  p-0 pr-xl-8" >
     
      <h3 className="fs-18 text-heading lh-194">
        <p  className="text-light ms-4">
          How To Fix Your Credit Before Purchasing House</p>
      </h3>
     
    </div>
     
    </div>
    
  </div>
  </div>


</div>
      </div>
    </>
  )
}

export default Financial_main