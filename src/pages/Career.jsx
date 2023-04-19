import { CCard, CCardBody, CContainer } from "@coreui/react"
import { useEffect, useState } from "react"
import { AdvertService } from "../services"
import { dateFormat } from "../utils"
import { BASE_IMG } from "../constants"

const Career = () => {
  const [loading, setLoading] = useState(true)
  const [item, setItems] = useState(false)

  useEffect(() => {
    AdvertService.getAll().then((res) => {
      setItems(res.data)
      setLoading(false)
    })
  }, [])

  return (
    <CContainer className="py-3 pb-3 w-full h-full w-100 h-100">
      <div className="text-center h3" style={{ margin: "2% 0" }}>
        <strong style={{ color: "#22689E" }}>
          Zonguldak Teknopark İş İlanları
        </strong>
      </div>
      <div className="col-12">
        {loading ? (
          <section
            style={{
              margin: "10% 0",
            }}
          >
            <p className="fw-bolder text-center pb-5 h-auto">
              Şu anda aktif ilan bulunmamaktadır.
            </p>
          </section>
        ) : (
          <div>
            {item.reverse().map((item) => (
              <CCard
                className="shadow-lg"
                key={item.id}
                style={{ margin: "2% 0" }}
              >
                <CCardBody className="flex">
                  <div className="flex-career gap-2">
                    <div className="flex justify-content-center align-items-center ratio-1x1 rounded-circle">
                      <img
                        className="rounded-circle"
                        src={BASE_IMG + item.resim_Dizin}
                        alt=""
                        style={{ width: 45, height: 45, objectFit: "cover" }}
                      />
                    </div>
                    <div className="flex-career-1">
                      <p className="text-bold ">
                        <strong style={{ fontSize: 16 }}>
                          {item.pozisyon}
                        </strong>
                        <span className="flex-career-1">
                          <p title={item.firma_Adi} style={{ fontSize: 12 }}>
                            {item.firma_Adi.length > 28
                              ? item.firma_Adi.substring(0, 28) + ".."
                              : item.firma_Adi}
                          </p>
                        </span>
                      </p>
                    </div>
                    <div className="flex-career-1 p-3"></div>

                    <div className="flex-career-1 p-3">
                      <div
                        className="border rounded-2 text-center text-white"
                        style={{ backgroundColor: "#1199B7" }}
                      >
                        <p className="rounded-2">
                          İlan Tarihi : {dateFormat(item.ilan_Tarih)}
                        </p>
                      </div>
                    </div>
                    <div className="flex-career-1 p-3 text-center">
                      <p>{item.calisma_Sekli}</p>
                    </div>
                    <div className="flex-career-1 p-2">
                      <button
                        type="button "
                        className="btn btn-outline-primary rounded-2 border-5"
                      >
                        İlan Detayı
                      </button>
                    </div>
                  </div>
                </CCardBody>
              </CCard>
            ))}
          </div>
        )}
      </div>
    </CContainer>
  )
}
export default Career
