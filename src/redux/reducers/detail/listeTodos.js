import { TODO_TODAY } from "../../actionTypes";

const initialState = [
    1,3
];

export default function(state = initialState, action) {
  switch (action.type) {
    case TODO_TODAY: {
      const { id } = action.payload;
      let newState = Object.assign([], state);
      if (state.includes(id))
        newState = state.filter((item) => { return (item !== id); })
      else 
        newState.push(id);
      return newState;
    }

    default:
      return state;
  }
}