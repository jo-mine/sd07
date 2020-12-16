import React from 'react';
import ReactDOM from 'react-dom';
import { Page, Button, Toolbar, Row, Col } from 'react-onsenui';
import { notification } from 'onsenui';
import './style.css'

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { num: 0 };
    this.addNum = this.addNum.bind(this);
  }
  alertPopup() {
    notification.alert('This is an Onsen UI alert notification test.');
  }

  addNum(n) {
    var s = this.state;
    s.num=this.state.num * 10 + n;
    this.setState(s);
  }

  renderToolbar() {
    return (
      <Toolbar>
        <div className='center'>Onsen UI</div>
      </Toolbar>
    );
  }

  render() {
    return (
      <Page renderToolbar={this.renderToolbar}>
        <Row className="box">{this.state.num}</Row>
        <Row>
          <Col></Col>
          <Col></Col>
          <Col></Col>
          <Col className="box">AC</Col>
        </Row>

        <Row>
          <Col className="box" onClick={() => this.addNum(7)}>7</Col>
          <Col className="box" onClick={() => this.addNum(8)}>8</Col>
          <Col className="box" onClick={() => this.addNum(9)}>9</Col>
          <Col className="box">+</Col>
        </Row>

        <Row>
          <Col className="box" onClick={() => this.addNum(4)}>4</Col>
          <Col className="box" onClick={() => this.addNum(5)}>5</Col>
          <Col className="box" onClick={() => this.addNum(6)}>6</Col>
          <Col className="box">-</Col>
        </Row>

        <Row>
          <Col className="box" onClick={() => this.addNum(1)}>1</Col>
          <Col className="box" onClick={() => this.addNum(2)}>2</Col>
          <Col className="box" onClick={() => this.addNum(3)}>3</Col>
          <Col className="box">*</Col>
        </Row>

        <Row>
          <Col></Col>
          <Col className="box" onClick={() => this.addNum(0)}>0</Col>
          <Col className="box">=</Col>
          <Col className="box">/</Col>
        </Row>
      </Page>
    );
  }
}