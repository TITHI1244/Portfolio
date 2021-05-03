import { Carousel } from "react-bootstrap";
function CarouselComponent({ firstImg, secondImg }) {
  return (
    <div>
      <Carousel className="carousel-div">
        <Carousel.Item>
          <img className="d-block w-100 gif" src={firstImg} alt="First slide" />
          <Carousel.Caption>
            <h3 className="carousel-caption">Coffee?</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 gif"
            src={secondImg}
            alt="Second slide"
          />
          <Carousel.Caption>
            <h3 className="carousel-caption">Tea??</h3>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default CarouselComponent;
