import {
  CCard,
  CCardBody,
  CCardFooter,
  CCardHeader,
  CCardText,
  CContainer,
} from "@coreui/react"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import LoadingSpinner from "../../components/LoadingSpinner"
import { BASE_IMG } from "../../constants"
import { AnnouncementService } from "../../services"
import LeftMenu from "../LeftMenu"

const ContentsDetail = () => {
  const { id } = useParams()
  const [loading, setLoading] = useState(true)
  const [items, setItems] = useState(false)

  useEffect(() => {
    AnnouncementService.getById(id)
      .then((res) => {
        setItems(res.data)
      })
      .finally(() => {
        setLoading(false)
      })
  }, [])

  const userArea = items && (
    <>
      <CCardHeader className="shadow-sm" style={{ backgroundColor: "#EBEDEF" }}>
        {/* #FCF3CF */}
        <b>{items.baslik}</b>
      </CCardHeader>
      <CCardBody>
        <img className="w-25" src={BASE_IMG + items.resim_Dizin} alt="IMG" />
        <CCardText style={{ margin: "1% 0" }}>{items.icerik}</CCardText>
        <img
          className="w-25"
          src={BASE_IMG + items?.icerik_Resimler?.resim_Dizin}
          alt="IMG"
        />
      </CCardBody>
      <CCardFooter
        className="text-medium-emphasis"
        style={{ backgroundColor: "#EBEDEF" }}
      >
        {" "}
      </CCardFooter>
    </>
  )

  return (
    <div class="container text-center" style={{ backgroundColor: "white" }}>
      <div class="row" style={{ margin: "2% 0" }}>
        <div class="col-3">
          <LeftMenu />
        </div>
        <div class="col-9">
          {/* <CCard
        className="justify-content-center text-center"
        style={{ margin: "2% 0" }}
      > */}
          {!loading ? items && userArea : <LoadingSpinner />}
          {/* </CCard> */}
        </div>
      </div>
    </div>
  )
}
export default ContentsDetail
