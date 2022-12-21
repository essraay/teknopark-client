import {
  CButton,
  CCard,
  CCardBody,
  CCardImage,
  CCardText,
  CCardTitle,
  CContainer,
  CRow,
} from "@coreui/react";

const News = () => {
  return (
      <div className="kit-pos2-1">
        <CContainer>
          <CRow className="gap-3">
            <CCard style={{ width: "18rem" }}>
              <CCardImage orientation="top" src="https://via.placeholder.com/720x432" style={{ objectFit: 'cover' }}/>
              <CCardBody>
                <CCardTitle>Haber 1</CCardTitle>
                <CCardText>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </CCardText>
                <CButton href="#">Haberi Görüntüle</CButton>
              </CCardBody>
            </CCard>
            <CCard style={{ width: "18rem" }}>
              <CCardImage orientation="top" src="https://via.placeholder.com/720x432" />
              <CCardBody>
                <CCardTitle>Haber 2</CCardTitle>
                <CCardText>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </CCardText>
                <CButton href="#">Haberi Görüntüle</CButton>
              </CCardBody>
            </CCard>
            <CCard style={{ width: "18rem" }}>
              <CCardImage orientation="top" src="https://via.placeholder.com/720x432" />
              <CCardBody>
                <CCardTitle>Haber 3</CCardTitle>
                <CCardText>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </CCardText>
                <CButton href="#">Haberi Görüntüle</CButton>
              </CCardBody>
            </CCard>
            <CCard style={{ width: "18rem" }}>
              <CCardImage orientation="top" src="https://via.placeholder.com/720x432" />
              <CCardBody>
                <CCardTitle>Haber 4</CCardTitle>
                <CCardText>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </CCardText>
                <CButton href="#">Haberi Görüntüle</CButton>
              </CCardBody>
            </CCard>
            
          </CRow>
        </CContainer>
      </div>
  );
};
export default News;
