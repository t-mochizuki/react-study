import React, { Component } from 'react';

export default class RadioInput extends Component {
  propTypes: {
    id: React.PropTypes.string,
    name: React.PropTypes.string.isRequired,
    label: React.PropTypes.string.isRequired,
    value: React.PropTypes.string.isRequired,
    checked: React.PropTypes.bool,
    onChange: React.PropTypes.func.isRequired
  }
  handleChanged(e) {}
  defaultProps() {
    return {
      id: null,
      checked: false
    };
  }
  initialState() {
    return {
      checked: !!this.props.checked,
      id: this.props.id ? this.props.id : uniqueId('radio-')
    };
  }
  render() {
    return (
      <div className="radio">
        <label htmlFor="{this.state.id}">
          <input type="radio"
            name="{this.props.name}"
            id="{this.state.id}"
            value="{this.props.value}"
            checked="{this.state.checked}"
            onChange={this.handleChanged} />
          {this.props.label}
        </label>
      </div>
    );
  }
}
