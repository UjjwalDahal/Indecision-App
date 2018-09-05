import React from 'react';

const Actions = props => (
  <div>
    <button disabled={!props.hasOptions} onClick={props.handlePickRandom}>
      What Should I Do ?
    </button>
  </div>
);

export default Actions;
