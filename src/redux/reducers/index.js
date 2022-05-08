import setActiveLabel from './label';
// import updateShoppingCart from './shopping-cart';

const reducer = (state, action) => {
  return (
    {
      activeLabel: setActiveLabel(state, action),
      // shoppingCart: updateShoppingCart(state, action),
    });
};

export default reducer;