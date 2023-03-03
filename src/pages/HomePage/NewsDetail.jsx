import { CCardBody, CCardFooter, CCardHeader, CCardText } from "@coreui/react"
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
      <CCardHeader className="shadow-sm" style={{ backgroundColor: "#EBEDEF" }}>
        <b>{items.baslik}</b>
      </CCardHeader>
      <CCardBody>
        <img className="w-50" src={BASE_IMG + items.resim_Dizin} alt="IMG" />
        <CCardText style={{ margin: "2% 0" }}>{items.icerik}</CCardText>
      </CCardBody>
      <CCardFooter
        className="text-medium-emphasis shadow-sm"
        style={{ backgroundColor: "#EBEDEF" }}
      >
        {dateFormat(items.tarih)}
      </CCardFooter>
    </>
  )

  return (
    <>
      <div class="container text-center" style={{ backgroundColor: "white" }}>
        <div class="row" style={{ margin: "2% 0" }}>
          <div class="col-md-3 order-1 order-md-0" style={{ margin: "2% 0" }}>
            <LeftMenu />
          </div>
          <div class="col-md-9">
            {!loading ? items && userArea : <LoadingSpinner />}
          </div>
        </div>
      </div>
    </>
  )
}
export default ContentsDetail
