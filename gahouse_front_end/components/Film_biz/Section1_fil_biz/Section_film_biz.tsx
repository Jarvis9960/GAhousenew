import React from 'react'

function Section_film_biz() {
  return (
    <section className="pt-2 pb-10 pb-lg-17 page-title bg-overlay bg-img-cover-center"
    style={{backgroundImage: "url(images/vbg-4.jpg)"}}
    >
        <div className="container">
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb text-light mb-0">
              <li className="breadcrumb-item"><a href="#">Georgia Film Biz</a></li>
              <li className="breadcrumb-item active" aria-current="page">Pages</li>
            </ol>
          </nav>
          <h1 className="fs-22 fs-md-42 mb-0 text-white font-weight-normal text-center pt-17 pb-13 lh-15 px-lg-16" data-animate="fadeInDown">
          Out Of Town Buyers
          </h1>
          <div className='row '>
              <div className='col'>
                 {/* <h3 className='text-light text-center'>Georgia Film Bizs</h3> */}
                 <p className='text-light text-center fs-4'>
                 The Peach State has become a powerhouse in the entertainment industry. In 2020, productions filmed in Georgia received nearly 50 Emmy Award nominations. This influx has created an increased demand for housing, both owner occupied and rental.                   </p>
              </div>
             
          </div>
        </div>

        {/* <iframe class="elementor-background-video-embed" frameborder="0" allowfullscreen="1" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" title="How Georgia became the new Hollywood" width="640" height="360" src="https://www.youtube.com/embed/jikUEt7Kcro?controls=0&amp;rel=0&amp;playsinline=1&amp;enablejsapi=1&amp;origin=https%3A%2F%2Fgahousefinders.com&amp;widgetid=1" id="widget2" style="width: 2366.22px; height: 1331px;"></iframe> */}
      </section>
  )
}

export default Section_film_biz