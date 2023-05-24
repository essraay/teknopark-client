const LeftMenu = () => {
  return (
    <>
      <div className="card" style={{ border: "none" }}>
        <ul className="list-group list-group-flush gap-1">
          <a href="/#/Hakkimizda">
            <li
              className="list-group-item text-white"
              style={{ backgroundColor: "#062c49" }}
            >
              Hakkımızda
            </li>
          </a>
          <a href="/#/YonetimKurulu">
            <li
              className="list-group-item text-white"
              style={{ backgroundColor: "#062c49" }}
            >
              Yönetim Kurulu
            </li>
          </a>
          <a href="https://argeportal.beun.edu.tr/onbasvuruformu">
            <li
              className="list-group-item text-white"
              style={{ backgroundColor: "#062c49" }}
            >
              Vizyon - Misyon
            </li>
          </a>
          <a href="/#/Firmalarimiz">
            <li
              className="list-group-item text-white"
              style={{ backgroundColor: "#062c49" }}
            >
              Firmalar
            </li>
          </a>
          <a href="/#/DigerMevzuat">
            <li
              className="list-group-item text-white"
              style={{ backgroundColor: "#062c49" }}
            >
              Ortaklarımız
            </li>
          </a>
          <a href="https://argeportal.beun.edu.tr/onbasvuruformu">
            <li
              className="list-group-item text-white"
              style={{ backgroundColor: "#062c49" }}
            >
              Ön Başvuru
            </li>
          </a>
          <a href="/#/DigerMevzuat">
            <li
              className="list-group-item text-white"
              style={{ backgroundColor: "#062c49" }}
            >
              Mevzuatlar
            </li>
          </a>
          <a href="/#/Kariyer">
            <li
              className="list-group-item text-white"
              style={{ backgroundColor: "#062c49" }}
            >
              Kariyer
            </li>
          </a>
          <a href="/#/Iletisim">
            <li
              className="list-group-item text-white"
              style={{ backgroundColor: "#062c49" }}
            >
              İletişim
            </li>
          </a>
        </ul>
      </div>
    </>
  )
}
export default LeftMenu
