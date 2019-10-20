import { TODO_CHECK, ADD_TODO } from "../actionTypes";

const initialState = {
  1: { id:1, label: "Faire son lit", check: false },
  2: { id:2, label: "Faire la vaisselle", check: true },
  3: { id:3, label: "Changer les couleurs du site", check: false }
};

export default function (state = initialState, action) {
  switch (action.type) {


    case TODO_CHECK: {
      const { id } = action.payload;
      const newState = Object.assign({}, state);
      newState[id].check = !state[id].check;
      return newState;
    }

    case ADD_TODO: {
      const { label } = action.payload;
      const newState = Object.assign({}, state);
      // nouvel ID ?...
      const id = Object.keys(state).length+1;
      newState[id] = {id: id, label: label, check: false};
      return newState;
    }

    default:
      return state;
  }
}