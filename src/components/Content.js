import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import {
  Carousel,
  CarouselItem,
  CarouselControl
} from 'reactstrap';
import RightSection from './RightSection';
import Image from './Image';
import axios from 'axios';
import attach from '../images/attach.svg';
import arrow from '../images/arrow.svg';
import arrowBottom from '../images/arrow-bottom.svg';

const styles = {
  bannerSection: {
    backgroundColor: "#FFF",
    marginBottom: "1rem"
  }
}

class Example extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeIndex: 0,
      items: []
    };
  }

  componentDidMount() {
    axios.get(`https://pixabay.com/api`, {
      params: {
        key: '10650240-cd84c33aba608787b0d85fdf2',
        q: 'vertical+images',
        image_type: 'photo',
        per_page: 5
      }
    })
      .then((response) => {
        let items = [];
        let hits = response.data.hits;
        hits.map(hit => {
          let item = {};
          item.src = hit.webformatURL;
          item.height = hit.webformatHeight;
          item.width = hit.webformatWidth;
          item.preview = hit.previewURL;
          item.largeImg = hit.largeImageURL;
          return items.push(item);
        });
        this.setState({
          items
        })
      })
      .catch((error) => {
        console.log(error);
      });
  }

  onExiting() {
    this.animating = true;
  }

  onExited() {
    this.animating = false;
  }

  next() {
    if (this.animating) return;
    const nextIndex = this.state.activeIndex === this.state.items.length - 1 ? 0 : this.state.activeIndex + 1;
    this.setState({ activeIndex: nextIndex });
  }

  previous() {
    if (this.animating) return;
    const nextIndex = this.state.activeIndex === 0 ? this.state.items.length - 1 : this.state.activeIndex - 1;
    this.setState({ activeIndex: nextIndex });
  }

  goToIndex(newIndex) {
    if (this.animating) return;
    this.setState({ activeIndex: newIndex });
  }
  render() {
    const { activeIndex, items } = this.state;

    const slides = items.map((item, index) => {
      return (
        <CarouselItem
          onExiting={() => this.onExiting()}
          onExited={() => this.onExited()}
          key={index}
        >
          <Image src={item.src} width={item.width} height={item.height} fontSize="1rem" paddingTop="1rem" />
        </CarouselItem>
      );
    });
    return (
      <Row style={{ margin: "0 0 3rem 0" }}>
        <Col xs="12" lg="8">
          <Container style={styles.bannerSection}>
            <Row>
              <Col className="left-banner" lg="3">
                <div className="attachDiv">
                  <img className="attachImg" src={attach} alt={attach} /> <span>5 Files set</span>
                </div>
                {items.map((item, index) => {
                  return <Col lg="12" key={index}>
                    <div className="previewDiv" onClick={() => this.goToIndex(index)}>
                      <Image src={item.preview} width={item.width} height={item.height} fontSize=".3rem" />
                    </div>
                    <div className="arrowDiv" style={{ display: `${activeIndex === index ? '' : 'none'}` }}>
                      <img className="arrowImg" src={arrow} alt={arrow} />
                    </div>
                  </Col>
                })}
              </Col>
              <Col xs="12" lg="9">
                <Carousel
                  className="padding20"
                  activeIndex={activeIndex}
                  next={() => this.next()}
                  previous={() => this.previous()}
                >
                  {slides}
                  <CarouselControl direction="prev" directionText="Previous" onClickHandler={() => this.previous()} />
                  <CarouselControl direction="next" directionText="Next" onClickHandler={() => this.next()} />
                </Carousel>
              </Col>
              <Col className="bottom-banner" xs="12">
                <div className="padding20">
                  {items.map((item, index) => {
                    return <div key={index} className="previewDivBottom">
                      <div className="arrowDivBottom">
                        <img className="arrowImgBottom" src={arrowBottom} alt={arrowBottom} style={{ display: `${activeIndex === index ? '' : 'none'}` }} />
                      </div>
                      <div className="previewImgBottom" onClick={() => this.goToIndex(index)}>
                        <Image src={item.preview} width={item.width} height={item.height} fontSize=".3rem" />
                      </div>
                    </div>
                  })}
                </div>
              </Col>
            </Row>
          </Container>
        </Col>
        <Col xs="12" lg="4">
          <RightSection item={items[activeIndex]} />
        </Col>
      </Row>
    );
  }
}

export default Example;
