import { CContainer, CFooter, CRow } from "@coreui/react"
import React from "react"

const Footer = () => {
  return (
    <>
      <CFooter
        className="parallax100 kit-overlay1 p-t-35 p-b-15 container-fluid"
        style={{ backgroundColor: "#193449" }}
      >
        <CContainer>
          <CRow className="justify-content-center">
            <div className="col-sm-8 col-md-5 col-lg-3 p-b-10">
              <div className="size-h-1 flex-s-e m-b-18">
                <h4 className="t1-m-3 cl-0">
                  Sosyal Medya Hesaplarımız
                </h4>
              </div>

              <div className="size-h-1 flex-s-e p-b-6 m-b-18 gap-3">
                <a href="https://www.facebook.com/zonguldakteknopark">
                  <i className="fa fa-facebook" aria-hidden="true"></i>
                </a>

                <a href="https://twitter.com/TgbZonguldak1">
                  <i className="fa fa-twitter" aria-hidden="true"></i>
                </a>

                <a href="https://www.instagram.com/zonguldakteknopark/">
                  <i className="fa fa-instagram" aria-hidden="true"></i>
                </a>

                <a href="https://tr.linkedin.com/company/zonguldak-teknopark">
                  <i className="fa fa-linkedin" aria-hidden="true"></i>
                </a>
              </div>
            </div>

            <div className="col-sm-8 col-md-5 col-lg-3 p-b-20">
              <div className="size-h-1 flex-s-e m-b-18">
                <h4 className="t1-m-3 cl-0">
                  Zonguldak Teknopark A.Ş
                </h4>
              </div>

              <ul>
                <li className="flex-wr-s-s t1-s-2 cl-13 p-b-9">
                  <span className="size-w-3">
                    <i className="fa fa-map-marker" aria-hidden="true"></i>
                  </span>

                  <span className="size-w-4">
                    Çınartepe Mah., Adnan Menderes Cad., No: 91-C, 67040 Merkez
                    ZONGULDAK
                  </span>
                </li>

                <li className="flex-wr-s-s t1-s-2 cl-13 p-b-9">
                  <span className="size-w-3">
                    <i className="fa fa-envelope-o" aria-hidden="true"></i>
                  </span>
                  <a href="mailto:teknopark@beun.edu.tr">
                    <span className="size-w-4">teknopark@beun.edu.tr</span>
                  </a>
                </li>

                <li className="flex-wr-s-s t1-s-2 cl-13 p-b-9">
                  <span className="size-w-3">
                    <i className="fa fa-phone" aria-hidden="true"></i>
                  </span>
                  <a href="tel:903725023020">
                    <span className="size-w-4">0 372 502 30 20</span>
                  </a>
                </li>
              </ul>
            </div>

            <div className="col-sm-8 col-md-5 col-lg-3 p-b-20">
              <div className="size-h-1 flex-s-e m-b-18">
                <h4 className="t1-m-3 cl-0">Hızlı Linkler</h4>
              </div>

              <div className="flex-wr-s-s">
                <ul className="w-50">
                  <li className="kit-list1 p-b-9">
                    <a
                      href="index.html"
                      className="t1-s-2 cl-13 hov-link2 trans-02"
                    >
                      Kurumsal
                    </a>
                  </li>
                  <li className="kit-list1 p-b-9">
                    <a
                      href="projects-grid.html"
                      className="t1-s-2 cl-13 hov-link2 trans-02"
                    >
                      Mevzuat
                    </a>
                  </li>
                  <li className="kit-list1 p-b-9">
                    <a
                      href="services-list.html"
                      className="t1-s-2 cl-13 hov-link2 trans-02"
                    >
                      Firmalar
                    </a>
                  </li>
                  <li className="kit-list1 p-b-9">
                    <a
                      href="about.html"
                      className="t1-s-2 cl-13 hov-link2 trans-02"
                    >
                      TTO
                    </a>
                  </li>
                  <li className="kit-list1 p-b-9">
                    <a
                      href="contact.html"
                      className="t1-s-2 cl-13 hov-link2 trans-02"
                    >
                      Kariyer
                    </a>
                  </li>
                  <li className="kit-list1 p-b-9">
                    <a
                      href="contact.html"
                      className="t1-s-2 cl-13 hov-link2 trans-02"
                    >
                      İletişim
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-sm-8 col-md-5 col-lg-3 p-b-20">
              <div className="size-h-1 flex-s-e m-b-18">
                <h4 className="t1-m-3 cl-0">www.zonguldakteknopark.com</h4>
              </div>
              <div className="py-2">
                <a href="#">
                  <img width={"200px"} src="/teknopark.png" alt="IMG" />
                </a>
              </div>
            </div>
          </CRow>
        </CContainer>
      </CFooter>
      <CContainer fluid className="max-w-full w-100" style={{backgroundColor:"#031220"}}>
        <div className="row p-3 w-100 container-fluid" >
          <span
            className="d-flex justify-content-center"
            style={{ color: "white" }}
          >
            © Kobizon 2022 | Tüm Hakları Saklıdır.
          </span>
        </div>
      </CContainer>
    </>
  )
}

export default Footer
