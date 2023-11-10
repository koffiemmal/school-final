import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <Slider {...settings}>
      <div>
        {/* Contenu de la première diapositive */}
        <img src="image1.jpg" alt="Slide 1" />
      </div>
      <div>
        {/* Contenu de la deuxième diapositive */}
        <img src="image2.jpg" alt="Slide 2" />
      </div>
      {/* Ajoutez autant de diapositives que nécessaire */}
    </Slider>
  );
};

export default Carousel;
