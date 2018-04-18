import React from 'react';
import Slider from 'react-slick';
import unsplashPhotos from '../dummy.js';
console.log(unsplashPhotos);
class Carousel extends React.Component {

  constructor(props){
    super(props);
  }
  render() {
    const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1
  };
    return(
        <div className="slider-box">
          <Slider {...settings} >

            <div>
              <h3><img src="https://source.unsplash.com/t3zrEm88ehc/350x350" /></h3>
            </div>
            <div>
              <h3><img src="https://source.unsplash.com/rnH5ITofDAM/350x350" /></h3>
            </div>
            <div>
              <h3><img src="https://source.unsplash.com/iJHQetVqCzk/350x350" /></h3>
            </div>
            <div>
              <h3><img src="https://source.unsplash.com/72HbGy4lj54/350x350" /></h3>
            </div>
            <div>
              <h3><img src="https://source.unsplash.com/t3zrEm88ehc/350x350" /></h3>
            </div>
            <div>
              <h3><img src="https://source.unsplash.com/t3zrEm88ehc/350x350" /></h3>
            </div>
            <div>
              <h3><img src="https://source.unsplash.com/t3zrEm88ehc/350x350" /></h3>
            </div>

          </Slider>
        </div>

    );
  }
}

export default Carousel;
