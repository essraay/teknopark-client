import { CCarousel, CCarouselItem, CImage } from "@coreui/react";

const Slider = () => {
  return (
    <CCarousel controls transition="slide">
      <CCarouselItem interval="2000">
        <CImage className="d-block w-100" src="slider1.png" alt="slide 1" />
      </CCarouselItem>
      <CCarouselItem interval="2000">
        <CImage className="d-block w-100" src="slider1.png" alt="slide 2" />
      </CCarouselItem>
      <CCarouselItem interval="2000">
        <CImage className="d-block w-100" src="slider1.png" alt="slide 3" />
      </CCarouselItem>
    </CCarousel>
  );
};
export default Slider;
