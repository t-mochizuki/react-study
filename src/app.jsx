import React from 'react';
import { render } from 'react-dom';

import Hello from './components/hello';
import World from './components/world';
import RadioInput from './components/radio_input';

render(
  <div>
    <Hello />
    <World />
    <RadioInput />
  </div>,
  document.getElementById('container')
);
