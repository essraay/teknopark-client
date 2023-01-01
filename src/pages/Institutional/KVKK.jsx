import { CContainer, CRow } from "@coreui/react";

const KVKK = () => {
  return (
    <div
      className="py-3"
      style={{
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
                style={{ margin: "2% 0" }}
              >
                <span className="top-title"></span>
                <b>
                  <h2>Kişisel Verilerin Korunma Kanunu</h2>
                </b>
                <b>
                  <p className="sub-title">Zonguldak Teknopark</p>
                </b>
              </div>
              <br />
              <h3 className="text-center">
                <a href="/docs/bilgi-guvenligi-politikasi.pdf" target="_blank">
                  BİLGİ GÜVENLİĞİ POLİTİKAMIZ
                </a>
              </h3>
              <h3 className="text-center">
                <a
                  href="/docs/saklama-imha-anonimlestirme-politikasi.pdf"
                  target="_blank"
                >
                  SAKLAMA İMHA ANONİMLEŞTİRME POLİTİKAMIZ
                </a>
              </h3>

              <h3 className="text-center" style={{ marginTop: "4rem" }}>
                <a href="/docs/aydinlatma-metni-calisan.pdf" target="_blank">
                  ÇALIŞAN AYDINLATMA METNİ
                </a>
              </h3>
              <h3 className="text-center">
                <a
                  href="/docs/aydinlatma-metni-calisan-adayi.pdf"
                  target="_blank"
                >
                  ÇALIŞAN ADAYI AYDINLATMA METNİ
                </a>
              </h3>
              <h3 className="text-center">
                <a
                  href="/docs/aydinlatma-metni-hizmet-alan-kisi.pdf"
                  target="_blank"
                >
                  HİZMET ALAN KİŞİ AYDINLATMA METNİ
                </a>
              </h3>
              <h3 className="text-center">
                <a
                  href="/docs/aydinlatma-metni-hizmet-alan-sirket-calisani.pdf"
                  target="_blank"
                >
                  HİZMET ALAN ŞİRKET ÇALIŞANI AYDINLATMA METNİ
                </a>
              </h3>
              <h3 className="text-center">
                <a href="/docs/aydinlatma-metni-ziyaretci.pdf" target="_blank">
                  ZİYARETÇİ AYDINLATMA METNİ
                </a>
              </h3>
              <h3 className="text-center">
                <a href="/docs/kvkk-basvuru-formu.pdf" target="_blank">
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
