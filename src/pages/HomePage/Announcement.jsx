import { CButton, CContainer } from "@coreui/react";

const Announcement = () => {
  return (
    <section className="bg-12 p-t-92 p-b-60">
      <CContainer>
        <div className="flex-col-c-c p-b-50">
          <h3 className="t1-b-1 cl-3 txt-center m-b-11">Duyurular</h3>
          <div className="size-a-2 bg-3"></div>
        </div>

        <div className="row justify-content-center">
          <div className="col-sm-10 col-md-8 col-lg-4 p-b-40">
            <div className="bg-0 h-full">
              <a href="news-detail.html" className="hov-img0 of-hidden">
                <img src="https://via.placeholder.com/720x389" alt="IMG" />
              </a>

              <div className="bg-0 p-rl-28 p-t-26 p-b-35">
                <h4 className="p-b-12">
                  <a
                    href="news-detail.html"
                    className="t1-m-1 cl-3 hov-link2 trans-02"
                  >
                    Duyuru 1
                  </a>
                </h4>

                <div className="flex-wr-s-c p-b-9">
                  <div className="p-r-20">
                    <i className="fs-14 cl-7 fa fa-calendar m-r-2"></i>

                    <span className="t1-s-2 cl-7">Nov 10 , 2017</span>
                  </div>
                </div>

                <p className="t1-s-2 cl-6 p-b-20">
                  To take a trivial example, which of us ever und takes
                  laborious physical exercise, except to obtain some advantage
                  from it...
                </p>

                <CButton
                  style={{
                    backgroundColor: "#16A086",
                    borderColor: "#16A086",
                    color: "white",
                  }}
                  variant="outline"
                >
                  Detay
                </CButton>
              </div>
            </div>
          </div>

          <div className="col-sm-10 col-md-8 col-lg-4 p-b-40">
            <div className="bg-0 h-full">
              <a href="news-detail.html" className="hov-img0 of-hidden">
                <img src="https://via.placeholder.com/720x389" alt="IMG" />
              </a>

              <div className="bg-0 p-rl-28 p-t-26 p-b-35">
                <h4 className="p-b-12">
                  <a
                    href="news-detail.html"
                    className="t1-m-1 cl-3 hov-link2 trans-02"
                  >
                    Duyuru 2
                  </a>
                </h4>

                <div className="flex-wr-s-c p-b-9">
                  <div className="p-r-20">
                    <i className="fs-14 cl-7 fa fa-calendar m-r-2"></i>

                    <span className="t1-s-2 cl-7">Nov 22 , 2017</span>
                  </div>
                </div>

                <p className="t1-s-2 cl-6 p-b-20">
                  Lorem ipsum dolor sit amet, consectetur adipis ing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna
                  aliqua...
                </p>

                <CButton
                  style={{
                    backgroundColor: "#16A086",
                    borderColor: "#16A086",
                    color: "white",
                  }}
                  variant="outline"
                >
                  Detay
                </CButton>
              </div>
            </div>
          </div>

          <div className="col-sm-10 col-md-8 col-lg-4 p-b-40">
            <div className="bg-0 h-full">
              <a href="news-detail.html" className="hov-img0 of-hidden">
                <img src="https://via.placeholder.com/720x389" alt="IMG" />
              </a>

              <div className="bg-0 p-rl-28 p-t-26 p-b-35">
                <h4 className="p-b-12">
                  <a
                    href="news-detail.html"
                    className="t1-m-1 cl-3 hov-link2 trans-02"
                  >
                    Duyuru 3
                  </a>
                </h4>

                <div className="flex-wr-s-c p-b-9">
                  <div className="p-r-20">
                    <i className="fs-14 cl-7 fa fa-calendar m-r-2"></i>
                    <span className="t1-s-2 cl-7">Nov 22 , 2017</span>
                  </div>
                </div>

                <p className="t1-s-2 cl-6 p-b-20">
                  Lorem ipsum dolor sit amet, consectetur adipis ing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna
                  aliqua...
                </p>

                <CButton
                  style={{
                    backgroundColor: "#16A086",
                    borderColor: "#16A086",
                    color: "white",
                  }}
                  variant="outline"
                >
                  Detay
                </CButton>
              </div>
            </div>
          </div>
        </div>
      </CContainer>
    </section>
  );
};
export default Announcement;
