import Slider from "react-slick";


function CarouselCard({ media }) {
  let settings = {
    dots: false,
    infinite: true,
    speed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 770,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ],
  };

  return (

    <div>

      <Slider {...settings}>
        {media?.map((m, i) => (<>
          <div key={i} className="item-size-3-2 hover-zoom-in">
            <div className="card p-0 hover-change-image">
              <img className=" rounded-1 "
                src={m?.MediaURL}
                style={{ backgroundImage: `url(${m?.MediaURL})` }} />
            </div>
          </div>
        </>))}
      </Slider>
    </div>
  )
}

export default CarouselCard