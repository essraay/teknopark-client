const Career = () => {
  document.querySelectorAll(".k-item .k-title").forEach((item) => {
    item.addEventListener("click", (event) => {
      let body = item.parentElement.querySelector(".k-body");
      if (body.classList.contains("show")) body.classList.remove("show");
      else body.classList.add("show");
    });
  });

  return (
    <section
      className="bg-strategy-h4"
      style={{
        backgroundImage: "url(bg-strategy-h4.png)",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center center",
      }}
    >
      <div className="container">
        {/* <div class="row">
          <div class="col-md-12">
            <div class="strategy-warp-h4">
              <div class="title-block text-center">
                <span class="top-title"></span>
                <h2>Genel Bilgi</h2>
                <p class="sub-title">Zonguldak Teknopark</p>
                <span class="bottom-title"></span>
              </div>
            </div>
          </div>
        </div> */}

        <div style={{ marginBottom: "100px" }}></div>

        <div className="col-xs-12 text-center">
          <h3>Şu anda aktif ilan bulunmamaktadır.</h3>
        </div>
      </div>
    </section>
  );
};
export default Career;
