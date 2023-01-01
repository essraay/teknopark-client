import {
  CDropdown,
  CDropdownItem,
  CDropdownMenu,
  CDropdownToggle,
} from "@coreui/react"
import { useState } from "react"

const NavbarDropdown = ({ title = "Dropdown button", children }) => {
  const [visible, setVisible] = useState(false)

  return (
    <CDropdown
      variant="nav-item"
      direction="center"
      visible={visible}
      onMouseEnter={() => setVisible(true)}
      onMouseLeave={() => setVisible(false)}
      className="d-flex align-items-center justify-content-center"
    >
      <CDropdownToggle caret={false} color="secondary" className="fw-bolder">
        {title}
      </CDropdownToggle>
      <CDropdownMenu className="navbar-dropdown-menu">{children}</CDropdownMenu>
    </CDropdown>
  )
}

export default NavbarDropdown
