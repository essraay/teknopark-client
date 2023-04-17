import {
  CButton,
  CCard,
  CCardBody,
  CCardHeader,
  CCardText,
  CCardTitle,
  CContainer,
} from "@coreui/react"
import { useEffect, useState } from "react"
import { AdvertService } from "../services"
import LoadingSpinner from "../components/LoadingSpinner"

const Career = () => {
  const [loading, setLoading] = useState(true)
  const [items, setItems] = useState(false)

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
          <LoadingSpinner />
        ) : (
          <div>
            {items.map((item) => (
              <CCard className="card-animation tp-shadow3" key={item.id} style={{ margin: "2% 0" }}>
                <p className="text-center strong">
                  {item.pozisyon}
                  <p clas>{item.calisma_Sekli}</p>
                </p>
                <div className="dropdown-divider"></div>
                <CCardBody>
                  <CCardTitle>{item.gereksinim}</CCardTitle>
                  <CCardText>
                    With supporting text below as a natural lead-in to
                    additional content.
                  </CCardText>
                  <CButton className="align-items-end" href="#">Go somewhere</CButton>
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

// const Career = () => {
//   document.querySelectorAll(".k-item .k-title").forEach((item) => {
//     item.addEventListener("click", (event) => {
//       let body = item.parentElement.querySelector(".k-body")
//       if (body.classList.contains("show")) body.classList.remove("show")
//       else body.classList.add("show")
//     })
//   })

//   return (
//     <section
//       style={{
//         margin: "10% 0"
//       }}
//     >
//       <p className="fw-bolder text-center pb-5 h-auto">
//         Şu anda aktif ilan bulunmamaktadır.
//       </p>
//     </section>
//   )
// }
// export default Career
