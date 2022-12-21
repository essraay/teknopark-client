import {
  CCollapse,
  CContainer,
  CNavbar,
  CNavbarNav,
  CNavbarToggler,
  CNavItem,
  CNavLink,
} from "@coreui/react";
import React from "react";
import { useState } from "react";
import { getPath } from "../utils";

const Navbar = () => {
  const [navbarVisibility, setNavbarVisibility] = useState(false);

  return (
    <>
      <CNavbar
        className="p-4 d-flex justify-content-center"
        expand="lg"
        style={{ backgroundColor: "white" }}
      >
        <CContainer className="limiter-menu-desktop">
          <CNavbarToggler
            style={{ color: "black" }}
            onClick={() => setNavbarVisibility((x) => !x)}
          />
          <CCollapse
            visible={navbarVisibility}
            className="navbar-collapse justify-content-center"
          >
            <CNavbarNav className="gap-5">
              <CNavItem href={getPath("#")}>
                <CNavLink>
                  <p className="fw-bolder">Kurumsal</p>
                </CNavLink>
              </CNavItem>
              <CNavItem href={getPath("#")}>
                <CNavLink>
                  <p className="fw-bolder">Mevzuat</p>
                </CNavLink>
              </CNavItem>
              <CNavItem href={getPath("#")}>
                <CNavLink>
                  <p className="fw-bolder">Firmalar</p>
                </CNavLink>
              </CNavItem>
              <CNavLink href={getPath("Anasayfa")}>
                <img src="logobeu.png" width={"150px"} />
              </CNavLink>
              <CNavItem href={getPath("Anasayfa")}>
                <CNavLink>
                  <p className="fw-bolder">Ön Başvuru</p>
                </CNavLink>
              </CNavItem>
              <CNavItem href={getPath("Anasayfa")}>
                <CNavLink>
                  <p className="fw-bolder">TTO</p>
                </CNavLink>
              </CNavItem>
              <CNavItem href={getPath("Anasayfa")}>
                <CNavLink>
                  <p className="fw-bolder">Kariyer</p>
                </CNavLink>
              </CNavItem>
              <CNavItem href={getPath("Anasayfa")}>
                <CNavLink>
                  <p className="fw-bolder">İletişim</p>
                </CNavLink>
              </CNavItem>
            </CNavbarNav>
          </CCollapse>
        </CContainer>
      </CNavbar>
    </>
  );
};
export default Navbar;
