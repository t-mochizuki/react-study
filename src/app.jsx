import React from 'react';
import { render } from 'react-dom';

import Hello from './components/hello';
import World from './components/world';
import MultipleChoiceQuestion from './components/multiple_choice_question';

render(
  <div>
    <Hello />
    <World />
    <MultipleChoiceQuestion
      choices={["RadioInput1", "RadioInput2"]}
      value="RadioInput1" />
  </div>,
  document.getElementById('container')
);
