// Import NewImage from "../Assets/Images/new.jpg";

function Carousel() {
  return (
    <div id="carousel-div" className="carousel slide" data-target="carousel">
      <ol className="carousel-indicators">
        <li data-target="carousel-div"></li>
      </ol>
      <div className="carousel-inner">
        <div className="carousel-item">
          <img src="../Assets/Images/new.jpg" />
        </div>
      </div>
      <div className="carousel-controls">
        <a
          className="carousel-control-prev"
          href="#carousel-div"
          data-slide="prev"
        >
          <span className="carousel-control-prev-icon"></span>
        </a>
        <a
          className="carousel-control-next"
          href="#carousel-div"
          data-slide="next"
        >
          <span className="carousel-control-next-icon"></span>
        </a>
      </div>
    </div>
  );
}

export default Carousel;
