import {
  CCardBody,
  CCardFooter,
  CCardHeader,
  CCardText,
} from "@coreui/react"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import LoadingSpinner from "../../components/LoadingSpinner"
import { BASE_IMG } from "../../constants"
import { NewService } from "../../services"
import { dateFormat } from "../../utils"
import LeftMenu from "../LeftMenu"

const ContentsDetail = () => {
  const { id } = useParams()
  const [loading, setLoading] = useState(true)
  const [items, setItems] = useState(false)

  useEffect(() => {
    NewService.getById(id)
      .then((res) => {
        setItems(res.data)
      })
      .finally(() => {
        setLoading(false)
      })
  }, [])

  const userArea = items && (
    <>
      <CCardHeader className="shadow-sm" style={{backgroundColor:"#E8F8F5"}}>
        <b>{items.baslik}</b>
      </CCardHeader>
      <CCardBody>
        <img className="w-50" src={BASE_IMG + items.resim_Dizin} alt="IMG" />
        <CCardText style={{ margin: "2% 0" }}>{items.icerik}</CCardText>
        <img
          className="w-25"
          src={items?.icerik_Resimler?.resim_Dizin}
          alt="IMG"
        />
      </CCardBody>
      <p className="text-start">Resimler</p>
      <CCardFooter className="text-medium-emphasis shadow-sm" style={{backgroundColor:"#E8F8F5"}}>
        {dateFormat(items.tarih)}
      </CCardFooter>
    </>
  )

  return (
    <>
      <div class="container text-center" style={{ backgroundColor: "white" }}>
        <div class="row" style={{ margin: "2% 0" }}>
          <div class="col-md-3 order-1 order-md-0" style={{margin:"2% 0"}}>
            <LeftMenu />
          </div>
          <div class="col-md-9">
            {/* <CCard
                className="justify-content-center text-center"
                style={{ margin: "2% 0" }}
              > */}
            {!loading ? items && userArea : <LoadingSpinner />}
            {/* </CCard> */}
          </div>
        </div>
      </div>
    </>
  )
}
export default ContentsDetail
