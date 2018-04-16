import React from 'react';
import Carousel from './carousel.jsx'

class App extends React.Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div className="ppa">
        <div className="banner">
          <h2>SHARE YOUR STYLE #UNIQLYFEWEAR</h2>
          <div className="addphoto">
            <a className="addbtn" href="#"> <span className="afoto">ADD A PHOTO</span></a>
            <a className="gallery-view addbtn" href="#"> <span className="afoto">VIEW GALLERY</span></a>
          </div>
        </div>
        <div className="carousel-box">
          <Carousel />
        </div>
      </div>
    )
  }
}

export default App;
