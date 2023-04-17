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
          <h1>Yükleniyor..</h1>
        ) : (
          <>
            <div className="row">
              {items.map((item) => (
                <div className="p-2 col-12 col-sm-6 col-md-6 col-lg-4 col-xl-3">
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
                    <div
                      className="card-body text-center"
                    >
                      <p className="card-text" style={{ aspectRatio: 1.9 }}>
                        <b style={{ color: "blue" }}>{item?.firma_Adi}</b>
                      </p>
                    </div>
                    <CButton onClick={() => handleShowModal(item?.id)}>
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
          <CModalTitle>Firma Hakkında</CModalTitle>
        </CModalHeader>
        <CModalBody>
          {selectedItem && (
            <>
              <p>{selectedItem?.aciklama_Metni}</p>
              <br />
              <a
                className="text-bold"
                href={selectedItem?.baglanti}
                target={"_blank"}
              >
                Firmayı görüntüle
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
