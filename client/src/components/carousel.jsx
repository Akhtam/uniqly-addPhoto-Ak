import React from 'react';
import Slider from "react-slick";


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
    <div>
        <Slider {...settings}>
          <div>
            <h3><img src="https://placeimg.com/400/200" /></h3>
          </div>
          <div>
            <h3><img src="https://pbs.twimg.com/media/CBgCOOQW8AA3OCq.png" /></h3>
          </div>
          <div>
            <h3><img src="https://placeimg.com/400/200/people" /></h3>
          </div>
          <div>
            <h3><img src="https://placeimg.com/400/200/any" /></h3>
          </div>
          <div>
            <h3><img src="https://placeimg.com/400/200/any" /></h3>
          </div>
          <div>
            <h3><img src="https://placeimg.com/400/200/any" /></h3>
          </div>
          <div>
            <h3><img src="https://placeimg.com/400/200/any" /></h3>
          </div>
          <div>
            <h3><img src="https://placeimg.com/400/200/any" /></h3>
          </div>
        </Slider>
      </div>
    );

  }

}
// return(
//   <div className="slider-body">
//     <div className="slider-box">
//       <ul className="slider">
//         <li><img src="https://pbs.twimg.com/media/CBgCOOQW8AA3OCq.png" /></li>
//         <li><img src="https://placeimg.com/400/200/people" /></li>
//         <li><img src="https://placeimg.com/400/200/any" /></li>
//         <li><img src="https://placeimg.com/400/200" /></li>
//       </ul>
//     </div>
//   </div>
// );

export default Carousel;
