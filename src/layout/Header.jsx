import { CContainer, CHeader } from "@coreui/react";
import React from "react";
import Navbar from "./Navbar";

const Header = () => {
  return (
    <>
      <CHeader className="top-bar d-flex">
          <CContainer className="content-topbar flex-sb-c h-full">
            <div className="size-w-0 flex-wr-s-c">
              <div className="t1-s-1 cl-13 m-r-50">
                <span className="fs-16 m-r-6">
                  <i className="fa fa-envelope-o" aria-hidden="true"></i>
                </span>
                <span>teknopark@beun.edu.tr</span>
              </div>

              <div className="t1-s-1 cl-13 m-r-50">
                <span className="fs-16 m-r-6">
                  <i className="fa fa-phone" aria-hidden="true"></i>
                </span>
                <span>0 372 502 30 20</span>
              </div>

              <div className="t1-s-1 cl-13 m-r-50">
                <span className="fs-16 m-r-6"></span>
                <span>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Zonguldak
                  Teknoloji Geliştirme Bölgesi
                </span>
              </div>
            </div>

            <div className="text-nowrap">
              <a href="#" className="fs-16 cl-13 hov-link2 trans-02 m-l-15">
                <i className="fa fa-facebook-official"></i>
              </a>

              <a href="#" className="fs-16 cl-13 hov-link2 trans-02 m-l-15">
                <i className="fa fa-twitter"></i>
              </a>

              <a href="#" className="fs-16 cl-13 hov-link2 trans-02 m-l-15">
                <i className="fa fa-instagram"></i>
              </a>

              <a href="#" className="fs-16 cl-13 hov-link2 trans-02 m-l-15">
                AR-GE Portal
              </a>
            </div>
          </CContainer>
      </CHeader>
    </>
  );
};

export default Header;
