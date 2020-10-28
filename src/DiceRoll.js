import React, { Component } from 'react';
import Die from './Dice';
import './DiceRoll.css';

class DiceRoll extends Component {
  static defaultProps = {
    sides: ['one', 'two', 'three', 'four', 'five', 'six']
  };

  constructor(props) {
    super(props);
    this.state = { die1: 'one', die2: 'one' };
    this.roll = this.roll.bind(this);
  }

  roll() {
    // サイコロ1の目を取得
    const newDie1 = this.props.sides[
      Math.floor(Math.random() * this.props.sides.length)
    ];

    // サイコロ2の目を取得
    const newDie2 = this.props.sides[
      Math.floor(Math.random() * this.props.sides.length)
    ];

    // サイコロの目を反映
    this.setState({ die1: newDie1, die2: newDie2 });
  }

  render() {
    return (
      <div className="DiceRoll">
        <div className="DiceRoll-container">
          <Die face={this.state.die1} />
          <Die face={this.state.die2} />
        </div>
        <button onClick={this.roll}>ダイスロール!</button>
      </div>
    );
  }
}

export default DiceRoll;
