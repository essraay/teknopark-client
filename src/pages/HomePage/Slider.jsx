import { useEffect, useMemo, useState } from "react"
import {
  Autoplay,
  EffectCards,
  EffectCoverflow,
  EffectCreative,
  EffectCube,
  EffectFade,
  EffectFlip,
  Navigation,
  Pagination,
  Parallax,
} from "swiper"
import { SliderService } from "../../services"
import { Swiper, SwiperSlide } from "swiper/react"
import { BASE_IMG } from "../../constants"

const SwiperItem = ({ children }) => (
  <div
    className="w-100"
    style={{
      aspectRatio: "2.78",
      backgroundImage: "url('/slider1.png')",
      display: "grid",
      placeItems: "center",
    }}
  >
    {children}
  </div>
)

const SwiperImage = ({ src }) => (
  <SwiperItem>
    <img src={src} className="w-100 h-100" style={{ objectFit: "cover" }} />
  </SwiperItem>
)
/* 
EffectFade,EffectCube,EffectFlip,EffectCoverflow,EffectCards,EffectCreative
*/

const Slider = () => {
  const [imageList, setImageList] = useState(false)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    SliderService.getAll().then((res) => {
      setImageList(res.data)
      setLoading(false)
    })
  }, [])

  return (
    <Swiper
      modules={[
        Navigation,
        Parallax,
        EffectCreative,
        EffectFade,
        EffectCube,
        EffectFlip,
        EffectCoverflow,
        EffectCards,
        Autoplay,
        Pagination,
      ]}
      spaceBetween={50}
      slidesPerView={1}
      navigation
      parallax
      effect={"slide"}
      autoplay={{
        delay: 3000,
      }}
      pagination={{ clickable: true }}
    >
      {imageList &&
        imageList.reverse().map((image) => (
          <SwiperSlide>
            <SwiperItem>
              <div className="position-relative overflow-hidden w-100 mw-100 h-100 mh-100 p-5">
                <img
                  className="h-100 w-100"
                  style={{ objectFit: "contain" }}
                  src={BASE_IMG + image.resim_Dizin}
                />
              </div>
            </SwiperItem>
          </SwiperSlide>
        ))}
    </Swiper>
  )
}
export default Slider
