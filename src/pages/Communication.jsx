import { cibMailRu, cilLocationPin, cilPhone } from "@coreui/icons"
import CIcon from "@coreui/icons-react"
import { CButton, CCol, CContainer, CRow, CSpinner } from "@coreui/react"
import { useFormik } from "formik"
import { useCallback, useRef, useState } from "react"
import { toast, Toaster } from "react-hot-toast"
import { CommunicationService } from "../services"
import { FormSchema } from "../validations/FormSchema"

const Communication = () => {
  const [loading, setLoading] = useState(false)
  const formRef = useRef()

  const formik = useFormik({
    initialValues: {
      nameSurname: "",
      adress: "empty",
      email: "",
      subject: "",
      message: "",
      kvkk: false,
      acikRiza: false,
    },
    validationSchema: FormSchema,
    onSubmit: (values) => {
      CommunicationService.addForm({
        Ad: values.nameSurname,
        Soyad: "",
        Email: values.email,
        MesajKonusu: values.subject,
        Mesaj: values.message,
      })
        .then((response) => {
          console.log("response :>> ", response)

          formik.resetForm()

          formRef.current.querySelector("input").focus()

          toast.success("Formunuz iletilmiştir!")
        })
        .catch((error) => {
          console.error(error)
          formRef.current.querySelector("input").select()
          formRef.current.querySelector("input").focus()
        })
    },
  })

  const errorMessage = useCallback(
    (key) => {
      return (
        <>
          {formik.touched?.[key] && formik.errors?.[key] && (
            <div className="text-xs text-center text-danger">
              {formik.errors?.[key]}
            </div>
          )}
        </>
      )
    },
    [formik]
  )

  return (
    <>
      <center style={{ margin: "2% 0" }}>
        <CContainer>
          <Toaster position="top-right" reverseOrder={false} />
          <CRow className="justify-content-center">
            <CCol style={{ margin: "2% 0" }}>
              <span>
                <CIcon
                  icon={cilLocationPin}
                  style={{ color: "#ffb600" }}
                  size="3xl"
                />
              </span>
              <div className="flex">
                <p className="h4 fw-bold">Adres</p>
                <p>
                  Çınartepe Mah., Adnan Menderes Cad., No: 91-C, 67040 Merkez
                  ZONGULDAK
                </p>
              </div>
            </CCol>
            <CCol style={{ margin: "2% 0" }}>
              <CIcon icon={cilPhone} style={{ color: "#ffb600" }} size="3xl" />
              <p className="h4 fw-bold">Telefon</p>
              <p>0 372 502 30 20</p>
            </CCol>
            <CCol style={{ margin: "2% 0" }}>
              <span>
                <CIcon
                  icon={cibMailRu}
                  style={{ color: "#ffb600" }}
                  size="3xl"
                />
              </span>
              <p className="h4 fw-bold">E-Mail</p>
              <p>teknopark@beun.edu.tr</p>
            </CCol>
          </CRow>
        </CContainer>
      </center>

      <center>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d23923.808109002228!2d31.822187000000003!3d41.45059!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x11daddf168e1e93f!2sZonguldak%20Teknopark!5e0!3m2!1str!2str!4v1672840852028!5m2!1str!2str"
          width="80%"
          height="350"
          style={{ border: "0" }}
          allowfullscreen=""
          loading="lazy"
        ></iframe>
      </center>

      <center>
        <CContainer style={{ margin: "2% 0" }}>
          <CRow>
            {loading ? (
              <div>Yükleniyor..</div>
            ) : (
              <>
                <div className="col-md-12" style={{ margin: "2% 0" }}>
                  <div className="title-block title-contact">
                    <div className="h3 fw-bolder">Bize Ulaşın</div>
                    <div
                      className="size-a-2 bg-2"
                      style={{ backgroundColor: "#ffb600" }}
                    ></div>
                  </div>
                </div>
                <form
                  className="form-contact-warp"
                  onSubmit={formik.handleSubmit}
                  ref={formRef}
                >
                  <div className="col-md-12" style={{ margin: "1% 0" }}>
                    <input
                      type="text"
                      className="form-control"
                      name="nameSurname"
                      placeholder="Adınız ve Soyadınız"
                      feedback={formik.errors.tc}
                      value={formik.values.nameSurname}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                    />
                    {errorMessage("nameSurname")}
                  </div>
                  <div className="col-md-12" style={{ margin: "1% 0" }}>
                    <input
                      type="text"
                      className="form-control"
                      name="email"
                      placeholder="E-Mail Adresiniz"
                      feedback={formik.errors.email}
                      value={formik.values.email}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                    />
                    {errorMessage("email")}
                  </div>
                  <div className="col-md-12" style={{ margin: "1% 0" }}>
                    <input
                      type="text"
                      className="form-control"
                      name="subject"
                      placeholder="Konu"
                      feedback={formik.errors.subject}
                      value={formik.values.subject}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                    />
                    {errorMessage("subject")}
                  </div>
                  <div className="col-md-12" style={{ margin: "1% 0" }}>
                    <div className="form-group">
                      <textarea
                        id="textarea"
                        className="form-control"
                        rows="5"
                        placeholder="Mesajınız"
                        name="message"
                        feedback={formik.errors.message}
                        value={formik.values.message}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                      ></textarea>
                      {errorMessage("message")}
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="checkbox" style={{ margin: "1% 0" }}>
                      <label className="flex">
                        <input
                          type="checkbox"
                          name="kvkk"
                          checked={formik.values.kvkk}
                          onChange={formik.handleChange}
                        />{" "}
                        Kişisel Verilerin İşlenmesine İlişkin{" "}
                        <a
                          href="https://localhost:5001/Files/aydinlatma-metni.pdf"
                          target="_blank"
                        >
                          Aydınlatma Metni
                        </a>
                        ni okudum.
                      </label>
                      {errorMessage("kvkk")}
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="checkbox" style={{ margin: "1% 0" }}>
                      <label>
                        <input
                          type="checkbox"
                          name="acikRiza"
                          checked={formik.values.acikRiza}
                          onChange={formik.handleChange}
                        />
                        6698 Sayılı Kişisel Verilerin Korunması Kanunu
                        kapsamında, yukarıda paylaşmış olduğum kişisel
                        verilerimin Zonguldak Teknopark A.Ş. tarafından
                        aydınlatma metni doğrultusunda işlenmesine ve
                        paylaşılmasına açık rıza gösterdiğimi, hiçbir baskı veya
                        zorlama altında olmaksızın hür irademle kabul ve beyan
                        ediyorum.
                      </label>
                      {errorMessage("acikRiza")}
                    </div>
                  </div>
                  <div className="col-md-12" style={{ margin: "2% 0" }}>
                    <CButton
                      type="submit"
                      className="btn-info"
                      disabled={loading}
                    >
                      {loading && <CSpinner size="sm" className="me-3" />}
                      <i
                        className="fa fa-paper-plane"
                        aria-hidden="true"
                      ></i>{" "}
                      Gönder
                    </CButton>
                  </div>
                </form>
              </>
            )}
          </CRow>
        </CContainer>
      </center>
    </>
  )
}
export default Communication
