const CartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART": {
      const updateCart = [...state.cart];
      const updateItemIndex = updateCart.findIndex(
        (item) => item.id === action.payload.id
      );
      if (updateItemIndex < 0) {
        updateCart.push({ ...action.payload, quantity: 1 });
      } else {
        const updatedItem = { ...updateCart[updateItemIndex] };
        updatedItem.quantity++;
        updateCart[updateItemIndex] = updatedItem;
      }
      return { ...state, cart: updateCart, total:state.total+action.payload.price};
    }
    case "DEC_TO_CART": {
      const updateCart = [...state.cart];
      const updateItemIndex = updateCart.findIndex(
        (item) => item.id === action.payload.id
      );
      const updatedItem = { ...updateCart[updateItemIndex] };
      if (updatedItem.quantity === 1) {
        const filterCart = updateCart.filter(
          (item) => item.id !== action.payload.id
        );
        return { ...state, cart: filterCart };
      } else {
        updatedItem.quantity--;
        updateCart[updateItemIndex] = updatedItem;
        return { ...state, cart: updateCart, total:state.total - action.payload.price };
      }
    }
    default:
      return state;
  }
};

export default CartReducer;
