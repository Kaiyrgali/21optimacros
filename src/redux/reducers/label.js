const setActiveLabel = (state = { activeLabel: null }, action) => {
  console.log('setActiveLabel state >', state)
  switch (action.type) {
    case 'SET_ACTIVE_LABEL':
      return action.payload;

    default:
      return state.activeLabel;
  }
};

export default setActiveLabel;