import { CCard, CContainer } from "@coreui/react"
import { useEffect, useState } from "react"
import { BASE_IMG } from "../../constants"
import { OurCompaniesService } from "../../services"

const OurCompanies = () => {
  const [loading, setLoading] = useState(true)
  const [items, setItems] = useState(false)

  useEffect(() => {
    OurCompaniesService.getAll().then((res) => {
      setItems(res.data)
      setLoading(false)
    })
  }, [])

  return (
    <CContainer className="justify-content-center">
      <div className="flex-col-c-c p-b-50" style={{ margin: "3% 0" }}>
        <div class="col-xs-12 text-center">
          <p className="h3 fw-bolder">
            Ar-Ge Firmalarımız
          </p>
        </div>
        <div className="size-a-2 bg-2" style={{backgroundColor:"#666666"}}></div>
      </div>
      {loading ? (
        <h1>Yükleniyor..</h1>
      ) : (
        <>
          <div className="row">
            {items.map((item) => (
              <div className="p-2 col-12 col-md-6 col-lg-4 col-xl-3">
                <a href={item?.baglanti} target={"_blank"}>
                  <CCard key={item?.id} className="shadow">
                    <div className="ratio ratio-16x9">
                      <img
                        className="card-img-top img-fluid mh-100"
                        src={BASE_IMG + item?.resim_Dizin}
                        style={{ objectFit: "contain" }}
                        alt="Card image cap"
                      />
                    </div>
                    <br />
                    <div className="card-body text-center ratio ratio-16x9">
                      <p className="card-text">
                        <b style={{color:"blue"}}>{item?.firma_Adi}</b>
                      </p>
                    </div>
                  </CCard>
                </a>
              </div>
            ))}
          </div>
          <br />
        </>
      )}
    </CContainer>
  )
}

export default OurCompanies
