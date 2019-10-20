import { SET_FILTER, CHANGE_TEXT } from "../actionTypes";
import dateFormat from "dateformat";

const initialState = {
  selectedDate: dateFormat(new Date(), "yyyy-mm-dd"),
  todoFilter: "ALL", 
  todoText: ""
};

export default function (state = initialState, action) {
  switch (action.type) {


    case SET_FILTER: {
      const { filter } = action.payload;
      const newState = Object.assign({}, state);
      newState.todoFilter = filter;
      return newState;
    }

    case CHANGE_TEXT:{
      const {text} = action.payload;
      const newState = Object.assign({}, state);
      newState.todoText = text;
      return newState;
    }

    default:
      return state;
  }
}