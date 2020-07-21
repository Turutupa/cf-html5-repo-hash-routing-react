import React from 'react';
import { useDispatch } from 'react-redux';
import { push } from 'connected-react-router';

function DefaultComponent(props) {
  const dispatch = useDispatch();

  function handleRouting(r) {
    dispatch(push(r));
  }

  return (
    <div>
      <button onClick={() => handleRouting(props.redirect)}>
        {props.name}
      </button>
    </div>
  );
}

export default DefaultComponent;
