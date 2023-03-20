import React from 'react'

function Aboutus() {
  return (
    <>

<section style={{backgroundImage: "url('images/Recognize.jpeg')"}}
         className="bg-img-cover-center py-10 pt-md-16 pb-md-17 bg-overlay" data-aos="fade-up">
        <div className="container position-relative z-index-2 text-center">
         
          <div className="mxw-751">
            <h1 className="text-white fs-30 fs-md-42 lh-15 font-weight-normal mt-4 mb-10" data-animate="fadeInRight">About Us</h1>
          </div>
        </div>
      </section>
      <section className="bg-patten-03 bg-gray-01 pb-13" >
        <div className="container">
          <div className='row pt-5'>
             <div className='col-md-8 pt-5' data-aos="fade-up">
             <div className=" mt-5 z-index-3 mb-12">
            <div className=" ">
              <p>
              GA House Finders is a full-service real estate company offering expert representation for buyers and sellers alike. Utilizing the latest technologies to help market and locate real estate, we bring years of experience and intimate knowledge of the Atlanta metro area's real estate market to serve our clients best. Professionalism, dedication, and care are the core pillars of our business. We understand that buying and selling real estate is a momentous undertaking for many people, and we don't take our roles in that lightly.
              </p>
            </div>

            <div className="ms-3">
              <p>
              Our company's team of committed professionals embrace the following core values:
              </p>
            </div>
            <div>
              <ul className='ms-5' style={{listStyle: "disc"}}>
                <li>
                Quality: We deliver only excellence and aim to exceed expectations in everything we do.
                </li>
                <li>
                Integrity: We conduct ourselves to the highest ethical standards, demonstrating honesty and fairness in every decision and action.
                </li>
                <li>
                Agility: We execute expeditiously to address our clients' needs.
                </li>
                <li>
                Courage: We make decisions and act in the best interests of our clients, even in the face of personal or professional adversity.             
                 </li>
                <li>
                Respect and Trust: We treat our clients and each other with dignity and respect at all times
                </li>
                <li>
                Fun: We believe in having fun at work and with each other.
                </li>
              </ul>
            </div>
          </div>
             </div>
             <div className='col-md-4 pt-5 d-flex align-items-end mb-5' data-aos="fade-up">
             <img src="images/agent-1-aboutus.jpg" className="card-img-top mb-5" alt="..." />
             </div>
          </div>
          
        </div>
      </section>

      
    </>
  )
}

export default Aboutus