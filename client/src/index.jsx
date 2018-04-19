import React from 'react';
import ReactDOM from 'react-dom';
import Carousel from './components/carousel.jsx';
import $ from 'jquery';
import unsplashPhotos from './dummy.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      photos: 'd'
    }
  }
  componentDidMount() {
    var _this = this;
    $.ajax({
      type: 'GET',
      url: '/api/foto',
      success: function(data) {
        _this.setState({
          photos: data
        });
      },
      error: function(err) {
        console.log(err);
      }
    });
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
          <Carousel inf={unsplashPhotos}/>
        </div>
      </div>
    )
  }
}
ReactDOM.render(<App />, document.getElementById('app'));
