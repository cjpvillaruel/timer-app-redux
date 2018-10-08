const increment = (state) =>{
  const { activeSession } = state;
  return { [activeSession]: state[activeSession]++};
}
const decrement = (state) =>{
  const { activeSession } = state;
  return { [activeSession]: state[activeSession]++};
}
export default (state, action) => {
  switch (action.type) {
    case 'INCREASE':
      const inc = increment(state)
      return { ...state, inc};
    case 'DECREASE':
      const dec = decrement(state)
      return { ...state, dec};
    case 'SET_ACTIVE_SESSION':
      return {...state, activeSession: action.session }; 
    default:
      return state;
  }
};
  