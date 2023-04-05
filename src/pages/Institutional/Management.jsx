const Management = () => {
  return (
    <section
      style={{
        backgroundImage: "url(bg-strategy-h4.png)",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center center",
      }}
    >
      <div className="l-container">
        <div
          className="l-row"
          style={{ paddingLeft: "8%", paddingRight: "8%", margin: "2% 0" }}
        >
          <b>
            <h3 style={{ margin: "2% 0" }}>Yönetim Kurulu Başkanı</h3>
          </b>
          <a style={{ width: "100%" }}>
            <img
              src="/images/yonetimkurulu/profdrismailhakkiozolcer.png"
              alt="Prof. Dr. İsmail Hakkı ÖZÖLÇER"
              style={{ width: "100%", margin: "2% 0" }}
            />
          </a>
          <h5 style={{ textAlign: "center" }}>
            Prof. Dr. İsmail Hakkı ÖZÖLÇER
          </h5>
          <h5 style={{ textAlign: "center" }}>
            Zonguldak Bülent Ecevit Üniversitesi Rektörü
          </h5>
        </div>
        <div
          className="l-row"
          style={{ paddingLeft: "8%", paddingRight: "8%", margin: "2% 0" }}
        >
          <b>
            <h4>Yönetim Kurulu Üyesi (Başkan Yrd.)</h4>
          </b>
          <a style={{ width: "100%" }}>
            <img
              src="/images/yonetimkurulu/turgutsubasi.jpg"
              alt="Turgut SUBAŞI"
              style={{ width: "100%", margin: "2% 0" }}
            />
          </a>
          <h5 style={{ textAlign: "center" }}>Turgut SUBAŞI</h5>
          <h5 style={{ textAlign: "center" }}>
            Zonguldak İl Özel İdaresi Temsilen Vali Yardımcısı
          </h5>
        </div>
        <br />
        <div
          className="l-row"
          style={{ paddingLeft: "8%", paddingRight: "8%", margin: "2% 0" }}
        >
          <b>
            <h4>Yönetim Kurulu Üyesi</h4>
          </b>
          <a style={{ width: "100%" }}>
            <img
              src="/images/yonetimkurulu/zekaikamitoglu.jpg"
              alt="Recep OCAK"
              style={{ width: "100%", margin: "2% 0" }}
            />
          </a>
          <h5 style={{ textAlign: "center" }}>Zekai KAMİTOĞLU</h5>
          <h5 style={{ textAlign: "center" }}>
          Çaycuma Ticaret ve Sanayi Odası Yönetim Kurulu Başkanı
          </h5>
        </div>
      </div>
      <br />
      <br />
    </section>
  );
};
export default Management;
