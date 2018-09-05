import React from 'react';

const Option = props => (
  <div>
    <ol>
      {props.option.map(opt => {
        return (
          <div key={opt}>
            <li key={opt}>{opt}</li>
            <button
              onClick={e => {
                props.handleDeleteOption(opt);
              }}
            >
              Remove
            </button>
          </div>
        );
      })}
    </ol>
  </div>
);

export default Option;
