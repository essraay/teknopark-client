import { CContainer, CRow } from "@coreui/react";

const Logo = () => {
  return (
    <section className="bg-0 p-t-92 p-b-90">
      <CContainer>
        <div className="flex-col-c-c p-b-50">
          <h3 className="t1-b-1 cl-3 txt-center m-b-11">Kurucu Ortaklarımız</h3>
          <div className="size-a-2 bg-3"></div>
        </div>
        <CRow className="justify-content-center">
          <div className="col-md-10 col-lg-8">
            <div className="wrap-slick2 rs1-slick2">
              <div className="slide-slick">
                <div className="item-slick p-rl-15">
                  <div className="flex-col-s-c">
                    <div className="w-full flex-wr-sa-c">
                      <a href="#" className="m-all-20">
                        <img
                          className="size-h-2 max-s-full hov-img2"
                          src="images/icons/partner-01.png"
                          alt="IMG"
                        />
                      </a>

                      <a href="#" className="m-all-20">
                        <img
                          className="size-h-2 max-s-full hov-img2"
                          src="images/icons/partner-02.png"
                          alt="IMG"
                        />
                      </a>

                      <a href="#" className="m-all-20">
                        <img
                          className="size-h-2 max-s-full hov-img2"
                          src="images/icons/partner-03.png"
                          alt="IMG"
                        />
                      </a>

                      <a href="#" className="m-all-20">
                        <img
                          className="size-h-2 max-s-full hov-img2"
                          src="images/icons/partner-04.png"
                          alt="IMG"
                        />
                      </a>

                      <a href="#" className="m-all-20">
                        <img
                          className="size-h-2 max-s-full hov-img2"
                          src="images/icons/partner-05.png"
                          alt="IMG"
                        />
                      </a>
                    </div>
                  </div>
                </div>

                <div className="item-slick p-rl-15">
                  <div className="flex-col-s-c">
                    <div className="w-full flex-wr-sa-c">
                      <a href="#" className="m-all-20">
                        <img
                          className="size-h-2 max-s-full hov-img2"
                          src="images/icons/partner-01.png"
                          alt="IMG"
                        />
                      </a>

                      <a href="#" className="m-all-20">
                        <img
                          className="size-h-2 max-s-full hov-img2"
                          src="images/icons/partner-03.png"
                          alt="IMG"
                        />
                      </a>

                      <a href="#" className="m-all-20">
                        <img
                          className="size-h-2 max-s-full hov-img2"
                          src="images/icons/partner-04.png"
                          alt="IMG"
                        />
                      </a>

                      <a href="#" className="m-all-20">
                        <img
                          className="size-h-2 max-s-full hov-img2"
                          src="images/icons/partner-02.png"
                          alt="IMG"
                        />
                      </a>

                      <a href="#" className="m-all-20">
                        <img
                          className="size-h-2 max-s-full hov-img2"
                          src="images/icons/partner-05.png"
                          alt="IMG"
                        />
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="wrap-dot-slick p-t-30"></div>
            </div>
          </div>
        </CRow>
      </CContainer>
    </section>
  );
};
export default Logo;
