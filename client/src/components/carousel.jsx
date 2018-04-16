import React from 'react';

class Carousel extends React.Component {
  constructor(props){
    super(props);
  }
  render() {
    return(
      <div className="slider-body">
        <div className="slider-box">
            <h3><img src="https://pbs.twimg.com/media/CBgCOOQW8AA3OCq.png" /></h3>
            <h3><img src="https://placeimg.com/400/200/people" /></h3>
            <h3><img src="https://placeimg.com/400/200/any" /></h3>
            <h3><img src="https://placeimg.com/400/200" /></h3>
        </div>
      </div>
    );
  }
}

export default Carousel;
