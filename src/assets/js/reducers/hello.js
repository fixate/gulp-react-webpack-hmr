import actionTypes from '../constants';

const initialState = {
  value: 'World',
};

export default function helloReducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.HELLO.SET_VALUE:
      return Object.assign({}, {
        value: action.value,
      });

    default:
      return state;
  }
}
