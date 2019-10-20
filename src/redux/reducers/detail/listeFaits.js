import { FAI_CHANGE, FAI_CHECK } from "../../actionTypes";

const initialState = [
    {label: "Bien mangé au resto", level: -1}, 
    {label: "Rentré à vélo alors qu'il faisait bon", level: 1}
];

export default function(state = initialState, action) {
  switch (action.type) {
    case FAI_CHANGE: {
      const { id, label } = action.payload;
      const newState = Object.assign([], state);
      if(id>=state.length){
        if (label.length>0)
        newState.push( {label: label, level: 0});
      }
      else 
        newState[id].label = label;
      return newState;
    }

    case FAI_CHECK: {
      const { id, level } = action.payload;
      const newState = Object.assign([], state);
      if(id<state.length){
        newState[id] = Object.assign({}, state[id]);
        newState[id].level = level;
      }
      return newState;
    }

    default:
      return state;
  }
}