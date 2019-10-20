import { OBJ_CHANGE, OBJ_CHECK} from "../../actionTypes";

const initialState = [
    {label: "test", check: true}, 
    {label: "test2", check: false}
];


export default function(state = initialState, action) {
  switch (action.type) {
    case OBJ_CHANGE: {
      const { id, label } = action.payload;
      const newState = Object.assign([], state);
      if(id>=state.length){
        if (label.length>0)
        newState.push( {label: label, check: false});
      }
      else 
        newState[id].label = label;
      return newState;
    }

    case OBJ_CHECK: {
      const { id } = action.payload;
      const newState = Object.assign([], state);
      if(id<state.length){
        newState[id] = Object.assign({}, state[id]);
        newState[id].check = !newState[id].check;
      }
      return newState;
    }

    default:
      return state;
  }
}