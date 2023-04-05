import { CButton, CContainer } from "@coreui/react"
import { useEffect, useMemo, useState } from "react"
import { Pagination } from "swiper"
import { Swiper, SwiperSlide } from "swiper/react"
import LoadingSpinner from "../../components/LoadingSpinner"
import { BASE_IMG } from "../../constants"
import { AnnouncementService } from "../../services"
import { getPath } from "../../utils"

const Announcement = () => {
  const [loading, setLoading] = useState(true)
  const [items, setItems] = useState(false)

  useEffect(() => {
    AnnouncementService.getDetails().then((res) => {
      setItems(res.duyurulars.data)
      setLoading(false)
    })
  }, [])

  const itemList = useMemo(() => {
    if (Array.isArray(items)) {
      return items.map((item) => ({
        ...item,
        route: getPath("Duyurular", { id: item.id }),
      }))
    }
    return false
  }, [items])

  return (
    <section
      className="bg-12 p-t-92 p-b-60"
      style={{ backgroundColor: "#F6F6F6" }}
    >
      <CContainer>
        <div className="flex-col-c-c p-b-50">
          <h3
            className="t1-b-1 cl-3 txt-center m-b-11"
            style={{ color: "#2C3E50" }}
          >
            Duyurular
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
            modules={[Pagination]}
            slidesPerView={3}
            spaceBetween={20}
            pagination={{ clickable: true }}
          >
            {itemList &&
              itemList.map((item) => (
                <SwiperSlide key={item.id} className="p-1 h-auto">
                  <div
                    className="bg-0 h-full shadow-sm"
                  >
                    <a
                      className="hov-img0 of-hidden ratio ratio-1x1"
                      style={{ backgroundColor: "white" }}
                      href={item.route}
                    >
                      <img
                        className="w-100 h-100"
                        src={BASE_IMG + item?.resim_Dizin}
                        alt="IMG"
                        style={{ objectFit: "cover" }}
                      />
                    </a>

                    <div
                      className="bg-0 p-rl-28 p-t-26 p-b-35"
                      style={{ backgroundColor: "white" }}
                    >
                      <b>
                        <p
                          className="t1-s-2 cl-6 m-b-20 h-100"
                          style={{
                            textOverflow: "ellipsis",
                            whiteSpace: "nowrap",
                            overflow: "hidden",
                          }}
                        >
                          {item.baslik}
                        </p>
                      </b>
                      <p
                        className="t1-s-2 cl-6 m-b-20 h-100"
                        style={{
                          display: "-webkit-box",
                          WebkitLineClamp: 3,
                          WebkitBoxOrient: "vertical",
                          overflow: "hidden",
                        }}
                      >
                        {item.icerik}
                      </p>

                      <CButton
                        style={{
                          backgroundColor: "#16A086",
                          borderColor: "#16A086",
                          color: "white",
                        }}
                        variant="outline"
                        href={item.route}
                      >
                        Duyuruyu görüntüle..
                      </CButton>
                    </div>
                  </div>
                </SwiperSlide>

                // <SwiperSlide key={item.id}>
                //   <div className="bg-0 h-full" style={{ margin: "10% 0" }}>
                //     <a className="hov-img0 of-hidden">
                //       <img src={item.icerikId} alt="IMG" />
                //     </a>

                //     <div className="bg-0 p-rl-28 p-t-26 p-b-35">
                //       {/* <div className="flex-wr-s-c p-b-9">
                //       <div className="p-r-20">
                //         <i className="fs-14 cl-7 fa fa-calendar m-r-2"></i>

                //         <span className="t1-s-2 cl-7">
                //           {dateFormat(item.tarih)}
                //         </span>
                //       </div>
                //     </div> */}

                //       <p className="t1-s-2 cl-6 p-b-20">{item.baslik}</p>

                //       <CButton
                //         style={{
                //           backgroundColor: "#16A086",
                //           borderColor: "#16A086",
                //           color: "white",
                //         }}
                //         variant="outline"
                //       >
                //         Detay
                //       </CButton>
                //     </div>
                //   </div>
                // </SwiperSlide>
              ))}
          </Swiper>
        )}
      </CContainer>
    </section>
  )
}
export default Announcement
