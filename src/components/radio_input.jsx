import React, { Component } from 'react';
import lodash from 'lodash';

export default class RadioInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      checked: false
    };
    this.handleChanged = this.handleChanged.bind(this);
  }
  propTypes: {
    id: React.PropTypes.string,
    name: React.PropTypes.string.isRequired,
    label: React.PropTypes.string.isRequired,
    value: React.PropTypes.string.isRequired,
    checked: React.PropTypes.bool,
    onChange: React.PropTypes.func.isRequired
  }
  defaultProps() {
    return {
      id: null,
      checked: false,
    };
  }
  initialState() {
    return {
      checked: !!this.props.checked
    };
  }
  componentWillMount() {
    const id = this.props.id ? this.props.id : lodash.uniqueId('radio-')
    this.setState({id: id});
  }
  handleChanged(event) {
    let checked = event.target.checked;
    this.setState({checked: checked});
    if (checked) {
      this.props.onChange(this.props.value);
    }
  }
  render() {
    return (
      <div className="radio">
        <label htmlFor={this.state.id}>
          <input type="radio"
            name={this.props.name}
            id={this.state.id}
            value={this.props.value}
            checked={this.state.checked}
            onChange={this.handleChanged} />
          {this.props.label}
        </label>
      </div>
    );
  }
}
