import { cibMailRu, cilLocationPin, cilPhone } from "@coreui/icons";
import CIcon from "@coreui/icons-react";
import { CContainer, CRow } from "@coreui/react";

const Communication = () => {
  return (
    <>
      <section>
        <CContainer>
          <CRow>
            <div className="col-md-4" style={{ margin: "2% 0" }}>
              <CIcon
                icon={cilLocationPin}
                style={{ color: "#05233a" }}
                size="3xl"
              />
              <h4>Adres</h4>
              <p>
                Çınartepe Mah., Adnan Menderes Cad., No: 91-C, 67040 Merkez
                ZONGULDAK
              </p>
            </div>
            <div className="col-md-4" style={{ margin: "2% 0" }}>
              <CIcon icon={cilPhone} style={{ color: "#05233a" }} size="3xl" />
              <h4>Telefon</h4>
              <p>0 372 502 30 20</p>
            </div>
            <div className="col-md-4 row" style={{ margin: "2% 0" }}>
              <span>
                <CIcon
                  icon={cibMailRu}
                  style={{ color: "#05233a" }}
                  size="3xl"
                />
              </span>
              <h4>E-Mail</h4>
              <p>teknopark@beun.edu.tr</p>
            </div>
          </CRow>
        </CContainer>
      </section>
      <center>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d11961.967981411803!2d31.821806!3d41.4502433!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x11daddf168e1e93f!2sZonguldak%20Teknopark!5e0!3m2!1str!2str!4v1616044642631!5m2!1str!2str"
          width="100%"
          height="360"
          style={{ border: "0" }}
          allowfullscreen=""
          loading="lazy"
        ></iframe>
      </center>
      <section>
        <CContainer>
          <CRow>
            <div className="col-md-12">
              <div className="title-block title-contact">
                <h3>Bize Ulaşın</h3>
                <span className="bottom-title"></span>
              </div>
            </div>
            <div className="form-contact-warp">
              <form method="post">
                <div className="col-md-4">
                  <input
                    type="text"
                    className="form-control"
                    value=""
                    required="required"
                    title=""
                    placeholder="Adınız ve Soyadınız"
                  />
                </div>
                <div className="col-md-4">
                  <input
                    type="text"
                    className="form-control"
                    value=""
                    required="required"
                    title=""
                    placeholder="E-Mail Adresiniz"
                  />
                </div>
                <div className="col-md-4">
                  <input
                    type="text"
                    className="form-control"
                    value=""
                    required="required"
                    title=""
                    placeholder="Konu"
                  />
                </div>
                <div className="col-md-12">
                  <div className="form-group">
                    <textarea
                      id="textarea"
                      className="form-control"
                      rows="5"
                      required="required"
                      placeholder="Mesajınız"
                    ></textarea>
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="checkbox">
                    <label>
                      <input type="checkbox" required="" /> Kişisel Verilerin
                      İşlenmesine İlişkin{" "}
                      <a
                        // href="/docs/aydinlatma-metni.pdf"
                        target="_blank"
                      >
                        Aydınlatma Metni
                      </a>
                      ni okudum.
                    </label>
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="checkbox">
                    <label>
                      <input type="checkbox" required="" /> 6698 Sayılı Kişisel
                      Verilerin Korunması Kanunu kapsamında, yukarıda paylaşmış
                      olduğum kişisel verilerimin Zonguldak Teknopark A.Ş.
                      tarafından aydınlatma metni doğrultusunda işlenmesine ve
                      paylaşılmasına açık rıza gösterdiğimi, hiçbir baskı veya
                      zorlama altında olmaksızın hür irademle kabul ve beyan
                      ediyorum.
                    </label>
                  </div>
                </div>

                <div className="col-md-12">
                  <button type="submit" className="btn-main-color">
                    <i className="fa fa-paper-plane" aria-hidden="true"></i>{" "}
                    Gönder
                  </button>
                </div>
              </form>
            </div>
          </CRow>
        </CContainer>
      </section>
    </>
  );
};
export default Communication;
