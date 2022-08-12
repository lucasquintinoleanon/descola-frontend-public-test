const NAME = 'MODAL';

export const types = {
  SET_AUTH_MODAL_IS_OPEN: `${NAME}/SET_AUTH_MODAL_IS_OPEN`,
  SET_CART_MODAL_IS_OPEN: `${NAME}/SET_CART_MODAL_IS_OPEN`
};

export const actions = {
  setAuthModalIsOpen: payload => ({ type: types.SET_AUTH_MODAL_IS_OPEN, payload }),
  setCartModalIsOpen: payload => ({ type: types.SET_CART_MODAL_IS_OPEN, payload })
};

export const initialState = {
  authModalIsOpen: false,
  cartModalIsOpen: false
};

export default (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case types.SET_AUTH_MODAL_IS_OPEN:
      return {
        ...state,
        authModalIsOpen: payload
      };
    case types.SET_CART_MODAL_IS_OPEN:
      return {
        ...state,
        cartModalIsOpen: payload
      };
    default:
      return state;
  }
};
