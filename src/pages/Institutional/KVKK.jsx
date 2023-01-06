import { CContainer, CRow } from "@coreui/react";

const KVKK = () => {
  return (
    <div
      style={{
        margin: "1% 0",
        backgroundImage: "url(bg-strategy-h4.png)",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center center",
      }}
    >
      <CContainer>
        <CRow>
          <div className="col-md-12">
            <div className="strategy-warp-h4">
              <div
                className="title-block text-center"
                style={{ margin: "3% 0" }}
              >
                <span className="top-title"></span>
                 <b className="h3 fw-bold">Kişisel Verilerin Korunma Kanunu</b>
                <b>
                  <p className="sub-title" style={{margin:"1% 0"}}>Zonguldak Teknopark</p>
                </b>
              </div>
              <h3 className="text-center">
                <a href="https://localhost:5001/Files/bilgi-guvenligi-politikasi.pdf" target="_blank">
                  BİLGİ GÜVENLİĞİ POLİTİKAMIZ
                </a>
              </h3>
              <h3 className="text-center">
                <a
                  href="https://localhost:5001/Files/saklama-imha-anonimlestirme-politikasi.pdf"
                  target="_blank"
                >
                  SAKLAMA İMHA ANONİMLEŞTİRME POLİTİKAMIZ
                </a>
              </h3>

              <h3 className="text-center" style={{ marginTop: "4rem" }}>
                <a href="https://localhost:5001/Files/aydinlatma-metni-calisan.pdf" target="_blank">
                  ÇALIŞAN AYDINLATMA METNİ
                </a>
              </h3>
              <h3 className="text-center">
                <a
                  href="https://localhost:5001/Files/aydinlatma-metni-calisan-adayi.pdf"
                  target="_blank"
                >
                  ÇALIŞAN ADAYI AYDINLATMA METNİ
                </a>
              </h3>
              <h3 className="text-center">
                <a
                  href="https://localhost:5001/Files/aydinlatma-metni-hizmet-alan-kisi.pdf"
                  target="_blank"
                >
                  HİZMET ALAN KİŞİ AYDINLATMA METNİ
                </a>
              </h3>
              <h3 className="text-center">
                <a
                  href="https://localhost:5001/Files/aydinlatma-metni-hizmet-alan-sirket-calisani.pdf"
                  target="_blank"
                >
                  HİZMET ALAN ŞİRKET ÇALIŞANI AYDINLATMA METNİ
                </a>
              </h3>
              <h3 className="text-center">
                <a href="https://localhost:5001/Files/aydinlatma-metni-ziyaretci.pdf" target="_blank">
                  ZİYARETÇİ AYDINLATMA METNİ
                </a>
              </h3>
              <h3 className="text-center">
                <a href="https://localhost:5001/Files/kvkk-basvuru-formu.pdf" target="_blank">
                  KVKK BAŞVURU FORMU
                </a>
              </h3>
            </div>
          </div>
        </CRow>
      </CContainer>
      <br />
      <br />
    </div>
  );
};
export default KVKK;
