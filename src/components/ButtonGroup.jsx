import React  from 'react';
import store from '../store';

const dispatchBtnAction = e => {
  const { action } = e.target.dataset;
  store.dispatch({ type: action.toUpperCase() });
};
const ButtonGroup = (props) => {
  return (
    <div>
      <button data-action="increase" onClick={dispatchBtnAction}>Increase</button>
      <button data-action="decrease" onClick={dispatchBtnAction}>Decrease</button>
    </div>
  )
} 

export default ButtonGroup;