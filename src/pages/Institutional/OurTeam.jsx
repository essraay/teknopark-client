const OurTeam = () => {
  const data = [
    {
      items: [
        {
          placeholder: true,
        },
        {
          title: "Genel Müdür",
          imageSrc: "/images/yonetimkurulu/fkesikoglu.png",
          name: "Doç. Dr. Ferdi KESİKOĞLU",
          desc: "Zonguldak Bülent Ecevit Üniversitesi Öğretim Elemanı",
        },
        {
          title: "Genel Müdür Yardımcısı",
          imageSrc: "/images/yonetimkurulu/hikmetyazici.jpg",
          name: "Doç. Dr. Hikmet Yazıcı",
        },
        {
          placeholder: true,
        },
      ],
      itemsPerRow: 4,
    },
    {
      items: [
        {
          title: "İdari ve Mali İşler Sorumlusu",
          imageSrc: "/images/yonetimkurulu/nazimkunduraci.png",
          name: "Dr. Öğr. Üyesi Nazım KUNDURACI",
        },
        {
          title: "Proje Birim Sorumlusu",
          imageSrc: "/images/yonetimkurulu/hasimduru.jpg",
          name: "Dr. Öğr. Üyesi Haşim DURU",
        },
        {
          title: "Teknik İşler Sorumlusu",
          imageSrc: "/images/yonetimkurulu/canatalay.jpg",
          name: "Arş. Grv. Can ATALAY",
        },
        {
          title: "Genel Sekreter",
          imageSrc: "/images/yonetimkurulu/yagmuratalay.png",
          name: "Yağmur ATALAY",
        },
      ],
      itemsPerRow: 4,
    },
  ]

  const SPACING = "1.3rem"

  return (
    <section className="py-4">
      <div style={{ display: "flex", justifyContent: "center", width: "100%" }}>
        <div
          style={{
            width: "100%",
            maxWidth: "1024px",
            display: "flex",
            flexDirection: "column",
            gap: SPACING,
          }}
        >
          {data.map((row, index) => (
            <div key={index}>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: `repeat(${row.itemsPerRow}, 1fr)`,
                  placeItems: "center",
                  gap: SPACING,
                }}
              >
                {row.items.map((item, itemIndex) =>
                  item?.placeholder ? (
                    <div></div>
                  ) : (
                    <div
                      key={itemIndex}
                      style={{
                        height: "100%",
                        maxWidth: item?.maxWidth || "unset",
                      }}
                    >
                      <b>
                        <h4 style={{ textAlign: "center" }}>{item.title}</h4>
                      </b>
                      <div style={{ aspectRatio: "1" }}>
                        <img
                          className="companies-card"
                          src={item.imageSrc}
                          alt={item.name}
                          style={{
                            width: "100%",
                            height: "100%",
                            objectFit: "cover",
                            borderRadius: "20px",
                          }}
                        />
                      </div>
                      <h5 style={{ textAlign: "center" }}>{item.name}</h5>
                      {/* {item?.desc && (
                      <h5 style={{ textAlign: "center" }}>{item.desc}</h5>
                    )} */}
                    </div>
                  )
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
export default OurTeam
