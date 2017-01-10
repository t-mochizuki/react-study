import React, { Component } from 'react';

export default class RadioInput extends Component {
  propTypes: {
    id: React.PropTypes.string,
    name: React.PropTypes.string.isRequired,
    label: React.PropTypes.string.isRequired,
    value: React.PropTypes.string.isRequired,
    checked: React.PropTypes.bool
  }
  defaultProps() {
    return {
      id: null,
      checked: false
    };
  }
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
