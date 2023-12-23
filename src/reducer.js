export const initialState = {
  basket: [],
};

//total
export const gettotal = (basket) => {
  return basket?.reduce((accumulator, item) => item.price + accumulator, 0);
};

//selector
export const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_BASKET":
      return {
        ...state,
        basket: [...state.basket, action.item],
      };
    case "REMOVE_TO_BASKET":
      const index = state.basket.findIndex(
        (basketItem) => basketItem.id === action.id
      );
      let newBasket = [...state.basket];
      if (index !== -1) {
        newBasket.splice(index, 1);
      } else {
        console.warn("cant remove id");
      }
      return {
        ...state,
        basket: newBasket,
      };
  }
};
