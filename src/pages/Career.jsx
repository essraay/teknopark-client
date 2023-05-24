import {
  CButton,
  CCard,
  CCardBody,
  CCol,
  CContainer,
  CImage,
  CModal,
  CModalBody,
  CModalFooter,
  CModalHeader,
  CModalTitle,
} from "@coreui/react"
import { useEffect, useMemo, useState } from "react"
import { AdvertService } from "../services"
import { dateFormat } from "../utils"
import { BASE_IMG } from "../constants"
import LoadingSpinner from "../components/LoadingSpinner"
import { useParams } from "react-router-dom"
import ShareLink from "react-linkedin-share-link"
import CIcon from "@coreui/icons-react"
import { cibLinkedin, cibLinkedinIn } from "@coreui/icons"
import { LinkedinIcon, LinkedinShareButton } from "react-share"

const Career = () => {
  const { id } = useParams()
  const [loading, setLoading] = useState(true)
  const [item, setItems] = useState(false)

  useEffect(() => {
    AdvertService.getAll().then((res) => {
      setItems(res.data)
      setLoading(false)
    })
    console.log(id)
  }, [])

  const [visible, setVisible] = useState(false)
  const [selectedItemId, setSelectedItemId] = useState(false)
  const selectedItem = useMemo(() => {
    if (selectedItemId !== false)
      return item.find((x) => x.id == selectedItemId)

    return false
  }, [item, selectedItemId])

  const handleShowModal = (id) => {
    setSelectedItemId(id)
    setVisible(true)
  }

  return (
    <>
      <CContainer className="py-3 pb-3 w-full h-full w-100 h-100">
        <div className="text-center h3" style={{ margin: "2% 0" }}>
          <div style={{ color: "#193449" }}>
            Zonguldak Teknopark İş İlanları
          </div>
          <div className="dropdown-divider"></div>
        </div>
        <div
          className="col-xl-10 col-lg-10 col-md-10 col-sm-10 col-xs-12 mx-auto"
          style={{ margin: "2% 0" }}
        >
          {loading ? (
            <LoadingSpinner />
          ) : (
            <div>
              {item.reverse().map((item) => (
                <CCard
                  className="career-card rounded-2"
                  key={item.id}
                  style={{ margin: "2% 0", backgroundColor: "#EFEFEF" }}
                >
                  <CCardBody className="row">
                    <CCol
                      xs={2}
                      sm={2}
                      md={2}
                      lg={1}
                      xl={1}
                      xxl={1}
                      className="justify-content-center align-items-center rounded-circle"
                    >
                      <CImage
                        className="rounded-circle"
                        src={BASE_IMG + item.resim_Dizin}
                        style={{ width: 60, height: 60, objectFit: "cover" }}
                      />
                    </CCol>
                    <CCol
                      xs={10}
                      sm={10}
                      md={10}
                      lg={4}
                      xl={4}
                      xxl={4}
                      className="my-auto"
                    >
                      <p className="my-auto" style={{ fontSize: 16 }}>
                        {item.pozisyon}

                        <span className="my-auto">
                          <p title={item.firma_Adi} style={{ fontSize: 12 }}>
                            {item.firma_Adi.length > 22
                              ? item.firma_Adi.substring(0, 22) + ".."
                              : item.firma_Adi}
                          </p>
                        </span>
                      </p>
                    </CCol>
                    <CCol
                      xs={4}
                      sm={6}
                      md={6}
                      lg={3}
                      xl={3}
                      xxl={3}
                      className="my-auto"
                    >
                      <CButton
                        className="mx-auto rounded-2 my-auto"
                        style={{ margin: "1% 0", whiteSpace: "pre-wrap" }}
                        color="danger"
                        variant="ghost"
                      >
                        İlan Tarihi : {dateFormat(item.ilan_Tarih)}
                      </CButton>
                    </CCol>
                    <CCol
                      xs={4}
                      sm={3}
                      md={3}
                      lg={2}
                      xl={2}
                      xxl={2}
                      className="text-center  my-auto"
                    >
                      <CButton
                        className="mx-auto rounded-2 my-auto"
                        style={{ margin: "1% 0", whiteSpace: "pre-wrap" }}
                        color="success"
                        variant="ghost"
                      >
                        {item.calisma_Sekli}
                      </CButton>
                    </CCol>
                    <CCol
                      xs={4}
                      sm={3}
                      md={3}
                      lg={2}
                      xl={2}
                      xxl={2}
                      className="my-auto"
                    >
                      <CButton
                        onClick={() => handleShowModal(item?.id)}
                        className="mx-auto rounded-2 my-auto"
                        style={{ margin: "1% 0", whiteSpace: "pre-wrap" }}
                        color="info"
                        variant="ghost"
                      >
                        Detay
                      </CButton>
                      <LinkedinShareButton
                        className="text-end pulse-shrink"
                        url={"https://zonguldakteknopark.com.tr/#/Kariyer/" + item?.id}
                      >
                        <LinkedinIcon size={32} round={true} />
                      </LinkedinShareButton>
                    </CCol>
                    <CCol></CCol>
                  </CCardBody>
                </CCard>
              ))}
            </div>
          )}
        </div>
      </CContainer>
      <CModal scrollable visible={visible} onClose={() => setVisible(false)}>
        <CModalHeader>
          <CModalTitle className="text-black">İlan Detayları</CModalTitle>
        </CModalHeader>
        <CModalBody>
          {selectedItem && (
            <>
              <CContainer>
                <div className="justify-content-end">
                  <p className="text-end">
                    {dateFormat(selectedItem.ilan_Tarih)}
                  </p>
                </div>
                <div className="text-center" style={{ margin: "3% 0" }}>
                  <img
                    src={BASE_IMG + selectedItem.resim_Dizin}
                    width={60}
                    height={60}
                  />
                </div>
                <div className="row fw-bolder">
                  <p className="h4 text-center">{selectedItem.pozisyon}</p>
                </div>
                <div style={{ margin: "3% 0" }}>
                  <p className="h5">İş Tanımı</p>
                  <div className="dropdown-divider"></div>
                  <p className="align-content-between">
                    {selectedItem.is_Tanimi}
                  </p>
                </div>
                <div style={{ margin: "3% 0" }}>
                  <p className="h5">Görev ve Sorumluluklar</p>
                  <div className="dropdown-divider"></div>
                  <p>{selectedItem.gorev_Sorumluluk}</p>
                </div>
                <div style={{ margin: "3% 0" }}>
                  <p className="h5">Gereksinimler</p>
                  <div className="dropdown-divider"></div>
                  <p>{selectedItem.gereksinim}</p>
                </div>
                <div style={{ margin: "3% 0" }}>
                  <p className="h5">Firma Bilgileri</p>
                  <div className="dropdown-divider"></div>
                  <p>
                    <b>Firma Adı</b>: {selectedItem.firma_Adi}
                  </p>
                  <p>
                    <b>Firma Mail Adresi</b> :
                    <a href="mailto:{selectedItem.firma_Email}">
                      {selectedItem.firma_Email}
                    </a>
                  </p>
                  <p>
                    <b>Firma Telefon: </b>
                    <a href="tel:{selectedItem.firma_Telefon}">
                      {selectedItem.firma_Telefon}
                    </a>
                  </p>
                </div>
                <div style={{ margin: "3% 0" }}>
                  <p className="h5 career-card-text">Kriterler</p>
                  <div className="dropdown-divider"></div>
                  <p>{selectedItem.kriter}</p>
                </div>
                <div style={{ margin: "3% 0" }}>
                  <p className="h5 career-card-text">Başvuru</p>
                  <div className="dropdown-divider"></div>
                  <p>{selectedItem.basvuru}</p>
                </div>
              </CContainer>
            </>
          )}
        </CModalBody>
        <CModalFooter>
          <div className="align-items-end">
            <CButton color="info" onClick={() => setVisible(false)}>
              Kapat
            </CButton>
          </div>
        </CModalFooter>
      </CModal>
    </>
  )
}
export default Career
