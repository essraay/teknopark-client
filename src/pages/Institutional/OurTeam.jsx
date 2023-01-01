const OurTeam = () => {
  return (
    <section>
      <div class="container justify-content-center">
        <div class="row" style={{ paddingLeft: " 20%", paddingRight: "20%" }}>
          <b>
            <h4 style={{ textAlign: "center", margin: "2% 0" }}>Genel Müdür</h4>
          </b>
          <img
            src="/src/assets/yonetimkurulu/fkesikoglu.png"
            alt="Ferdi Kesikoğlu"
            style={{ width: "100%", margin: "2% 0" }}
          />
          <h5 style={{ textAlign: "center" }}>Doç. Dr. Ferdi KESİKOĞLU</h5>
          <h5 style={{ textAlign: "center" }}>
            Zonguldak Bülent Ecevit Üniversitesi Öğretim Elemanı
          </h5>
        </div>
        <br />
        <div
          class="row flex"
          style={{ display: "flex ", flexDirection: "row" }}
        >
          <div className="col-6">
            <b>
              <h4 style={{ textAlign: "center", margin: "2% 0" }}>
                İdari Mali İşler Müdürü
              </h4>
            </b>
            <img
              src="/src/assets/yonetimkurulu/nazimkunduraci.png"
              alt="Nazım Kunduracı"
              style={{ width: "100%", margin: "2% 0" }}
            />
            <h5 style={{ textAlign: "center" }}>
              Dr. Öğr. Üyesi Nazım KUNDURACI
            </h5>
            <h5 style={{ textAlign: "center" }}>
              Zonguldak Bülent Ecevit Üniversitesi Öğretim Elemanı
            </h5>
          </div>
          <div className="col-6">
            <b>
              <h4 style={{ textAlign: "center", margin: "2% 0" }}>
                Proje Müdürü
              </h4>
            </b>
            <img
              src="/src/assets/yonetimkurulu/mesutkarakoca.png"
              alt="Mesut KARAKOCA"
              style={{ width: "100%", margin: "2% 0" }}
            />
            <h5 style={{ textAlign: "center" }}>
              Öğretim Görevlisi Mesut KARAKOCA
            </h5>
            <h5 style={{ textAlign: "center" }}>
              Zonguldak Bülent Ecevit Üniversitesi Öğretim Elemanı
            </h5>
          </div>
        </div>
        <br />
        <div
          class="justify-content-center"
          style={{ paddingLeft: "20%", paddingRight: "20%", textAlign:"center" }}
        >
          <b>
            <h4 style={{ textAlign: "center", margin: "2% 0" }}>
              Kurumsal İletişim Sorumlusu
            </h4>
          </b>
          <img
            src="/src/assets/yonetimkurulu/yagmuratalay.png"
            alt="Yağmur Atalay"
            style={{ width: "60%", margin: "2% 0" }}
          />
          <h5 style={{ textAlign: "center" }}>Yağmur ATALAY</h5>
        </div>
      </div>
      <br />
      <br />
    </section>
  );
};
export default OurTeam;
