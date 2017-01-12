import React, { Component } from 'react';

export default class RadioInput extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }
  propTypes: {
    name: React.PropTypes.string.isRequired,
    value: React.PropTypes.string.isRequired,
  }
  handleChange(event) {
    this.setState({checked: event.target.checked});
  }
  render() {
    return (
      <div className="radio">
        <label>
          <input type="radio" name={this.props.name} value={this.props.value} onChange={this.handleChange} />
          ラベルの文字列
        </label>
      </div>
    );
  }
}
