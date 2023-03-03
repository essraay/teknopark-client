import { CButton, CContainer } from "@coreui/react"
import { NewService } from "../../services"
import { useEffect, useMemo, useState } from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import { Pagination } from "swiper"
import { dateFormat, getPath } from "../../utils"
import LoadingSpinner from "../../components/LoadingSpinner"
import { BASE_IMG } from "../../constants"

const News = () => {
  const [loading, setLoading] = useState(true)
  const [items, setItems] = useState(false)

  useEffect(() => {
    NewService.getDetails().then((res) => {
      setItems(res.data)
      setLoading(false)
    })
  }, [])

  const itemList = useMemo(() => {
    if (Array.isArray(items)) {
      return items.reverse().map((item) => ({
        ...item,
        icerik:
          item.icerik.substring(0, 80) + (item.icerik.length > 80 ? "..." : ""),
        baslik:
          item.baslik.substring(0, 32) + (item.baslik.length > 32 ? "..." : ""),
        route: getPath("Haberler", { id: item.id }),
      }))
    }
    return false
  }, [items])

  return (
    <section
      className="bg-12 p-t-92 p-b-60"
      style={{ backgroundColor: "white" }}
    >
      <CContainer>
        <div className="flex-col-c-c p-b-50 text-center">
          <h3 className="t1-b-1 cl-3 txt-center m-b-11" style={{color:"#2C3E50"}}>Haberler</h3>
          <div className="size-a-2 bg-3" style={{backgroundColor:"#2C3E50"}}></div>
        </div>
        {loading ? (
          <LoadingSpinner />
        ) : (
          <Swiper
            modules={[Pagination]}
            slidesPerView={3}
            spaceBetween={20}
            pagination={{ clickable: true }}
          >
            {itemList &&
              itemList.map((item) => (
                <SwiperSlide key={item.icerikId} className="p-1 col-12 col-md-6 col-lg-4 col-xl-3">
                  <div
                    className="bg-0 h-full shadow-sm"
                    style={{ backgroundColor: "#F6F6F6", margin: "10% 0" }}
                  >
                    <a
                      className="hov-img0 of-hidden ratio ratio-16x9"
                      style={{ backgroundColor: "#F6F6F6" }}
                      href={item.route}
                    >
                      <img className="mh-100" src={BASE_IMG + item?.resim_Dizin} alt="IMG" />
                    </a>

                    <div
                      className="bg-0 p-rl-28 p-t-26 p-b-35"
                      style={{ backgroundColor: "#F6F6F6" }}
                    >
                      <div className="flex-wr-s-c p-b-9">
                        <div className="p-r-20">
                          <i className="fs-14 cl-7 fa fa-calendar m-r-2"></i>

                          <span className="t1-s-2 cl-7">
                            {dateFormat(item.tarih)}
                          </span>
                        </div>
                      </div>
                      <b><p className="t1-s-2 cl-6 p-b-20">{item.baslik}</p></b>
                      <p className="t1-s-2 cl-6 p-b-20">{item.icerik}</p>

                      <CButton
                        style={{
                          backgroundColor: "#16A086",
                          borderColor: "#16A086",
                          color: "white",
                        }}
                        variant="outline"
                        href={item.route}
                      >
                        Haberi oku..
                      </CButton>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
          </Swiper>
        )}
      </CContainer>
    </section>
  )
}
export default News
