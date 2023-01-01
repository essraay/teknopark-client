import { useState } from "react"
import { Controller, Pagination } from "swiper"
import { Swiper, SwiperSlide } from "swiper/react"

const Logo = () => {
  const [imageList, setImageList] = useState([
    "https://via.placeholder.com/140x100",
    "https://via.placeholder.com/140x100",
    "https://via.placeholder.com/140x100",
    "https://via.placeholder.com/140x100",
    "https://via.placeholder.com/140x100",
    "https://via.placeholder.com/140x100",
    "https://via.placeholder.com/140x100",
    "https://via.placeholder.com/140x100",
    "https://via.placeholder.com/140x100",
    "https://via.placeholder.com/140x100",
    "https://via.placeholder.com/140x100",
    "https://via.placeholder.com/140x100",
    "https://via.placeholder.com/140x100"
  ])
  const [controlledSwiper, setControlledSwiper] = useState(null)
  return (
    <>
      <div className="flex-col-c-c p-b-50 py-3">
        <h3 className="t1-b-1 cl-3 txt-center m-b-11">Kurucu Ortaklarımız</h3>
        <div className="size-a-2 bg-3"></div>
      </div>
      <Swiper
        modules={[Pagination, Controller]}
        slidesPerView={5}
        spaceBetween={20}
        pagination={{ clickable: true }}
        autoplay={{
          delay: 1000,
        }}
        controller={{ control: controlledSwiper }}
        onSwiper={setControlledSwiper}
      >
        {imageList.map((image) => (
          <SwiperSlide>
            <div
              className="row d-flex justify-content-center py-3"
              style={{ margin: "10% 0" }}
            >
              <img
                className="rounded-circle"
                // style={{ objectFit: "contain" }}
                src={image}
                width={"10px"}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  )
}
export default Logo
