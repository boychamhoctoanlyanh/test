import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, ButtonGroup } from 'reactstrap';
import card from '../images/card.svg';
import download from '../images/download.svg';
import heart from '../images/heart.svg';
import share from '../images/share.svg';
import verified from '../images/verified.svg';
import Image from './Image';
const styles = {
  freeSpan: {
    color: "#87C441",
    fontWeight: 900
  }
}

class Example extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false
    };
  }
  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }
  onRadioBtnClick(rSelected) {
    this.setState({ rSelected });
  }

  render() {
    const { item } = this.props;
    return (
      <Container className="sticky">
        <Button className="downloadButton" onClick={() => this.toggle()}>
          <img src={download} alt={download} />
          <span>Free Download (*.zip)</span>
        </Button>
        <div className="typeDiv">
          <ButtonGroup className="typeButton">
            <Button onClick={() => this.onRadioBtnClick(1)} active={this.state.rSelected === 1}>PSD</Button>
            <Button onClick={() => this.onRadioBtnClick(2)} active={this.state.rSelected === 2}>PNG</Button>
            <Button onClick={() => this.onRadioBtnClick(3)} active={this.state.rSelected === 3}>JPEG</Button>
          </ButtonGroup>
          <span className="typeDivSpan">33MB</span>
          <span className="typeDivSpan" style={styles.freeSpan}>FREE</span>
        </div>
        <Row className="buttonDiv">
          <Col xs="6">
            <Button outline><img src={heart} alt={heart} /> <span>0</span></Button>
          </Col>
          <Col xs="6">
            <Button outline><img src={share} alt={share} /></Button>
          </Col>
        </Row>
        <Container className="licenseDiv">
          <Row className="">
            <Col xs="5" className="licenseText">
              <img src={card} alt={card} />
              <span>License</span>
            </Col>
            <Col xs="7" className="licenseHr">
              <img src={verified} alt={verified} />
              <span>Free for commercial use</span><br />
              <img src={verified} alt={verified} />
              <span>No attribution required</span>
            </Col>
          </Row>
        </Container>
        <Modal isOpen={this.state.modal} toggle={() => this.toggle()} className={this.props.className}>
          <ModalHeader toggle={() => this.toggle()}>Free Download (*.zip)</ModalHeader>
          <ModalBody>
            <div className="imageModal">
              {item ?
                <Image src={item.src} width={item.width} height={item.height} fontSize=".5rem" paddingTop=".3rem" />
                : null}

            </div>
            <ButtonGroup className="buttonModal">
              <Button onClick={() => this.onRadioBtnClick(1)} active={this.state.rSelected === 1}>PSD</Button>
              <Button onClick={() => this.onRadioBtnClick(2)} active={this.state.rSelected === 2}>PNG</Button>
              <Button onClick={() => this.onRadioBtnClick(3)} active={this.state.rSelected === 3}>JPEG</Button>
            </ButtonGroup>
          </ModalBody>
          <ModalFooter>
            <Button className="downloadButtomModal" color="secondary" onClick={() => this.toggle()}>
              <img src={download} alt={download} style={{ height: "1rem", marginRight: ".5rem" }} />Download</Button>
          </ModalFooter>
        </Modal>
      </Container>
    );
  }
}

export default Example;
