import { OBJ_CHANGE, OBJ_CHECK } from "./actionTypes";
import { FAI_CHANGE, FAI_CHECK } from "./actionTypes";
import { NOT_CLICK } from "./actionTypes";
import { TODO_TODAY, TODO_CHECK, TODO_FILTER, TODO_ADD } from "./actionTypes";
import { SET_FILTER, ADD_TODO, CHANGE_TEXT } from "./actionTypes";

export const objChange = (id, label) => ({
  type: OBJ_CHANGE,
  payload: {
    id, 
    label
  }
});

export const objCheck = id => ({
  type: OBJ_CHECK,
  payload: { id }
});

export const faiChange = (id, label) => ({
    type: FAI_CHANGE,
    payload: {
      id, 
      label
    }
  });

  export const faiCheck = (id, level) => ({
    type: FAI_CHECK,
    payload: {
      id, 
      level
    }
  });

  export const notClick = (sujet, note) => ({
    type: NOT_CLICK,
    payload: {
      sujet, 
      note
    }
  });

  export const todoToday = (id) => ({
    type: TODO_TODAY,
    payload: {
      id
    }
  });

  export const todoCheck = (id) => ({
    type: TODO_CHECK,
    payload: {
      id
    }
  });

  export const todoFilter = (filter) => ({
    type: TODO_FILTER,
    payload: {
      filter
    }
  });

  export const todoAdd = (label) => ({
    type: TODO_ADD,
    payload: {
      label
    }
  });

  export const setFilter = (filter) => ({
    type: SET_FILTER,
    payload: {
      filter
    }
  });

  export const addTodo = (label) => ({
    type: ADD_TODO,
    payload: {
      label
    }
  });

  export const changeText= (text) => ({
    type: CHANGE_TEXT,
    payload : {
      text
    }
  });

