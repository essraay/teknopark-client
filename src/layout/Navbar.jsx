import { cilMenu } from "@coreui/icons"
import CIcon from "@coreui/icons-react"
import {
  CCollapse,
  CContainer,
  CDropdownItem,
  CNavbar,
  CNavbarNav,
  CNavbarToggler,
  CNavItem,
} from "@coreui/react"
import React from "react"
import { useState } from "react"
import { getPath } from "../utils"
import NavbarDropdown from "./components/NavbarDropdown"

const Navbar = () => {
  const [navbarVisibility, setNavbarVisibility] = useState(false)

  const NavItem = ({ children, ...props }) => (
    <CNavItem
      className="d-flex align-items-center justify-content-center"
      {...props}
    >
      {children}
    </CNavItem>
  )

  return (
    <>
      <CNavbar
        className="p-3 d-flex justify-content-center shadow-sm"
        expand="lg"
        style={{ backgroundColor: "white" }}
      >
        <CContainer className="limiter-menu-desktop">
          <CNavbarToggler onClick={() => setNavbarVisibility((x) => !x)}>
            <CIcon icon={cilMenu} />
          </CNavbarToggler>
          <CCollapse
            visible={navbarVisibility}
            className="navbar-collapse justify-content-center"
          >
            <CNavbarNav className="gap-3">
              <NavbarDropdown title="Kurumsal">
                <CDropdownItem href="/Hakkimizda" className="fw-bolder">
                  Hakkımızda
                </CDropdownItem>
                <CDropdownItem href="/VizyonMisyon" className="fw-bolder">
                  Vizyon - Misyon
                </CDropdownItem>
                <CDropdownItem href="/YonetimKurulu" className="fw-bolder">
                  Yönetim Kurulu
                </CDropdownItem>
                <CDropdownItem href="/KurucuOrtaklarımız" className="fw-bolder">
                  Ortaklar
                </CDropdownItem>
                <CDropdownItem href="/Ekibimiz" className="fw-bolder">
                  Ekibimiz
                </CDropdownItem>
                <CDropdownItem href="/KVKK" className="fw-bolder">
                  K.V.K.K
                </CDropdownItem>
                <CDropdownItem href="/SSS" className="fw-bolder">
                  S.S.S
                </CDropdownItem>
              </NavbarDropdown>
              <NavbarDropdown title="Mevzuat">
                <CDropdownItem
                  href="https://localhost:5001/Files/4691.pdf"
                  target="_blank"
                  className="fw-bolder"
                >
                  Teknoloji Geliştirme Kanunu
                </CDropdownItem>
                <CDropdownItem
                  href="https://localhost:5001/Files/5746.pdf"
                  target="_blank"
                  className="fw-bolder"
                >
                  Ar-Ge ve Tasarım Faaliyetlerinin Desteklenmesi Hakkında Kanun
                </CDropdownItem>
                <CDropdownItem
                  href="https://localhost:5001/Files/teknolojigelistirmebolgeleriuygulama.pdf"
                  target="_blank"
                  className="fw-bolder"
                >
                  Teknoloji Geliştirme Bölgeleri Uygulama Yönetmeliği
                </CDropdownItem>
                <CDropdownItem href="/DigerMevzuat" className="fw-bolder">
                  Diğer Mevzuatlar
                </CDropdownItem>
              </NavbarDropdown>
              <NavItem href="/Firmalarimiz">
                <p className="fw-bolder">Firmalar</p>
              </NavItem>
              <div className="d-none d-lg-block">
                <NavItem href={getPath("Anasayfa")}>
                  <img src="/logobeu.png" width={"150px"} />
                </NavItem>
              </div>
              <NavItem
                href="https://argeportal.beun.edu.tr/onbasvuruformu"
                target={"_blank"}
              >
                <p className="fw-bolder">Ön Başvuru</p>
              </NavItem>
              <NavItem href="https://tto.beun.edu.tr" target={"_blank"}>
                <p className="fw-bolder">TTO</p>
              </NavItem>
              <NavItem href="/Kariyer">
                <p className="fw-bolder">Kariyer</p>
              </NavItem>
              <NavItem href="/Iletisim">
                <p className="fw-bolder">İletişim</p>
              </NavItem>
            </CNavbarNav>
          </CCollapse>
        </CContainer>
      </CNavbar>
    </>
  )
}
export default Navbar
