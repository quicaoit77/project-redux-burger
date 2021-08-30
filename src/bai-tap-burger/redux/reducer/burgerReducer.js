const stateBurger = {
  burger: { salad: 1, chesse: 1, beef: 1 },
  menu: { salad: 10, chesse: 20, beef: 30 },
  total: 60,
};

export const burgerReducer = (state = stateBurger, action) => {
  switch (action.type) {
    case "CHANGE_AMOUNT": {
      const burgerUpdate = { ...state.burger };
      if (action.amount === -1 && burgerUpdate[action.key] === 0) {
        return { ...state };
      }
      burgerUpdate[action.key] += action.amount;
      state.burger = burgerUpdate;
      state.total += action.amount * state.menu[action.key];
      return { ...state };
    }
  }
  return { ...state };
};
