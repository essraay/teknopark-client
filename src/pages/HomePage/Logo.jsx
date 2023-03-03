import { CContainer } from "@coreui/react"
import { useEffect, useState } from "react"
import { Autoplay, Controller, Pagination } from "swiper"
import { Swiper, SwiperSlide } from "swiper/react"
import LoadingSpinner from "../../components/LoadingSpinner"
import { BASE_IMG } from "../../constants"
import { LogoService } from "../../services"

const Logo = () => {
  const [loading, setLoading] = useState(true)
  const [items, setItems] = useState(false)

  useEffect(() => {
    LogoService.getDetails().then((res) => {
      setItems(res.data)
      setLoading(false)
    })
  }, [])
  
  const [controlledSwiper, setControlledSwiper] = useState(null)
  return (
    <>
      <section
        className="bg-12 p-t-92 p-b-60"
        style={{ backgroundColor: "#EAF2F8" }}
      >
        <CContainer>
          <div className="flex-col-c-c p-b-50 py-3">
            <h3
              className="t1-b-1 cl-3 txt-center m-b-11"
              style={{ color: "#2C3E50" }}
            >
              Kurucu Ortaklarımız
            </h3>
            <div
              className="size-a-2 bg-3"
              style={{ backgroundColor: "#2C3E50" }}
            ></div>
          </div>
          {loading ? (
            <LoadingSpinner />
          ) : (
            <Swiper
              modules={[Pagination, Controller, Autoplay]}
              slidesPerView={4}
              spaceBetween={20}
              pagination={{ clickable: true }}
              autoplay={{
                delay: 3000,
              }}
              controller={{ control: controlledSwiper }}
              onSwiper={setControlledSwiper}
            >
              {items.map((item) => (
                <SwiperSlide key={item.id}>
                  <div
                    className="row d-flex justify-content-center py-3"
                    style={{ margin: "10% 0" }}
                  >
                    <a href={item.baglanti} target={"_blank"}>
                      <img
                        className="rounded-circle w-100"
                        style={{ objectFit: "contain" }}
                        src={BASE_IMG + item.resim_Dizin}
                        width={"10px"}
                      />
                    </a>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          )}
        </CContainer>
      </section>
    </>
  )
}
export default Logo
