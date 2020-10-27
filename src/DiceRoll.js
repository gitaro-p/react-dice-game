import React, { Component } from 'react';
import Dice from './Dice';

class RollDice extends Component {
  static defaultProps = {
    sides: ['one', 'two', 'three', 'four', 'five', 'six']
  };

  constructor(props) {
    super(props);
    this.state = { dice1: 'one', dice2: 'one' };
    this.roll = this.roll.bind(this);
  }

  roll() {
    // サイコロ1の目を取得
    const newDice1 = this.props.sides[
      Math.floor(Math.random() * this.props.sides.length)
    ];

    // サイコロ2の目を取得
    const newDice2 = this.props.sides[
      Math.floor(Math.random() * this.props.sides.length)
    ];

    // サイコロの目を反映
    this.setState({ dice1: newDice1, dice2: newDice2 });
  }

  render() {
    return (
      <div>
        <Dice face={this.state.dice1} />
        <Dice face={this.state.dice2} />
        <button onClick={this.roll}>ダイスロール！</button>
      </div>
    );
  }
}

export default RollDice;
