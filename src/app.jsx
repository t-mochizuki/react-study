import React from 'react';
import { render } from 'react-dom';

import Hello from './components/hello';
import World from './components/world';
import RadioInput from './components/radio_input';

render(
  <div>
    <Hello />
    <World />
    <RadioInput name="multiple-choice" value="choice-1" />
    <RadioInput name="multiple-choice" value="choice-2" />
    <RadioInput name="multiple-choice" value="choice-3" />
  </div>,
  document.getElementById('container')
);
