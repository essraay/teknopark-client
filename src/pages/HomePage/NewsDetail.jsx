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
        <img className="w-25" src={BASE_IMG + items.resim_Dizin} alt="IMG" />
        <div></div>
        <CCardText
          className="justify-content-xl-between"
          style={{ margin: "2% 0" }}
        >
          <p style={{ textAlign: "justify" }}>{items.icerik}</p>
        </CCardText>
        {/* {items?.icerik_Resimler.map((x) => (
          <div className="grid" style={{ margin: "1% 0" }}>
            <div className="d-grid">
              <img src={BASE_IMG + x.resim_Dizin} width={"100px"} />
            </div>
          </div>
        ))} */}
        {/* {items?.icerik_Dosyalar.map((x) => (
          <CCardText className="text-left" style={{ margin: "1% 0" }}>
            <a href={BASE_IMG + x.dosya}>Haber eki - {x.id}</a>
          </CCardText>
        ))} */}
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
      <div
        className="container text-center"
        style={{ backgroundColor: "white" }}
      >
        <div className="row" style={{ margin: "2% 0" }}>
          <div className="col-md-3 order-1 order-md-0">
            <LeftMenu />
          </div>
          <div className="col-md-9">
            {!loading ? items && userArea : <LoadingSpinner />}
          </div>
        </div>
      </div>
    </>
  )
}
export default ContentsDetail
