import { CContainer, CRow } from "@coreui/react"

const VisionMission = () => {
  return (
    <section
      class="no-padding"
      style={{
        backgroundImage: "url(bg-strategy-h4.png)",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center center",
      }}
    >
      <CContainer>
        <CRow>
          <div class="col-md-12" style={{ margin: "2% 0" }}>
            <div class="title-block text-center title-pd">
              <span class="top-title"></span>
              <b className="h3 fw-bold">Vizyon - Misyon</b>
              <b><p class="sub-title" style={{margin:"1% 0"}}>Zonguldak Teknopark A.Ş</p></b>
              <span class="bottom-title"></span>
            </div>
          </div>
          <div class="col-md-6">
            <b>
              <h4 style={{margin:"2% 0"}}>Misyonumuz</h4>
            </b>
            <p>
              Zonguldak Teknopark’ın misyonu, teknolojik ürün üretmede
              girişimciliği özendirmek, akademisyen, sanayici ve diğer tüm Ar-Ge
              fikir sahiplerine ortak bir çalışma ortamı oluşturularak elde
              edilecek teknolojik ürünler temelinde ülke ekonomisine özellikle
              ihracat kaleminde artı değer sağlamaktır.
            </p>
          </div>
          <div class="col-md-6">
            <b>
              <h4 style={{margin:"2% 0"}}>Vizyonumuz</h4>
            </b>
            <p>
              Vizyonu ise, Ar-Ge Projelerinden elde edilecek katma değeri yüksek
              teknolojik ürünler ile ulusal ve uluslararası ölçekte adından söz
              ettiren ve tercih edilen bir Teknopark olmaktır. Kuruluşundan
              günümüze kadar misyonu ve vizyonu değişmemiştir.
            </p>
            <br />
            <br />
            <br />
            <br />
          </div>
        </CRow>
      </CContainer>
    </section>
  )
}
export default VisionMission
