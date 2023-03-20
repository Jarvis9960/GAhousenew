import React from 'react'

function Section1_outer() {
  return (
    <section className="pt-2 pb-10 pb-lg-17 page-title bg-overlay bg-img-cover-center"
    style={{backgroundImage: "url(images/out-of-town.jpg)"}}>
        <div className="container">
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb text-light mb-0">
              <li className="breadcrumb-item"><a href="#">Home</a></li>
              <li className="breadcrumb-item active" aria-current="page">Pages</li>
            </ol>
          </nav>
          <h1 className="fs-22 fs-md-42 mb-0 text-white font-weight-normal text-center pt-17 pb-13 lh-15 px-lg-16" data-animate="fadeInDown">
          Out Of Town Buyers
          </h1>
          <div className='row border-top pt-4'>
              <div className='col-md-4'>
                 <h3 className='text-light'>Why Us</h3>
                 <p className='text-light'>
                    Don’t get stressed, come to the best! We make home-buying easy. Use our neighborhood data by comparing schools, accessibility, and amenities. Talk to our other clients and staff to get recommendations.
                    </p>
              </div>
              <div className='col-md-4'>
                 <h3 className='text-light'>
                 Our Experts 
                 </h3>
                 <p className='text-light'>
                 We are knowledgeable about every neighborhood and often every block! Streamline the home buying process with virtual showings and house tours conducted in real-time  
                 </p>
              </div>

              <div className='col-md-4'>
                 <h3 className='text-light'>
                 Get Started  
                 </h3>
                 <p className='text-light'>
                 Contact us to start the process. Let us know what neighborhoods and price range you are interested in and we’ll show you some options. Our mission is to convert your dreams to reality.  
                 </p>
              </div>
          </div>
        </div>
      </section>
  )
}

export default Section1_outer