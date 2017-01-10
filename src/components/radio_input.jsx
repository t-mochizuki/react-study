import React, { Component } from 'react';

export default class RadioInput extends Component {
  render() {
    return (
      <div className="radio">
        <label>
          <input type="radio" />
          ラベルの文字列
        </label>
      </div>
    );
  }
}
