import React, { useState, useRef } from "react";
import Carousel from "react-bootstrap/Carousel";
import image1 from "../../public/images/a1.jpg";
import image2 from "../../public/images/a2.jpg";
import image3 from "../../public/images/a3.jpg";

function ControlledCarousel() {
  const [index, setIndex] = useState(0);
  const carouselRef = useRef(null);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  const handleMouseMove = (e) => {
    const carouselWidth = carouselRef.current.offsetWidth;
    const mouseX = e.clientX;

    if (mouseX > carouselWidth / 2) {
      const nextIndex = (index + 1) % 3;
      setIndex(nextIndex);
    }
  };

  return (
    <div onMouseMove={handleMouseMove} ref={carouselRef}>
      <Carousel activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item>
          <img
            src={image1}
            style={{ width: "100%", height: "500px" }}
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            style={{ width: "100%", height: "500px" }}
            src={image2}
            alt="Second slide"
          />
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            style={{ width: "100%", height: "500px" }}
            src={image3}
            alt="Third slide"
          />
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default ControlledCarousel;
