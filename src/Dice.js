import React, { Component } from 'react';
import './Dice.css';

class Die extends Component {
  render() {
    return <i className={`Dice fas fa-dice-${this.props.face}`} />;
  }
}
export default Die;
