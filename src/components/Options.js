import React from 'react';
import Option from './Option';
const Options = props => (
  <div>
    <button onClick={props.handleDeleteOptions}>Remove All</button>
    {props.options.length === 0 && <p>Please add an option to get started!</p>}
    <Option
      option={props.options}
      handleDeleteOption={props.handleDeleteOption}
    />
  </div>
);

export default Options;