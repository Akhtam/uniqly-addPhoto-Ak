import React from 'react';

class App extends React.Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div>
        <div className="banner">
          <h1>SHARE YOUR STYLE #UNIQLYFEWEAR</h1>
          <div className="addphoto">
            <a href="#">Add Photo</a>
          </div>
        </div>
        <div className="slider-body">
          <div className="slider-box">
            <ul className="slider">
              <li><img src="pic1.jpeg" /></li>
              <li><img src="pic2.jpeg" /></li>
              <li><img src="pic3.jpeg" /></li>
              <li><img src="pic4.jpeg" /></li>
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default App;
