import React, { Component } from 'react';
import RadioInput from './radio_input';
import lodash from 'lodash';

export default class MultipleChoiceQuestion extends Component {
  constructor(props) {
    super(props);
    this.handleChanged = this.handleChanged.bind(this);
  }
  propTypes: {
    value: React.PropTypes.string,
    choices: React.PropTypes.array.isRequired,
  }
  initialState() {
    return {
      value: this.props.value
    };
  }
  componentWillMount() {
    const id = lodash.uniqueId('multiple-choice-');
    this.setState({id: id});
  }
  handleChanged(value) {
    this.setState({value: value});
  }
  renderChoices() {
    return this.props.choices.map(function (choice, i) {
      return <RadioInput
        key={"choice-" + i}
        name={this.state.id}
        label={choice}
        value={choice}
        checked={this.state.value === choice}
        onChange={this.handleChanged} />
    }.bind(this));
  }
  render() {
    return (
      <div className="form-group">
        <label className="survey-item-label" htmlFor={this.state.id}>
          {this.props.label}
        </label>
        <div className="survey-item-content">
          {this.renderChoices()}
        </div>
      </div>
    );
  }
}
