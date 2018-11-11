import React from 'react';
import ReactDOM from 'react-dom';

class Example extends React.Component {
  constructor(props) {
    super(props);
    let carouselChildrenHeight = 0;
    let carouselImgHeight = 0;
    let carouselChildren = this.refs.carouselChildren;
    let carouselImg = this.refs.carouselImg;
    if (ReactDOM.findDOMNode(carouselChildren) !== null) {
      carouselChildrenHeight = ReactDOM.findDOMNode(carouselChildren).clientHeight;
    }
    if (ReactDOM.findDOMNode(carouselImg) !== null) {
      carouselImgHeight = ReactDOM.findDOMNode(carouselImg).clientHeight;
    }
    this.state = {
      src: props.src,
      width: props.width,
      height: props.height,
      fontSize: props.fontSize,
      paddingTop: props.paddingTop,
      carouselHeight: (carouselChildrenHeight - carouselImgHeight) / 2
    };
  }

  render() {
    let { src, width, height, fontSize, paddingTop, carouselHeight } = this.state;
    let carouselChildrenHeight = 0;
    let carouselImgHeight = 0;
    let carouselChildren = this.refs.carouselChildren;
    let carouselImg = this.refs.carouselImg;
    if (ReactDOM.findDOMNode(carouselChildren) !== null) {
      carouselChildrenHeight = ReactDOM.findDOMNode(carouselChildren).clientHeight;
    }
    if (ReactDOM.findDOMNode(carouselImg) !== null) {
      carouselImgHeight = ReactDOM.findDOMNode(carouselImg).clientHeight;
    }
    carouselHeight = (carouselChildrenHeight - carouselImgHeight) / 2
    return (
      <div className={`carouselChildren`} ref="carouselChildren">
        <img ref="carouselImg" src={src} alt={src} />
        <div className="carouselSpan" style={{ height: carouselHeight, fontSize: fontSize, paddingTop: paddingTop }}>
          <span>{width}x{height}</span>
        </div>
      </div>
    );
  };

}

export default Example;