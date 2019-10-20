import { NOT_CLICK } from "../../actionTypes";

const initialState = {
  global: 4.56,
  sport: 2,
  boisson: 3,
  nourriture: 1,
  social:4,
  apprendre: 5
};

const calculeNote = (notes)=> {
  // TODO : calcul plus malin
  const retour = Object.keys(notes).reduce((sum, key)=> sum + parseFloat(notes[key]||0),0) / Object.keys(notes).length;
  console.log( Object.keys.length);
  return retour;
}


export default function(state = initialState, action) {
  switch (action.type) {

    case NOT_CLICK:
      const { sujet, note } = action.payload;
      const newState = Object.assign({}, state);
      newState[sujet] = note;
      newState.global = calculeNote(newState);
      return newState;

    default:
      return state;
  }
}