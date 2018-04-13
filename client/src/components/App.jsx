import React from 'react';

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
        <div className="slider-body">
          <div className="slider-box">
            <ul className="slider">
              <li><img src="https://placeimg.com/400/200/any" /></li>
              <li><img src="https://placeimg.com/400/200/people" /></li>
              <li><img src="https://placeimg.com/400/200/any" /></li>
              <li><img src="https://placeimg.com/400/200" /></li>
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default App;
