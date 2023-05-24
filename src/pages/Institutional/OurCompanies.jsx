import {
  CButton,
  CCard,
  CContainer,
  CModal,
  CModalBody,
  CModalFooter,
  CModalHeader,
  CModalTitle,
} from "@coreui/react"
import { useEffect, useMemo, useState } from "react"
import { BASE_IMG } from "../../constants"
import { OurCompaniesService } from "../../services"
import LoadingSpinner from "../../components/LoadingSpinner"

const OurCompanies = () => {
  const [loading, setLoading] = useState(true)
  const [items, setItems] = useState(false)

  useEffect(() => {
    OurCompaniesService.getAll().then((res) => {
      setItems(res.data)
      setLoading(false)
      console.log(setItems)
    })
  }, [])

  const [visible, setVisible] = useState(false)

  const [selectedItemId, setSelectedItemId] = useState(false)
  const selectedItem = useMemo(() => {
    if (selectedItemId !== false)
      return items.find((x) => x.id == selectedItemId)

    return false
  }, [items, selectedItemId])

  const handleShowModal = (id) => {
    setSelectedItemId(id)
    setVisible(true)
  }

  return (
    <>
      <CContainer className="justify-content-center">
        <div className="flex-col-c-c p-b-50" style={{ margin: "3% 0" }}>
          <div class="col-xs-12 text-center">
            <p className="h3 fw-bolder">Ar-Ge Firmalarımız</p>
          </div>
          <div
            className="size-a-2 bg-2"
            style={{ backgroundColor: "#666666" }}
          ></div>
        </div>
        {loading ? (
          <LoadingSpinner />
        ) : (
          <>
            <div className="row">
              {items.map((item) => (
                <div className="p-2 col-6 col-xs-6 col-sm-4 col-md-3 col-lg-3 col-xl-3 ">
                  <CCard key={item?.id} className=" rounded-4 companies-card">
                    <div className="ratio ratio-16x9">
                      <img
                        className="card-img-top img-fluid mh-100 rounded-4"
                        src={BASE_IMG + item?.resim_Dizin}
                        style={{ objectFit: "inherit" }}
                        alt="Card image cap"
                      />
                    </div>
                    <div className="card-body text-center">
                      <p className="card-text" style={{ aspectRatio: 3 }}>
                        <b
                          title={item.firma_Adi}
                          style={{ color: "#576C7E", fontSize: 14 }}
                        >
                          {item.firma_Adi.length > 58
                            ? item.firma_Adi.substring(0, 58) + ".."
                            : item.firma_Adi}
                        </b>
                      </p>
                    </div>
                    <CButton
                      className="col-6 mx-auto"
                      style={{ margin: "1% 0" }}
                      color="secondary"
                      variant="ghost"
                      shape="rounded-pill"
                      onClick={() => handleShowModal(item?.id)}
                    >
                      Detay
                    </CButton>
                  </CCard>
                </div>
              ))}
              
            </div>
            <br />
          </>
        )}
      </CContainer>
      <CModal scrollable visible={visible} onClose={() => setVisible(false)}>
        <CModalHeader>
          <CModalTitle className="text-black">Firma Hakkında</CModalTitle>
        </CModalHeader>
        <CModalBody>
          {selectedItem && (
            <>
              <p style={{fontSize:14}}>{selectedItem?.aciklama_Metni}</p>
              <hr />
              <a
                className="text-success"
                href={selectedItem?.baglanti}
                target={"_blank"}
              >
                {selectedItem.baglanti ? "Firmayı Görüntüle" : " "}
              </a>
            </>
          )}
        </CModalBody>
        <CModalFooter>
          <CButton color="secondary" onClick={() => setVisible(false)}>
            Kapat
          </CButton>
        </CModalFooter>
      </CModal>
    </>
  )
}

export default OurCompanies
